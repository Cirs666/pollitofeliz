import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNumber, Min } from 'class-validator';

export class UpdateSaleDetailDto {
  @ApiPropertyOptional({ example: 1, description: 'ID de la venta' })
  @IsOptional()
  @IsNumber({}, { message: 'El ID de la venta debe ser un número' })
  sale_id?: number;

  @ApiPropertyOptional({ example: 3, description: 'ID del producto' })
  @IsOptional()
  @IsNumber({}, { message: 'El ID del producto debe ser un número' })
  product_id?: number;

  @ApiPropertyOptional({ example: 2, description: 'Cantidad vendida' })
  @IsOptional()
  @IsNumber({}, { message: 'La cantidad debe ser un número' })
  @Min(1, { message: 'La cantidad debe ser al menos 1' })
  quantity?: number;

  @ApiPropertyOptional({ example: 300.00, description: 'Subtotal de la venta' })
  @IsOptional()
  @IsNumber({}, { message: 'El subtotal debe ser un número' })
  subtotal?: number;
}
