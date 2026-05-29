<template>
  <div>

    <!-- HERO -->
    <div class="vt-hero">
      <v-container style="max-width:1280px">
        <div class="hero-grid">

          <div class="hero-left">
            <div class="hero-eyebrow hero-anim hero-anim-1">
              <span class="eyebrow-line"></span>
              Catálogo Premium de Fornecedores
            </div>

            <h1 class="hero-title hero-anim hero-anim-2">
              O catálogo certo<br>
              para cada<br>
              <span class="hero-gradient">estilo de moda</span>
            </h1>

            <p class="hero-desc hero-anim hero-anim-3">
              Conectamos lojistas e revendedoras com os fornecedores certos pra cada tipo de moda. Com seleção e contato direto.
            </p>

            <div class="hero-tags hero-anim hero-anim-4">
              <router-link to="/catalogo" class="tag" v-for="t in tags" :key="t">{{ t }}</router-link>
              <router-link to="/catalogo" class="tag tag--outros">+ Outros</router-link>
            </div>

            <div class="hero-actions hero-anim hero-anim-5">
              <router-link to="/solicitar" class="btn-primary">
                Acessar catálogo
                <v-icon size="16" class="ml-2">mdi-arrow-right</v-icon>
              </router-link>
              <router-link to="/como-funciona" class="btn-ghost">Como funciona</router-link>
            </div>

            <div class="hero-metrics hero-anim hero-anim-6">
              <div class="metric" v-for="m in metricas" :key="m.label">
                <div class="metric-value">{{ m.value }}</div>
                <div class="metric-label">{{ m.label }}</div>
              </div>
            </div>
          </div>

          <div class="hero-right">
            <img :src="require('@/assets/logohero.png')" class="hero-right-logo hero-logo-anim" />
            <div class="check-list">
              <div
                class="check-item hero-check-anim"
                v-for="(item, i) in checklist"
                :key="item"
                :style="{ animationDelay: (1.1 + i * 0.18) + 's' }"
              >
                <div class="check-box"><v-icon size="10" color="#7C3AED">mdi-check</v-icon></div>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

        </div>
      </v-container>
    </div>

    <!-- FAIXA -->
    <div class="vt-faixa">
      <v-container style="max-width:1280px">
        <div class="faixa-grid" v-reveal="{ stagger: true, interval: 80 }">
          <div class="faixa-item" v-for="f in faixa" :key="f.label">
            <div class="faixa-value">{{ f.value }}</div>
            <div class="faixa-label">{{ f.label }}</div>
          </div>
        </div>
      </v-container>
    </div>

    <!-- CATÁLOGO POR ESTILO -->
    <section class="section-white">
      <v-container style="max-width:1280px">
        <div class="section-eyebrow" v-reveal>Catálogo premium</div>
        <div class="section-header-grid" v-reveal="{ delay: 120 }">
          <h2 class="section-heading">Fornecedores selecionados<br><em class="text-violet">para cada estilo</em></h2>
          <p class="section-sub">Todos os fornecedores são verificados antes de entrar na rede — e a indicação é feita por segmento.</p>
        </div>

        <div class="estilos-grid" v-reveal="{ delay: 80 }">
          <div class="estilo-card" v-for="e in estilos" :key="e.tag">
            <div class="estilo-tag">{{ e.tag }}</div>
            <p class="estilo-desc">{{ e.desc }}</p>
            <div class="estilo-line"></div>
          </div>
        </div>

        <div class="text-center mt-10" v-reveal="{ delay: 160 }">
          <router-link to="/catalogo" class="btn-outline-violet">
            Ver catálogo completo
            <v-icon size="14" class="ml-2">mdi-arrow-right</v-icon>
          </router-link>
        </div>
      </v-container>
    </section>

    <!-- CTA FINAL -->
    <section class="section-dark">
      <v-container style="max-width:900px; text-align:center">
        <h2 class="cta-title" v-reveal>Acesse o catálogo<br><span class="cta-gradient">certo para o seu estilo</span></h2>
        <p class="cta-sub" v-reveal="{ delay: 120 }">Seleção e contato direto com os melhores fornecedores do mercado de moda.</p>
        <div class="cta-actions" v-reveal="{ delay: 240 }">
          <router-link to="/solicitar" class="btn-primary">
            Acessar catálogo
            <v-icon size="14" class="ml-2">mdi-arrow-right</v-icon>
          </router-link>
          <router-link to="/como-funciona" class="btn-ghost-dark">Saiba mais</router-link>
        </div>
      </v-container>
    </section>

  </div>
