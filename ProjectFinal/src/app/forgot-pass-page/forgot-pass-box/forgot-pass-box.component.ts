import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-pass-box',
  templateUrl: './forgot-pass-box.component.html',
  styleUrls: ['./forgot-pass-box.component.css']
})
export class ForgotPassBoxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  toLoginPage(){
    this.router.navigateByUrl('');
  }

}
