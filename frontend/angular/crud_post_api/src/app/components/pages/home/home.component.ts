import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.list();
  }

  posts: Post[] = [];
  isLoading: boolean = false;

  list = () => {
    setTimeout(this.onLoading, 5000);
    this.postsService.list().subscribe((posts) => {
      this.posts = posts;
    });
    this.isLoading = false;
  };

  onLoading = () => {
    this.isLoading = true;
  };

  onDelete = (id: Post['id']) => {
    this.postsService.remove(id).subscribe((post) => {
      this.onLoading;
      window.location.reload();
      (error: any) => {};
    });
  };
}
