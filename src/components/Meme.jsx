import { useState, useEffect } from "react";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes));
    }, []); // Empty dependency array ensures this runs only once on mount

    function getMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: allMemes[randomIndex].url,
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    return (
        <main className="meme-container"> 
            <div className="form">
            <label htmlFor="top-text">
          <input
            id="top-text"
            type="text"
            placeholder="Top Text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="bottom-text">
          <input
            id="bottom-text"
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </label>
        <button className="form--button"
        onClick={getMemeImage}
        >Get a new meme image 🖼</button>
      </div>
            <div className="meme">
                <img src={meme.randomImage} alt="Meme" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}