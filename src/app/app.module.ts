import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatTabsModule, MatListModule, MatCheckboxModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatTableModule, MatDividerModule } from '@angular/material';
import { MatButtonToggle, MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpClientModule } from '@angular/common/http';
 
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SidenavListComponent } from './shared/layout/sidenav-list/sidenav-list.component';
import { LayoutsComponent } from './pages/layouts/layouts.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { DatatableComponent } from './pages/datatable/datatable.component';
import { RestComponent } from './pages/rest/rest.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    SidenavListComponent,
    LayoutsComponent,
    ThemeComponent,
    CalculatorComponent,
    DatatableComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatDividerModule,
    MatButtonToggleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
