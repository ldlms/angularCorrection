import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-control',
  templateUrl: './blog-control.component.html',
  styleUrls: ['./blog-control.component.css']
})
export class BlogControlComponent {

  newArticleTitle='';
  newArticleContent='';
  @ViewChild('articleContentInput',{static:true})articleContentInput:ElementRef
  @Output()articleCreated=new EventEmitter<{articleTitle:String,articleContent:String}>();
  @Output()brouillonCreated=new EventEmitter<{articleTitle:String,articleContent:String}>();
  onAddArticle(laRef,articleContentInput:HTMLInputElement){
    // console.log(laRef)
    // console.log(laRef.value)
    this.articleCreated.emit({articleTitle:laRef.value,articleContent:this.articleContentInput.nativeElement.value})
  }
  onAddBrouillon(laRef,articleContentInput:HTMLInputElement){
    console.log(this.articleContentInput.nativeElement);
    this.brouillonCreated.emit({articleTitle:laRef.value,articleContent:this.articleContentInput.nativeElement.value})
  }
}
