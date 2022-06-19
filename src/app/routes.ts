import {HomeViewComponent} from "./views/home-view/home-view.component";
import {SearchViewComponent} from "./views/search-view/search-view.component";
import {FavoritesViewComponent} from "./views/favorites-view/favorites-view.component";
import {UploadViewComponent} from "./views/upload-view/upload-view.component";
import {SearchBreedViewComponent} from "./views/search-breed-view/search-breed-view.component";

export const ROUTES = [
  { path: '', component: HomeViewComponent },
  { path: 'search', component: SearchViewComponent },
  { path: 'search-breed', component: SearchBreedViewComponent },
  { path: 'favorites', component: FavoritesViewComponent },
  { path: 'uploads', component: UploadViewComponent },
]
