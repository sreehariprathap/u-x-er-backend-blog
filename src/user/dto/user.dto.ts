import { PostDto } from 'src/dtos/post.dto';

export class UserDto {
  email: string;
  password: string;
  name: string;
  phone: string;
  bio: string;
  posts: PostDto[];
}
