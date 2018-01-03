import ItemModel from '../Model/ItemModel.js';
import HelmModel from '../Model/Armor/HelmModel.js';

export default class ArmorFactory {
  constructor () {
    this.generateItem = this.generateItem.bind(this);
  }

  generateItem (item, parameters) {
    return new ItemModel({
      since_patch: parameters.since_patch,
      name: parameters.name,
      tier: parameters.tier,
      type: parameters.type,
      rarity: parameters.rarity,
      quality: parameters.quality,
      image: parameters.image,
      is_ladder_only: parameters.is_ladder_only,
      item: item,
      drop_expiration: parameters.drop_expiration,
      is_stackable: parameters.is_stackable,
      is_socketable: parameters.is_socketable
    });
  }

  createHelm (parameters) {
    parameters.type = 'helm';

    const helm = new HelmModel({
      level: parameters.level || 1,
      base: parameters.base || 'cap',
      defence: parameters.defence || { minimum: 1, maximum: 2 },
      durability: parameters.durability || 1,
      requirements: parameters.requirements || {
        level: 0,
        strength: 0,
        dexterity: 0,
      },
      sockets: parameters.sockets || {
        maximum: 0,
        spawn: { normal: 0, nightmare: 0, hell: 0 },
      },
      properties: parameters.properties
    });

    return this.generateItem(helm, parameters);
  }
}
