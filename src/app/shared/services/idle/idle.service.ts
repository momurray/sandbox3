import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SessionService } from '../session/session.service';

@Injectable()
export class IdleService {

  defaultTimeout:number = 900;
  timeleft:number;
  secondsLeft:BehaviorSubject<number> = new BehaviorSubject<number>(900);

  constructor(private sessionService:SessionService) { 

    // Default to last (or default) time. 
    this.timeleft = this.sessionService.session.idleTime;

    // Set up time every second. 
    let timer = Observable.timer(1000,1000);

    // Subscribe to my timer to I can act on it. 
    timer.subscribe(()=>{

      // dec time left. 
      this.timeleft --;

      // Protect myself against ever going below 0 seconds. 
      if( this.timeleft < 0){
        this.timeleft = 0;
      }
      
      // Save the idle time in case of 'refresh'.
      this.sessionService.setSessionTime(this.timeleft);

      // Report latest value. 
      this.secondsLeft.next(this.timeleft);
    })
  }

  getTimeleft():number{
    return this.timeleft;
  }

  resetIdleTimer(){
    this.timeleft = this.defaultTimeout;
  }

  setTimeout(timeout:number){
    this.defaultTimeout = timeout;
  }

}
