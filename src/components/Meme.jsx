import React from "react"
import memesData from "../memesData.jsx";

export default function Meme() {
    //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
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
      <img src={meme.randomImage} className="meme--image"/>
    </main>
  );
}