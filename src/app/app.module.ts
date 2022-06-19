import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InfiniteScrollComponent} from './components/infinite-scroll/infinite-scroll.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import { FavoritesViewComponent } from './views/favorites-view/favorites-view.component';
import { UploadViewComponent } from './views/upload-view/upload-view.component';
import {HomeViewComponent} from './views/home-view/home-view.component';
import {SearchViewComponent} from './views/search-view/search-view.component';
import {TheCatApiService} from "../services/thecatapi/TheCatApiService";
import {ApiKeyInterceptor} from "./apikey.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CatImageComponent } from './components/cat-image/cat-image.component';
import {UserService} from "../services/userservice/userService";
import { SearchBreedViewComponent } from './views/search-breed-view/search-breed-view.component';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollComponent,
    HomeViewComponent,
    SearchViewComponent,
    NavBarComponent,
    FavoritesViewComponent,
    CatImageComponent,
    UploadViewComponent,
    SearchBreedViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TheCatApiService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
