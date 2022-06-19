import { Component, OnInit } from '@angular/core';
import {TheCatApiService} from "../../../services/thecatapi/TheCatApiService";
import {GetFavoriteResponse} from "../../../services/thecatapi/responses/GetFavoriteResponse";
import {FavoriteRequest} from "../../../services/thecatapi/requestOptions/FavoriteRequest";
import {UserService} from "../../../services/userservice/userService";
import {Favorite} from "../../../services/thecatapi/types/Favorite";

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.scss']
})
export class FavoritesViewComponent implements OnInit {

  public favorites: Favorite[] = [];
  public reachedEnd: boolean = false;
  public loading: boolean = true;

  private currentPage: number = 0;

  constructor(private theCatApiService: TheCatApiService, private userService: UserService) {}

  // Load all favorites from user (sub_id)
  ngOnInit(): void {
    let favoriteRequest = FavoriteRequest({
      sub_id: this.userService.getSubId()
    })

    this.theCatApiService.getFavorites(favoriteRequest).subscribe((response: GetFavoriteResponse) => {
      this.favorites = response;
      this.buildCatResponse()
      this.loading = false;
    })
  }

  // Load more data if there is more (infinite scrolling)
  loadMore() {
    this.currentPage += 1;

    this.theCatApiService.getFavorites(FavoriteRequest({
      page: this.currentPage,
      sub_id: this.userService.getSubId()
    })).subscribe((response: GetFavoriteResponse) => {
      if (!response.length) {
        this.reachedEnd = true;
        return;
      }

      this.favorites.push(...response)
      this.buildCatResponse()
    })
  }

  // Create cat object for better OOP.
  buildCatResponse() {
    this.favorites.map((favorite) => {
      favorite.cat = {
        id: favorite.image_id,
        url: favorite.image.url,
        width: 0,
        height: 0,
        categories: [],
        favorite_id: favorite.id,
        breeds: []
      }
    })
  }

}
