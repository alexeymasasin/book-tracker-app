import styles from './BookList.module.css';

const BookList = () => {
  return (
    <div className={`book-list ${styles.book_list}`}>
      <h2>Book list</h2>
    </div>
  );
};

export default BookList;