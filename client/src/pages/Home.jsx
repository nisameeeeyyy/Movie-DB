
import React, { useEffect, useState } from 'react';
import AddMovieButton from '../components/AddMovieButton';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const getAllMovies = async () => {
        const res = await fetch('/api/get-all-movies');
        if (res.ok) {
          const data = await res.json();
          setMovies(data.movies);
        }
      }
      getAllMovies()
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(movies);


  const handleDelete = async (movieId) => {

    try {
      const response = await fetch(`/api/delete-movie/${movieId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const updatedMovie = movies.filter(m => m._id !== movieId);
      setMovies(updatedMovie);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete movie');
      }
    } catch (error) {
      console.error('Error:', error.message); // Handle error
      // Handle error (e.g., show error message to user)
    }
  }

  return (
    <div>
      <h1 className='w-fit rounded-br-xl text-white bg-black px-4 py-2 font-semibold'>Movie DB</h1>
      <h2 className='text-center text-2xl'>Our Collections</h2>
      <section className='w-3/4 flex mx-auto my-5 justify-center items-center flex-wrap gap-3'>
        <div className="flex justify-evenly items-center">
          {movies.length > 0 ? (
            <table className='w-full rounded-lg shadow-lg'>
              <thead className='border-y'>
                <tr>
                  <th className='text-center w-[200px] px-4 py-2 bg-[#D4CBE5]'>Title</th>
                  <th className='border-x text-center w-[200px] px-4 py-2 bg-[#CFC7D2]'>Year</th>
                  <th className='border-x text-center w-[200px] px-4 py-2 bg-[#BEA8AA]'>Director</th>
                  <th className='text-center w-[200px] px-4 py-2 bg-[#9E9885]'>Rating</th>
                  <th className='text-center w-[200px] px-4 py-2 bg-[#859e9c]'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {movies.length > 0 && (
                  movies.map((m, i) => (
                    <tr key={i} className='border-y'>
                      <th className='text-center border-x w-[200px] px-4 py-2 text-sm'>{m.title}</th>
                      <th className='text-center border-x w-[200px] px-4 py-2 text-sm'>{new Date(m.year).toDateString().slice(-4)}</th>
                      <th className='text-center border-x w-[200px] px-4 py-2 text-sm'>{m.director}</th>
                      <th className='text-center border-x w-[200px] px-4 py-2 text-sm'>{m.rating}</th>
                      <th className='text-center border-x w-[200px] px-4 py-2 text-sm cursor-pointer' onClick={() =>  handleDelete(m._id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                      </th>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          ) : (
            <span>You have no movie collections!</span>
          )}
        </div>
        <AddMovieButton/>
      </section>
    </div>
  );
};

export default App;