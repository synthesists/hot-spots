import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import MainLayout from '../layouts/main';
import Question from '../containers/Question';

const getTracks = async (playlistId) => [
  '65WFgyQwNpjmGQ41MiwGtF',
  '136iZLQdKtlyEFurf4UKf6',
  '3UJV7BZtyVy0ZNXiPOiaKB',
];

export default () => {
  const router = useRouter();
  const { playlistId } = router.query;

  const [tracks, setTracks] = useState([]);
  const [toPlay, setToPlay] = useState(false);

  useEffect(() => {
    getTracks(playlistId).then((t) => setTracks(t));
  }, []);

  const onClick = () => {
    const [_, ...tail] = tracks;
    setTracks(tail);
  };

  return (
    <MainLayout title="Hot Spots | Play">
      {toPlay ? (
        <Question onClick={onClick} track={tracks[0]} />
      ) : (
        <button onClick={() => setToPlay(true)}>PLAY</button>
      )}
    </MainLayout>
  );
};
