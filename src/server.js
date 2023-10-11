require('dotenv').config();
const Hapi = require('@hapi/hapi');
const songs = require('./api');
const AlbumsService = require('./services/postgres/AlbumsService');
const SongsService = require('./services/postgres/SongsService');
const AlbumsValidator = require('./validator/albums');
const SongsValidator = require('./validator/songs');
const ClientError = require('./exceptions/ClientError');

const services = {
  albumsService: new AlbumsService(),
  songsService: new SongsService(),
};

const validators = {
  AlbumsValidator,
  SongsValidator,
};

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.ext('onPreResponse', (request, h) => {
    const { response } = request;

    if (response instanceof Error) {
      if (response instanceof ClientError) {
        const newResponse = h.response({
          status: 'fail',
          message: response.message,
        });
        newResponse.code(response.statusCode);
        return newResponse;
      }

      if (!response.isServer) {
        return h.continue;
      }

      const otherResponse = h.response({
        status: 'error',
        message: 'terjadi kegagalan pada server kami',
      });
      otherResponse.code(500);
      return otherResponse;
    }

    return h.continue;
  });

  await server.register({
    plugin: songs,
    options: {
      service: services,
      validator: validators,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
