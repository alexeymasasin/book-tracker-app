import styles from './BookList.module.css';
import {useSelector} from 'react-redux';
import SingleBook from './SingleBook';
import {useTranslation} from 'react-i18next';
import {AnimatePresence, motion} from 'framer-motion';

const BookList = () => {
  const books = useSelector(state => state.books);

  const {t} = useTranslation();

  return (
    <motion.div className={`book-list ${styles.window}`}>
      <div className={styles.heading}>
        <h2>{t('BOOK_LIST')}</h2>
      </div>
      <div className={styles.wrapper}>
        {
          books.length === 0 ?
            <p>{t('NO_BOOKS_AVAILABLE')}</p> :
            <motion.ul>
              <AnimatePresence mode="popLayout">
                {books.map((book, i) => (
                  <SingleBook title={book.title} author={book.author}
                              releaseDate={book.releaseDate}
                              key={book.id} id={book.id} index={i}
                              lastChild={i === books.length - 1}
                              isFavorite={book.isFavorite}
                              rating={book.rating}/>
                ))}
              </AnimatePresence>
            </motion.ul>
        }
      </div>
    </motion.div>
  );
};

export default BookList;