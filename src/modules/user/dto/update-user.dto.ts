import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'juan.perez', description: 'Nuevo nombre de usuario' })
  @IsOptional()
  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
  username?: string;

  @ApiPropertyOptional({ example: 'nuevaContraseña123', description: 'Nueva contraseña del usuario' })
  @IsOptional()
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  password?: string;

  @ApiPropertyOptional({ example: 'juan.perez@example.com', description: 'Nuevo correo electrónico del usuario' })
  @IsOptional()
  @IsEmail({}, { message: 'El email debe ser una dirección válida' })
  email?: string;
}
