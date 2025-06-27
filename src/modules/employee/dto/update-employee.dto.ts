import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @ApiPropertyOptional({ example: 'Ana Torres', description: 'Nombre del empleado' })
  @IsOptional()
  @IsString({ message: 'El nombre del empleado debe ser una cadena de texto' })
  name_employee?: string;

  @ApiPropertyOptional({ example: 'Cajero', description: 'Tipo de empleado' })
  @IsOptional()
  @IsString({ message: 'El tipo de empleado debe ser una cadena de texto' })
  type_employee?: string;

  @ApiPropertyOptional({ example: '555-9876', description: 'Teléfono del empleado' })
  @IsOptional()
  @IsString({ message: 'El teléfono debe ser una cadena de texto' })
  phone?: string;
}
