import { Controller, Get, Post, Body, Param, Query, Delete, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<User> {
        return await this.userService.findOne(id)
    }

    @Delete(':id')
    // @UseGuards(AuthGuard('jwt'))
    async delete(@Param('id') id) {
        return this.userService.delete(id);
    }

    @Post('save/:id')
    async saveType(@Body('object') object) {
        return await this.userService.save(object);

    }
}
