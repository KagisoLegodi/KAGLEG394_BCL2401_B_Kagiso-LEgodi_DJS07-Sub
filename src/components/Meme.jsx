export default function Meme() {
  return (
    <main>
      <form className="form">
        <div>
          <label htmlFor="top-text">Top text</label>
          <input 
          id="top-text"
          type="text" 
          placeholder="Shut up" 
          className="form--input" />
        </div>
        <div>
          <label htmlFor="bottom-text">Bottom text </label>
          <input
            id="bottom-text"
            type="text"
            placeholder="and take my money"
            className="form--input"
          />
        </div>
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}