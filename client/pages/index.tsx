import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import MainLayout from '../layouts/main';
import Question from '../containers/Question';

const getTracks = async (playlistId) => [
  '65WFgyQwNpjmGQ41MiwGtF',
  '6SlZp9UeLRIuw92j96dcjU',
  '6ikzdvfsPbdaGpXmeEeaK2',
];

export default () => {
  const router = useRouter();
  const { playlistId } = router.query;

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getTracks(playlistId).then((t) => setTracks(t));
  }, []);

  const onClick = () => {
    const [_, ...tail] = tracks;
    setTracks(tail);
  };

  return (
    <MainLayout title="Hot Spots | Play">
      {tracks.length > 0 ? (
        <Question onClick={onClick} track={tracks[0]} />
      ) : null}
    </MainLayout>
  );
};
