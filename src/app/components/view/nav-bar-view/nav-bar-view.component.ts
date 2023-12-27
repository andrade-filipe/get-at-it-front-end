import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-nav-bar-view',
  templateUrl: './nav-bar-view.component.html',
  styleUrl: './nav-bar-view.component.css'
})
export class NavBarViewComponent implements OnInit{

    constructor(public breakpointObserver: BreakpointObserver) {}

    isMobile !: boolean;

    ngOnInit(): void {
        this.observeScreenSize();
    }
    observeScreenSize(){
        this.breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.TabletPortrait,
        ]).subscribe(result => {
            if(result.matches){
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        });
    }
}
