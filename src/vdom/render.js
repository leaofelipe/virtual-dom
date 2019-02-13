const renderEl = ({ tagName, attrs, children }) => {
  const $el = document.createElement(tagName)

  // set attrs
  for (const [key, value] of Object.entries(attrs)) {
    $el.setAttribute(key, value)
  }

  // set children
  for (const child of children) {
    const $child = render(child)
    $el.appendChild($child)
  }

  return $el
}

const render = vNode => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode)
  }

  return renderEl(vNode)
}

export default render
