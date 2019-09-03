import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route } from "@angular/router"; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  //Detect sidebar open and close event
  @Output() public sidenavToggle = new EventEmitter();
 
  //Used to store links for router
  links = this.router.config
  constructor(private router: Router) { }
 
  ngOnInit() {
    // console.log(this.links)
    // console.log('configured routes: ', this.router.config);  
  }
 
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
 
}

