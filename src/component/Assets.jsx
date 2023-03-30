import React from 'react'

const Assets = () => {
    return (
        <div className='flex flex-col px-6'>
            <div className='flex justify-center items-center flex-wrap'>
                {Array(6).fill().map((card, i) => (
                    <AssetCard key={i} />
                ))}
            </div>
        </div>
    )
}

const AssetCard = ({ card }) => (
    <div id='assets' className='rounded-lg shadow-lg bg-teal-50 w-64 m-4'>
        Card
    </div>
)

export default Assets