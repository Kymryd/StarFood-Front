import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '<div class="container-fluid">' +
                  '<div class="col-md-offset-1">' +
                      '<app-nav></app-nav>' +
                      '<router-outlet></router-outlet>' +
                  '</div>' +
                '</div>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StarFood-Front';
  content = '<app-category></app-category>';
}