</template>

<script setup>
const tags = ['Casual', 'Fitness', 'Plus Size', 'Lingerie', 'Masculino', 'Times', 'Infantil']

const metricas = [
  { value: '24h', label: 'tempo de retorno' },
  { value: '5 dias', label: 'proposta pronta' },
  { value: '100%', label: 'sem compromisso' },
]

const checklist = [
  'Fornecedores por segmento de moda',
  'Fornecedores verificados',
  'Contato e negociação por nossa conta',
  'Fornecedores em todo o Brasil',
]

const faixa = [
  { value: '+12', label: 'Segmentos de moda' },
  { value: '+200', label: 'Fornecedores na rede' },
  { value: '100%', label: 'Seleção personalizada' },
  { value: 'Brasil todo', label: 'Cobertura' },
]

const estilos = [
  { tag: 'Casual', desc: 'Fornecedores pra quem vende peças do dia a dia. Pedido mínimo acessível e boa margem.' },
  { tag: 'Feminino Premium', desc: 'Fabricantes com acabamento mais caprichado, pra boutiques e lojas com preço mais alto.' },
  { tag: 'Moda Fitness', desc: 'Coleções renovadas com frequência e muita demanda em revenda online e física.' },
  { tag: 'Plus Size', desc: 'Fornecedores com modelagem feita pra esse público — segmento que cresce todo ano.' },
  { tag: 'Moda Praia', desc: 'Muito procurado em revendas online. Coleções sazonais com boas margens.' },
  { tag: 'Básicos & Essenciais', desc: 'Ótimo pra quem está começando. Pedido mínimo baixo e peças que saem todo dia.' },
  { tag: 'Lingerie & Moda Íntima', desc: 'Alta procura em todo o Brasil. Clientela fiel e boa margem de revenda.' },
  { tag: 'Moda Masculina', desc: 'Segmento sólido com demanda constante em lojas físicas e online.' },
  { tag: 'Camisas de Times', desc: 'Produto de saída rápida. Altíssima demanda em épocas de campeonatos.' },
  { tag: 'Moda Infantil', desc: 'Público fiel e coleções renovadas. Demanda constante o ano todo.' },
  { tag: 'Moda Evangélica', desc: 'Um dos nichos que mais crescem no país. Valor médio elevado e cliente muito fiel.' },
  { tag: 'Moda Festa', desc: 'Alta margem de revenda. Ótimo para formaturas e datas especiais.' },
]

</script>

<style scoped>
/* TIPOGRAFIA BASE */
* { font-family: 'DM Sans', system-ui, sans-serif; }

/* ─── HERO ─── */
.vt-hero {
  position: relative;
  background: #08051A;
  padding: 72px 0 56px;
  min-height: 82vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.vt-hero::before {
  content: '';
  position: absolute;
  top: -180px; right: -180px;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%);
  pointer-events: none;
}
.vt-hero::after {
  content: '';
  position: absolute;
  bottom: -120px; left: -120px;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%);
  pointer-events: none;
}

.hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 72px; align-items: center; position: relative; z-index: 1; }

