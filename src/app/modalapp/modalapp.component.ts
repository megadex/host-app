import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './../map/map.component';


@Component({
  selector: 'app-modalapp',
  templateUrl: './modalapp.component.html',
  styleUrls: ['./modalapp.component.css']
})
export class ModalappComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

}
