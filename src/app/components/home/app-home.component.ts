import { Component } from '@angular/core';
import { Auth } from '../../services/auth.sersive';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
})
export class HomeComponent { 
  constructor(private auth:Auth) {

  }
}
