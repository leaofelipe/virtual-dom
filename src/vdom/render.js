const render = vNode => {
  const $el = document.createElement(vNode.tagName)

  // set attrs
  for (const [key, value] of Object.entries(vNode.attrs)) {
    $el.setAttribute(key, value)
  }

  // set children
  for (const child of vNode.children) {
    const $child = render(child)
    $el.appendChild($child)
  }

  return $el
}

export default render
