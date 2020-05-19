import Head from 'next/head';
import React from 'react';

import styles from './index.module.scss';

export default () => (
  <div className={styles.Container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="favicon.ico" />
    </Head>
    <div className="container">Hello, from the client</div>
  </div>
);
