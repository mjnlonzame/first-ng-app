import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-username',
  templateUrl: './reset-username.component.html',
  styleUrls: ['./reset-username.component.css']
})
export class ResetUsernameComponent implements OnInit {
  username  = '';
  isResetBtnDisabled = true;
  constructor() { }

  ngOnInit() {
  }

  onResetUsername(){
  	this.username = '';
  }

}
