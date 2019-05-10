import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  jsonButtonClicked() {
    var request = new XMLHttpRequest();
    request.open('GET', './assets/api.json');
    request.responseType = 'json';
    request.send();

    request.onload = function()
    {
      var text = request.response;
      var database = JSON.stringify(text);

      document.getElementById("Json").innerHTML = database;
      
    }

    
  }

}
