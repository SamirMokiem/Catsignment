import {Component, OnInit} from '@angular/core';
import {Category} from "../../../services/thecatapi/types/Category";
import {Breed} from "../../../services/thecatapi/types/Breed";
import {BreedResponse} from "../../../services/thecatapi/responses/BreedResponse";
import {CategoryResponse} from "../../../services/thecatapi/responses/CategoryResponse";
import {TheCatApiService} from "../../../services/thecatapi/TheCatApiService";
import {_SearchRequest, SearchRequest} from "../../../services/thecatapi/requestOptions/SearchRequest";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Cat} from "../../../services/thecatapi/types/Cat";
import {SearchResponse} from "../../../services/thecatapi/responses/SearchResponse";

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {

  public breeds: Breed[] = [];
  public categories: Category[] = [];

  public cats: Cat[] = [];
  public reachedEnd: Boolean = false;

  public loading: boolean = false;

  public currentPage: number = 0;

  public searchRequest: _SearchRequest = SearchRequest();

  public errors: any[] = [];

  public searchForm = new FormGroup({
    size: new FormControl('', [
      Validators.required,
    ]),
    breed: new FormControl('', [
      Validators.required,
    ]),
    image_type: new FormControl('', [
      Validators.required,
    ]),
    per_page: new FormControl(25, [
      Validators.required,
      Validators.min(0),
      Validators.max(100)
    ]),
    page: new FormControl(0, [
      Validators.required,
    ])
  })

  constructor(private theCatApiService: TheCatApiService) {
  }

  ngOnInit(): void {
    this.theCatApiService.getBreeds().subscribe((response: BreedResponse) => {
      this.breeds = response;
    })
    this.theCatApiService.getCategories().subscribe((response: CategoryResponse) => {
      this.categories = response;
    })
  }

  onSubmit() {
    this.currentPage = this.searchForm.value.page!;

    this.loadCats(this.currentPage);
  }

  loadCats(page: number) {
    this.currentPage = page;

    this.theCatApiService.getCats(SearchRequest({
      page: page,
      limit: this.searchForm.value.per_page!,
      size: this.searchForm.value.size!,
      breed_id: this.searchForm.value.breed!,
      mime_types: this.searchForm.value.image_type!,
    })).subscribe((response: SearchResponse) => {
      if (!response.length) {
        this.reachedEnd = true;
        return;
      }

      this.cats.push(...response)
    })
  }
}
