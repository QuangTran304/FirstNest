import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas --> []
  @Get()
  getNinjas() {
    return [];
  }

  // GET /ninjas/:id --> {}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }

  // POST /ninjas --> {}
  @Post(':id')
  createNinja() {
    return {};
  }

  // PUT /ninjas/:id --> {}
  @Put(':id')
  updateNinja() {
    return {};
  }

  // DELETE /ninjas/:id --> {}
  @Delete(':id')
  deleteNinja() {
    return {};
  }
}
