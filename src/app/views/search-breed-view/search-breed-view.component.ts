import { Component, OnInit } from '@angular/core';
import {TheCatApiService} from "../../../services/thecatapi/TheCatApiService";
import {Breed} from "../../../services/thecatapi/types/Breed";
import {BreedSearchResponse} from "../../../services/thecatapi/responses/BreedSearchResponse";

@Component({
  selector: 'app-search-breed-view',
  templateUrl: './search-breed-view.component.html',
  styleUrls: ['./search-breed-view.component.scss']
})
export class SearchBreedViewComponent implements OnInit {

  public loading: boolean = false;
  public breeds: Breed[] = [];

  private setTimeOutSearch: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);

  constructor(private theCatApiService: TheCatApiService) { }

  ngOnInit(): void {
  }

  onInputChange(event: Event) {
    this.loading = true;
    clearTimeout(this.setTimeOutSearch)
    const input = event.target as HTMLInputElement;

    this.setTimeOutSearch = setTimeout(() => {
        this.theCatApiService.searchForBreed(input.value).subscribe((response: BreedSearchResponse) => {
          this.breeds = response;
          this.loading = false;
        });
    }, 250);
  }

}
