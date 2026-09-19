import { database } from './aquariumData.js';

export const fishList = () => {
    let fishHTML = '';

    for (const fish of database.fish) {
        fishHTML += `
            <article class="fishList">
                <div class="fish__image">
                    <img src="${fish.image}" alt="this is an image of the ${fish.species}" class="fish__image">
                </div>
                <div class="fish__details">
                  <h2 class="fish__species">${fish.species}</h2>
                  <p class="fish__location">The ${fish.species} looks like ${fish.name}, and can be found in the ${fish.location}.</p>
                  <p class="fish__length">This fish is ${fish.length} units long.</p>
                  <p class="fish__diet">The ${fish.species}'s diet is ${fish.diet}.</p>
                </div>
            </article>
        `;
    }
    return fishHTML
}
