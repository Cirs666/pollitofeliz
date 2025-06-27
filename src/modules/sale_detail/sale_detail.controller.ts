import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiNoContentResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiParam } from '@nestjs/swagger';
import { SaleDetailService } from './sale_detail.service';
import { CreateSaleDetailDto } from './dto/create-sale_detail.dto';
import { UpdateSaleDetailDto } from './dto/update-sale_detail.dto';
import { SaleDetail } from './entities/sale_detail.entity';

@ApiTags('sale_details')
@Controller('sale-details')
export class SaleDetailController {
  constructor(private readonly saleDetailService: SaleDetailService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo detalle de venta' })
  @ApiCreatedResponse({ type: SaleDetail })
  @ApiBadRequestResponse()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateSaleDetailDto): Promise<SaleDetail> {
    return this.saleDetailService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener detalle de venta por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: SaleDetail })
  findById(@Param('id') id: number): Promise<SaleDetail> {
    return this.saleDetailService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente un detalle de venta' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: SaleDetail })
  update(@Param('id') id: number, @Body() dto: UpdateSaleDetailDto): Promise<SaleDetail> {
    return this.saleDetailService.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente un detalle de venta' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: SaleDetail })
  replace(@Param('id') id: number, @Body() dto: CreateSaleDetailDto): Promise<SaleDetail> {
    return this.saleDetailService.replace(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un detalle de venta' })
  @ApiParam({ name: 'id', type: Number })
  @ApiNoContentResponse()
  delete(@Param('id') id: number): Promise<void> {
    return this.saleDetailService.delete(id);
  }
}
