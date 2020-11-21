import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ReloginComponent } from '../relogin/relogin.component';

export interface DialogData {
  modalTitle: string;
  iFrameUrl: SafeResourceUrl;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = "Host";
  modalTitle = "Hello World";
  iFrameUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://photo-plus.atwebpages.com/chat/");

  constructor(
    private sanitizer: DomSanitizer,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReloginComponent, {
      data: {
        modalTitle: this.modalTitle,
        iFrameUrl: this.iFrameUrl
      }
    });

    dialogRef.afterOpened().subscribe(result => {
      let win = document.querySelector('iframe').contentWindow;

      // https://stackoverflow.com/questions/27827427/set-value-of-input-field-inside-an-external-iframe/43632728
      // https://developer.mozilla.org/ru/docs/Web/API/Window/postMessage
      win.postMessage("Hello World", "http://photo-plus.atwebpages.com/chat/");
    });
  }

}
