import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.header_container}>
        <h1>Book Tracker App</h1>
      </div>
    </header>
  );
}

export default Header;