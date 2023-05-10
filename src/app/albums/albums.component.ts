import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albums: {id: number, name: string, format: string}[] = [];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.albums = this.albumsService.getAlbums();
  }

}
