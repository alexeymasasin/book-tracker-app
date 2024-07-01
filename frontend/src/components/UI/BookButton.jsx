import styles from './BookButton.module.css';

function BookButton({children, onClick, title, type}) {
  return (
    <button onClick={onClick} title={title}
            className={`${styles.ui} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default BookButton;