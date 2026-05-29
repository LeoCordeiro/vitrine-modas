<template>
  <div>

    <!-- PAGE HEADER -->
    <div class="page-header">
      <v-container style="max-width:1280px">
        <div class="page-eyebrow page-anim page-anim-1">Processo</div>
        <h1 class="page-title page-anim page-anim-2">Como funciona<br><span class="gradient-text">a seleção</span></h1>
        <p class="page-subtitle page-anim page-anim-3">Cinco passos para você encontrar os fornecedores certos para o seu negócio.</p>
      </v-container>
    </div>

    <!-- STEPS -->
    <section class="steps-section">
      <v-container style="max-width:1200px">

        <div class="steps-grid" v-reveal="{ stagger: true, interval: 90 }">
          <div
            class="step-card"
            v-for="(s, i) in steps"
            :key="s.num"
            :class="{ 'step-card--wide': i === steps.length - 1 }"
            @mouseenter="active = i"
            @mouseleave="active = null"
          >
            <div class="step-top">
              <span class="step-num">{{ s.num }}</span>
              <span class="step-badge">{{ s.badge }}</span>
            </div>
            <div class="step-icon-wrap">
              <v-icon size="22" color="#7C3AED">{{ s.icon }}</v-icon>
            </div>
            <h3 class="step-title">{{ s.title }}</h3>
            <p class="step-desc">{{ s.desc }}</p>
            <div class="step-line"></div>
          </div>
        </div>

      </v-container>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <v-container style="max-width:680px; text-align:center">
        <p class="cta-eyebrow" v-reveal>Pronta para começar?</p>
        <h2 class="cta-heading" v-reveal="{ delay: 80 }">Solicite sua seleção<br><em>de fornecedores</em></h2>
        <p class="cta-sub" v-reveal="{ delay: 160 }">Entre em contato e receba uma proposta personalizada em até 24h.</p>
        <div v-reveal="{ delay: 240 }">
          <router-link to="/solicitar" class="btn-primary">
            Solicitar seleção
            <v-icon size="14" class="ml-2">mdi-arrow-right</v-icon>
          </router-link>
        </div>
      </v-container>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(null)

const steps = [
  { num: '01', icon: 'mdi-clipboard-text-outline', badge: 'Você faz',       title: 'Dados do negócio',       desc: 'Você preenche um formulário rápido com nicho, estilo, faixa de preço e volume de compra.' },
  { num: '02', icon: 'mdi-magnify',                badge: 'A gente faz',    title: 'Seleção no catálogo',    desc: 'Buscamos na nossa rede os fornecedores que mais se encaixam no seu perfil.' },
  { num: '03', icon: 'mdi-handshake-outline',      badge: 'A gente faz',    title: 'Contato direto',         desc: 'Entramos em contato com os fornecedores por você, apresentamos seu perfil e negociamos as condições.' },
  { num: '04', icon: 'mdi-shield-check-outline',   badge: 'A gente verifica', title: 'Verificação de qualidade', desc: 'Avaliamos os produtos, o histórico e como o fornecedor costuma cumprir os prazos antes de indicar.' },
  { num: '05', icon: 'mdi-file-document-outline',  badge: 'Você recebe',    title: 'Resumo final',           desc: 'Você recebe um resumo completo com os fornecedores indicados, condições negociadas e contatos diretos para fechar negócio.' },
]
</script>

