import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: {id: number, name: string, format: string};

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.album = this.albumsService.getAlbum(1);
  }
}
