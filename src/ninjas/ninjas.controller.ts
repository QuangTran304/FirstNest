import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  // GET /ninjas --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'Shuriken' | 'Katana' | 'Fists') {
    return this.ninjasService.getNinjas(weapon);
  }

  // GET /ninjas/:id --> {}
  @Get(':id')
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjasService.getNinja(id);
    } catch (error) {
      return { error: error.message };
    }
  }

  // POST /ninjas --> {}
  @Post()
  createNinja(@Body(new ValidationPipe()) body: CreateNinjaDto) {
    return this.ninjasService.createNinja(body);
  }

  // PUT /ninjas/:id --> {}
  @Put(':id')
  updateNinja(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateNinjaDto,
  ) {
    return this.ninjasService.updateNinja(id, body);
  }

  // DELETE /ninjas/:id --> {}
  @Delete(':id')
  deleteNinja(@Param('id', ParseIntPipe) id: number) {
    return this.ninjasService.removeNinja(id);
  }
}
