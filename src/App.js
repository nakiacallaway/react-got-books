import { useEffect, useContext } from 'react';
import BookCard from '../components/BookCard';
import { GlobalContext } from '../context/GlobalContext';
import '../App.css';

const HomePage = () => {
  const { books, getBooks } = useContext(GlobalContext);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div id='home'>
      <div className='row text-center'>
        <div className='col'>
          <h2>Home Page!</h2>
        </div>
      </div>
      <div className='row'>
        {books.map((book, i) => {
          return (
            <div className='col-sm-12 col-md-3 mb-3' key={i}>
              <BookCard book={book} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;