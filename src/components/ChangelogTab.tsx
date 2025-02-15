import React, { ReactElement } from 'react'
import { Flex, List, Typography } from 'antd'
import { AppPages } from 'lib/db.js'

const { Text } = Typography

type ChangelogContent = { title: string; date: string; content: string[] }

export default function ChangelogTab(): React.JSX.Element {
  const activeKey = window.store((s) => s.activeKey)

  if (activeKey != AppPages.CHANGELOG) {
    // Don't load images unless we're on the changelog tab
    return (<></>)
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 4,
        position: 'bottom',
        align: 'start',
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          key={item.title}
        >
          {listToDisplay(item.content, item)}
        </List.Item>
      )}
    />
  )
}

function listToDisplay(content: string[], contentUpdate: ChangelogContent) {
  const display: ReactElement[] = []
  let i = 0
  for (const entry of content) {
    if (entry.endsWith('.png')) {
      display.push(
        <img
          key={i++}
          src={`https://d28ecrnsw8u0fj.cloudfront.net/assets/misc/changelog/${contentUpdate.date}/${entry}`}
          loading="lazy"
          style={{
            border: '2px solid #30519f',
            margin: 5,
          }}
        />,
      )
    } else {
      display.push(
        <li key={i++}>
          <Text style={{ fontSize: 16 }}>{entry}</Text>
        </li>,
      )
    }
  }

  return (
    <Flex vertical>
      <Typography.Title style={{ marginLeft: 20 }}>
        <u>
          {`Update ${contentUpdate.date}`}
        </u>
      </Typography.Title>
      <ul>
        {display}
      </ul>
    </Flex>
  )
}

const data: ChangelogContent[] = [
  {
    title: '',
    date: '02-28-2024',
    content: [
      'Enabled up/down arrow key navigation for grids',
      'Updated the selected row overlay to be more visible',
      'gridRow.png',
      'Added new priority and exclusion selectors in optimizer options',
      'Priority can now be changed from the optimizer tab now instead of dragging. Exclude will additionally filter out specific characters relics',
      'priorityExclude.png',
      'Added a notice to update when the scanner version is out of date',
      'outOfDate.png',
      'Relic scorer Simulate button has been move to a sidebar, and now has preset characters for current/upcoming banners',
      'simulate.png',
      'Added a sortable CV column for crit value to the Relics tab',
      'cvColumn.png',
      'Added a "Move to top" action button to the Characters tab',
      'moveToTop.png',
      'Started adding more icons to selectors for readability, more to come',
      'icons.png',
      'Removed CV column & filter from optimizer tab - damage calculations are a better option to sort by now',
      'Stats display is set to "Combat Stats" by default now, also the setting now saves correctly per character',
      'Changed relic scorer API in preparation for upcoming leaderboards update',
    ],
  },
  {
    title: '',
    date: '02-20-2024',
    content: [
      'Added: Acheron / Aventurine / Gallagher',
      'newChars.png',
      'Added: "Simulate relics on another character" button on the Relic scorer.',
      'Now the profile characters\' builds can be simulated as unowned or unreleased characters & light cones to preview their gear with accurate base stats',
      'simulate.png',
      'Added: Teammates menu for the optimizer. This automatically adds the teammate\'s character passives/eidolons/light cone/relic sets to the calculations for more accurate results',
      'teammates.png',
      'Added: Character builds can now be saved as loadouts, keeping a history of saved builds that can be easily swapped between',
      'savedBuilds.png',
      'Added: Changelog page to track new optimizer changes',
      'changelog.png',
      'Moved stat display to the sidebar for easier access',
      'statDisplay.png',
      'Clicking "Start optimizing" now scrolls the page down to the results grid',
      'Deprecated the Fribbels scanner option in favor of the Kel-Z scanner',
      'Energy Regeneration Rate column can be filtered on now',
      'Imports now work with scanner files that only contain characters/light cones without relics',
      'Minor scoring changes for: Sushang, Luka, Physical Trailblazer, Blade, Silver Wolf, Kafka, and Preservation characters',
    ],
  },
  {
    title: '',
    date: '02-05-2024',
    content: [
      'Added \'Recommended Presets\' button to fill out the optimizer with some suggested values',
      'presets.png',
      'Added the new Pioneer & Watchmaker relic sets',
      'newSets.png',
      'Added support for 8 relic scorer slots',
      'scorer8Characters.png',
      'All character and light cone passives now have descriptions on hover',
      'skillDescriptions.png',
      'Reorganized Character tab buttons with new Add / Edit character actions',
      'characterActions.png',
      'Added a Screenshot button for copying the character preview to clipboard / downloads',
      'screenshot.png',
      'Added a progress bar for the search',
      'progress.png',
      'Updated damage calcs with all 2.0 light cones',
      'Relic set filters now have a 2 piece + Any option',
      'Improved optimizer search performance, should run 3-6x faster now',
    ],
  },
  {
    title: '',
    date: '01-22-2024',
    content: [
      'Black Swan / Sparkle / Misha added with dmg calcs and their signature light cones',
      'newChars.png',
      'New \'Use equipped relics\' optimizer filter toggle',
      'useEquipped.png',
      'Optimizer grid now shows speed decimals',
      'spd.png',
      'QOLs for relic editing for autofilled main stats',
      'Double clicking on the characters list now will navigate to the optimizer',
    ],
  },
  {
    title: '',
    date: '01-13-2024',
    content: [
      'Big update to the relics tab, including filters and a relic recommendation tool',
      'The recommendation tool scores each relic by its potential at +15 to help with picking which unenhanced relics to roll while building characters',
      'relicsTab.png',
      'Also updated the Relic Scorer with an import option - now you can import relics directly from your ingame profile characters, with accurate speed values',
      'import.png',
    ],
  },
  {
    title: '',
    date: '01-06-2024',
    content: [
      'Accurate damage calculations for every character, and new optimization columns for average Basic / Skill / Ult / Follow-up / DoT damage',
      'calcs.png',
      'Character abilities + Light cone passive selectors to customize the damage simulation',
      'passives.png',
      'Relic set effects menu for customizing which sets to activate',
      'setEffects.png',
      'New filtering tools including the substat weight filter to reduce permutations & improve search time',
      'weightFilter.png',
      'Enemy count / DEF / RES / HP / and weakness selectors for optimizing specific combat scenarios',
      'enemyOptions.png',
      'Integrated with the Kel-Z HSR Scanner for faster & more accurate scans',
      'importer.png',
      'Expanded combat buffs options for adding more team effects like SPD / DMG% / DEF & RES shred / etc',
      'Relic stat editor and better handling for hidden decimals',
      'New character importer option - Import all your character builds and light cones directly from the game',
    ],
  },
]
