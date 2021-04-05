import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
interface Categorie {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  submitted= false
  updatePost: FormGroup = new FormGroup({
    titre : new FormControl('',[Validators.required]),
    description :new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    date: new FormControl(new Date())
  });
  selectedCategorie:String;
index:any;
  categories: Categorie[] = [
    {value: 'Sport', viewValue: 'Sport'},
    {value: 'Technologies', viewValue: 'Technologies'},
    {value: 'Economie', viewValue: 'Economie'},
    {value: 'Société', viewValue: 'Société'},
    {value: 'Culture', viewValue: 'Culture'}
  ];
  constructor(private postService:PostService,private route:ActivatedRoute,private router:Router, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.params['i']; 
    this.showData()
  }
  showData() {
    let data= this.postService.getPostByIndex(this.index)
    this.updatePost.patchValue(data)
    console.log(this.index);
    
  }
  updatePostFn(){
    this.submitted=true;
    this.postService.updatePostDataByIndex(this.updatePost.value,this.index)
    this.snackbar.open('Succesfully Modified The Post','Close',{duration:3500})
    this.router.navigateByUrl('/list-post')
  }

}
