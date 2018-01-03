import { Quality, Rarity, Subtype, Tier, Type } from './Item/Constants/Constants.js'

/**
 * Base item class
 *
 * @param {object} settings - An object containing key/value pairs to be assigned as properties.
 */
export default class BaseItem {
  constructor (settings = {}) {
    Object.assign(this, {
      base: null,
      is_ladder_only: false,
      is_stackable: false,
      item: {},
      quality: Quality.NORMAL,
      rarity: Rarity.NORMAL,
      since_patch: '1.0.0',
      tier: Tier.NORMAL,
      type: Type.MISC,
      subtypes: [],
    }, settings);

    this.validateQuality();
    this.validateRarity();
    this.validateTier();
    this.validateTypeCombinations();

    this.drop_expiration = this.dropExpiration();
    this.is_socketable = this.isSocketable();
  }

  /**
   * Determines the amount minutes (in seconds) that the current item has
   * until it disappears from the ground once being dropped.
   *
   * @return int
   */
  dropExpiration () {
    if ([ Rarity.RARE, Rarity.CRAFTED, Rarity.SET, Rarity.UNIQUE ].includes(this.rarity)) {
      return 1800;
    }

    if (Rarity.MAGIC === this.rarity
    || this.subtypes.includes('gem')
    || this.subtypes.includes('rune')) {
      return 1200;
    }

    return 600;
  }

  /**
   * Determines if the current item is socketable or not.
   *
   * @return bool
   */
  isSocketable () {
    const socketable = {
      types: [ Type.ARMOR, Type.WEAPON ],
      subtypes: [ Subtype.HELM, Subtype.ARMOR, Subtype.SHIELDS ],
    };

    if (false === socketable.types.includes(this.type))
      return false;

    const isSocketable = this.subtypes.map(subtype => socketable.subtypes.includes(subtype));
    if (false === isSocketable.includes(true))
      return false;

    return true;
  }

  /**
   * Ensures that the item quality is an accepted, valid quality value.
   *
   * @throws Error If an unknown value is attempted to be set as the item quality.
   * @return void
   */
  validateQuality () {
    const accessor = this.quality.toUpperCase();
    const validValues = Object.keys(Quality).join(', ').toLowerCase();
    if (undefined === Quality[accessor]) {
      throw new RangeError(`Unknown item quality ${this.quality}. Use one of: ${validValues}`);
    }

    // TODO: check for quality conflicting configuartions
  }

  /**
   * Ensures that the item rarity is an accepted, valid rarity value.
   *
   * @throws Error If an unknown value is attempted to be set as the item rarity.
   * @return void
   */
  validateRarity () {
    const accessor = this.rarity.toUpperCase();
    const validValues = Object.keys(Rarity).join(', ').toLowerCase();
    if (undefined === Rarity[accessor]) {
      throw new RangeError(`Unknown item rarity ${this.rarity}. Use one of: ${validValues}`);
    }

    // TODO: check for rarity conflicting configuartions (e.g. quality, type)
  }

  /**
   * Ensures that the item tier is an accepted, valid tier value.
   *
   * @throws Error If an unknown value is attempted to be set as the item tier.
   * @return void
   */
  validateTier () {
    const accessor = this.tier.toUpperCase();
    const validValues = Object.keys(Tier).join(', ').toLowerCase();
    if (undefined === Tier[accessor]) {
      throw new RangeError(`Unknown item tier ${this.tier}. Use one of: ${validValues}`);
    }

    // TODO: check for tier conflicting configuartions
  }

  /**
   * Ensures that the item type is an accepted, valid type value.
   *
   * @throws Error If an unknown value is attempted to be set as the item type.
   * @return void
   */
  validateType () {
    const accessor = this.type.toUpperCase();
    const validValues = Object.keys(Type).join(', ').toLowerCase();
    if (undefined === Type[accessor]) {
      throw new RangeError(`Unknown item type ${this.type}. Use one of: ${validValues}`);
    }
  }

