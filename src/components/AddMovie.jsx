import {Link} from 'react-router-dom'
import './AddMovie.css'
const AddMovie = () => {
    return (
      <div className="container">
        <form action="" className="form">
          <h3>Add Movie</h3>
          <label htmlFor="title" className="label">
            Title
          </label>
          <input type="text" id="" />
          <label htmlFor="director" className="label">
            Director
          </label>
          <input type="text" />
          <label htmlFor="genre" className="label">
            Genre
          </label>
          <select name="genres" id="genre">
            <option value="Comedy" className="option">
              Comedy
            </option>
            <option value="Horror" className="option">
              Horror
            </option>
            <option value="Action" className="option">
              Action
            </option>
            <option value="Thriller" className="option">
              Thriller
            </option>
            <option value="Drama" className="option">
              Drama
            </option>
          </select>
          <label htmlFor="year" className="label">
            Release Year
          </label>
          <input type="number" id="year" />
          <label htmlFor="synopsis" className="label">
            Synopsis
          </label>
          <textarea name="Synopsis" id="synopsis"></textarea>
          <label htmlFor="image" className="label">
            Image URL
          </label>
          <input type="url" id="image" />
          <div className='buttons'>
            <button className="submti">Submit</button>
            <Link to="/">
                <button className="cancel">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    );
}

export default AddMovie
