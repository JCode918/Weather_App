import React from 'react'
import Card from '../Card/Card'

const RightAside = () => {
    return (
        <>
        <div className ='flex-col justify-center items-center text-white'>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-5 mt-14 gap-2 p-2">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </div>
        </>
    )
}

export default RightAside
