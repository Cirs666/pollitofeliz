import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Pollo Asado', description: 'Nombre del producto' })
  @IsNotEmpty({ message: 'El nombre del producto es obligatorio' })
  @IsString({ message: 'El nombre del producto debe ser una cadena de texto' })
  name_product: string;

  @ApiProperty({ example: 'Delicioso pollo asado al carbón', description: 'Descripción del producto', required: false })
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  description: string;

  @ApiProperty({ example: 150.50, description: 'Precio unitario del producto' })
  @IsNotEmpty({ message: 'El precio es obligatorio' })
  @IsNumber({}, { message: 'El precio debe ser un número' })
  unit_price: number;

  @ApiProperty({ example: 100, description: 'Cantidad en stock', required: false })
  @IsNumber({}, { message: 'El stock debe ser un número' })
  @Min(0, { message: 'El stock no puede ser negativo' })
  stock?: number;
}
