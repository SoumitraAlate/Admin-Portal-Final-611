import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';

import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { GetContentComponent } from './components/get-content/get-content.component';
import { DeleteContentComponent } from './components/delete-content/delete-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadComponent } from './components/upload/upload.component';
import { YouTubeComponent } from './components/you-tube/you-tube.component';
import { FamousquotesComponent } from './components/famousquotes/famousquotes.component';
import { FormUploadComponent } from './components/famousquotes/Upload/form-upload/form-upload.component';
import { ListUploadComponent } from './components/famousquotes/Upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './components/famousquotes/Upload/details-upload/details-upload.component';
import { URLLibraryComponent } from './components/url-library/url-library.component';
import { CreateURLComponent } from './components/url-library/URL-Library-Components/create-url/create-url.component';
import { DeleteURLComponent } from './components/url-library/URL-Library-Components/delete-url/delete-url.component';
import { GetURLComponent } from './components/url-library/URL-Library-Components/get-url/get-url.component';

import {MatTableModule} from '@angular/material/table';
import { AboutusComponent } from './components/aboutus/aboutus.component';
// tslint:disable-next-line: max-line-length
import { HighContrastModeDetector, FocusMonitor, AriaDescriber, LiveAnnouncer, FocusTrapFactory, InteractivityChecker } from '@angular/cdk/a11y';
import { Platform } from '@angular/cdk/platform';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

// tslint:disable-next-line: max-line-length
import { ScrollStrategyOptions, ScrollDispatcher, ViewportRuler, OverlayContainer, OverlayPositionBuilder, OverlayKeyboardDispatcher } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { AutofillMonitor } from '@angular/cdk/text-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { Injectable } from '@angular/core';
import { ContentObserver } from '@angular/cdk/observers';
import { AddComponent } from './components/you-tube/dialogs/add/add.component';
import { EditComponent } from './components/you-tube/dialogs/edit/edit.component';
import { DeleteComponent } from './components/you-tube/dialogs/delete/delete.component';
import { AddUrlComponent } from './components/url-library/dialogs/add-url/add-url.component';
import { DeleteUrlComponent } from './components/url-library/dialogs/delete-url/delete-url.component';
import { EditUrlComponent } from './components/url-library/dialogs/edit-url/edit-url.component';
import { DeleteImgComponent } from './components/famousquotes/Dialogs/delete-img/delete-img.component';
import { AddFileComponent } from './components/famousquotes/Dialogs/add-file/add-file.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProfileComponent,
    HomeComponent,
    DashboardComponent,
    GetContentComponent,
    DeleteContentComponent,
    UploadComponent,
    YouTubeComponent,
    FamousquotesComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    URLLibraryComponent,
    CreateURLComponent,
    DeleteURLComponent,
    GetURLComponent,
    AboutusComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    AddUrlComponent,
    DeleteUrlComponent,
    EditUrlComponent,
    DeleteImgComponent,
    AddFileComponent,
  ],
  imports: [
     ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatProgressBarModule
  ],

    entryComponents: [
    AddComponent,
    EditComponent,
    DeleteComponent,
    AddUrlComponent,
    DeleteUrlComponent,
    EditUrlComponent,
    DeleteImgComponent,
    AddFileComponent,
  ],

  // tslint:disable-next-line: max-line-length
  providers: [AmplifyService, InteractivityChecker, FocusTrapFactory, LiveAnnouncer, AriaDescriber, MatIconRegistry, ContentObserver, FocusMonitor, HighContrastModeDetector, AutofillMonitor,  OverlayPositionBuilder, OverlayContainer, Platform, ScrollDispatcher, ViewportRuler, Directionality, OverlayKeyboardDispatcher, ScrollStrategyOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
