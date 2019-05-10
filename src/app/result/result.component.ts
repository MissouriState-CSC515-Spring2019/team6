import { Component, OnInit } from '@angular/core';
import { SearchbarService } from '../searchbar.service';
import { ResultService } from '../result.service';
import { ActivatedRoute } from '@angular/router';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  jsonData: Object;
  fetchedData: Object = this.resultService.fetchData().
    subscribe(value => console.log(value));

  constructor(private searchbarService: SearchbarService,
    private resultService: ResultService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
