import { Component } from '@angular/core';
import { InfoComponent } from './info/info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, InfoComponent]
})
export class AppComponent {
  title = 'ng-test';
}
