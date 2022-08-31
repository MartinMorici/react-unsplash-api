import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    url = mainUrl + clientID;
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <main>
      <section className='search'>
        <form action='' className='search-form'>
          <input type='text' placeholder='search' className='form-input' />
          <button type='submit' className='submit-btn'>
            {' '}
            <FaSearch />{' '}
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          <Photo />
          <Photo />
          <Photo />
          <Photo />
          <Photo />
          <Photo />
        </div>
      </section>
    </main>
  );
}

export default App;
