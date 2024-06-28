import styles from './Header.module.css';
import {PiBookOpenTextThin} from 'react-icons/pi';
import {MdDarkMode, MdOutlineDarkMode} from 'react-icons/md';
import useLocalStorage from '../../hooks/useLocalStorage';
import {useTranslation} from 'react-i18next';
import {HiOutlineLanguage} from 'react-icons/hi2';
import i18n from './../../i18n';
import {useState} from 'react';

function Header() {

  const {t} = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'ru');

  const languageChangeHandler = () => {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      setLanguage('ru');
    } else if (language === 'ru') {
      i18n.changeLanguage('en');
      setLanguage('en');
    }
  };

  const themeDataHandler = () => {
    if (document.querySelector('body').getAttribute('data-theme') === 'dark') {
      return 'dark';
    } else if (document.querySelector('body').getAttribute('data-theme') ===
      'light') {
      return 'light';
    }
  };

  const setDarkTheme = () => document.querySelector('body')
    .setAttribute('data-theme', 'dark');
  const setLightTheme = () => document.querySelector('body')
    .setAttribute('data-theme', 'light');

  const selectedTheme = localStorage.getItem('selectedTheme');

  if (selectedTheme === 'dark') {
    setDarkTheme();
  } else if (selectedTheme === 'light') {
    setLightTheme();
  }

  const themeChangeHandler = () => {
    if (themeDataHandler() === 'dark') {
      setLightTheme();
      localStorage.setItem('selectedTheme', 'light');
      setThemeData(themeDataHandler());
    } else {
      setDarkTheme();
      localStorage.setItem('selectedTheme', 'dark');
      setThemeData(themeDataHandler());
    }
  };

  const [themeData, setThemeData] = useState(themeDataHandler());
  const themeTitleHandler = () => {
    if (themeData === 'light') {
      return t('TURN_DARK');
    } else {
      return t('TURN_LIGHT');
    }
  };

  return (
    <header className={`header ${styles.wrapper}`}>
      <div className={styles.container}>
        <button className={styles.translate_btn}
                title={t('CHANGE_LANGUAGE')} onClick={languageChangeHandler}>
          <HiOutlineLanguage/>
        </button>
        <div className={styles.logo}>
          <h1>Book Tracker App</h1>
          <PiBookOpenTextThin className={styles.icon}/>
        </div>
        <button className={styles.theme_btn}
                title={themeTitleHandler()} onClick={themeChangeHandler}>
          {themeData === 'light' ? <MdDarkMode/> :
            <MdOutlineDarkMode/>}
        </button>
      </div>
    </header>
  );
}

export default Header;