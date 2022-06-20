import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  getPosts() {
    return this.userService.getusers();
  }

  @Get('users/:id')
  getPost(@Param('id') id: string) {
    return this.userService.getUser(+id);
  }

  @Post('users')
  createPost(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }

  @Patch('users/:id')
  updatePost(@Param('id') id: string, @Body() user: UserDto) {
    return this.userService.updateUser(+id, user);
  }

  @Delete('users/:id')
  deletePost(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
