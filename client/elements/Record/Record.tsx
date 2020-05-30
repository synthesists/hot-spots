import React from 'react';

import styles from './Record.module.scss';

export default ({
  url,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  onClick,
  onTouchStart,
  onTouchEnd,
}) => (
  <div className={styles.Record}>
    <img
      crossOrigin="anonymous"
      src={url}
      alt="albumImage"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    />
  </div>
);
