import { fishList } from './fishList.js'
import { renderFishToDOM } from './renderFish.js'

import { tipList } from './tipList.js'
import { renderTipsToDOM } from './renderTips.js'

import { locationList } from './locationList.js'
import { renderLocationsToDOM } from './renderLocations.js'


// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
renderFishToDOM(fishHTML)

renderTipsToDOM(tipHTML)

renderLocationsToDOM(locationHTML)
