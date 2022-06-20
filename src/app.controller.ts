import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';
import { getHeapCodeStatistics } from 'v8';
import { PostDto } from './dtos/post.dto';

@Controller()
export class AppController {
  constructor(private readonly postService: PostService) {}

  @Get()
  helloWorld() {
    return 'Hello World!';
  }

  @Get('posts')
  getPosts() {
    return this.postService.getPosts();
  }

  @Get('posts/:id')
  getPost(@Param('id') id: string) {
    return this.postService.getPost(+id);
  }

  @Get('postsbyauthor/:id')
  getPostbyAuthor(@Param('id') id: string) {
    return this.postService.getPostsByUserId(+id);
  }

  @Post('posts')
  createPost(@Body() post: PostDto) {
    return this.postService.createPost(post);
  }

  @Put('posts/:id')
  updatePost(@Param('id') id: string, @Body() post: PostDto) {
    return this.postService.updatePost(+id, post);
  }

  @Delete('posts/:id')
  deletePost(@Param('id') id: string) {
    return this.postService.deletePost(+id);
  }
}
