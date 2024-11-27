import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() userData: CreateUserDto) {
        return this.usersService.create(userData);
    }

    @Get()
    findAll() {
        return this.usersService.findAll({});
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne({
            id: +id,
        });
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update({
            where: {
                id: +id,
            },
            data: updateUserDto,
        });
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove({
            id: +id,
        });
    }
}
