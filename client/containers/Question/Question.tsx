import React, { useEffect, useState } from 'react';

import styles from './Question.module.scss';
import RecordPlayer from '../../components/RecordPlayer';

const getIncorrectAnswer = async (track) => [
  {
    imageUrl:
      'https://i.scdn.co/image/ab67616d0000b273bfa99afb5ef0d26d5064b23b',
    previewUrl:
      'https://p.scdn.co/mp3-preview/21523d62d88e6d42455d270adbe8f1b7d12f35d9?cid=55b46a80916e4ed4991986cc0675326c',
  },
];

export default ({ track, onClick }) => {
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    getIncorrectAnswer(track).then((tracks) => setIncorrectAnswers(tracks));
  }, [track]);

  return (
    <div className={styles.Question}>
      {incorrectAnswers.length >= 0
        ? [
            <RecordPlayer
              imageUrl={track.imageUrl}
              previewUrl={track.previewUrl}
              onClick={onClick}
            />,
            ...incorrectAnswers.map(({ imageUrl, previewUrl }) => (
              <RecordPlayer
                imageUrl={imageUrl}
                previewUrl={previewUrl}
                onClick={onClick}
              />
            )),
          ]
        : null}
    </div>
  );
};
