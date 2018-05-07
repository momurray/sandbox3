export class Session {
    idleTime:number;
    username:string;
    sessionTicket: string;
    roles: string[];

    constructor(){
        this.idleTime = 0;
        this.username= '';
        this.sessionTicket='';
        this.roles = [];
    }
}
