import React, { useEffect, useState } from 'react';

import styles from './Question.module.scss';
import RecordPlayer from '../../components/RecordPlayer';

import Axios from 'axios';

const getTracks = async (trackId: string) => {
  const response = await Axios.post('http://192.168.1.158:3001/graphql', {
    query: `{ tracks(id: "${trackId}") { name popularity preview_url id album { images { url } } }}`,
  });

  return response.data.data.tracks;
};

export default ({ track: trackId, onClick }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getTracks(trackId).then((tracks) => setTracks(tracks));
  }, [trackId]);

  const isCorrect = (popularityScore: number) =>
    Math.max(...tracks.map(({ popularity }) => popularity)) === popularityScore;

  return (
    <div className={styles.Question}>
      {tracks.map((track) => (
        <div>
          <RecordPlayer
            imageUrl={track.album.images[0].url}
            previewUrl={track.preview_url}
          />
          <button
            onClick={() => {
              onClick();
              alert(isCorrect(track.popularity) ? 'Correct' : 'Incorrect');
            }}
          >
            {track.name}
          </button>
        </div>
      ))}
    </div>
  );
};
