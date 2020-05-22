import Head from 'next/head';
import { useState } from 'react';

import styles from './main.layout.module.scss';
import Light from '../../styles/themes/light.theme.module.css';
import Dark from '../../styles/themes/dark.theme.module.css';

const themes = [Dark, Light];

export default ({ children, title = 'This is the default title' }) => {
  const [themeIndex, setThemeIndex] = useState(0);
  const toggleTheme = () => setThemeIndex((themeIndex + 1) % themes.length);
  const currentTheme = themes[themeIndex].theme;

  return (
    <div className={[currentTheme, styles.main].join(' ')}>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        {children}
        <button onClick={toggleTheme}>Toggle theme</button>
      </main>
    </div>
  );
};
