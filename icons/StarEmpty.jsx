import React from 'react'

const StarEmpty = ({ width, height }) => {
    return (
        <svg width={width || '25'} height={height || '24'} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.897 0L16.6368 7.57651L25 8.79892L18.9485 14.6931L20.3767 23.02L12.897 19.0865L5.41731 23.02L6.84547 14.6931L0.793945 8.79892L9.15715 7.57651L12.897 0Z" fill="#BBBBBB" />
        </svg>

    )
}

export default StarEmpty;