const chai = require('chai');
const chaiHttp = require('chai-http');

const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');


const server = require('../api/server');
chai.use(chaiHttp);

const { expect } = chai;

const example_id = '605de6ded1ff223100cd6aa1';

describe('GET /api/users/:userId', () => {
  describe('quando não é passado o token', () => {
    let response = {};

    before(async () => {
      response = await chai.request(server)
      .get(`/api/users/${example_id}`)
    });

    after(async () => {

    });

    it('retorna o código de status 400', () => {
      expect(response.body).to.have.status(400)
    });
    it('retorna um objeto', () => {
      expect(response.body).to.be.an('object');
    });
    it('o objeto possui a propriedade "error"', () => {
      expect(response.body).to.have.property('error');
    });
    it('a propriedade "error" possui a mensagem "Token não encontrado ou informado"', () => {
      expect(response.body.error).to.be.equal('Token não encontrado ou informado')
    });
  });
  describe('Quando o usuário solicita informações de outro usuário', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);
      connectionMock.db('jwt_exercise')
        .collection('users')
        .insertOne({
          _id: example_id,
          username: 'fake-user',
          password: 'fake-password',
          name: 'fake-name',
          birthdate: '01/01/1960',
          biography: 'fake-biography',
        })
      const token = await chai.request(server)
        .post('/api/login')
        .send({
          username: 'fake-user',
          password: 'fake-password',
        }).then((res) => res.body.token);

      const OTHER_EXAMPLE_ID = '565de6ded1ff223100cd6aa2';

      response = await chai.request(server)
        .get(`/api/users/${OTHER_EXAMPLE_ID}`)
        .set('authorization', token);
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna o código de status 401', () => {
      expect(response).to.have.status('401')
    });
    it('retorna um objeto', () => {
      expect(response.body).to.be.an('object')
    });
    it('o objeto possui a propriedade "error"', () => {
      expect(response.body).to.have.property('error')
    });
    it('a propriedade "error" possui a mensagem "Acesso negado"', () => {
      expect(response.body.error).to.be.equal('Acesso negado')
    });
  });
  describe('Quando a pessoa usuária é encontrada com sucesso', () => {
    let response;
    const DBServer = new MongoMemoryServer();

    before(async () => {
        const connectionMock = await DBServer.getUri()
            .then(URLMock => MongoClient.connect(
                URLMock,
                { useNewUrlParser: true, useUnifiedTopology: true }
            ));

        sinon.stub(MongoClient, 'connect')
            .resolves(connectionMock);

        connectionMock.db('jwt_exercise')
            .collection('users')
            .insertOne({
                _id: example_id,
                username: 'fake-user',
                password: 'fake-password'
            })

        const token = await chai.request(server)
            .post('/api/login')
            .send({
                username: 'fake-user',
                password: 'fake-password'
            })
            .then((res) => res.body.token);

        response = await chai.request(server)
            .get(`/api/users/${EXAMPLE_ID}`)
            .set('authorization', token);
    });

    after(async () => {
        MongoClient.connect.restore();
        await DBServer.stop();
    });

    it('retorna código de status "200"', () => {
        expect(response).to.have.status(200);
    });

    it('retorna um objeto no body', () => {
        expect(response.body).to.be.an('object');
    });
  });
})