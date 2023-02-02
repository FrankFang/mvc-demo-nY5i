export function createElement(str) {
  const template = document.createElement('template')
  template.innerHTML = str
  return template.content.children[0]
}
