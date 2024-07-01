import styles from './BookButton.module.css';

function BookButton({children, onClick, title, type, isFavorite}) {
  return (
    <button onClick={onClick} title={title}
            className={`${styles.ui} ${styles[type]} ${isFavorite
              ? styles.is_favorite
              : ''}`}>
      {children}
    </button>
  );
}

export default BookButton;