import styles from './HeaderButton.module.css';
import {motion} from 'framer-motion';

function HeaderButton({children, onClick, title, sign, themeData}) {
  return (
    <motion.button key={sign}
                   transition={{duration: 0.2}}
                   initial={{opacity: 0}}
                   animate={{opacity: 1}} exit={{opacity: 0}}
                   onClick={onClick}
                   title={title}
                   className={`${styles.ui} ${themeData === 'light'
                     ? styles.r180
                     : styles.r0}`}
    >
      {children}
    </motion.button>
  );
}

export default HeaderButton;