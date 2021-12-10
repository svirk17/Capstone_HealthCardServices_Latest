import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  fileName = '';
  constructor(private http: HttpClient) { }
  baseURL = 'http://localhost:44309/api';

  ngOnInit(): void {
  }

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        const upload$ = this.http.post(this.baseURL + '/ApplicationUser/UploadFile', formData);

        upload$.subscribe();
    }
}

}

