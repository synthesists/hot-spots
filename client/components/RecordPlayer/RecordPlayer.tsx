import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import Record from '../../elements/Record';

import styles from './RecordPlayer.module.scss';

export default ({ imageUrl, previewUrl }) => {
  console.log('isMobile', isMobile);
  const [audio, setAudio] = useState(undefined);

  useEffect(() => {
    const a = new Audio();
    a.src = previewUrl;
    setAudio(a);
  }, [previewUrl]);

  // useEffect(() => {
  //   if (previewUrl) {
  //     if (audio) audio.pause();
  //     const a = new Audio();
  //     a.src = previewUrl;
  //     setAudio(a);
  //   }
  // }, [previewUrl]);
  console.log(audio);
  const onMouseOver = !isMobile ? () => audio.play() : () => {};
  const onMouseOut = !isMobile ? () => audio.pause() : () => {};
  const onTouchStart = isMobile ? () => audio.play() : () => {};
  const onTouchEnd = isMobile ? () => audio.pause() : () => {};

  return (
    <div className={styles.Record}>
      <Record
        onBlur={onMouseOut}
        onFocus={onMouseOver}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={() => {}}
        url={imageUrl}
      />
    </div>
  );
};
