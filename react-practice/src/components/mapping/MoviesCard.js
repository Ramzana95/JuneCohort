import React from 'react'

function MoviesCard(props) {
    return (
        <div className = 'cardComponent'>
            {props.image ? <img src={props.image} alt={props.alt}/> : <img src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" alt= "not displayed"/>}
            {props.title ? <h4>{props.title}</h4> : <h4>No title available</h4>}
            {props.year ? <h5>{props.year}</h5> : <h5>No Year Listed</h5>}
            {props.genre ? <p>{props.genre}</p> : <p>Genre Not Listed</p>}
            {props.description ? <p>{props.description}</p> : <p>Description not available</p>}
            
        </div>
      )
}

export default MoviesCard