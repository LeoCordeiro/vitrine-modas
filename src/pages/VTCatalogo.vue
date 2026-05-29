<template>
  <div>
    <div class="page-header">
      <v-container style="max-width:1280px">
        <div class="page-eyebrow page-anim page-anim-1">Catálogo Premium</div>
        <h1 class="page-title page-anim page-anim-2">Fornecedores para<br><span class="gradient-text">cada estilo de moda</span></h1>
        <p class="page-sub page-anim page-anim-3">Nossa rede é organizada por segmento e nível de mercado. Acesso por seleção personalizada.</p>
      </v-container>
    </div>

    <section style="padding:72px 16px; background:#FAFAFA">
      <v-container style="max-width:1280px">
        <div class="catalogo-grid" v-reveal="{ delay: 80 }">
          <div class="cat-card" v-for="cat in categorias" :key="cat.tag">
            <div class="cat-header">
              <span class="cat-tag">{{ cat.tag }}</span>
              <span class="cat-nivel">{{ cat.nivel }}</span>
            </div>
            <p class="cat-desc">{{ cat.desc }}</p>
            <div class="cat-items">
              <div class="cat-item" v-for="item in cat.items" :key="item">
                <div class="cat-dot"></div>
                <span>{{ item }}</span>
              </div>
            </div>
            <div class="cat-line"></div>
          </div>
        </div>
      </v-container>
    </section>

    <section style="padding:72px 16px; background:linear-gradient(135deg,#7C3AED,#A855F7)">
      <v-container style="max-width:860px; text-align:center">
        <h2 v-reveal style="font-family:serif; font-size:clamp(1.8rem,4vw,3rem); font-weight:300; color:#fff; line-height:1.1; margin-bottom:16px">
          O acesso ao catálogo<br><em>é feito por seleção</em>
        </h2>
        <p style="font-size:15px; color:rgba(255,255,255,0.65); line-height:1.7; margin-bottom:36px; font-weight:300">
          Os fornecedores não ficam disponíveis publicamente. O acesso é por seleção personalizada — assim você recebe só os que fazem sentido pro seu negócio.
        </p>
        <router-link to="/solicitar" class="btn-white">
          Solicitar seleção
          <v-icon size="14" class="ml-2">mdi-arrow-right</v-icon>
        </router-link>
      </v-container>
    </section>
  </div>
</template>

<script setup>
const categorias = [
  { tag: 'Casual', nivel: 'Entrada a Médio', desc: 'Fornecedores pra quem vende peças do dia a dia. Pedido mínimo acessível e boa margem.', items: ['Camisas e blusas básicas', 'Calças e leggings casuais', 'Vestidos do dia a dia', 'Conjuntos casuais'] },
  { tag: 'Feminino Premium', nivel: 'Médio a Alto', desc: 'Fabricantes com acabamento mais caprichado. Bom pra boutiques e lojas com preço mais alto.', items: ['Peças de alfaiataria', 'Vestidos de festa e passeio', 'Conjuntos sofisticados', 'Tecidos nobres'] },
  { tag: 'Moda Fitness', nivel: 'Médio', desc: 'Coleções novas com frequência e alta demanda em revendas online e físicas.', items: ['Leggings e tops de academia', 'Conjuntos de academia', 'Looks esportivos casuais', 'Tecidos esportivos'] },
  { tag: 'Plus Size', nivel: 'Entrada a Médio', desc: 'Modelagem feita pra esse público. Segmento que cresce bastante no Brasil todo ano.', items: ['Moda feminina P ao 54', 'Peças com modelagem inclusiva', 'Básicos e fashion plus', 'Lingerie plus size'] },
  { tag: 'Moda Praia', nivel: 'Médio', desc: 'Muito procurado em revendas online. Coleções sazonais com boas margens de revenda.', items: ['Biquínis e maiôs', 'Saídas de praia', 'Acessórios de praia', 'Coleções sazonais'] },
  { tag: 'Básicos & Essenciais', nivel: 'Entrada', desc: 'Ótimo pra quem está começando. Pedido mínimo baixo e peças que sempre saem.', items: ['Camisetas básicas', 'Calças e bermudas neutras', 'Peças-base para looks', 'Alta demanda constante'] },
  { tag: 'Lingerie & Moda Íntima', nivel: 'Entrada a Médio', desc: 'Alta procura em todo o Brasil. Clientela fiel, boa margem e variedade de tamanhos e modelos.', items: ['Sutiãs e calcinhas', 'Pijamas e loungewear', 'Lingerie de festa', 'Cuecas e coleções masculinas'] },
  { tag: 'Moda Masculina', nivel: 'Entrada a Médio', desc: 'Segmento sólido com demanda constante em lojas físicas e no online. Bom valor médio de compra.', items: ['Camisas sociais e casuais', 'Calças, bermudas e shorts', 'Conjuntos masculinos', 'Moda esportiva masculina'] },
  { tag: 'Camisas de Times', nivel: 'Entrada', desc: 'Produto de saída rápida. Altíssima demanda em épocas de campeonatos e jogos.', items: ['Times brasileiros (Série A e B)', 'Seleção brasileira', 'Times internacionais', 'Réplicas e modelos exclusivos'] },
  { tag: 'Moda Infantil', nivel: 'Entrada a Médio', desc: 'Público fiel e coleções renovadas com frequência. Demanda constante o ano todo.', items: ['Roupas de bebê (0 a 2 anos)', 'Infantil menina e menino', 'Conjuntos e bodies', 'Moda teen'] },
  { tag: 'Moda Evangélica', nivel: 'Médio', desc: 'Um dos nichos que mais crescem no Brasil. Valor médio elevado e cliente muito fiel.', items: ['Vestidos longos e saias', 'Roupas sociais discretas', 'Moda gospel feminina', 'Roupas para eventos religiosos'] },
  { tag: 'Moda Festa', nivel: 'Médio a Alto', desc: 'Alta margem de revenda e ótimo pra datas especiais e temporada de formaturas.', items: ['Vestidos de festa e formatura', 'Looks para madrinha e debutante', 'Moda de noiva e convidada', 'Acessórios para ocasiões especiais'] },
]
</script>

