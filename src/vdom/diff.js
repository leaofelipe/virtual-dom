import render from './render'

const diffAttrs = (oldAttrs, newAttrs) => {
  const patches = []

  // set new attributes
  for (const [key, value] of Object.entries(newAttrs)) {
    patches.push($node => {
      $node.setAttribute(key, value)
      return $node
    })
  }

  // remove old attributes
  for (const key in oldAttrs) {
    if (!(key in newAttrs)) {
      patches.push($node => {
        $node.removeAttribute(key)
        return $node
      })
    }
  }

  return $node => {
    for (const patch of patches) {
      patch($node)
    }
  }
}

const diff = (vOldNode, vNewNode) => {
  if (vNewNode === undefined) {
    return $node => {
      $node.remove()
      return undefined
    }
  }

  if (typeof vOldNode === 'string' || typeof vNewNode === 'string') {
    if (vOldNode !== vNewNode) {
      return $node => {
        const $newNode = render(vNewNode)
        $node.replaceWith($newNode)
        return $newNode
      }
    } else {
      return $node => undefined
    }
  }

  if (vOldNode.tagName !== vNewNode.tagName) {
    return $node => {
      const $newNode = render(vNewNode)
      $node.replaceWith($newNode)
      return $newNode
    }
  }

  const patchAttrs = diffAttrs(vOldNode.attrs, vNewNode.attrs)

  return $node => {
    patchAttrs($node)
    return $node
  }
}

export default diff
