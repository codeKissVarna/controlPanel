import { Component } from '@angular/core';
import { Auth } from '../../services/auth.sersive';

@Component({
  selector: 'app-profile',
  templateUrl: './app-profile.component.html',
})
export class ProfileComponent { 
  profile;

  constructor(private auth:Auth) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }
}
