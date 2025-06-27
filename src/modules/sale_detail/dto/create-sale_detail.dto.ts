import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateSaleDetailDto {
  @ApiProperty({ example: 1, description: 'ID de la venta' })
  @IsNotEmpty({ message: 'La venta es obligatoria' })
  @IsNumber({}, { message: 'El ID de la venta debe ser un número' })
  sale_id: number;

  @ApiProperty({ example: 3, description: 'ID del producto' })
  @IsNotEmpty({ message: 'El producto es obligatorio' })
  @IsNumber({}, { message: 'El ID del producto debe ser un número' })
  product_id: number;

  @ApiProperty({ example: 2, description: 'Cantidad de productos vendidos' })
  @IsNotEmpty({ message: 'La cantidad es obligatoria' })
  @IsNumber({}, { message: 'La cantidad debe ser un número' })
  @Min(1, { message: 'La cantidad debe ser al menos 1' })
  quantity: number;

  @ApiProperty({ example: 300.00, description: 'Subtotal de la venta' })
  @IsNotEmpty({ message: 'El subtotal es obligatorio' })
  @IsNumber({}, { message: 'El subtotal debe ser un número' })
  subtotal: number;
}
