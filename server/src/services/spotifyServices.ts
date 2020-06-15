import rp from 'request-promise';
import spotifyCredentials from '../config/config'
import axios from 'axios';
import ITrackID from '../doc/ITrackID';
import IPlaylistID from '../doc/IPlayistID';

let token: any;

const validToken = () => token && token.expiration > new Date().getTime();

const updateToken = async () => {
    const buffer = Buffer.from(`${spotifyCredentials.clientId}:${spotifyCredentials.clientSecret}`, 'utf-8');

    const options = {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        form: {
            grant_type: 'client_credentials',
        },
        json: true,
        headers: {
            Authorization: `Basic ${buffer.toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {},
    };
    const response: any = await rp(options);
    token = {
        id: response.access_token,
        expiration: new Date().getTime() + response.expires_in * 1000
    };
}

const getTokenId = async () => {
  if (!validToken()) await updateToken();
  return token.id;
};

const getPlaylistTracks = async ({ playlistID }: IPlaylistID) => {
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
    const response = await axios(options)
    response.data.tracks.items = response.data.tracks.items.filter((playlistTrack: any) => playlistTrack.track.preview_url !== null)
    return response.data
}

const getTrack = async ({ id }: ITrackID) => {
    const tokenId = await getTokenId();
    const options = {
        url: `https://api.spotify.com/v1/tracks/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${tokenId},`
        },
        json: true,
    };
    const response = await axios(options);    
    return response.data;
};

const getRecommendedTrack = async (id: ITrackID) => {    
    const { tracks }:any = await getRecommendedTracks(id);
    const [ track ] = tracks.filter((track: any) => track.preview_url !== null)
      .slice(0,1);   
    return track;
};

const getRecommendedTracks = async ({ id }: ITrackID) => {        
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

export {
    getTokenId,
    getTrack,
    getRecommendedTrack,
    getPlaylistTracks
}
