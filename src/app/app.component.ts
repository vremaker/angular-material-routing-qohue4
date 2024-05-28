import { Component,   VERSION,   OnInit,   ViewChild,   AfterViewInit,   ElementRef } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, NavigationEnd, Router, Routes } from "@angular/router";
import { StartTab } from "./constants";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  startTab: string;
  projectTitle = "MyProJectTitle";
  knownRoutes: Routes;
  currentVer = "Version 11";
  currentPath: string;
  activeLink: string;

  constructor(
    private _router: Router,
    private _location: Location,
    private _ar: ActivatedRoute
  ) {
    this.startTab = StartTab;
    this.currentPath = this.startTab;
    this._router.navigateByUrl(this.startTab);
  }

  ngOnInit(): void {
    this.knownRoutes = this._router.config.filter(qq => {
      if (qq.data.isTab) {
        return true;
      }
    });
    this._router.events.subscribe(_e => {
      if (_e instanceof NavigationEnd) {
        this.currentPath = _e.urlAfterRedirects;        
      }
    });
  }

 
}
