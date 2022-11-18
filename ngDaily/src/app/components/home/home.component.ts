import { Component, OnInit } from '@angular/core';
import { Daily } from 'src/app/models/daily';
import { DailyService } from 'src/app/services/daily.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  daily: Daily[] = [];

  constructor(
    private dailyService: DailyService
  ) { }

  loadDaily() {
    this.dailyService.index().subscribe({
      next: (dailyList) => {
        console.log(dailyList);
        this.daily = dailyList;
      },
      error: (fail) => {
        console.error("loadDaily: problem retrieving index");
      }
    })
  }
  ngOnInit(): void {
    this.loadDaily();
  }

}
