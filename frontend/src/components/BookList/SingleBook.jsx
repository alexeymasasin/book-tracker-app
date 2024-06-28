import styles from './SingleBook.module.css';
import {useTranslation} from 'react-i18next';

function SingleBook({title, author, releaseDate, index, lastChild}) {
  const {t} = useTranslation();

  return (
    <li>
      <div
        className={`${styles.wrapper} ${lastChild ? styles.last_child : ''}`}>
        <div className={styles.book_info}>
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
        <div className={styles.book_panel}>

        </div>
      </div>
    </li>
  );
}

export default SingleBook;