import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task5';

  constructor(private httpClient: HttpClient) { }

  makeRequest(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/users")
      .subscribe(
        success => {
          console.log('Response data: ' + success);
        }
      );
  }
}
