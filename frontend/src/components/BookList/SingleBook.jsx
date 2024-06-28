import styles from './SingleBook.module.css';

function SingleBook({title, author, releaseDate, index, lastChild}) {
  return (
    <li>
      <div
        className={`${styles.wrapper} ${lastChild ? styles.last_child : ''}`}>
        <p className={styles.index}>{++index}.</p>{' '}
        <p className={styles.title}>"{title}"</p>{' '}
        by <p className={styles.author}>{author}</p>{' '}
        ({releaseDate})
      </div>
    </li>
  );
}

export default SingleBook;