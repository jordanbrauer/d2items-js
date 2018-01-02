import from '../../../../Entity/ItemModel.js';
import CapEntity from '../../../../Entity/Armor/Normal/Helm/CapEntity.js';

export default class Cap extends ItemModel {
  constructor (settings) {
    super(settings);
    this.name = "cap";
    this.item = new CapEntity();
  }
}
