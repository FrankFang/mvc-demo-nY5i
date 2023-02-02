import { createElement } from "./helper"

let name = 'frank'
const div = createElement(`
  <div class="module2">
    <h1>模块2</h1>
    <div><span>用户名</span><input value="${name}" /></div>
    <div>你输入的是：<span id="output">${name}<span></div>
  </div>
`)

const input = div.querySelector('input')
input.addEventListener('input', (e) => {
  name = e.target.value
  div.querySelector('#output').textContent = name
})

const mount = (container) => {
  container.append(div)
}

export { mount }
