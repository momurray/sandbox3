import { Component, OnInit } from '@angular/core';
import { IdleService } from '../shared/services/idle/idle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private idleService:IdleService) { }

  ngOnInit() {
  }

  refreshTimer(){
    this.idleService.resetIdleTimer();
  }

}
