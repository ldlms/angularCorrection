import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-blog-control',
  templateUrl: './blog-control.component.html',
  styleUrls: ['./blog-control.component.css']
})
export class BlogControlComponent {

  newArticleTitle='';
  newArticleContent='';
  @Output()articleCreated=new EventEmitter<{articleTitle:String,articleContent:String}>();
  @Output()brouillonCreated=new EventEmitter<{articleTitle:String,articleContent:String}>();
  onAddArticle(){
    this.articleCreated.emit({articleTitle:this.newArticleTitle,articleContent:this.newArticleContent})
  }
  onAddBrouillon(){
    this.brouillonCreated.emit({articleTitle:this.newArticleTitle,articleContent:this.newArticleContent})
  }
}
