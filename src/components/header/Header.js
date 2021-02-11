import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppProvider/AppProvider';
import styles from './Header.css';

export default function Header() {
  const [isToggled, setIsToggled] = useState(true);
  const { setTheme, theme } = useContext(AppContext);

  const toggle = React.useCallback(() => {
    setIsToggled((isToggled) => !isToggled);
    if (theme === 'light') {
      setTheme('dark');
    }
    if (theme === 'dark') {
      setTheme('light');
    }
  }, [setIsToggled, isToggled]);

  return (
    <div className={styles.header}>
      <Link className={styles.link} to="/">
        Home Page
      </Link>
      <button onClick={toggle}>Click</button>
    </div>
  );
}