.hero-eyebrow {
  display: flex; align-items: center; gap: 12px;
  font-size: 10px; font-weight: 600; letter-spacing: 0.22em;
  text-transform: uppercase; color: #A78BFA; margin-bottom: 28px;
  font-family: 'DM Sans', sans-serif;
}
.eyebrow-line { width: 32px; height: 1px; background: #7C3AED; flex-shrink: 0; }

.hero-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(3rem, 5vw, 5.2rem);
  font-weight: 300;
  color: #F5F3FF;
  line-height: 1.05;
  letter-spacing: -0.01em;
  margin-bottom: 24px;
}
.hero-gradient {
  background: linear-gradient(90deg, #C084FC, #E879F9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: italic;
}

.hero-desc {
  font-size: 15px; color: rgba(245,243,255,0.55);
  line-height: 1.8; max-width: 480px;
  margin-bottom: 28px; font-weight: 300;
}

.hero-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
.tag {
  padding: 5px 14px;
  border: 1px solid rgba(167,139,250,0.25);
  font-size: 11px; color: rgba(245,243,255,0.45);
  border-radius: 100px;
  transition: all 0.2s; cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  text-decoration: none;
}
.tag:hover { border-color: #A78BFA; color: #C084FC; transform: translateY(-1px); }
.tag--outros {
  border-color: rgba(167,139,250,0.45);
  color: rgba(167,139,250,0.7);
  font-weight: 600;
}

.hero-actions { display: flex; align-items: center; gap: 16px; margin-bottom: 40px; flex-wrap: wrap; }

.btn-primary {
  display: inline-flex; align-items: center;
  background: linear-gradient(135deg, #7C3AED, #9333EA);
  color: #fff; font-size: 12px; font-weight: 600;
  padding: 14px 28px; border-radius: 100px;
  text-decoration: none; transition: all 0.25s;
  letter-spacing: 0.08em; text-transform: uppercase;
  font-family: 'DM Sans', sans-serif;
  box-shadow: 0 0 0 0 rgba(124,58,237,0);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(124,58,237,0.45);
  background: linear-gradient(135deg, #6D28D9, #7C3AED);
}

.btn-ghost {
  color: rgba(245,243,255,0.5); font-size: 13px;
  text-decoration: none; border-bottom: 1px solid rgba(245,243,255,0.15);
  padding-bottom: 2px; transition: all 0.2s;
  font-family: 'DM Sans', sans-serif;
}
.btn-ghost:hover { color: #C084FC; border-color: #A78BFA; }

.hero-metrics {
  display: flex; gap: 36px; padding-top: 28px;
  border-top: 1px solid rgba(167,139,250,0.15);
}
.metric-value {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 28px; font-weight: 400; color: #F5F3FF;
  line-height: 1; letter-spacing: -0.01em;
}
.metric-label {
  font-size: 10px; color: rgba(245,243,255,0.4);
  text-transform: uppercase; letter-spacing: 0.12em; margin-top: 4px;
  font-family: 'DM Sans', sans-serif;
}

/* HERO RIGHT */
.hero-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-right-logo {
  height: 140px; width: auto; display: block;
  margin: 0 auto 48px; opacity: 0.9;
}
.check-list { display: flex; flex-direction: column; }
.check-item {
  display: flex; align-items: center; gap: 14px;
  font-size: 14px; color: rgba(245,243,255,0.55);
  font-family: 'DM Sans', sans-serif;
  padding: 16px 0;
  border-bottom: 1px solid rgba(167,139,250,0.1);
}
.check-item:last-child { border-bottom: none; }
.check-box {
  width: 22px; height: 22px;
  background: rgba(124,58,237,0.15);
  border: 1px solid rgba(124,58,237,0.3);
  border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

/* FAIXA */
.vt-faixa { background: #0E0A26; border-top: 1px solid rgba(167,139,250,0.12); border-bottom: 1px solid rgba(167,139,250,0.12); padding: 28px 0; }
.faixa-grid { display: grid; grid-template-columns: repeat(4, 1fr); text-align: center; gap: 16px; }
.faixa-value {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem; font-weight: 400; color: #E9D5FF; line-height: 1;
}
.faixa-label { font-size: 10px; color: rgba(245,243,255,0.35); text-transform: uppercase; letter-spacing: 0.12em; margin-top: 5px; font-family: 'DM Sans', sans-serif; }

/* SECTIONS */
.section-white { padding: 88px 16px; background: #FAFAFA; }
.section-dark { padding: 96px 16px; background: #08051A; text-align: center; }

.section-eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 10px; font-weight: 600; letter-spacing: 0.22em;
  text-transform: uppercase; color: #7C3AED; margin-bottom: 16px;
  display: flex; align-items: center; gap: 10px;
}
.section-eyebrow::before { content: ''; display: block; width: 20px; height: 1px; background: #7C3AED; }
.section-header-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: end; margin-bottom: 52px; }
.section-heading {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(2.2rem, 3.5vw, 3.2rem);
  font-weight: 300; color: #1E1B4B; line-height: 1.1; letter-spacing: -0.01em;
}
.section-sub { font-size: 14px; color: #7C7A99; line-height: 1.75; font-weight: 300; font-family: 'DM Sans', sans-serif; }
.text-violet { color: #7C3AED; font-style: italic; }

/* ESTILOS GRID */
.estilos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: #E5E1F5; border-radius: 16px; overflow: hidden; }
.estilo-card { background: #fff; padding: 30px; transition: all 0.25s; cursor: default; }
.estilo-card:hover { background: #FAFAFA; }
.estilo-tag {
  display: inline-block;
  background: linear-gradient(135deg, #7C3AED, #A855F7);
  color: #fff; font-size: 9px; font-weight: 600;
  letter-spacing: 0.2em; text-transform: uppercase;
  padding: 5px 12px; margin-bottom: 16px;
  border-radius: 100px;
  font-family: 'DM Sans', sans-serif;
}
.estilo-desc { font-size: 13px; color: #7C7A99; line-height: 1.7; font-weight: 300; font-family: 'DM Sans', sans-serif; }
.estilo-line { width: 0; height: 1px; background: #7C3AED; transition: width 0.4s; margin-top: 16px; }
.estilo-card:hover .estilo-line { width: 28px; }

/* BUTTONS */
.btn-outline-violet {
  display: inline-flex; align-items: center;
  border: 1.5px solid #7C3AED; color: #7C3AED;
  font-size: 12px; font-weight: 600; padding: 12px 26px;
  text-decoration: none; transition: all 0.2s;
  letter-spacing: 0.08em; text-transform: uppercase;
  border-radius: 100px; font-family: 'DM Sans', sans-serif;
}
.btn-outline-violet:hover { background: #7C3AED; color: #fff; }

/* CTA DARK */
.cta-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 300; color: #F5F3FF; line-height: 1.05; margin-bottom: 20px;
}
.cta-gradient {
  background: linear-gradient(90deg, #C084FC, #E879F9);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-style: italic;
}
.cta-sub {
  font-size: 15px; color: rgba(245,243,255,0.4); line-height: 1.8;
  margin-bottom: 40px; font-weight: 300; max-width: 480px;
  margin-left: auto; margin-right: auto; font-family: 'DM Sans', sans-serif;
}
.cta-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.btn-ghost-dark {
  display: inline-flex; align-items: center;
  border: 1.5px solid rgba(255,255,255,0.18);
  color: rgba(255,255,255,0.55);
  font-size: 12px; font-weight: 500; padding: 14px 28px;
  text-decoration: none; transition: all 0.2s;
  letter-spacing: 0.08em; text-transform: uppercase;
  border-radius: 100px; font-family: 'DM Sans', sans-serif;
}
.btn-ghost-dark:hover { border-color: rgba(255,255,255,0.45); color: #fff; }

@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-right { display: none; }
  .section-header-grid { grid-template-columns: 1fr; }
  .estilos-grid { grid-template-columns: 1fr 1fr; }
  .faixa-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .estilos-grid { grid-template-columns: 1fr; }
  .faixa-grid { grid-template-columns: 1fr 1fr; }
}
</style>
