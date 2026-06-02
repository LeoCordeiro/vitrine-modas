import { createRouter, createWebHashHistory } from 'vue-router'
import VTHome from '@/pages/VTHome.vue'
import VTSobre from '@/pages/VTSobre.vue'
import VTComoFunciona from '@/pages/VTComoFunciona.vue'
import VTCatalogo from '@/pages/VTCatalogo.vue'
import VTSolicitarCuradoria from '@/pages/VTSolicitarCuradoria.vue'
import VTPoliticaPrivacidade from '@/pages/VTPoliticaPrivacidade.vue'
import VTPoliticaTermos from '@/pages/VTPoliticaTermos.vue'
import VTPoliticaRepasse from '@/pages/VTPoliticaRepasse.vue'

const routes = [
  { path: '/', component: VTHome },
  { path: '/sobre', component: VTSobre },
  { path: '/como-funciona', component: VTComoFunciona },
  { path: '/catalogo', component: VTCatalogo },
  { path: '/solicitar', component: VTSolicitarCuradoria },
  { path: '/privacidade', component: VTPoliticaPrivacidade },
  { path: '/termos', component: VTPoliticaTermos },
  { path: '/repasse', component: VTPoliticaRepasse },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router