<style scoped>
.page-header { background: linear-gradient(160deg, #FAFAFA 55%, #F5F3FF 100%); padding: 72px 16px 48px; }
.page-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #7C3AED; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
.page-eyebrow::before { content: ''; display: block; width: 20px; height: 1px; background: #7C3AED; }
.page-title { font-family: serif; font-size: clamp(2.4rem, 5vw, 4.2rem); font-weight: 300; color: #1E1B4B; line-height: 1.05; margin-bottom: 16px; }
.gradient-text { background: linear-gradient(90deg, #7C3AED, #A855F7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-style: italic; }
.page-sub { font-size: 15px; color: #7C7A99; line-height: 1.7; max-width: 520px; font-weight: 300; }
.catalogo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.cat-card { background: #fff; border: 1px solid #E5E1F5; border-radius: 16px; padding: 28px; transition: all 0.3s cubic-bezier(0.22,1,0.36,1); }
.cat-card:hover { border-color: rgba(124,58,237,0.35); box-shadow: 0 10px 36px rgba(124,58,237,0.1); transform: translateY(-4px); }
.cat-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.cat-tag { background: linear-gradient(135deg, #7C3AED, #A855F7); color: #fff; font-size: 9px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; padding: 4px 12px; border-radius: 100px; }
.cat-nivel { font-size: 11px; color: #7C7A99; }
.cat-desc { font-size: 13px; color: #7C7A99; line-height: 1.65; font-weight: 300; margin-bottom: 14px; }
.cat-items { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; border-top: 1px solid #E5E1F5; padding-top: 14px; }
.cat-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #7C7A99; font-weight: 300; }
.cat-dot { width: 5px; height: 5px; border-radius: 50%; background: #A855F7; flex-shrink: 0; }
.cat-line { width: 0; height: 2px; background: linear-gradient(90deg, #7C3AED, #C084FC); transition: width 0.45s cubic-bezier(0.22,1,0.36,1); margin-top: 14px; border-radius: 100px; }
.cat-card:hover .cat-line { width: 36px; }
.btn-white { display: inline-flex; align-items: center; background: #fff; color: #7C3AED; font-size: 12px; font-weight: 700; padding: 13px 32px; border-radius: 100px; text-decoration: none; transition: all 0.25s; letter-spacing: 0.08em; text-transform: uppercase; box-shadow: 0 4px 16px rgba(0,0,0,0.12); }
.btn-white:hover { background: #F5F3FF; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
@media (max-width: 768px) { .catalogo-grid { grid-template-columns: 1fr; } }
</style>
