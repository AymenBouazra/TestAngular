import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  addPostBlog(postData:any)
  {
    let addPost=JSON.parse(localStorage.getItem('Posts') || '[]' )
    
    addPost.push(postData)
    localStorage.setItem('Posts',JSON.stringify(addPost))
  }

  getAllPosts()
  {
   return JSON.parse(localStorage.getItem('Posts') || '[]')
  }

  getPostByIndex(index:number)
  {let listPost=JSON.parse(localStorage.getItem('Posts') || '[]' )
    return listPost[index]
  }

  updatePostDataByIndex(updatePost:any,index:number)
  {
    let listPost= JSON.parse(localStorage.getItem('Posts') || '[]')
    listPost.splice(index,1,updatePost);
    localStorage.setItem('Posts',JSON.stringify(listPost))
  }

  deletePostByIndex(index:number)
  {
    let listPost= JSON.parse(localStorage.getItem('Posts') || '[]')
    listPost.splice(index,1)
    localStorage.setItem('Posts',JSON.stringify(listPost))
  }
}
