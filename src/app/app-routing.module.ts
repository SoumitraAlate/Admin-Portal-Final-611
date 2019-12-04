import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { GetContentComponent } from './components/get-content/get-content.component';
import { DeleteContentComponent } from './components/delete-content/delete-content.component';
import { UploadComponent } from './components/upload/upload.component';
import { YouTubeComponent } from './components/you-tube/you-tube.component';
import { FamousquotesComponent } from './components/famousquotes/famousquotes.component';
import { URLLibraryComponent } from './components/url-library/url-library.component';
import { GetURLComponent } from './components/url-library/URL-Library-Components/get-url/get-url.component';
import { CreateURLComponent } from './components/url-library/URL-Library-Components/create-url/create-url.component';
import { DeleteURLComponent } from './components/url-library/URL-Library-Components/delete-url/delete-url.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NewYouTubeComponent } from './components/NewYouTube/new-you-tube/new-you-tube.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard]
},
{ path: 'dashboard', component: DashboardComponent },
  {path: 'content', component: GetContentComponent},
  {path: 'delete', component: DeleteContentComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'youtube', component: YouTubeComponent},
  {path: 'famousquotes', component: FamousquotesComponent},
  {path: 'urlLibrary', component: URLLibraryComponent},
  {path: 'getURL', component: GetURLComponent},
  {path: 'createURL', component: CreateURLComponent},
  {path: 'deleteURL', component: DeleteURLComponent},
  {path: 'aboutUs', component: AboutusComponent},

{
  path: 'login',
  component: AuthComponent
},
{
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
