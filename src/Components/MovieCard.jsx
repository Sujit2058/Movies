import React from "react";

function MovieCard({ movie }) {
    function onFavouraitClick() {
        alert("Clicked")
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favourait-btn" onClick={onFavouraitClick}> ♡ </button>
                </div>

            </div>
            <div className="Movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );

}
export default MovieCard;