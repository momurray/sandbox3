import { Injectable } from '@angular/core';
import { Session } from './model/session.model';
import { JsonPipe } from '@angular/common/src/pipes';


const USERNAME:string='username';
const SESSION_TICKET:string='sessionTicket';
const ROLES:string='roles';
const IDLETIME = 'idleTimer';

@Injectable()
export class SessionService {

  // This is an incredibly simple session storage where everything is under one key. 
  // 
  // An easy optimisation (that would be local to this service) would be to split out the
  // session storage by object type so that session storage calls are very quick. 
  //
  // For example, I'm saving the session time that needs done every second. I don't 
  // really want to save all the other session objects every second when I don't need to. 
  //
  // It requires a little bit more work but should pay for itself as the session object
  // grows. Each object gets its own "identity" in localstorage but is recombined on load
  // to make a unified "one session object to rule them all".
  public session: Session;

  constructor() {
    // Create a new session object and see if it is in local storage. 
    this.restoreSession();
  }

  setSessionTime(newTime: number) {
    this.session.idleTime = newTime;
    this.saveSessionItem(IDLETIME, newTime);
  }

  setSessionTicket(ticket: string) {
    this.session.sessionTicket = ticket;
    this.saveSessionItem(SESSION_TICKET, ticket);
  }

  setSessionUsername(username: string) {
    this.session.username = username;
    this.saveSessionItem(USERNAME, username);
  }

  setSessionRoles(roles: string[]) {
    this.session.roles = roles;
    this.saveSessionItem(ROLES, roles);
  }


  saveSessionItem(name: string, obj: any) {
    localStorage.setItem(name, JSON.stringify(obj));
  }

  // Save my session object piecemeal.
  saveSession() {
    this.saveSessionItem(IDLETIME, this.session.idleTime);
    this.saveSessionItem(SESSION_TICKET, this.session.sessionTicket);
    this.saveSessionItem(USERNAME, this.session.username);
    this.saveSessionItem(ROLES, this.session.roles);
  }

  // Rebuild the session object from its constituent parts. 
  restoreSession() {
    this.session = new Session();

    this.session.idleTime = JSON.parse(localStorage.getItem(IDLETIME)) || 0;
    this.session.sessionTicket = JSON.parse(localStorage.getItem(SESSION_TICKET)) || '';
    this.session.username = JSON.parse(localStorage.getItem(USERNAME)) || '';
    this.session.roles = JSON.parse(localStorage.getItem(ROLES)) || [];
  }

}
