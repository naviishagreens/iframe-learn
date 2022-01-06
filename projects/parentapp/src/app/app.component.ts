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

  @ViewChild('frm2')
  frame2!: any;

  play() {
    console.log(this.frame1);
    (window as any).frame1 = this.frame1.nativeElement;
    (window as any).frame2 = this.frame2.nativeElement;
  }

  sendMessageToApp2() {
    if((window as any).frame2) {
      (window as any).frame2.contentWindow.postMessage('sendapp2', 'http://localhost:63091'); 
    }
  }

}
