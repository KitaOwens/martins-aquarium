export const renderFishToDOM = (fishHTML) => {
    const fishList = document.getElementById('fishList');

    if (fishList) {
        fishList.innerHTML = fishHTML;
    }
    else {
        console.error('oops');
    }
}
