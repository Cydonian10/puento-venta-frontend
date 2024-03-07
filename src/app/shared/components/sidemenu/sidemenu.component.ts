import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidemenu.component.html',
  styles: `
 :host {
      display: block;
      min-height:100vh;
    }  
`
})
export class SidemenuComponent {
  
  public open = inject(LayoutService).open

}
