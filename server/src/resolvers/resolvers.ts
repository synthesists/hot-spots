import axios from 'axios';
import getTokenId from '../spotifyServices';
import rp from 'request-promise';
import ITrackID from '../doc/ITrackID';
import IPlaylistID from '../doc/IPlayistID';


const resolver = {

    playlist: async ({playlistID}: IPlaylistID) => {
        const tokenId = await getTokenId();
        const options = {
            url: `https://api.spotify.com/v1/playlists/${playlistID}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${tokenId},`
            },
            json: true,
        };
        const response = await axios(options);
        return response.data
    },

    tracks: async ({ id }: ITrackID) => {
        const recommendedTrack = await getRecommendedTrack(id);        
        return recommendedTrack

    },
    
}

const getRecommendedTrack = async (id: String) => {
    const { tracks }:any = await getRecommendedTracks(id);
    const [ track ] = tracks.slice(0,1)
    return track;
};

const getRecommendedTracks = async (id: String) => {    
    const tokenId = await getTokenId();
    const options = {
    url:`https://api.spotify.com/v1/recommendations?market=US&seed_tracks=${id}&min_energy=0.4&min_popularity=10`,
    headers: {
      'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${tokenId}`,
    },
    json: true,
  };
  return rp(options);

  

}



export default resolver;
