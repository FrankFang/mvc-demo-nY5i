import { createElement } from "./helper"
let count = 1
const div = createElement(`
  <div class="module1">
    <h1>模块1</h1>
    <div id="count">${count}</div>
    <div><button>+1</button></div>
  </div>
`)
const button = div.querySelector('button')
// 点击按钮就更新 count
button.addEventListener('click', () => {
  count += 1
  div.querySelector('#count').textContent = count // 局部更新
})
const mount = (container) => {
  container.append(div)
}
export { mount }

