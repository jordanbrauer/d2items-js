export default class AbstractArmorModel {
  constructor (settings) {
    const typeofSettings = typeof(settings);
    if ('object' !== typeofSettings) {
      throw new Error(`Constructor settings for Item must be of type object, received ${typeofSettings}`);
    }

    this.base = settings.base || '';
    this.defence = settings.defence || { minimum: 0, maximum: 0 };
    this.durability = settings.durability || 0;
    this.level = settings.level || 0;
    this.properties = settings.properties || {};
    this.requirements = settings.requirements || {
      level: 0,
      strength: 0,
      dexterity: 0,
    };
    this.sockets = settings.sockets || {
      maximum: 0,
      spawn: { normal: 0, nightmare: 0, hell: 0 },
    };
    this.type = settings.type || 'armor';
  }
}
