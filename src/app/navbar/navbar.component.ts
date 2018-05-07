import { Component, OnInit } from '@angular/core';
import { IdleService } from '../shared/services/idle/idle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  timeleft:number;
  constructor(private idleService:IdleService) { }

  ngOnInit() {
    this.idleService.secondsLeft.subscribe((timeleft)=>{
      this.timeleft = timeleft;
    });
  }

  onLogout(){
    // clear session info at this point.
  }
}
