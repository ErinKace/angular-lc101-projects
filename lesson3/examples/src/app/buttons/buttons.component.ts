import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   silverInactive: boolean = false;
   copperInactive: boolean = false;
   deactive: boolean = false;
   moveButton: boolean = false;

   constructor() { }

   ngOnInit() { }

  activateButtons() {
      this.inactive = false;
      this.silverInactive = false;
      this.copperInactive = false;
   }

}
