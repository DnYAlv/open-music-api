const SongsHandler = require('./songs/handler');
const AlbumsHandler = require('./albums/handler');
const routes = require('./routes');

const pluginConfig = {
  name: 'songs',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const appHandler = {
      albumsHandler: new AlbumsHandler(service.albumsService, validator.AlbumsValidator),
      songsHandler: new SongsHandler(service.songsService, validator.SongsValidator),
    };
    server.route(routes(appHandler));
  },
};

module.exports = pluginConfig;
