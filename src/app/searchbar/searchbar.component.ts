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
  searchbarLang: string = 'English';

  constructor(private searchbarService: SearchbarService,
    private resultService: ResultService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchbarService.updateLanguage(this.route.snapshot.params['lang']);
    this.searchbarLang = this.searchbarService.language;
  }

  searchButtonClicked() {
    // this.resultService.updateData(this.formattedUrl);
  }

  public updateSearchBarLang(): void {
    console.log(this.route.snapshot.params['lang']);
    this.searchbarLang = this.route.snapshot.params['lang'];
  }
}
