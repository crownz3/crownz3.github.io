import { Component, OnInit ,Inject} from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value:any;
  constructor(
    public dialogRef: MatDialogRef<QrcodeComponent>,

     @Inject(MAT_DIALOG_DATA) public data: QrcodeComponent,
  ) { }

  ngOnInit(): void {
    this.value = this.data
    console.log(this.data)
  }

}
