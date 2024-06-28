import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addBook} from '../../redux/books/actionCreators';
import {v4 as uuidv4} from 'uuid';
import styles from './Form.module.css';
import {useTranslation} from 'react-i18next';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const dispatch = useDispatch();

  const {t} = useTranslation();

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && releaseDate) {
      const book = {
        title: capitalize(title.trim()),
        author: capitalize(author.trim()),
        releaseDate: releaseDate.trim(),
        id: uuidv4(),
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
        <h2>{t('ADD_NEW_BOOK')}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          {t('TITLE')}
          <input type="text" id="title" value={title}
                 onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label htmlFor="author">
          {t('AUTHOR')}
          <input type="text" id="author" value={author}
                 onChange={(e) => setAuthor(e.target.value)}/>
        </label>
        <label htmlFor="release-date">
          {t('RELEASE_YEAR')}
          <input type="number" id="release-date" value={releaseDate}
                 onChange={(e) => setReleaseDate(e.target.value)}/>
        </label>
        <button disabled={!(title && author && releaseDate)}
                className={!(title && author && releaseDate)
                  ? styles.disabled : ''}
                type="submit">
          {t('ADD_BOOK')}
        </button>
      </form>
    </div>
  );
};

export default Form;