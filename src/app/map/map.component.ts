import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalappComponent } from './../modalapp/modalapp.component';

export interface DialogData {
  modalTitle: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title = "Map";
  modalTitle = "Map: Hello World";

  constructor(
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ModalappComponent, {
      // width: '400px',
      // backdropClass: 'modal-background',
      data: {modalTitle: this.modalTitle}
    });
  }

}
