import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import MainLayout from '../../../layouts/main';
import Question from '../../../containers/Question';

const getTracks = async (playlistId) => [
  {
    imageUrl:
      'https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface',
    previewUrl:
      'https://p.scdn.co/mp3-preview/cb8560b45aa0d4028e94a2648686c460641074d0?cid=55b46a80916e4ed4991986cc0675326c',
  },
  {
    imageUrl:
      'https://i.scdn.co/image/ab67616d0000b273bfa99afb5ef0d26d5064b23b',
    previewUrl:
      'https://p.scdn.co/mp3-preview/21523d62d88e6d42455d270adbe8f1b7d12f35d9?cid=55b46a80916e4ed4991986cc0675326c',
  },
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