  /**
   * Ensures that all item subtypes are accepted, valid values.
   *
   * @throws Error If an unknown value is attempted to be set/added as the item subtype.
   * @return void
   */
  validateSubtypes () {
    this.subtypes.forEach((subtype) => {
      const accessor = subtype.toUpperCase();
      const validValues = Object.keys(Subtype).join(', ').toLowerCase();
      if (undefined === Subtype[accessor]) {
        throw new RangeError(`Unknown item subtype ${subtype}. Use one of: ${validValues}`);
      }
    });
  }

  /**
   * Ensures that the current item type configuartions are valid Diablo 2
   * configuartions.
   *
   * @throws RangeError If an unknown item type is provided & wasn't caught in the initial validations.
   * @return void
   */
  validateTypeCombinations () {
    this.validateType();
    this.validateSubtypes();

    switch (this.type) {
      case Type.ARMOR:
        this.validateArmorSubtypes();
        break;
      case Type.WEAPON:
        this.validateWeaponSubtypes();
        break;
      case Type.MISC:
        this.validateMiscSubtypes();
        break;
      default:
        throw new RangeError(`Unknown item type of ${this.type}`);
    }
  }

  /**
   * Runs validations on the current armor type configuration.
   *
   * @return void
   */
  validateArmorSubtypes () {
    this.validateTypeCombination(Type.ARMOR, [
      Subtype.ARMOR,
      Subtype.BOOTS,
      Subtype.BELT,
      Subtype.GLOVES,
      Subtype.HELM,
      Subtype.PELT,
      Subtype.SHIELD,
      Subtype.SHRUNKEN_HEAD,
    ]);
  }

  /**
   * Runs validations on the current weapon type configuration.
   *
   * @return void
   */
  validateWeaponSubtypes () {
    this.validateTypeCombination(Type.WEAPON, [
      Subtype.AXE,
      Subtype.BOW,
      Subtype.CLAW,
      Subtype.CROSSBOW,
      Subtype.DAGGER,
      Subtype.JAVELIN,
      Subtype.MACE,
      Subtype.POLEARM,
      Subtype.SCEPTER,
      Subtype.SPEAR,
      Subtype.STAFF,
      Subtype.SWORD,
    ]);
  }

  /**
   * Runs validations on the current miscellaneous type configuration.
   *
   * @return void
   */
  validateMiscSubtypes () {
    this.validateTypeCombination(Type.MISC, [
      Subtype.AMULET,
      Subtype.AMMUNITION,
      Subtype.ARTIFACT,
      Subtype.CHARM,
      Subtype.ESSENCE,
      Subtype.GEM,
      Subtype.JEWELLERY,
      Subtype.JEWEL,
      Subtype.KEY,
      Subtype.POTION,
      Subtype.RING,
      Subtype.RUNE,
      Subtype.SCROLL,
      Subtype.TOME,
    ]);
  }

  /**
   * Runs a set of validations on the current type/subtypes to ensure that they are
   * correct.
   *
   * @param {string} type - The item type being checked.
   * @param {array} whitelist - The list of valid values.
   *
   * @throws RangeError If an invalid subtype(s) is being applied to the current item.
   * @return void
   */
  validateTypeCombination (type, whitelist = []) {
    const offendingTypes = [];
    this.subtypes.forEach((subtype) => {
      if (false === whitelist.includes(subtype))
        offendingTypes.push(subtype);
    });

    if (offendingTypes.length > 0) {
      const itemType = (type.charAt(0).toUpperCase() + type.slice(1));
      const invalidValues = offendingTypes.join(', ').toLowerCase();
      const validValues = whitelist.join(', ').toLowerCase();
      throw new RangeError(`${itemType} items cannot have the subtype(s) ${invalidValues}. Use one of: ${validValues}`);
    }
  }
}
