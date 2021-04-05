import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

interface Categorie {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  submitted= false
  addPost: FormGroup = new FormGroup({
    titre : new FormControl('',[Validators.required]),
    description :new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    date: new FormControl(new Date().toUTCString())
  });
  selectedCategorie:String;

  categories: Categorie[] = [
    {value: 'Sport', viewValue: 'Sport'},
    {value: 'Technologies', viewValue: 'Technologies'},
    {value: 'Economie', viewValue: 'Economie'},
    {value: 'Société', viewValue: 'Société'},
    {value: 'Culture', viewValue: 'Culture'}
  ];
  constructor(private postService:PostService, private router:Router, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
   
  }
  addPostFn(){
    this.submitted= true
    if(this.addPost.invalid){ 
      return;
    }
    this.postService.addPostBlog(this.addPost.value);
    this.snackbar.open('Succesfully Added '+this.addPost.value.titre,'Close',{duration:3500})
    // this.router.navigate(['/list-product'])
    this.router.navigateByUrl('/list-post')
  }

}
