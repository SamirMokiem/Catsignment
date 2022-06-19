import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {BreedResponse} from "./responses/BreedResponse";
import {CategoryResponse} from "./responses/CategoryResponse";
import {HttpClient} from "@angular/common/http";
import {SearchResponse} from "./responses/SearchResponse";
import {_SearchRequest, SearchRequest} from "./requestOptions/SearchRequest";
import {SetFavoriteResponse} from "./responses/SetFavoriteResponse";
import {UserService} from "../userservice/userService";
import {GetFavoriteResponse} from "./responses/GetFavoriteResponse";
import {_FavoriteRequest, FavoriteRequest} from "./requestOptions/FavoriteRequest";
import {DeleteFavoriteResponse} from "./responses/DeleteFavoriteResponse";
import {UploadRequest} from "./requestOptions/UploadRequest";
import {UploadResponse} from "./responses/UploadResponse";
import {BreedSearchResponse} from "./responses/BreedSearchResponse";

@Injectable()
export class TheCatApiService {

  private BASE_URL = "https://api.thecatapi.com/v1";

  constructor(private http: HttpClient, private userService: UserService) {
  }

  // Get all cats based on the searchRequest params
  getCats(searchRequest: _SearchRequest = SearchRequest()): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(
      this.BASE_URL +
      "/images/search" +
      "?size=" + searchRequest.size +
      "&mime_types=" + searchRequest.mime_types +
      "&limit=" + searchRequest.limit +
      "&page=" + searchRequest.page +
      "&breed_id=" + searchRequest.breed_id
    )
  }

  // Get all breeds
  getBreeds(): Observable<BreedResponse> {
    return this.http.get<BreedResponse>(this.BASE_URL + "/breeds")
  }

  // Get all categories
  getCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(this.BASE_URL + "/categories")
  }

  // Get all favorites from user (sub_id)
  getFavorites(favoriteRequest: _FavoriteRequest = FavoriteRequest()): Observable<GetFavoriteResponse> {
    return this.http.get<GetFavoriteResponse>(this.BASE_URL + "/favourites" +
      "?sub_id=" + favoriteRequest.sub_id +
      "&limit=" + favoriteRequest.limit +
      "&page=" + favoriteRequest.page
    );
  }

  // Set cat image as favorite using imageId
  setFavorite(imageId: string): Observable<SetFavoriteResponse> {
    return this.http.post<SetFavoriteResponse>(this.BASE_URL + "/favourites", {
      image_id: imageId,
      sub_id: this.userService.getSubId(),
    })
  }

  // Delete image from favorites using favoriteId
  deleteFavorite(favoriteId: string): Observable<DeleteFavoriteResponse> {
    return this.http.delete<DeleteFavoriteResponse>(this.BASE_URL + "/favourites/" + favoriteId)
  }

  // Upload image and save it to user (sub_id)
  uploadImage(uploadRequest: UploadRequest): Observable<UploadResponse> {
    const formData = new FormData();
    formData.append('file', uploadRequest.file, uploadRequest.file.name);
    formData.append('sub_id', uploadRequest.sub_id);

    return this.http.post<UploadResponse>(this.BASE_URL + "/images/upload", formData)
  }

  // Search for breed with user input (?q="Cheetoh")
  searchForBreed(query: string): Observable<BreedSearchResponse> {
    return this.http.get<BreedSearchResponse>(
      this.BASE_URL +
      "/breeds/search" +
      "?q=" + query
    )
  }

}
