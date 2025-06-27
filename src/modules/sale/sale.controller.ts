import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiNoContentResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiParam } from '@nestjs/swagger';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';

@ApiTags('sales')
@Controller('sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva venta' })
  @ApiCreatedResponse({ type: Sale })
  @ApiBadRequestResponse()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateSaleDto): Promise<Sale> {
    return this.saleService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener venta por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: Sale })
  findById(@Param('id') id: number): Promise<Sale> {
    return this.saleService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente una venta' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: Sale })
  update(@Param('id') id: number, @Body() dto: UpdateSaleDto): Promise<Sale> {
    return this.saleService.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente una venta' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: Sale })
  replace(@Param('id') id: number, @Body() dto: CreateSaleDto): Promise<Sale> {
    return this.saleService.replace(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una venta' })
  @ApiParam({ name: 'id', type: Number })
  @ApiNoContentResponse()
  delete(@Param('id') id: number): Promise<void> {
    return this.saleService.delete(id);
  }
}
