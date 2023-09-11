const buttonFavorite = document.getElementById('fav')
const buttonMoreInfo = document.getElementById('openTable')
const closeDetailsTable = document.getElementById('sepparator')
const moreDetailsTable = document.getElementById('moreDetailsTable')



function closeInfoTable() {
    moreDetailsTable.classList.remove('shown')
}

buttonMoreInfo.addEventListener('click', () => {
    moreDetailsTable.classList.add('shown')
});


buttonFavorite.addEventListener('click', () => {
    buttonFavorite.classList.toggle('favorited')
});

closeDetailsTable.addEventListener('click', closeInfoTable);

