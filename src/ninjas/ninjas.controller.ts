import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas --> []
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ id: 1, type: type }];
  }

  // GET /ninjas/:id --> {}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }

  // POST /ninjas --> {}
  @Post()
  createNinja(@Body() body: CreateNinjaDto) {
    return {
      name: body.name,
    };
  }

  // PUT /ninjas/:id --> {}
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() body: CreateNinjaDto) {
    return {
      id: id,
      name: body.name,
    };
  }

  // DELETE /ninjas/:id --> {}
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return {
      id: id,
      deleted: true,
    };
  }
}
