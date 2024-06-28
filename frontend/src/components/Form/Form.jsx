import styles from './Form.module.css';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addBook} from '../../redux/books/actionCreators';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && releaseDate) {
      const book = {
        title,
        author,
        releaseDate,
      };
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
      setReleaseDate('');
    }
  };

  return (
    <div className={`form ${styles.window}`}>
      <div className={styles.heading}>
        <h2>Add a New Book</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" id="title" value={title}
                 onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label htmlFor="author">
          Author:
          <input type="text" id="author" value={author}
                 onChange={(e) => setAuthor(e.target.value)}/>
        </label>
        <label htmlFor="release-date">
          Released on:
          <input type="text" id="release-date" value={releaseDate}
                 onChange={(e) => setReleaseDate(e.target.value)}/>
        </label>
        <button disabled={!(title && author && releaseDate)}
                className={!(title && author && releaseDate)
                  ? styles.disabled
                  : ''}
                type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;