import styles from './SingleBook.module.css';
import {useTranslation} from 'react-i18next';
import {
  deleteBook,
  rateBook,
  toggleFavorite,
} from '../../redux/books/actionCreators';
import {useDispatch} from 'react-redux';
import {
  MdFavorite,
  MdFavoriteBorder,
  MdOutlineDeleteOutline,
} from 'react-icons/md';
import BookButton from '../UI/BookButton';
import {motion} from 'framer-motion';

function SingleBook({
  title,
  author,
  releaseDate,
  id,
  index,
  rating,
  lastChild,
  isFavorite,
}) {
  const {t} = useTranslation();

  const dispatch = useDispatch();

  const deleteBookHandler = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  const toggleFavoriteHandler = (bookId) => {
    dispatch(toggleFavorite(bookId));
  };

  const rateBookHandler = (bookId) => {
    dispatch(rateBook(bookId));
  };

  return (
    <motion.li initial={{opacity: 0}}
               animate={{opacity: 1}}
               exit={{opacity: 0}} duration={1000}>
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
            <BookButton onClick={() => toggleFavoriteHandler(id)}
                        type="bookmark_book" isFavorite={isFavorite}>
              {isFavorite ? <MdFavorite/> : <MdFavoriteBorder/>}
            </BookButton>
          </div>
          <div>
            <BookButton type="rate_book"
                        onClick={() => rateBookHandler(id)}>
              {rating}
            </BookButton>
          </div>
          <div>
            <BookButton type="delete_book"
                        onClick={() => deleteBookHandler(id)}>
              <MdOutlineDeleteOutline/>
            </BookButton>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export default SingleBook;