import { mainTable } from "./mainTable"

export const appContent  = document.getElementById("app")

appContent.innerHTML = `
<div class="navButtons">
  <button class="icon back"></button>
  <button class="icon fav" id="fav"><img src="/public/heart.svg" alt="Favoritar"></button>
</div>

${ mainTable }
`
