import React, { useState } from "react";

function MovieForm() {
    const [, setMovies] = useState([]);
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");


//a function to handle submissions

function handleSubmit(e) {
    e.preventDefault();
    const movieData = {
        title: title,
        img: img,
        description: description,
    };

    //console-logging(movieData)

    fetch("https://imdb-api.com/en/API/SearchMovie/k_x652c43h/leon%20the%20professional", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
     })
      .then((response) => response.json())
      .then((movies) => setMovies(movies));    
}
//form to call the handleSubmit event handler
  return (
    <div className="movieformdiv">
    <form className="movieform" onSubmit={handleSubmit}>
        <label>
            Title:
            <input className="movieform-title"
                type="text"
                title="title"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label>
            img
            <input className="movieform-img"
            type="href link"
            img="img"
            value={img}
            placeholder="img"
            onChange={(e) => setImg(e.target.value)}/>
        </label>
        <label>
            Description
            <textarea className="movieform-description"
                  type="text"
                  description="description"
                  value={description}
                  placeholder="Describe your favorite movie here..." rows={5}
                  onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <input type="submit" value="Add, describe and submit your favorite movie" />
    </form>
    </div>
  );
}

export default MovieForm;