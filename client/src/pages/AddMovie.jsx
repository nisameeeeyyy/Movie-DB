import React, { useState } from 'react'

const AddMovie = () => {
    const [data, setData] = useState({});

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/add-movie', {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ ...data })
            })

            if (res.ok) {
                alert('Movie Added');
            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <section className='w-11/12 mx-auto'>
            <h1 className='text-2xl text-center font-mono my-4'>Add Movie</h1>
            <form onSubmit={handleSubmit} className="w-full flex justify-between">
                <input onChange={(e) => handleChange(e)} className='w-1/5 px-4 py-2 border-2 border-black rounded-lg shadow-lg' type="text" name="" id="title" placeholder='Title' />
                <input onChange={(e) => handleChange(e)} className='w-1/5 px-4 py-2 border-2 border-black rounded-lg shadow-lg' type="text" name="" id="year" placeholder='Year' />
                <input onChange={(e) => handleChange(e)} className='w-1/5 px-4 py-2 border-2 border-black rounded-lg shadow-lg' type="text" name="" id="director" placeholder='Director' />
                <input onChange={(e) => handleChange(e)} className='w-1/5 px-4 py-2 border-2 border-black rounded-lg shadow-lg' type="text" name="" id="rating" placeholder='Rating' />
                <button type='submit' className='bg-black px-5 py-2 rounded-md shadow-md text-white'>Add</button>
            </form>
        </section>
    )
}

export default AddMovie