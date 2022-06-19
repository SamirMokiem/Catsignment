import { Component, OnInit } from '@angular/core';
import {TheCatApiService} from "../../../services/thecatapi/TheCatApiService";
import {UserService} from "../../../services/userservice/userService";
import {UploadResponse} from "../../../services/thecatapi/responses/UploadResponse";
import {Cat} from "../../../services/thecatapi/types/Cat";

@Component({
  selector: 'app-upload-view',
  templateUrl: './upload-view.component.html',
  styleUrls: ['./upload-view.component.scss']
})
export class UploadViewComponent implements OnInit {

  constructor(private theCatApiService: TheCatApiService, private userService: UserService) { }

  public message: string = "";
  public cats: Cat[] = [];
  public loading: boolean = false;

  ngOnInit(): void {
  }

  onUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    this.loading = true;

    this.theCatApiService.uploadImage({
      file: input.files![0],
      sub_id: this.userService.getSubId()
    }).subscribe((response: UploadResponse) => {
      this.message = "Upload successful";
      this.loading = false;
    });
  }

}
