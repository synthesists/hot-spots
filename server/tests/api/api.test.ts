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

const playlistData = {
  "data": {
    "playlist": {
      "name": "Summer in the Garden",
      "description": "The perfect tunes to accompany your lazy day in the garden.",
      "tracks": {
        "items": [
          {
            "track": {
              "name": "(Sittin' On) the Dock of the Bay"
            }
          },
          {
            "track": {
              "name": "Walk On the Wild Side"
            }
          },
          {
            "track": {
              "name": "Son Of A Preacher Man"
            }
          },
          {
            "track": {
              "name": "Lovely Day"
            }
          },
          {
            "track": {
              "name": "Mr. Blue Sky"
            }
          },
          {
            "track": {
              "name": "California Soul"
            }
          },
          {
            "track": {
              "name": "Sunny Afternoon - Mono Mix"
            }
          },
          {
            "track": {
              "name": "Three Little Birds"
            }
          },
          {
            "track": {
              "name": "Everybody's Talkin' - From \"Midnight Cowboy\""
            }
          },
          {
            "track": {
              "name": "Sunshine"
            }
          },
          {
            "track": {
              "name": "Build Me Up Buttercup"
            }
          },
          {
            "track": {
              "name": "In the Summertime"
            }
          },
          {
            "track": {
              "name": "Hotel California - 2013 Remaster"
            }
          },
          {
            "track": {
              "name": "The Joker"
            }
          },
          {
            "track": {
              "name": "River"
            }
          },
          {
            "track": {
              "name": "Everybody Loves The Sunshine"
            }
          },
          {
            "track": {
              "name": "Here Comes The Sun - Remastered 2009"
            }
          },
          {
            "track": {
              "name": "Pretty Flamingo"
            }
          },
          {
            "track": {
              "name": "Dreams - 2004 Remaster"
            }
          },
          {
            "track": {
              "name": "Sweet Home Alabama"
            }
          },
          {
            "track": {
              "name": "Daydream Believer"
            }
          },
          {
            "track": {
              "name": "Sunny"
            }
          },
          {
            "track": {
              "name": "54-46 Was My Number"
            }
          },
          {
            "track": {
              "name": "Be Mine"
            }
          },
          {
            "track": {
              "name": "(What A) Wonderful World - Mono"
            }
          },
          {
            "track": {
              "name": "O-o-h Child"
            }
          },
          {
            "track": {
              "name": "Here You Come Again"
            }
          },
          {
            "track": {
              "name": "California Girls - Remix/Remastered"
            }
          },
          {
            "track": {
              "name": "Brown Eyed Girl"
            }
          },
          {
            "track": {
              "name": "Green Onions"
            }
          },
          {
            "track": {
              "name": "My Girl"
            }
          },
          {
            "track": {
              "name": "Dancing In the Moonlight - Original Recording"
            }
          },
          {
            "track": {
              "name": "Me and Bobby McGee"
            }
          },
          {
            "track": {
              "name": "Walking In Rhythm"
            }
          },
          {
            "track": {
              "name": "Ain't No Sunshine"
            }
          },
          {
            "track": {
              "name": "Time of the Season - Mono Version"
            }
          },
          {
            "track": {
              "name": "All Along the Watchtower"
            }
          },
          {
            "track": {
              "name": "Colors"
            }
          },
          {
            "track": {
              "name": "It's Too Late"
            }
          },
          {
            "track": {
              "name": "Big Bird - Mono"
            }
          },
          {
            "track": {
              "name": "Sunshine Of Your Love"
            }
          },
          {
            "track": {
              "name": "Wild Horses"
            }
          },
          {
            "track": {
              "name": "Put Your Records On"
            }
          },
          {
            "track": {
              "name": "Listen to the Music"
            }
          },
          {
            "track": {
              "name": "What Do You Want the Girl to Do"
            }
          },
          {
            "track": {
              "name": "I'm into Something Good"
            }
          },
          {
            "track": {
              "name": "Big Yellow Taxi"
            }
          },
          {
            "track": {
              "name": "Perfect Day"
            }
          },
          {
            "track": {
              "name": "Blackbird - Remastered 2009"
            }
          },
          {
            "track": {
              "name": "Les Fleurs"
            }
          },
          {
            "track": {
              "name": "What A Wonderful World"
            }
          },
          {
            "track": {
              "name": "Home Again"
            }
          },
          {
            "track": {
              "name": "Even After All"
            }
          },
          {
            "track": {
              "name": "Porcelain"
            }
          },
          {
            "track": {
              "name": "Super Duper Love"
            }
          },
          {
            "track": {
              "name": "Hooked on a Feeling"
            }
          },
          {
            "track": {
              "name": "The Payback"
            }
          },
          {
            "track": {
              "name": "California Dreamin'"
            }
          },
          {
            "track": {
              "name": "At the River"
            }
          },
          {
            "track": {
              "name": "Cherish the Day"
            }
          },
          {
            "track": {
              "name": "No Woman, No Cry - Live At The Lyceum, London/1975"
            }
          },
          {
            "track": {
              "name": "Daydream"
            }
          },
          {
            "track": {
              "name": "Itchycoo Park"
            }
          },
          {
            "track": {
              "name": "Move on Up"
            }
          },
          {
            "track": {
              "name": "Coming Home"
            }
          },
          {
            "track": {
              "name": "Where Is the Love"
            }
          },
          {
            "track": {
              "name": "Teardrops - 7\" Edit"
            }
          },
          {
            "track": {
              "name": "Heart of Gold"
            }
          },
          {
            "track": {
              "name": "Summer Madness"
            }
          },
          {
            "track": {
              "name": "Appletree"
            }
          },
          {
            "track": {
              "name": "Seven Days in Sunny June"
            }
          },
          {
            "track": {
              "name": "Get Lucky (feat. Pharrell Williams & Nile Rodgers) - Radio Edit"
            }
          },
          {
            "track": {
              "name": "Stomp! - Single Version"
            }
          },
          {
            "track": {
              "name": "Thinking of You"
            }
          },
          {
            "track": {
              "name": "I Think I'll Call It Morning"
            }
          },
          {
            "track": {
              "name": "Like a Rolling Stone"
            }
          },
          {
            "track": {
              "name": "Summer in the City - Remastered"
            }
          },
          {
            "track": {
              "name": "Wildflowers - 2015 Remaster"
            }
          },
          {
            "track": {
              "name": "Gimme Shelter"
            }
          },
          {
            "track": {
              "name": "Strawberry Letter 23"
            }
          },
          {
            "track": {
              "name": "Ooh La La"
            }
          },
          {
            "track": {
              "name": "Summertime"
            }
          },
          {
            "track": {
              "name": "Dream A Little Dream Of Me - With Introduction"
            }
          },
          {
            "track": {
              "name": "Summer Love"
            }
          },
          {
            "track": {
              "name": "Love Rollercoaster"
            }
          },
          {
            "track": {
              "name": "Do That Stuff"
            }
          },
          {
            "track": {
              "name": "Le Freak - 2018 Remaster"
            }
          },
          {
            "track": {
              "name": "Don't Look Any Further - Single Version"
            }
          },
          {
            "track": {
              "name": "Cool Down The Pace"
            }
          },
          {
            "track": {
              "name": "Sweet Thing"
            }
          },
          {
            "track": {
              "name": "Pusherman"
            }
          },
          {
            "track": {
              "name": "In The Waiting Line"
            }
          },
          {
            "track": {
              "name": "Cruisin to the Park"
            }
          },
          {
            "track": {
              "name": "You Can Have It All"
            }
          },
          {
            "track": {
              "name": "Long Cool Woman (In a Black Dress) - 1999 Remaster"
            }
          },
          {
            "track": {
              "name": "Purple Haze"
            }
          },
          {
            "track": {
              "name": "Welcome To My World"
            }
          },
          {
            "track": {
              "name": "Crimson and Clover"
            }
          },
          {
            "track": {
              "name": "Free"
            }
          },
          {
            "track": {
              "name": "I Like It"
            }
          }
        ]
      }
    }
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
    it('should return data for song when ID is passed', async () => {
      const res = await supertest(app())
        .get('/graphql')
        .send({"query": '{track(id: "0sf12qNH5qcw8qpgymFOqD") { name }}'})
      expect(res.status).toEqual(200);
      expect(res.body).toStrictEqual({
        data: {
          track: {
            name: "Blinding Lights"
          }
        }
      });
    });
    // it('should return names for 2 songs when ID is passed', async () => {
    //   const res = await supertest(app())
    //     .get('/graphql')
    //     .send({"query": '{tracks(id: "0sf12qNH5qcw8qpgymFOqD") { name }}'})
    //   expect(res.status).toEqual(200);
    //   expect(res.body).toStrictEqual({
    //     data: {
    //       tracks: [
    //         { name: 'Blinding Lights' },
    //         { name: 'After hours' },
    //       ],
    //     },
    //   });
    // });
    it('should return data for 2 songs when ID is passed', async () => {
      const res = await supertest(app())
        .get('/graphql')
        .send({query: '{ tracks(id: "0sf12qNH5qcw8qpgymFOqD") { name preview_url album { images { url } } }}'})
      expect(res.status).toEqual(200);
      expect(res.body).toStrictEqual(data);
    });
    it('should return playlist information including tracks when playlist ID is past', async () => {
      const res = await supertest(app())
        .get('/graphql')
        .send({query: '{ playlist(playlistID: "37i9dQZF1DWSewYkkEomBp") { name description tracks { items { track {name} } } }}'})
      expect(res.status).toEqual(200);      
      expect(res.body).toStrictEqual(playlistData);
    });
  });
});

