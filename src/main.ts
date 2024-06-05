import './style.css'
import { calculerHeure } from './modules/calendar'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <span>
      <label>Lune: </label>
      <input type="number" id="lune" value="1" min="1" max="2">
    </span>
    <span>
      <label>Terre: </label>
      <input type="number" id="terre" value="1" min="1" max="2">
    </span>
    <span>
      <label>Soleil: </label>
      <input type="number" id="soleil" value="1" min="1" max="2">
    </span>
  </div>
  <div id="result"></div>
  <button id="calculate">Calculer</button>
`

const result = document.querySelector<HTMLDivElement>('#result')!
const calculate = document.querySelector<HTMLButtonElement>('#calculate')!
const lune = document.querySelector<HTMLInputElement>('#lune')!
const terre = document.querySelector<HTMLInputElement>('#terre')!
const soleil = document.querySelector<HTMLInputElement>('#soleil')!

calculate.addEventListener('click', () => {
  try {
    const luneValue = parseInt(lune.value)
    const terreValue = parseInt(terre.value)
    const soleilValue = parseInt(soleil.value)
    const resultValue = calculerHeure(luneValue, terreValue, soleilValue)
    result.innerText = resultValue
  } catch (e) {
    result.innerText = e.message
  }
})
