import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={`search-bar ${styles.search_bar}`}>
      <h2>Search bar</h2>
    </div>
  );
};

export default SearchBar;