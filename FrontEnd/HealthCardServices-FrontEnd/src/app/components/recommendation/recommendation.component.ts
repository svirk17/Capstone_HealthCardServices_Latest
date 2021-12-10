import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  constructor(public service: UserService, private toastr:ToastrService) 
  { 
  }

  recommendation = '';

  ngOnInit(): void {
  }

  OnSubmit()
  {
    this.service.getRecommendation().subscribe(     
           
    (response)=>{
        this.recommendation = response.valueOf.toString();
    },
    err =>{
        
      this.toastr.error('Oops! There was an error. Please try again.');
    }
    );
      
  }

}
