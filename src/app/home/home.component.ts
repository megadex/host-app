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
  iFrameUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://photo-plus.atwebpages.com");

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
      let win = document.querySelector('iframe');
      
      win.contentWindow.postMessage("Hello World", "http://photo-plus.atwebpages.com");
    });
  }

}
