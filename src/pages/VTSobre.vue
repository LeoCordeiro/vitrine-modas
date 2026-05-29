<template>
  <div>
    <div class="page-header">
      <v-container style="max-width:1280px">
        <div class="page-eyebrow page-anim page-anim-1">Sobre</div>
        <h1 class="page-title page-anim page-anim-2">Quem está por trás<br><span class="gradient-text">do catálogo</span></h1>
      </v-container>
    </div>
    <section style="padding:72px 16px; background:#FAFAFA">
      <v-container style="max-width:1280px">
        <div class="two-col" v-reveal>
          <div class="info-card">
            <img :src="require('@/assets/logohero.png')" style="height:80px; display:block; margin:0 auto 24px" />
            <div class="info-grid">
              <div v-for="info in infos" :key="info.label">
                <div style="font-size:13px; color:#7C3AED; font-weight:500">{{ info.val }}</div>
                <div style="font-size:10px; color:#7C7A99; text-transform:uppercase; letter-spacing:0.12em">{{ info.label }}</div>
              </div>
            </div>
          </div>
          <div>
            <p class="quote">"O mercado de moda tem fornecedores incríveis — o problema é que a maioria dos lojistas não sabe onde encontrá-los."</p>
            <p class="body-text">Foi pra resolver isso que a Vitrine foi criada. Com fornecedores em todo o Brasil, montamos uma rede organizada por segmento com seleção e contato direto.</p>
            <p class="body-text">Todo fornecedor da rede é verificado antes de ser indicado. Você recebe apenas os que fazem sentido pro seu negócio.</p>
          </div>
        </div>
      </v-container>
    </section>
    <section style="padding:72px 16px; background:#F5F3FF">
      <v-container style="max-width:1280px">
        <div class="page-eyebrow">Valores</div>
        <h2 class="section-heading mb-10">O que guia cada <em class="text-violet">seleção</em></h2>
        <div class="valores-grid" v-reveal="{ delay: 100 }">
          <div class="valor-card" v-for="v in valores" :key="v.title">
            <div class="valor-line"></div>
            <h3 class="valor-title">{{ v.title }}</h3>
            <p class="valor-desc">{{ v.desc }}</p>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>
<script setup>
const infos = [
  { val: 'Osasco, SP', label: 'Sede' },
  { val: 'Dez/2024', label: 'Fundação' },
  { val: 'Brasil todo', label: 'Cobertura' },
  { val: 'Moda feminina', label: 'Onde começamos' },
]
const valores = [
  { title: 'Indicações reais', desc: 'Só indicamos fornecedores que conhecemos de verdade.' },
  { title: 'Seleção sob medida', desc: 'Cada cliente recebe uma indicação baseada no seu estilo e canal de venda.' },
  { title: 'Foco no resultado', desc: 'Só temos sucesso quando o lojista também tem.' },
]
</script>
<style scoped>
.page-header { background: linear-gradient(160deg, #FAFAFA 55%, #F5F3FF 100%); padding: 72px 16px 48px; }
.page-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #7C3AED; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
.page-eyebrow::before { content: ''; display: block; width: 20px; height: 1px; background: #7C3AED; }
.page-title { font-family: serif; font-size: clamp(2.4rem, 5vw, 4.2rem); font-weight: 300; color: #1E1B4B; line-height: 1.05; }
.gradient-text { background: linear-gradient(90deg, #7C3AED, #A855F7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-style: italic; }
.two-col { display: grid; grid-template-columns: 1fr 1.3fr; gap: 56px; align-items: center; }
.info-card { background: #fff; border: 1px solid #E5E1F5; border-radius: 16px; padding: 32px; border-top: 3px solid #7C3AED; }
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; border-top: 1px solid #E5E1F5; padding-top: 16px; margin-top: 4px; }
.quote { font-family: serif; font-size: 1.3rem; color: #1E1B4B; line-height: 1.6; font-style: italic; margin-bottom: 20px; font-weight: 300; }
.body-text { font-size: 14px; color: #7C7A99; line-height: 1.8; margin-bottom: 14px; font-weight: 300; }
.section-heading { font-family: serif; font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 300; color: #1E1B4B; line-height: 1.1; }
.text-violet { color: #7C3AED; font-style: italic; }
.mb-10 { margin-bottom: 40px; }
.valores-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.valor-card { background: #fff; border: 1px solid #E5E1F5; border-radius: 16px; padding: 28px; transition: all 0.3s cubic-bezier(0.22,1,0.36,1); overflow: hidden; position: relative; }
.valor-card:hover { border-color: rgba(124,58,237,0.35); box-shadow: 0 8px 28px rgba(124,58,237,0.1); transform: translateY(-4px); }
.valor-line { width: 0; height: 2px; background: linear-gradient(90deg, #7C3AED, #C084FC); margin-bottom: 16px; transition: width 0.45s cubic-bezier(0.22,1,0.36,1); border-radius: 100px; }
.valor-card:hover .valor-line { width: 28px; }
.valor-title { font-size: 1.1rem; font-family: serif; color: #1E1B4B; margin-bottom: 8px; }
.valor-desc { font-size: 13px; color: #7C7A99; line-height: 1.6; font-weight: 300; }
@media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } .valores-grid { grid-template-columns: 1fr; } }
</style>
