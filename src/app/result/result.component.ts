import { Component, OnInit } from '@angular/core';
import { SearchbarService } from '../searchbar.service';
import { ResultService } from '../result.service';
import { ActivatedRoute } from '@angular/router';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  jsonData: Object;
  fetchedData: Object = this.resultService.fetchData().
    subscribe(value => {
      this.jsonData = value;
      console.log(this.jsonData);
      this.formatPicOfTheDay(this.jsonData);
    });

  constructor(private searchbarService: SearchbarService,
    private resultService: ResultService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.searchbarService.resolution);
  }

  formatPicOfTheDay(data: Object) {
    document.getElementById('title').appendChild(document.createTextNode(data['title']));
    let img = <HTMLImageElement>document.getElementById('hdurl');
    if (this.searchbarService.resolution == 'lowRes') {
      img.height = 100;
      img.width = 150;
    }
    if (this.searchbarService.resolution == 'medRes') {
      img.height = 300;
      img.width = 450;
    }
    if (this.searchbarService.resolution == 'highRes') {
      img.height = 500;
      img.width = 750;
    }
    img.src = data['hdurl'];
    document.getElementById('copyright').appendChild(document.createTextNode('Copyright: ' + data['copyright']));
    document.getElementById('date').appendChild(document.createTextNode(data['date']));
    document.getElementById('explanation').appendChild(document.createTextNode(data['explanation']));
  }
}
