import { Flex } from "antd"

export const Hint = {
  ratingFilters: () => {
    return {
      title: 'Rating filters',
      content: (
        <Flex vertical gap={10}>
          <p>CV - Crit Value, measuring the value of crit stats on the build. Calculated using CD + CR * 2</p>
          <p>Weight - Sum of substat weights of all 6 relics, from the Substat weight filter</p>
          <p>Ehp - Effective HP, measuring how tanky a max level character is. Calculated using HP & DEF & damage reduction passives</p>
          <p>Basic / Skill / Ult / Fua (Follow-up attack) / Dot (Damage over time) - Skill damage calculations, based on the environmental factors in character passives / light cone passives / enemy options.</p>
        </Flex>
      )
    }
  },

  combatBuffs: () => {
    return {
      title: 'Combat buffs',
      content: (
        <Flex vertical gap={10}>
          <p>Additional team buffs to apply to the calculations. Note that buffs from character / light cone self-buffs and passives and traces are already included in calculations.</p>
        </Flex>
      )
    }
  },

  statFilters: () => {
    return {
      title: 'Stat filters',
      content: (
        <Flex vertical gap={10}>
          <p>Min / Max filters for character stats, inclusive. The optimizer will only show results within these ranges </p>
          <p>Stat abbreviations are ATK / HP / DEF / SPD / Crit Rate / Crit Damage / Effect Hit Rate / Effect RES / Break Effect</p>
          <p>NOTE: Ingame speed decimals are truncated so you may see speed values ingame higher than shown here. This is because the OCR importer can't detect the hidden decimals.</p>
        </Flex>
      )
    }
  },

  mainStats: () => {
    return {
      title: 'Main stats',
      content: (
        <Flex vertical gap={10}>
          <p>Select main stats to use for optimization search. Multiple values can be selected for more options</p>
        </Flex>
      )
    }
  },

  sets: () => {
    return {
      title: 'Sets',
      content: (
        <Flex vertical gap={10}>
          <p>Select the relic and ornament sets to filter results by. Multiple sets can be selected for more options</p>

          <p>Set effects will be accounted for in calculations, use the Conditional set effects menu to customize which effects are active.</p>
        </Flex>
      )
    }
  },

  character: () => {
    return {
      title: 'Character',
      content: (
        <Flex vertical gap={10}>
          <p>Select the character and level / eidolon</p>
          <p>Levels will affect base stats used in the calculation. Eidolon effects are applied under the Character passives panel.</p>
        </Flex>
      )
    }
  },

  characterPassives: () => {
    return {
      title: 'Character passives',
      content: (
        <Flex vertical gap={10}>
          <p>Select the conditional effects to apply to the character.</p>
          <p>Effects that rely on combat stats or environment state will be applied by default, so only the options that require user input are listed here.</p>
        </Flex>
      )
    }
  },

  lightConePassives: () => {
    return {
      title: 'Light cone passives',
      content: (
        <Flex vertical gap={10}>
          <p>Select the conditional effects to apply to the light cone.</p>
          <p>Effects that rely on combat stats or environment state will be applied by default, so only the options that require user input are listed here.</p>
        </Flex>
      )
    }
  },

  lightCone: () => {
    return {
      title: 'Light cone',
      content: (
        <Flex vertical gap={10}>
          <p>Select the light cone and level / superimposition</p>
          <p>Levels will affect base stats used in the calculation. Superimposition and passive effects are applied under the Light cone passives panel.</p>
        </Flex>
      )
    }
  },
  
  actions: () => {
    return {
      title: 'Actions',
      content: (
        <Flex vertical gap={10}>
          <p>Start - Begin optimization search with the selected filters</p>
          <p>Filter - Re-apply the search filters to existing results. Use this to narrow filters without restarting a search</p>
          <p>Cancel - Cancel an in progress search and display results</p>
          <p>Reset - Clear all filters</p>
        </Flex>
      )
    }
  },
  
  optimizerOptions: () => {
    return {
      title: 'Optimizer options',
      content: (
        <Flex vertical gap={10}>
          <p>Rank filter - Rank characters by dragging them on the character page, and when enabled, characters may only take relics from lower ranked characters</p>
          <p>Maxed main stat - Assume the main stat for relics are maxed</p>
          <p>Keep current relics - The character must use its currently equipped items, and the optimizer will try to fill in empty slots</p>
          <p>Enhance / grade - Select the minimum enhance to search for and minimum stars for relics to include</p>
          <p>Stat display - Select which format of stats to apply to filters and display in the table. Base stats are the values you would see in the ingame character menu. Combat stats take into account all the buffs and passives applied to the character in combat as they perform an attack.</p>
        </Flex>
      )
    }
  },

  relics: () => {
    return {
      title: 'Relics',
      content: (
        <Flex vertical gap={10}>
          <p>O/S/D score stands for Offense / Support / DOT score. These are experimental measures of stat values for rating relic substats</p>
          <p>The multipliers are based off substat : main stat value ratio</p>
          <p>Offense score = (CD x 1) + (ATK% x 1.5) + (CR x 2) + (SPD x 2.6)</p>
          <p>Support score = (DEF% x 1.2) + (HP% x 1.5) + (RES x 1.5) + (SPD x 2.6)</p>
          <p>DOT score = (ATK% x 1.5) + (EHR x 1.5) + (BE x 1) + (SPD x 2.6)</p>
        </Flex>
      )
    }
  },
  
  optimizationDetails: () => {
    return {
      title: 'Optimization details',
      content: (
        <Flex vertical gap={10}>
          <p>Shows how many relics are being used in the optimization search, after all filters are applied</p>
          <p>Perms - Number of permutations that need to be searched. Narrow your filters to reduce permutations & search time</p>
          <p>Searched - Number of permutations already searched</p>
          <p>Results - Number of displayed results that satisfy the stat filters</p>
        </Flex>
      )
    }
  },

  enemyOptions: () => {
    return {
      title: 'Enemy options',
      content: (
        <Flex vertical gap={10}>
          <p>Level - Enemy level, affects enemy DEF calculations</p>
          <p>Targets - Number of targets in the battle. The target enemy is always assumed to be in the center, and damage calculations are only for the main target.</p>
          <p>RES - Enemy elemental RES. RES is set to 0 when the enemy's elemental weakness is enabled.</p>
          <p>HP% - Enemy current health %, affects certain characters with damage increases or additional effects based on enemy HP.</p>
          <p>Elemental weakness - Whether the enemy is weak to the character's type. Enabling this sets enemy elemental RES % to 0.</p>
          <p>Weakness broken - Whether the enemy's toughness bar is broken. Affects damage calculations and certain character passives.</p>
        </Flex>
      )
    }
  },

  substatWeightFilter: () => {
    return {
      title: 'Substat weight filter',
      content: (
        <Flex vertical gap={10}>
          <p>This filter is used to reduce the number of permutations the optimizer has to process.</p>
          <p>It works by first scoring each relic per slot by the weights defined, then sorting the relics in each slot by their score.</p>
          <p>Then, the filter only uses the Top X% of the scored relics in the optimization search. The number of filtered relics are visible in the Permutations display on the sidebar.</p>
          <p>Note that setting the Top X% too low may result in some builds not being displayed, if the filter ends up excludes a key relic. Use this filter with caution, but on large searches it makes a large impact on reducing search time.</p>
        </Flex>
      )
    }
  },
}