import { database } from './aquariumData.js'

export const locationList = () => {
    let locationHTML = '';
        for (const location of database.locations) {
            locationHTML += `
            <article class="locationList">
                <div class="location__details">
                <h2>Locations</h2>
                <p>name: ${location.name}</p>
                <p>country: ${location.country}</p>
                <p>description: ${location.description}</p>
                </div>
            </article>
        `;
    }
    return locationHTML
}