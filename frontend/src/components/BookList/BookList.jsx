import styles from './BookList.module.css';
import {useSelector} from 'react-redux';
import SingleBook from './SingleBook';

const BookList = () => {
  const books = useSelector(state => state.books);

  return (
    <div className={`book-list ${styles.window}`}>
      <div className={styles.heading}>
        <h2>Book List</h2>
      </div>
      <div className={styles.wrapper}>
        {
          books.length === 0 ?
            <p>No books available</p> :
            <ul>
              {books.map((book, i) => (
                <SingleBook title={book.title} author={book.author}
                            releaseDate={book.releaseDate}
                            key={i} index={i}
                            lastChild={i === books.length - 1}/>
              ))}
            </ul>
        }
      </div>
    </div>
  );
};

export default BookList;