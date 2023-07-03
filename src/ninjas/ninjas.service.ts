import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'Naruto', weapon: 'Shuriken' },
    { id: 2, name: 'Sasuke', weapon: 'Katana' },
    { id: 3, name: 'Sakura', weapon: 'Fists' },
  ];

  getNinjas(weapon?: 'Shuriken' | 'Katana' | 'Fists') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }
}
