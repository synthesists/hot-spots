import supertest from 'supertest';
import app from '../../src/app';

const data = {
  "data": {
    "tracks": [
      {
        "name": "Blinding Lights",
        "preview_url": null,
        "album": {
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273c464fabb4e51b72d657f779a"
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02c464fabb4e51b72d657f779a"
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851c464fabb4e51b72d657f779a"
            }
          ]
        }
      },
      {
        "name": "BELIEVE IT",
        "preview_url": "https://p.scdn.co/mp3-preview/c6f33c22314cf938e0706e8a7797d575d46984ac?cid=edc4e977b3ed48deaf692be43db28175",
        "album": {
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273d8082097058d4c44739b17dd"
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02d8082097058d4c44739b17dd"
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851d8082097058d4c44739b17dd"
            }
          ]
        }
      }
    ]
  }
}


describe('API tests', () => {
  describe('/', () => {
    it('returns status 200', async () => {
      const res = await supertest(app()).get('/');
      expect(res.status).toEqual(200);
      expect(res.text).toStrictEqual('Hello, from the server');
    });
  });
  describe('/graphql', () => {
  //   it('should return data for song when ID is passed', async () => {
  //     const res = await supertest(app())
  //       .get('/graphql')
  //       .send({"query": '{track(id: "0sf12qNH5qcw8qpgymFOqD") { name }}'})
  //     expect(res.status).toEqual(200);
  //     expect(res.body).toStrictEqual({
  //       data: {
  //         track: {
  //           name: "Blinding Lights"
  //         }
  //       }
  //     });
  //   });
    it('should return names for 2 songs when ID is passed', async () => {
      const res = await supertest(app())
        .get('/graphql')
        .send({"query": '{tracks(id: "0sf12qNH5qcw8qpgymFOqD") { name }}'})
      expect(res.status).toEqual(200);
      expect(res.body).toStrictEqual({
        data: {
          tracks: [
            { name: 'Blinding Lights' },
            { name: 'After hours' },
          ],
        },
      });
    });
    it('should return data for 2 songs when ID is passed', async () => {
      const res = await supertest(app())
        .get('/graphql')
        .send({query: '{ tracks(id: "0sf12qNH5qcw8qpgymFOqD") { name preview_url album { images { url } } }}'})
      expect(res.status).toEqual(200);
      expect(res.body).toStrictEqual(data);
    });
  });
});