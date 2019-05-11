import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private resultService: ResultService) { }

  ngOnInit() {
  }

  changeRes(e: Event) {
    let target = e.srcElement;
    console.log(target);
  }
}
