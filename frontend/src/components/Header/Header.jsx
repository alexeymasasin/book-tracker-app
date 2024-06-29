import styles from './Header.module.css';
import {PiBookOpenTextThin} from 'react-icons/pi';
import useLocalStorage from '../../hooks/useLocalStorage';
import {useTranslation} from 'react-i18next';
import {HiOutlineLanguage} from 'react-icons/hi2';
import i18n from './../../i18n';
import {useState} from 'react';
import {IoInvertMode} from 'react-icons/io5';
import HeaderButton from '../UI/HeaderButton';
import {AnimatePresence, motion} from 'framer-motion';

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
      <motion.div className={styles.container}>
        <HeaderButton sign="translate_btn"
                      title={t('CHANGE_LANGUAGE')}
                      onClick={languageChangeHandler}>
          <HiOutlineLanguage/>
        </HeaderButton>
        <div className={styles.logo}>
          <h1>Book Tracker App</h1>
          <PiBookOpenTextThin className={styles.icon}/>
        </div>
        <AnimatePresence>

          <HeaderButton sign="darkmode_btn"
                        title={themeTitleHandler()}
                        onClick={themeChangeHandler}
                        themeData={themeData}
          >
            <IoInvertMode/>

          </HeaderButton>
        </AnimatePresence>

      </motion.div>
    </header>
  );
}

export default Header;