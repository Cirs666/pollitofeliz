import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Carlos Gómez', description: 'Nombre completo del cliente' })
  @IsNotEmpty({ message: 'El nombre del cliente es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  name_customer: string;

  @ApiProperty({ example: '555-1234', description: 'Número de teléfono', required: false })
  @IsInt( { message: 'El teléfono debe ser una cadena de texto' })
  phone: number;

  @ApiProperty({ example: 'Av. Siempre Viva 123', description: 'Dirección del cliente', required: false })
  @IsString({ message: 'La dirección debe ser una cadena de texto' })
  address: string;
}
