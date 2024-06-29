import styles from './BookButton.module.css';

function BookButton({children, onClick, title}) {
  return (
    <button onClick={onClick} title={title} className={styles.ui}>
      {children}
    </button>
  );
}

export default BookButton;