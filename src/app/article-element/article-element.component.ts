import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article-element',
  templateUrl: './article-element.component.html',
  styleUrls: ['./article-element.component.css']
})
export class ArticleElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit,AfterViewChecked {
//  @Input() element:{type:string, title:string,content:string};
// ! Input avec un alias si on veut pas exposer le nom d'une variable sensible côté template
 @Input('artElement') element:{type:string, title:string,content:string};
 constructor(){
  console.log('constructor lancé');
 }

//! Pour capter et console log c'est quoi qui change
 ngOnChanges(changes:SimpleChanges){
  console.log('ngOnChanges lancé');
  console.log(changes);
 }

 ngOnInit(){
  console.log('ngOnInit lancé');
 }

 ngDoCheck(){
  console.log('ngDoCheck lancé');
 }
 ngAfterContentInit(){
  console.log('ngAfterContentInit lancé juste une fois');
 }

 ngAfterContentChecked(){
  console.log('ngAfterContentChecked lancé');
 }
 ngAfterViewInit(){
  console.log('ngAfterViewInit lancé');
 }

 ngAfterViewChecked(){
  console.log('ngAfterViewChecked lancé');
 }
}



