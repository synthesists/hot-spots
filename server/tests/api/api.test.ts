import supertest from 'supertest';
import app from '../../src/app';

describe('API tests', () => {
  describe('/', () => {
    it('returns status 200', async () => {
      const res = await supertest(app()).get('/');
      expect(res.status).toEqual(200);
      expect(res.text).toStrictEqual('Hello, from the server');
    });
  });
});
