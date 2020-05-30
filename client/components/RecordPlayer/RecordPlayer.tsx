import React, { useEffect, useState } from 'react';
import Record from '../../elements/Record';

import styles from './RecordPlayer.module.scss';

export default ({ imageUrl, previewUrl, onClick }) => {
  const [audio, setAudio] = useState(undefined);
  const [shouldPlay, setShouldPlay] = useState(false);

  if (shouldPlay) audio.play();

  useEffect(() => {
    const a = new Audio();
    a.src = previewUrl;
    setAudio(a);
  }, []);

  useEffect(() => {
    if (previewUrl) {
      if (audio) audio.pause();
      const a = new Audio();
      a.src = previewUrl;
      setAudio(a);
    }
  }, [previewUrl]);

  const onMouseOver = () => audio.play();
  const onMouseOut = () => audio.pause();

  return (
    <div className={styles.Record}>
      <Record
        onBlur={onMouseOut}
        onFocus={onMouseOver}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={() => {
          audio.pause();
          onClick();
          setShouldPlay(true);
        }}
        url={imageUrl}
      />
    </div>
  );
};
