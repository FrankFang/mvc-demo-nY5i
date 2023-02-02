import axios from "axios"
import { createElement } from "./helper"

const div = createElement(`
  <div class="module3">
    <h1>模块3</h1>
    <div><button id="btn">点击加载数据</button></div>
    <div id="output">暂无数据</div>
  </div>
`)

axios.interceptors.response.use(undefined, (err) => {
  if (err.config?.url === '/xxx') {
    return { data: '模拟数据' + Math.random() }
  }
  throw err
})

const button = div.querySelector('#btn')
button.addEventListener('click', async () => {
  const response = await axios.get('/xxx')
  const output = div.querySelector('#output')
  output.textContent = response.data
})

const mount = (container) => {
  container.append(div)
}
export { mount }
