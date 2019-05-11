import { Component, OnInit } from '@angular/core';
import { SearchbarService } from '../searchbar.service';
import { ResultService } from '../result.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  input: string = '';
  formattedUrl: string = '';
  searchbarRes: string = 'highRes';

  constructor(private searchbarService: SearchbarService,
    private resultService: ResultService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchbarService.updateResolution(this.route.snapshot.params['res']);
    this.searchbarRes = this.searchbarService.resolution;
  }

  searchButtonClicked() {
    // this.resultService.updateData(this.formattedUrl);
  }

  public updateSearchBarRes(): void {
    console.log(this.route.snapshot.params['res']);
    this.searchbarRes = this.route.snapshot.params['res'];
  }
}
