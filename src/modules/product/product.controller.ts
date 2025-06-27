import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiNoContentResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiParam } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo producto' })
  @ApiCreatedResponse({ type: Product, description: 'Producto creado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateProductDto): Promise<Product> {
    return this.productService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener producto por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: Product })
  @ApiBadRequestResponse({ description: 'ID inválido' })
  findById(@Param('id') id: number): Promise<Product> {
    return this.productService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente un producto' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: Product })
  update(@Param('id') id: number, @Body() dto: UpdateProductDto): Promise<Product> {
    return this.productService.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente un producto' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: Product })
  replace(@Param('id') id: number, @Body() dto: CreateProductDto): Promise<Product> {
    return this.productService.replace(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un producto' })
  @ApiParam({ name: 'id', type: Number })
  @ApiNoContentResponse({ description: 'Producto eliminado exitosamente' })
  delete(@Param('id') id: number): Promise<void> {
    return this.productService.delete(id);
  }
}
