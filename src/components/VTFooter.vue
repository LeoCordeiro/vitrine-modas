<template>
  <footer style="background:#F5F3FF; border-top:1px solid #E5E1F5">
    <v-container style="max-width:1280px; padding:56px 16px 28px">

      <div class="footer-grid">
        <div>
          <img :src="require('@/assets/logohero.png')" style="height:52px; width:auto; margin-bottom:16px; display:block" />
          <p class="footer-desc">Rede de fornecedores de moda organizada por segmento. Seleção e contato direto pra lojistas e revendedoras.</p>
        </div>

        <div>
          <p class="footer-col-title">Navegação</p>
          <div class="d-flex flex-column" style="gap:10px">
            <router-link to="/" class="footer-link">Início</router-link>
            <router-link to="/sobre" class="footer-link">Sobre</router-link>
            <router-link to="/como-funciona" class="footer-link">Como funciona</router-link>
            <router-link to="/catalogo" class="footer-link">Catálogo</router-link>
            <router-link to="/solicitar" class="footer-link">Solicitar seleção</router-link>
          </div>
        </div>

        <div>
          <p class="footer-col-title">Contato</p>
          <div class="d-flex flex-column" style="gap:8px">
            <a href="https://wa.me/5511916395526" target="_blank" class="footer-link">WhatsApp: (11) 91639-5526</a>
            <a href="mailto:atendimento@vitrinemodas.com.br" class="footer-link">atendimento@vitrinemodas.com.br</a>
            <span class="footer-info">Osasco, SP</span>
            <span class="footer-info" style="margin-top:8px; font-size:11px; color:#C4BDD4">CNPJ: 58.405.439/0001-84</span>
          </div>
        </div>

        <div>
          <p class="footer-col-title">Legal</p>
          <div class="d-flex flex-column" style="gap:10px">
            <router-link to="/termos" class="footer-link">Termos de Uso</router-link>
            <router-link to="/privacidade" class="footer-link">Privacidade</router-link>
            <router-link to="/repasse" class="footer-link">Política de Repasse</router-link>
          </div>
        </div>
      </div>

      <div style="border-top:1px solid #E5E1F5; padding-top:24px; margin-top:40px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px">
        <span style="font-size:12px; color:#C4BDD4">© {{ new Date().getFullYear() }} Vitrine. Todos os direitos reservados.</span>
        <span style="font-size:10px; color:#C4BDD4; letter-spacing:0.15em; text-transform:uppercase">Catálogo · Seleção · Moda</span>
      </div>

    </v-container>
  </footer>
</template>

<style scoped>
.footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:40px; margin-bottom:0; }
.footer-desc { font-size:13px; color:#7C7A99; line-height:1.7; max-width:280px; }
.footer-col-title { font-size:9px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#7C3AED; margin-bottom:16px; }
.footer-link { font-size:13px; color:#7C7A99; text-decoration:none; transition:color 0.2s; }
.footer-link:hover { color:#7C3AED; }
.footer-info { font-size:13px; color:#7C7A99; }
@media (max-width:900px) { .footer-grid { grid-template-columns:1fr 1fr; } }
@media (max-width:600px) { .footer-grid { grid-template-columns:1fr; } }
</style>
