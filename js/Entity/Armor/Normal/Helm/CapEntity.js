import HelmModel from '../../../../Model/Armor/HelmModel.js';

export default class CapEntity extends HelmModel {
  constructor (settings) {
    super(settings);

    this.defence = { minimum: 3, maximum: 5 };

    this.durability = 12;

    this.level = 1;

    this.requirements = {
      level: 0,
      strength: 0,
      dexterity: 0,
    };

    this.sockets = {
      maximum: 2,
      spawn: { normal: 2, nightmare: 2, hell: 2 }
    };
  }
}
