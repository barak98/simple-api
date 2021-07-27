import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  isLoaded= false;
  
  constructor( private http: HttpClient){
    this.data =(this.http.get("https://jsonplaceholder.typicode.com/users"))
    console.log(this.data)
  }
  title = 'simple-api';

 onClick(){
   debugger;
   if(!this.isLoaded){
     this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe(res => this.data=JSON.stringify( res))
     this.isLoaded=true
   }
   else{
     this.isLoaded=false
   }
 }
}
