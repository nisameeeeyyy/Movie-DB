import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddMovieButton = () => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate('/add-movie')} className='my-5 w-52  bg-black text-white px-5 py-3 rounded-lg shadow-lg'>
            Add Movie
        </button>
    )
}

export default AddMovieButton