import { PostDto } from 'src/dtos/post.dto';

export class User {
  email: string;
  password: string;
  name: string;
  phone: string;
  bio: string;
  posts: PostDto[];
}
