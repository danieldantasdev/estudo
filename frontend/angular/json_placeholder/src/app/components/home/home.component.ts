import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  post: Post = new Post();
  createPostForm!: FormGroup;
  @Input() icon: string = 'cancel';
  @Input() icon2: string = 'check';

  constructor(
    private postService: PostsService,
    private formBuilder: FormBuilder
  ) {
    this.post.status === 'INATIVO';
  }

  ngOnInit(): void {
    this.getposts();

    this.createPostForm = this.formBuilder.group({
      id: ['', Validators.required],
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  get formControls() {
    return this.createPostForm.controls;
  }

  onSubmit() {
    if (this.createPostForm.valid) {
      this.postService.createPost(this.createPostForm.value).subscribe(
        (result) => {
          console.log(result);
          sessionStorage.setItem('post', JSON.stringify(result));
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      return;
    }
    console.log(this.createPostForm.value);
  }

  getposts() {
    this.postService.readPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  deletePost(post: Post) {
    this.postService.deletePost(post).subscribe((post) => {
      this.post = post;
      window.location.reload();
    });
  }

  updateStatusPost(post: Post) {
    this.postService.updateStatusPost(post).subscribe((post) => {
      this.post == post;
    });
  }
}
