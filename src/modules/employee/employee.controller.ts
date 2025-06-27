import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiNoContentResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiParam } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@ApiTags('employees')
@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo empleado' })
  @ApiCreatedResponse({ type: Employee })
  @ApiBadRequestResponse()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateEmployeeDto): Promise<Employee> {
    return this.employeeService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener empleado por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: Employee })
  findById(@Param('id') id: number): Promise<Employee> {
    return this.employeeService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente un empleado' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: Employee })
  update(@Param('id') id: number, @Body() dto: UpdateEmployeeDto): Promise<Employee> {
    return this.employeeService.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente un empleado' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: Employee })
  replace(@Param('id') id: number, @Body() dto: CreateEmployeeDto): Promise<Employee> {
    return this.employeeService.replace(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un empleado' })
  @ApiParam({ name: 'id', type: Number })
  @ApiNoContentResponse()
  delete(@Param('id') id: number): Promise<void> {
    return this.employeeService.delete(id);
  }
}
