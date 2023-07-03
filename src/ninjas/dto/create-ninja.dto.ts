import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['Shuriken', 'Katana', 'Fists'], { message: 'Invalid weapon' })
  weapon: 'Shuriken' | 'Katana' | 'Fists';
}
