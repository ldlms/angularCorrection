import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
