import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSaleDto {
  @ApiProperty({ example: 1, description: 'ID del cliente' })
  @IsNotEmpty({ message: 'El cliente es obligatorio' })
  @IsNumber({}, { message: 'El ID del cliente debe ser un número' })
  customer_id: number;

  @ApiProperty({ example: 2, description: 'ID del empleado que realiza la venta' })
  @IsNotEmpty({ message: 'El empleado es obligatorio' })
  @IsNumber({}, { message: 'El ID del empleado debe ser un número' })
  employee_id: number;

  @ApiProperty({ example: 350.00, description: 'Total de la venta' })
  @IsNotEmpty({ message: 'El total de la venta es obligatorio' })
  @IsNumber({}, { message: 'El total debe ser un número' })
  total: number;
}
