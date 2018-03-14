// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// const browser = require('jquery.browser');
// declare var $: any;

// import { UserblockService } from '../sidebar/userblock/userblock.service';
// import { SettingsService } from '../../core/settings/settings.service';
// import { MenuService } from '../../core/menu/menu.service';
// import { AuthenticationService } from '../../authentication/services/index';
// import { CONFIG } from './../../shared/config';

// @Component({
//     selector: 'app-header',
//     templateUrl: './header.component.html?v=${new Date().getTime()}',
//     styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {
//     isAdmin : Boolean = false;
//     navCollapsed = true; // for horizontal layout
//     menuItems = []; // for horizontal layout
//     isUserLoggedIn: boolean = false;
//     isLoggedIn: boolean = false;
//     secretPage: boolean = false;

//     isNavSearchVisible: boolean;
//     @ViewChild('fsbutton') fsbutton;  // the fullscreen button

//     constructor(public menu: MenuService, public userblockService: UserblockService, public settings: SettingsService, private authService : AuthenticationService, private router : Router) {
//       // show only a few items on demo
//         //this.menuItems = menu.getMenu().slice(0,4); // for horizontal layout
//     }

//     ngOnInit() {
//       this.isNavSearchVisible = false;
//       if (browser.msie) { // Not supported under IE
//           this.fsbutton.nativeElement.style.display = 'none';
//       }

//       this.authService.IsUserLoggedIn.subscribe( value => {
//         this.isUserLoggedIn = value;
//         this.isLoggedIn = value;
//       });
//       this.authService.IsSecretPinRoute.subscribe( value => {
//         this.secretPage = value;
//       });
//       if(Object.keys(this.authService.currentUser).length) {
//         this.isAdmin = (CONFIG.adminRoles.indexOf(this.authService.getLoggedInRole()) > -1) ? true : false;
//       }
//     }

//     logout(){
//       this.authService.logout();
//       this.router.navigate(['/app/home']);
//     }
//     // toggleUserBlock(event) {
//     //     event.preventDefault();
//     //     this.userblockService.toggleVisibility();
//     // }

//     openNavSearch(event) {
//         event.preventDefault();
//         event.stopPropagation();
//         this.setNavSearchVisible(true);
//     }

//     setNavSearchVisible(stat: boolean) {
//         // console.log(stat);
//         this.isNavSearchVisible = stat;
//     }

//     getNavSearchVisible() {
//         return this.isNavSearchVisible;
//     }

//     toggleOffsidebar() {
//         this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
//     }

//     // toggleCollapsedSideabar() {
//     //     this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
//     // }

//     // isCollapsedText() {
//     //     return this.settings.layout.isCollapsedText;
//     // }
// }
