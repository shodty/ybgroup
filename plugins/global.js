import Vue from 'vue'
import commonComponents from '../components/letters'
import commonCategories from '../components/categories'
import commonIcons from '../components/icons'

commonComponents.forEach((component) => {
  Vue.component(component.name, component)
})

commonCategories.forEach((component) => {
  Vue.component(component.name, component)
})

commonIcons.forEach((component) => {
  Vue.component(component.name, component)
})
