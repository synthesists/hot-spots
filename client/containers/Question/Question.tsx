import React, { useEffect, useState } from 'react';

import styles from './Question.module.scss';
import RecordPlayer from '../../components/RecordPlayer';

import Axios from 'axios';

const getTracks = async (trackId: string) => {
  const response = await Axios.post('http://localhost:3001/graphql', {
    query: `{ tracks(id: "${trackId}") { name preview_url album { images { url } } }}`,
  });
  return response.data.data.tracks;
};

export default ({ track: trackId, onClick }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getTracks(trackId).then((tracks) => setTracks(tracks));
  }, [trackId]);

  return (
    <div className={styles.Question}>
      {tracks.map((track) => (
        <RecordPlayer
          imageUrl={track.album.images[0].url}
          previewUrl={track.preview_url}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
