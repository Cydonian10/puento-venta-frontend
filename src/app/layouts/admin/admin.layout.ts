import { ChangeDetectionStrategy, Component, ViewChild, signal } from '@angular/core';
import { SidemenuComponent } from '../../shared/components/sidemenu/sidemenu.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [SidemenuComponent, MatExpansionModule, MatRippleModule, RouterOutlet, NavbarComponent, MatSidenavModule, MatButtonModule, MatListModule, MatToolbarModule, RouterLink],
  template: `
      <mat-drawer-container  
        class="w-full h-screen"
        [hasBackdrop]="
          currentScreenSize() === 'Large' || currentScreenSize() === 'XLarge'
            ? false
            : true
        " >
        <mat-drawer 
          class="w-[300px] border-none shadow-md"
          #drawer
          [opened]="
            currentScreenSize() === 'Large' || currentScreenSize() === 'XLarge'
              ? true
              : false
          "
          [mode]="
            currentScreenSize() === 'Large' || currentScreenSize() === 'XLarge'
              ? 'side'
              : 'over'
          "
        >
        <div class="p-4">
          <h3 class="text-2xl text-center mb-10">Punto Venta</h3>
          <div class="flex flex-col gap-1">

            @for (itemLink of listLinks; track $index) {
              <div mat-ripple class="py-3 px-3 w-full  rounded-md hover:bg-gray-100">{{ itemLink.name }}</div>
            }
          </div>
         
         <div class="mt-5">
         <mat-accordion class="example-headers-align" multi>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>
                  Personal data
                </mat-panel-title>
             
              </mat-expansion-panel-header>

            

            </mat-expansion-panel>
        
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>
                  Day of the trip
                </mat-panel-title>
               
              </mat-expansion-panel-header>

            
            </mat-expansion-panel>
          </mat-accordion>
         </div>
          
        </div>
        </mat-drawer>


        <mat-drawer-content>
          <mat-toolbar color="primary">
            <button (click)="drawer.toggle()" mat-raised-button color="primary" class="mr-10 lg:hidden">
              Menu
            </button>
            <h3 >Facturando</h3>
            <span class="flex-1"></span>
           <div class="flex gap-3">
            <button mat-raised-button routerLink="/auth/login" color="accent" class="example-icon favorite-icon">
              Login
            </button>
            <button mat-raised-button color="accent" class="example-icon">
              Favoritos
            </button>
           </div>
          </mat-toolbar>          
          <main class="container p-10">
            <router-outlet />
          </main>
        </mat-drawer-content>
      </mat-drawer-container>
  `,
  styles: `
    :host {
      display: block;
      min-height:100vh;
      display: flex;
      align-items: flex-start;
    } 
    mat-drawer {
      box-shadow: none !important;
      border: none !important;
    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLayoutPage {

  public currentScreenSize = signal('');

  public listLinks: any[] = [
    { name: "Productos", link: "", icon: "" },
    { name: "Usuarios", link: "", icon: "" },
    { name: "IniciarVenta", link: "", icon: "" }
  ]

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          console.log(result.breakpoints[query])
          if (result.breakpoints[query]) {
            this.currentScreenSize.set(
              this.displayNameMap.get(query) ?? 'Unknown'
            );
          }
        }
      });
  }



}