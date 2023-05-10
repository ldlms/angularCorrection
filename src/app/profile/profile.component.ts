import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogService } from '../log.service';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [LogService]
})
export class ProfileComponent {
  @Input() id:number;
  @Input() profile:{name:string,status:string};

  constructor(private logService:LogService,private profileServices:ProfilesService){

  }

  onSetStatusTo(status:string){
    this.profileServices.updateStatus(this.id,status)
    this.logService.logStatusChange(status);;
  }
}
