import React from 'react'

function MoviesItem({image}) {
    return (
        <div className="col-4">
            <img src={image} />
        </div>
    )
}

export default MoviesItem
