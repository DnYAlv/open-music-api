const routes = (handler) => [
  {
    method: 'POST',
    path: '/albums',
    handler: (request, h) => handler.albumsHandler.postAlbumHandler(request, h),
  },
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: (request, h) => handler.albumsHandler.getAlbumByIdHandler(request, h),
  },
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: (request, h) => handler.albumsHandler.putAlbumByIdHandler(request, h),
  },
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: (request, h) => handler.albumsHandler.deleteAlbumByIdHandler(request, h),
  },
  {
    method: 'POST',
    path: '/songs',
    handler: (request, h) => handler.songsHandler.postSongHandler(request, h),
  },
  {
    method: 'GET',
    path: '/songs',
    handler: () => handler.songsHandler.getSongsHandler(),
  },
  {
    method: 'GET',
    path: '/songs/{id}',
    handler: (request, h) => handler.songsHandler.getSongByIdHandler(request, h),
  },
  {
    method: 'PUT',
    path: '/songs/{id}',
    handler: (request, h) => handler.songsHandler.putSongByIdHandler(request, h),
  },
  {
    method: 'DELETE',
    path: '/songs/{id}',
    handler: (request, h) => handler.songsHandler.deleteSongByIdHandler(request, h),
  },
];

module.exports = routes;
