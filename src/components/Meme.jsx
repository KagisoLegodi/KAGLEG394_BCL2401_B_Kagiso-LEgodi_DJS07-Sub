import React from "react"
import memesData from "../memesData.jsx";

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

  return (
    <main>
      <div className="form">
        <label htmlFor="top-text">
          Top text
          <input
            id="top-text"
            type="text"
            placeholder="Shut up"
            className="form--input"
          />
        </label>
        <label htmlFor="bottom-text">
          Bottom text
          <input
            id="bottom-text"
            type="text"
            placeholder="and take my money"
            className="form--input"
          />
        </label>
        <button className="form--button"
        onClick={getMemeImage}
        >Get a new meme image 🖼</button>
      </div>
      <img src={memeImage} />
    </main>
  );
}