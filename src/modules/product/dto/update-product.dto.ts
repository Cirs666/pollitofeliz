import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class UpdateProductDto {
  @ApiPropertyOptional({ example: 'Pollo Asado', description: 'Nombre del producto' })
  @IsOptional()
  @IsString({ message: 'El nombre del producto debe ser una cadena de texto' })
  name_product?: string;

  @ApiPropertyOptional({ example: 'Delicioso pollo al carbón', description: 'Descripción del producto' })
  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  description?: string;

  @ApiPropertyOptional({ example: 150.00, description: 'Precio unitario del producto' })
  @IsOptional()
  @IsNumber({}, { message: 'El precio debe ser un número' })
  unit_price?: number;

  @ApiPropertyOptional({ example: 50, description: 'Stock disponible del producto' })
  @IsOptional()
  @IsNumber({}, { message: 'El stock debe ser un número' })
  @Min(0, { message: 'El stock no puede ser negativo' })
  stock?: number;
}
