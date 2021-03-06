import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { HeaderComponent } from './header/header.component';
// import { NavsearchComponent } from './header/navsearch/navsearch.component';
// import { UserblockComponent } from './sidebar/userblock/userblock.component';
// import { UserblockService } from './sidebar/userblock/userblock.service';
// import { FooterComponent } from './footer/footer.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        // UserblockService
    ],
    declarations: [
        // AdminLayoutComponent,
        // LayoutComponent,
        // SidebarComponent,
        // UserblockComponent,
        // HeaderComponent,
        // NavsearchComponent,
        // FooterComponent
    ],
    exports: [
        // AdminLayoutComponent,
        LayoutComponent,
        // SidebarComponent,
        // UserblockComponent,
        // HeaderComponent,
        // NavsearchComponent,
        // FooterComponent
    ]
})
export class LayoutModule { }
