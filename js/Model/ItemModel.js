export default class ItemModel {
  constructor (settings) {
    const typeofSettings = typeof(settings);
    if (typeofSettings !== 'object') {
      throw new Error(`Constructor settings for Item must be of type object, received ${typeofSettings}`);
    }

    this.drop_expiration = settings.drop_expiration || 1200;
    this.image = settings.image || '';
    this.is_ladder_only = settings.is_ladder_only || false;
    this.is_socketable = settings.is_socketable || false;
    this.is_stackable = settings.is_stackable || false;
    this.item = settings.item || {};
    this.name = settings.name || '';
    this.quality = settings.quality || '';
    this.rarity = settings.rarity || '';
    this.since_patch = settings.since_patch || '1.0.0';
    this.tier = settings.tier || '';
    this.type = settings.type || '';
  }
}