<style scoped>
/* ─── PAGE HEADER ─── */
.page-header {
  background: linear-gradient(160deg, #FAFAFA 55%, #F5F3FF 100%);
  padding: 72px 16px 56px;
}
.page-eyebrow {
  font-size: 10px; font-weight: 700; letter-spacing: 0.25em;
  text-transform: uppercase; color: #7C3AED; margin-bottom: 12px;
  display: flex; align-items: center; gap: 10px;
}
.page-eyebrow::before { content: ''; display: block; width: 20px; height: 1px; background: #7C3AED; }
.page-title {
  font-family: serif; font-size: clamp(2.4rem, 5vw, 4.2rem);
  font-weight: 300; color: #1E1B4B; line-height: 1.05; margin-bottom: 16px;
}
.gradient-text {
  background: linear-gradient(90deg, #7C3AED, #A855F7);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-style: italic;
}
.page-subtitle {
  font-size: 15px; color: #7C7A99; font-weight: 300;
  max-width: 460px; font-family: 'DM Sans', sans-serif; line-height: 1.7;
}

/* ─── STEPS ─── */
.steps-section {
  background: #fff;
  padding: 72px 16px 88px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Último card ocupa 2 colunas */
.step-card--wide {
  grid-column: span 2;
}

/* ─── CARD ─── */
.step-card {
  background: #FAFAFA;
  border: 1px solid #E5E1F5;
  border-radius: 16px;
  padding: 28px 28px 24px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
  cursor: default;
}
.step-card:hover {
  border-color: rgba(124,58,237,0.35);
  box-shadow: 0 8px 32px rgba(124,58,237,0.08);
  transform: translateY(-4px);
}

.step-top {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 20px;
}

.step-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.8rem; font-weight: 300;
  color: rgba(124,58,237,0.12);
  line-height: 1;
  transition: color 0.3s;
  letter-spacing: -0.02em;
}
.step-card:hover .step-num {
  color: rgba(124,58,237,0.25);
}

.step-badge {
  font-size: 9px; font-weight: 700; letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #7C3AED;
  background: #EDE9FE;
  border-radius: 100px;
  padding: 4px 12px;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.3s;
}
.step-card:hover .step-badge {
  background: #DDD6FE;
}

.step-icon-wrap {
  width: 48px; height: 48px;
  background: #F5F3FF;
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 18px;
  transition: background 0.3s, transform 0.3s cubic-bezier(0.22,1,0.36,1);
}
.step-card:hover .step-icon-wrap {
  background: #EDE9FE;
  transform: scale(1.08);
}

.step-title {
  font-family: serif;
  font-size: 1.2rem; font-weight: 400;
  color: #1E1B4B; margin-bottom: 10px; line-height: 1.2;
}

.step-desc {
  font-size: 13px; color: #7C7A99;
  line-height: 1.75; font-weight: 300;
  font-family: 'DM Sans', sans-serif;
}

/* Barra inferior animada no hover */
.step-line {
  position: absolute; bottom: 0; left: 0;
  height: 2px; width: 0;
  background: linear-gradient(90deg, #7C3AED, #C084FC);
  border-radius: 0 0 0 16px;
  transition: width 0.45s cubic-bezier(0.22,1,0.36,1);
}
.step-card:hover .step-line { width: 100%; }

/* ─── CTA ─── */
.cta-section {
  background: linear-gradient(135deg, #7C3AED 0%, #9333EA 100%);
  padding: 88px 16px;
}
.cta-eyebrow {
  font-size: 10px; font-weight: 700; letter-spacing: 0.22em;
  text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 16px;
  font-family: 'DM Sans', sans-serif;
}
.cta-heading {
  font-family: serif; font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 300; color: #fff; line-height: 1.1; margin-bottom: 14px;
}
.cta-heading em { color: #F0ABFC; font-style: italic; }
.cta-sub {
  font-size: 15px; color: rgba(255,255,255,0.6);
  line-height: 1.7; margin-bottom: 32px; font-weight: 300;
  font-family: 'DM Sans', sans-serif;
}
.btn-primary {
  display: inline-flex; align-items: center;
  background: #fff; color: #7C3AED;
  font-size: 12px; font-weight: 700;
  padding: 14px 32px; border-radius: 100px;
  text-decoration: none; transition: all 0.25s;
  letter-spacing: 0.08em; text-transform: uppercase;
  font-family: 'DM Sans', sans-serif;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 32px rgba(0,0,0,0.2);
}

@media (max-width: 900px) {
  .steps-grid { grid-template-columns: repeat(2, 1fr); }
  .step-card--wide { grid-column: span 2; }
}
@media (max-width: 600px) {
  .steps-grid { grid-template-columns: 1fr; }
  .step-card--wide { grid-column: span 1; }
}
</style>
