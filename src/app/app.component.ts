import { Component } from '@angular/core';
import { PikadayComponent } from './pikaday/pikaday.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [PikadayComponent]
})
export class AppComponent {
  title = 'app works!';
}
