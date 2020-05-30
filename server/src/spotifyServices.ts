import axios from 'axios';
import rp from 'request-promise';

const spotifyCredentials = {clientId:"edc4e977b3ed48deaf692be43db28175", clientSecret:"bb1ba85b88d44727ae94eaa6e4b4958e"};

let token: any;

const validToken = () => token && token.expiration > new Date().getTime();

const updateToken = async () => {
    const buffer = Buffer.from(`${spotifyCredentials.clientId}:${spotifyCredentials.clientSecret}`, 'utf-8');
    console.log(buffer.toString(), "herererere");
    // const response: any = await axios({
    //     method: 'post',
    //     url: `https://accounts.spotify.com/api/token`,
    //     data: {
    //         grant_type: 'authorization_code', 
    //     },
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Authorization': `Basic ${buffer.toString('base64')}`
    //     },
    // })
    
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

export default getTokenId;