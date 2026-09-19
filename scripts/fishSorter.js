import { database } from './aquariumData.js';


export const holyFish = () => {
    const holyFish = []
        for (let fish of database.fish) {
            if (fish.length % 3 === 0) {
                holyFish.push(fish)
            }
        }
    return holyFish
}



export const soldierFish = () => {
    const soldierFish = []
        for (let fish of database.fish) {
            if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
                soldierFish.push(fish)
            }
        }
    return soldierFish
}



export const regularFish = () => {
    const regularFish = []
        for (let fish of database.fish) {
            if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
                regularFish.push(fish)
            }
        }            
    return regularFish
}
