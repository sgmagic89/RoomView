import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-leftnavbar',
  templateUrl: './leftnavbar.component.html',
  styleUrls: ['./leftnavbar.component.css']
})
export class LeftnavbarComponent implements OnInit {
  isProvision: boolean = false;
  options = {
    allowDrag:  (node) => node.isLeaf
  };
  nodes = [
    {
      id: 1,
      name: 'Celling Lights',
      children: [
        { id: 2, name: 'Left' , },
        { id: 3, name: 'Right' }
      ]
    },
    {
      id: 4,
      name: 'Room Lights',
      children: [
        { id: 5, name: 'Heat Sensor' },
        {
          id: 6,
          name: 'Table Lights',
          children: [
            { id: 7, name: 'Table Lamp' },
            { id: 8, name: 'Under Table Light' }
          ]
        },
        {
          id: 9,
          name: 'Wall Lights',
          children: [
            { id: 10, name: 'Left Light' },
            { id: 11, name: 'Right Light' },
            { id: 23, name: 'Floor Lights' }
          ]
        }
      ]
    }
  ];

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('provision', 0)) {
          this.isProvision = true;
        } else {
          this.isProvision = false;
        }
        console.log(event.url);
        console.log(this.isProvision);
      }
    });
   }

  ngOnInit() {
  }

}
