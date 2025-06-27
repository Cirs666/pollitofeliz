import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiNoContentResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiParam } from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo cliente' })
  @ApiCreatedResponse({ type: Customer, description: 'Cliente creado exitosamente' })
  @ApiBadRequestResponse()
  @ApiInternalServerErrorResponse()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateCustomerDto): Promise<Customer> {
    return this.customerService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener cliente por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: Customer })
  @ApiBadRequestResponse()
  findById(@Param('id') id: number): Promise<Customer> {
    return this.customerService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente un cliente' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: Customer })
  update(@Param('id') id: number, @Body() dto: UpdateCustomerDto): Promise<Customer> {
    return this.customerService.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente un cliente' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: Customer })
  replace(@Param('id') id: number, @Body() dto: CreateCustomerDto): Promise<Customer> {
    return this.customerService.replace(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un cliente' })
  @ApiParam({ name: 'id', type: Number })
  @ApiNoContentResponse()
  delete(@Param('id') id: number): Promise<void> {
    return this.customerService.delete(id);
  }
}
