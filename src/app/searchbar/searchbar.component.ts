import { Component, OnInit } from '@angular/core';
import { SearchbarService } from '../searchbar.service';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  input: string = '';
  formattedUrl: string = "";

  constructor(private searchbarService: SearchbarService,
    private resultService: ResultService) { }

  ngOnInit() {
    document.getElementById('input').addEventListener('change', () => {
      this.input = (<HTMLInputElement>document.getElementById('input')).value;
      this.formattedUrl = this.input.replace(/ /g, '+');
    });
    this.setEventListeners();
  }

  searchButtonClicked() {
    this.resultService.updateData(this.formattedUrl);
  }

  setEventListeners() {
    let elements = document.querySelector('.topnav').getElementsByTagName('a');
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', () => {
        for (let i = 0; i < elements.length; i++) {
          elements[i].id = '';
        }
        let targetElement = event.srcElement as HTMLElement;
        targetElement.id = 'activated';
      });
    }
  }

}
