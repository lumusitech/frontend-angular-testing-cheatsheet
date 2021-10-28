import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  lightState: boolean = false;
  message: string = 'OFF';

  constructor() { }

  ngOnInit(): void {
  }

  switchToggle(): void {
    this.lightState = !this.lightState;
    this.message = this.lightState ? 'ON' : 'OFF';
  }

}
