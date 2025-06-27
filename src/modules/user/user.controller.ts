import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiCreatedResponse({ type: User, description: 'Usuario creado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos' })
  @ApiInternalServerErrorResponse({ description: 'Error interno' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener usuario por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: User })
  @ApiBadRequestResponse()
  findById(@Param('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente un usuario' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: User })
  update(@Param('id') id: number, @Body() dto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente un usuario' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: User })
  replace(@Param('id') id: number, @Body() dto: CreateUserDto): Promise<User> {
    return this.userService.replace(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un usuario' })
  @ApiParam({ name: 'id', type: Number })
  @ApiNoContentResponse({ description: 'Usuario eliminado exitosamente' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
