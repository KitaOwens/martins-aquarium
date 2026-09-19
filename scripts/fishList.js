import { holyFish, soldierFish, regularFish } from './fishSorter.js';

const orderedFish = [
    ...holyFish(),
    ...soldierFish(),
    ...regularFish()
]

export const fishList = () => {
    let fishHTML = '';

    for (const fish of orderedFish) {
        fishHTML += `
            <article class="fishList">
                <div class="fish__image-container">
                    <img src="${fish.image}" alt="this is an image of the ${fish.species}" class="fish__image">
                </div>
                <div class="fish__details">
                  <h2 class="fish__name">${fish.name}</h2>
                  <h3 class="fish__species">species: ${fish.species}</h3>
                  <p class="fish__location">native to: ${fish.location}.</p>
                  <p class="fish__length">length: ${fish.length} units</p>
                  <p class="fish__diet">diet: ${fish.species}</p>
                </div>
            </article>
        `;
    }
    return fishHTML
}
