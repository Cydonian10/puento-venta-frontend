import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

  #layoutService = inject(LayoutService)

  toogleSideMenu() {
    this.#layoutService.toogle();
  }

}
