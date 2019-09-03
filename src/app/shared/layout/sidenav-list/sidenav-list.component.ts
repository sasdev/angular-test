import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route } from "@angular/router"; 
 
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

    //Detect sidebar open and close event
    @Output() public sidenavToggle = new EventEmitter();
 
    //Used to store links for router
    links = this.router.config
    
    constructor(private router: Router) { }
 
  ngOnInit() {
  }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
 
}