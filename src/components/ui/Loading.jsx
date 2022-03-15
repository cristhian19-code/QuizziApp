import React from 'react'

export const Loading = () => {
    return (
        <div className='absolute top-0 left-0 w-screen h-screen text-white flex justify-center items-center bg-gray-900'>
            <p className='text-xl'>Cargando...</p>
        </div>
    )
}
