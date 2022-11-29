import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(){
    
  }
  ngOnInit(): void {
    firebase.initializeApp({

      apikey: "AIzaSyDwoF2fOajxXKwLa6sH5RnD8OiFCkksQIY ",
      authDomain:"mis-clientes-9b167.firebaseapp.com",

    });
   
  }

}
