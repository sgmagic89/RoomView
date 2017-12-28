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

  clickedLink(e) {
    const element = e.srcElement;
    console.log(element.parentElement);
    for (let i = 0; i < element.parentElement.parentElement.children.length ; i++) {
      if (element.parentElement.parentElement.children[i].classList.contains('active')) {
        element.parentElement.parentElement.children[i].classList.remove('active');
      }
    }
    element.parentElement.classList.add('active');
  }

}
