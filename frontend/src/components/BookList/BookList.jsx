import styles from './BookList.module.css';

const BookList = () => {
  return (
    <div className={`book-list ${styles.window}`}>
      <h2>Book list</h2>
    </div>
  );
};

export default BookList;