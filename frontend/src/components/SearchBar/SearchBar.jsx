import styles from './SearchBar.module.css';
import {useTranslation} from 'react-i18next';

const SearchBar = () => {
  const {t} = useTranslation();
  return (
    <div className={`search-bar ${styles.window}`}>
      <input type="text" placeholder={t('FILTER_BY_TITLE')}/>
    </div>
  );
};

export default SearchBar;