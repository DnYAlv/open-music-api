const mapAlbumDBtoModel = ({
  id,
  name,
  year,
  songs,
}) => ({
  id,
  name,
  year,
  songs,
});

const mapSongDBtoModel = ({
  id,
  album_id,
  title,
  year,
  genre,
  performer,
  duration,
}) => ({
  id,
  albumId: album_id,
  title,
  year,
  genre,
  performer,
  duration,
});

module.exports = { mapAlbumDBtoModel, mapSongDBtoModel };
