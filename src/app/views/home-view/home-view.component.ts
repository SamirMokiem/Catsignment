import { Component, OnInit } from '@angular/core';
import {TheCatApiService} from "../../../services/thecatapi/TheCatApiService";
import {Cat} from "../../../services/thecatapi/types/Cat";
import {SearchResponse} from "../../../services/thecatapi/responses/SearchResponse";
import {SearchRequest} from "../../../services/thecatapi/requestOptions/SearchRequest";

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public cats: Cat[] = [];
  public reachedEnd: Boolean = false;

  private currentPage: number = 0;

  constructor(private theCatApiService: TheCatApiService) {}

  ngOnInit(): void {
    this.theCatApiService.getCats().subscribe((response: SearchResponse) => {
      this.cats = response;
    })
  }

  loadMore() {
    this.currentPage += 1;

    this.theCatApiService.getCats(SearchRequest({
      page: this.currentPage
    })).subscribe((response: SearchResponse) => {
      if (!response.length) {
        this.reachedEnd = true;
        return;
      }

      this.cats.push(...response)
    })
  }

}
