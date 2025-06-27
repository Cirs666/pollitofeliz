import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNumber } from 'class-validator';

export class UpdateSaleDto {
  @ApiPropertyOptional({ example: 1, description: 'ID del cliente' })
  @IsOptional()
  @IsNumber({}, { message: 'El ID del cliente debe ser un número' })
  customer_id?: number;

  @ApiPropertyOptional({ example: 2, description: 'ID del empleado' })
  @IsOptional()
  @IsNumber({}, { message: 'El ID del empleado debe ser un número' })
  employee_id?: number;

  @ApiPropertyOptional({ example: 350.00, description: 'Total de la venta' })
  @IsOptional()
  @IsNumber({}, { message: 'El total debe ser un número' })
  total?: number;
}
