import {Component, OnInit} from '@angular/core';
import {NewsServiceService} from './services/news-service.service';
import {News} from './News';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'teai72front';

  ngOnInit(): void {
  }

}
