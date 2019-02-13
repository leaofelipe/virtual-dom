import createElement from './vdom/createElement'
import render from './vdom/render'
import mount from './vdom/mount'
import diff from './vdom/diff'

const createApp = count =>
  createElement('div', {
    attrs: {
      id: 'app',
      dataCount: count
    },
    children: [
      String(count),
      createElement('p', {
        attrs: {
          style: 'background: red; width: 10px; height: 10px;'
        }
      })
    ]
  })

let count = 0
let App = createApp(count)
const $app = render(App)

let $rootEl = mount($app, document.querySelector('#root'))

setInterval(() => {
  count++
  const virtualNewApp = createApp(count)
  const patch = diff(App, virtualNewApp)
  $rootEl = patch($rootEl)
  App = virtualNewApp
  // $rootEl = mount(render(createApp(count)), $rootEl)
}, 1000)
