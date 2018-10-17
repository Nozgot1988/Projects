import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-forgot-pass-page',
  templateUrl: './forgot-pass-page.component.html',
  styleUrls: ['./forgot-pass-page.component.css']
})
export class ForgotPassPageComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "rgb(228, 232, 233)"
  }

}
