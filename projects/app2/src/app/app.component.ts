import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app2';

  ngOnInit() {
    window.addEventListener('message', (event) => {
      // IMPORTANT: check the origin of the data!
      if (event.origin.startsWith('http://localhost:63247')) {
        // The data was sent from your site.
        // Data sent with postMessage is stored in event.data:
        console.log('Received data:', event.data);
      } else {
        // The data was NOT sent from your site!
        // Be careful! Do not use it. This else branch is
        // here just for clarity, you usually shouldn't need it.
        return;
      }
    });
  }
}
