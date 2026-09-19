import { database } from './aquariumData.js'

export const tipList = () => {
    let tipHTML = '';
        for (const tip of database.tips) {
            tipHTML += `
            <article class="tipList">
                <h2>Tips</h2>
                <h3>${tip.topic}</h3>
                <ul class="tip">
                    <li class="tip">${tip.text}</li>
                </ul>
            </article>
            `;
        }
        return tipHTML
    }
