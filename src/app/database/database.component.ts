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

    request.onload = function () {
      var text = request.response;
      var database = JSON.stringify(text);
      document.getElementById("Json").innerHTML = database;
    }
  }

  stringButtonClicked() {
    var doc = new XMLHttpRequest();
    doc.open('GET', './assets/api.txt');
    doc.responseType = 'text';
    doc.send();

    doc.onload = function () {
      var text = doc.response;
      document.getElementById("Json").innerHTML = text;
    }
  }

}
