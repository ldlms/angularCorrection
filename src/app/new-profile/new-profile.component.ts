import { Component, EventEmitter, Output } from '@angular/core';
import { LogService } from '../log.service';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css'],
  providers: [LogService],
})
export class NewProfileComponent {
profileAdded:{name:string,status:string};
  constructor(private logService:LogService, private profilesService:ProfilesService){

  }
  onCreateProfile(profileName:string,profileStatus:string){
    this.profilesService.addProfile(profileName,profileStatus);
    this.logService.logStatusChange(profileStatus);
  }
}
