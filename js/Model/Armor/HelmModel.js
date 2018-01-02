import AbstractArmorModel from "./AbstractArmorModel.js";

export default class HelmModel extends AbstractArmorModel {
  constructor (settings) {
    super(settings);
    this.base = this.constructor.name;
    this.type = 'helm';
  }
}
