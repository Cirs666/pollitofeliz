import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'Ana Torres', description: 'Nombre del empleado' })
  @IsNotEmpty({ message: 'El nombre del empleado es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  name_employee: string;

  @ApiProperty({ example: 'Cajero', description: 'Tipo de empleado' })
  @IsNotEmpty({ message: 'El tipo de empleado es obligatorio' })
  @IsString({ message: 'El tipo debe ser una cadena de texto' })
  type_employee: string;

  @ApiProperty({ example: '555-9876', description: 'Número de teléfono', required: false })
  @IsInt({ message: 'El teléfono debe ser una cadena de texto' })
  phone: number;
}
