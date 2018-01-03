# d2i.json

## Item Schemas

### Base Schema

```json
{
  "since_patch": "string",
  "type": "string",
  "tier": "string",
  "rarity": "string",
  "quality": "string",
  "is_ladder_only": bool,
  "item": ItemSchema,
  "drop_expiration": int,
  "is_stackable": bool,
  "is_socketable": bool,
}
```

### Armor Schema

```json
{
  "name": "harlequin crest",
  "image": "harlequin-crest.gif",
  "minumum_defence": 98,
  "maximum_defence": 141,
  "required_strength": 50,
  "required_dexterity": 0,
  "durability": 12,
  "sockets": {
    "maxiumum": 1,
    "drop": {
      "normal": 0,
      "nightmare": 0,
      "hell": 0
    },
  },
  "character_level": 62,
  "item_level": 69,
  "magic_properties": [
    "+2 to all skills",
    "+1 to life (based on character level)",
    "+1 to mana (based on character level)",
    "damage reduced by 2",
    "50% better chance of getting magic items",
    "+2 to all attributes"
  ]
  "previous_versions": {}
}
```

### Full Schema Example

```json
{
  "since_patch": "1.0.8",
  "name": "harlequin crest",
  "tier": "elite",
  "type": "helm",
  "rarity": "unique",
  "quality": "normal",
  "image": "harlequin-crest.gif",
  "item": {
    "level": 69,
    "durability": 12,
    "defence": { "minimum": 98, "maximum": 141 },
    "character_requirements": {
      "level": 62,
      "strength": 50,
      "dexterity": 0,
    },
    "sockets": {
      "maxiumum": 1,
      "drop": { "normal": 0, "nightmare": 0, "hell": 0 },
    },
    "properties": {
      "1.10": [
        "+2 to all skills",
        "+1 to life (based on character level)",
        "+1 to mana (based on character level)",
        "damage reduced by 10%",
        "50% better chance of getting magic items",
        "+2 to all attributes"
      ],
      "1.0.9": [
        "+2 to all skills",
        "+2 to strength",
        "+2 to dexterity",
        "+2 to vitality",
        "+2 to energy",
        "+1 to life (based on character level)",
        "+1 to mana (based on character level)",
        "damage reduced by 10%",
        "50% better chance of getting magic items",
      ],
      "1.0.8": [
        "indestructible"
        "+2 to all skills",
        "+100% enhanced defense",
        "increase maximum life 40%",
        "50% better chance of getting magical items",
      ]
    }
  },
  "is_ladder_only": false,
  "drop_expiration": 1800,
  "is_stackable": false,
  "is_socketable": true,
}
```

## Item info

> \- _[Arreat Summit, Item Basics](http://classic.battle.net/diablo2exp/items/basics.shtml)_

## Item Levels

**Item Level:**

Chests and monsters must be at least this level to drop the item. Item level (`ilvl` or `ilevel`) is used in gambling, sales and other calculations as well.

**Clvl Req:**

Your character must be this level or higher to equip the item.

_Note: No Uniques had Clvl requirements prior to Diablo 2 `v1.07`._

### Item Tiers

From lowest tier to highest tier: **Normal** items, **Exceptional** items, **Elite** items.

### Item Types

#### Armor

- Helms
  - Pelts
- Armor
- Shields
  - Shrunken Heads
- Gloves
- Boots
- Belts

##### Armor Weights

- Light
- Medium
- Heavy

#### Weapons

- Axes
- Bows
- Claws
- Crossbows
- Daggers
- Javelins
- Maces
- Polearms
- Scepters
- Spears
- Staves
  - Orbs
  - Wands
- Swords
- Throwing

#### Miscellaneous

- Jewellery
- Gems
- Runes
- Jewels
- Keys
- Potions
- Scrolls
- Tomes
- Ammo (arrows, bolts)
- Pandemonium artifacts (Key of Terror/Hate/Destruction, Mephisto's Brain, Diablo's Horn, Baal's Eye).
- Essence (4 flavours) and Token of Absolution (these are new items from Patch 1.13x)

### Item Rarities

From least rare, to most rare: **Normal** items, **Magic** items, **Rare** items, **Crafted/Very Rare** items, **Set** items, **Unique** items.

### Item Qualities

From least reliable, to most reliable: **Low Quality** items, **Cracked** items, **Crude** items, **Damaged** items, **Normal** items, **Superior** items.

_Note: Items of the **Normal** quality do not have a prefix on their name like the other quality types do._

### Durability

Durability is capped at 333.
