import { createRow } from "./nutritionGraphic"


export const mainTable = `<div class="table">
<img src="/public/dish-image-with-shadow.png" alt="">
<h1>Salada variada</h1>
<div class="resume">
  <div>
    <span>Energia</span>
    <span>221,15 kcal</span>
  </div>
  <div>
    <span>Porção total</span>
    <span>240 g</span>
  </div>
</div>
    <div class="line">
      <span class="el">Proteínas</span>
      <span class="value">15,13 g</span>      
    </div>
    <div class="row">
    ${createRow(3,6)}
    </div>
    <div class="line">
      <span class="el">Carboidratos</span>
      <span class="value">18,40 g</span>      
    </div>
    <div class="row">
    ${createRow(4,6)}
    </div>
    <div class="line">
      <span class="el">Açúcar</span>
      <span class="value">4,88 g</span>      
    </div>
    <div class="row">
    ${createRow(5,6)}
    </div>
    <div class="line">
      <span class="el">Gorduras</span>
      <span class="value">5,18 g</span>      
    </div>
    <div class="row">
    ${createRow(1,6)}
    </div>

<button class="openTable" id="openTable">Mais detalhes</button>
</div><div>
</div>
`