import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Post, Prisma } from '@prisma/client';
import { PostDto } from './dtos/post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPosts() {
    return this.prisma.post.findMany();
  }

  async getPost(id: number) {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  async createPost(post: PostDto) {
    return this.prisma.post.create({
      data: post,
    });
  }

  async updatePost(id: number, post: PostDto) {
    return this.prisma.post.update({
      where: {
        id,
      },
      data: post,
    });
  }

  async deletePost(id: number) {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }

  async getPostsByUserId(authorId: number) {
    return this.prisma.post.findMany({
      where: {
        authorId,
      },
    });
  }
}
