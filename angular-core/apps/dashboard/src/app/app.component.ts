import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projects';

    links = [
      {path: '/projects', icon:'work', title: 'Projects' },
      {path: '/', icon: 'home', title: 'Home' },
      {path: '/customers', icon: 'face', title: 'Customer' }


      ]
}
