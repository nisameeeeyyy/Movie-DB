import React, { useEffect, useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const getAllMovies = async () => {
        const res = await fetch('/api/get-all-movies');
        if(res.ok){
          const data  = await res.json();
          setMovies(data.movies);
        }
      }
      getAllMovies()
    } catch (error) {
      console.log(error);
    }
  }, []);

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
                </tr>
              </thead>
              <tbody>
                {movies.length > 0 && (
                  movies.map((m, i) => (
                    <tr key={i} className='border-y'>
                      <th className='text-center border-x w-[200px] px-4 py-2 text-sm'>{m.title}</th>
                      <th className='text-center border-x w-[200px] px-4 py-2 text-sm'>{m.year}</th>
                      <th className='text-center border-x w-[200px] px-4 py-2 text-sm'>{m.director}</th>
                      <th className='text-center border-x w-[200px] px-4 py-2 text-sm'>{m.rating}</th>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          ) : (
            <span>You have no movie collections!</span>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
