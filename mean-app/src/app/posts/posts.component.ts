import { PostsService } from '../../services/posts.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { IPosts } from './../../model/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPosts[];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
