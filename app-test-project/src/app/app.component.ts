import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardUserComponent, TopButtonComponent } from '@jfn/ngx-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TopButtonComponent,CardUserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-test-project';
}
