<<<<<<< HEAD
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
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> c8f6d2bdc3e56f3c16ce23f05d9b1113232c8f5a
