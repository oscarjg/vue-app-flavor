
import Home from '../pages/Home.vue'
import List from '../pages/List.vue'
import Form from '../pages/Form.vue'

export default  [
  { path: '/', name: "home", component: Home },
  { path: '/list', name: "list", component: List, meta: { title: 'title.list' }},
  { path: '/form', name: "form", component: Form, meta: { headerComponent: 'header-form', backRoute: 'home', title: 'title.form' }},
]
