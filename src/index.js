import createElement from './vdom/createElement'
import render from './vdom/render'
import mount from './vdom/mount'

const App = createElement('div', {
  attrs: {
    id: 'app'
  },
  children: [
    createElement('p', {
      attrs: {
        style: 'background: red; width: 10px; height: 10px;'
      }
    })
  ]
})

const $app = render(App)
mount($app, document.querySelector('#root'))
