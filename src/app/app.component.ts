import { Component, OnInit,OnChanges,DoCheck} from '@angular/core';
import { ProfilesService } from './profiles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProfilesService]
})
export class AppComponent implements OnChanges, OnInit, DoCheck {
  constructor(private profilesService:ProfilesService){

  }
  profiles:{name:string,status:string}[]=[];
  mesArticles=[
    {
      type:'article',
      title:'Article de test',
      content:'Contenu de test'
    }
  ];
  onArticleAdded(articleData:{articleTitle:string,articleContent:string}){
    this.mesArticles.push(
      {
        type:'article',
        title: articleData.articleTitle,
        content:articleData.articleContent
      }
    )
  }
  onAddBrouillonAdded(brouillonData:{articleTitle:string,articleContent:string}){
    this.mesArticles.push(
      {
        type:'brouillon',
        title: brouillonData.articleTitle,
        content:brouillonData.articleContent
      }
    )
  }
  ngOnInit(){
    this.profiles = this.profilesService.profiles;
  }
  ngOnChanges(){
    this.profiles = this.profilesService.profiles;
  }
  ngDoCheck(): void {
    this.profiles = this.profilesService.profiles;
  }

  // onProfileAdded(newProfile:{name:string,status:string}){
  //   this.profiles.push(newProfile);
  // }

  // onStatusChanged(updateInfo:{id:number,newStatus:string}){
  //   this.profiles[updateInfo.id].status = updateInfo.newStatus;
  // }
}

