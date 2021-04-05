import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  listPost: any;
  constructor(private postService:PostService, private snackbar:MatSnackBar ) { } 

  ngOnInit(): void {
    this.listPost=  this.postService.getAllPosts()
  }
  delete(i:number){
    this.postService.deletePostByIndex(i)
    this.listPost= this.postService.getAllPosts()
    this.snackbar.open('Succesfully Deleted The Post','Close',{duration:3500})
  }
}
