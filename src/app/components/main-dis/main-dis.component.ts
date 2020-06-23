import { Component, OnInit } from '@angular/core';
import {News} from '../../News';
import {NewsServiceService} from '../../services/news-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-dis',
  templateUrl: './main-dis.component.html',
  styleUrls: ['./main-dis.component.css']
})
export class MainDisComponent implements OnInit {

  newsList: News[];

  constructor(private newsServiceServices: NewsServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.newsServiceServices.getListNews().subscribe(value => {
      this.newsList = value;
    });
  }

}
