export const renderLocationsToDOM = (locationHTML) => {
    const locationList = document.getElementById('locationList');

    if (locationList) {
        locationList.innerHTML = locationHTML;
    }
    else {
        console.error('oops');
    }
}
