import {Component, Input, OnInit} from '@angular/core';
import {Cat} from "../../../services/thecatapi/types/Cat";
import {TheCatApiService} from "../../../services/thecatapi/TheCatApiService";

@Component({
  selector: 'app-cat-image',
  templateUrl: './cat-image.component.html',
  styleUrls: ['./cat-image.component.scss']
})
export class CatImageComponent implements OnInit {

  @Input() cat!: Cat;
  @Input() isFavorite: boolean = false;

  constructor(private theCatApiService: TheCatApiService) { }

  ngOnInit(): void {
  }

  // Set cat image as favorite
  // Altough there is no rate limit when clicking or running this function,
  // the api prevents any new request.
  // TODO:: Prevent multiple clicks on component
  setFavorite() {
    this.theCatApiService.setFavorite(this.cat.id).subscribe(() => {
      this.isFavorite = true;
    });
  }

  deleteFavorite() {
    this.theCatApiService.deleteFavorite(this.cat.favorite_id!).subscribe(() => {
      this.isFavorite = false;

      // workaround fix to remove non-favorite images after click
      // Todo:: don't reload page after delete
      window.location.reload();
    });
  }

}
