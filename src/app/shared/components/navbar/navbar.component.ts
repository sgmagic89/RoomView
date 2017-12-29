import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('mainMenuItems') mainMenu: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.mainMenu.nativeElement.children);
  }

}
