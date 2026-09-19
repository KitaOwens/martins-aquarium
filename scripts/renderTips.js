export const renderTipsToDOM = (tipHTML) => {
    const tipList = document.getElementById('tipList');

    if (tipList) {
        tipList.innerHTML = tipHTML;
    }
    else {
        console.error('oops');
    }
}
