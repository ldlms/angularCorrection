import { Component } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent {

  album: {id: number, name: string, format: string};
  albumName = '';
  albumFormat = '';

  constructor(private albumService: AlbumsService) { }

  ngOnInit() {
    this.album = this.albumService.getAlbum(1);
    this.albumName = this.album.name;
    this.albumFormat = this.album.format;
  }

  onUpdateAlbum() {
    this.albumService.updateAlbum(this.album.id,
      {name: this.albumName, format: this.albumFormat});
  }

}
