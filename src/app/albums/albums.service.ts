export class AlbumsService{
  private albums = [
    {
      id: 1,
      name: 'Crazy Frog (EP)',
      format: 'cassette'
    },
    {
      id: 2,
      name: '30 ans de Fiesta ! (Compil)',
      format: 'cd'
    },
    {
      id: 3,
      name: 'Tourner Les Serviettes (Album)',
      format: 'vinyl'
    }
  ];

  getAlbums() {
    return this.albums;
  }

  getAlbum(id: number) {
    const album = this.albums.find(
      (a) => {
        return a.id === id;
      }
    );
    return album;
  }

  updateAlbum(id: number, albumInfo: {name: string, format: string}) {
    const album = this.albums.find(
      (a) => {
        return a.id === id;
      }
    );
    if (album) {
      album.name = albumInfo.name;
      album.format = albumInfo.format;
    }
  }
}
