import { Component, OnInit } from '@angular/core';
import { SearchbarService } from '../searchbar.service';
import { ResultService } from '../result.service';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  input: string = '';
  formattedUrl: string = '';
  searchbarLang: string;

  constructor(private configService: ConfigService,
    private resultService: ResultService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    document.getElementById('input').addEventListener('change', () => {
      this.input = (<HTMLInputElement>document.getElementById('input')).value;
      this.formattedUrl = this.input.replace(/ /g, '+');
    });
    this.searchbarLang = this.route.snapshot.params['lang'];
  }

  searchButtonClicked() {
    this.resultService.updateData(this.formattedUrl);
  }

  public updateSearchBarLang(): void {
    this.searchbarLang = this.route.snapshot.params['lang'];
  }

}
