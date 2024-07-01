import styles from './SingleBook.module.css';
import {useTranslation} from 'react-i18next';
import {deleteBook} from '../../redux/books/actionCreators';
import {useDispatch} from 'react-redux';
import {MdOutlineBookmarkBorder, MdOutlineDeleteOutline} from 'react-icons/md';
import BookButton from '../UI/BookButton';

function SingleBook({title, author, releaseDate, id, index, lastChild}) {
  const {t} = useTranslation();

  const dispatch = useDispatch();

  const deleteBookHandler = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  return (
    <li>
      <div
        className={`${styles.wrapper} ${lastChild ? styles.last_child : ''}`}>
        <div className={styles.info}>
          <div>
            <p className={styles.index}>{++index}.</p>{' '}
            <p className={styles.title}>"{title}"</p>{' '}
          </div>
          <div>
            {t('BY')} <p className={styles.author}>{author}</p>{' '}
          </div>
          <div>
            ({releaseDate}{t('R_YEAR')})
          </div>
        </div>
        <div className={styles.actions}>
          <div>
            <BookButton type="delete_book"
                        onClick={() => deleteBookHandler(id)}>
              <MdOutlineDeleteOutline/>
            </BookButton>
          </div>
          <div>
            <BookButton type="bookmark_book">
              <MdOutlineBookmarkBorder/>
            </BookButton>
          </div>
          <div>

          </div>
        </div>
      </div>
    </li>
  );
}

export default SingleBook;