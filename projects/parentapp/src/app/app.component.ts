import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parentapp';

  @ViewChild('frm1')
  frame1!: any;

  play() {
    console.log(this.frame1);
    (window as any).frame1 = this.frame1;
  }

}
