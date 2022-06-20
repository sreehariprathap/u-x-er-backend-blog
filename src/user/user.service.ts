import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getusers() {
    return this.prisma.user.findMany();
  }

  async getUser(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async createUser(user: UserDto) {
    return this.prisma.user.create({
      data: user,
    });
  }

  async updateUser(id: number, user: UserDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: user,
    });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
