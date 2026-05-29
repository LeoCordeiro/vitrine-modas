<template>
  <div>
    <div class="page-header">
      <v-container style="max-width:1280px">
        <div class="page-eyebrow page-anim page-anim-1">Contato</div>
        <h1 class="page-title page-anim page-anim-2">Solicitar<br><span class="gradient-text">seleção</span></h1>
        <p class="page-sub page-anim page-anim-3">Preencha o formulário e receba uma proposta personalizada em até 24h</p>
      </v-container>
    </div>
    <section style="padding:60px 16px; background:#FAFAFA">
      <v-container style="max-width:860px">
        <div class="form-card" v-if="!enviado" v-reveal>
          <div class="form-intro">
            <h2 class="form-title">Dados do seu negócio</h2>
            <p class="form-sub">Seleção de fornecedores de moda por segmento</p>
          </div>
          <div class="form-grid">
            <v-text-field v-model="nome" label="Seu nome ou loja" variant="outlined" density="comfortable" color="#7C3AED" />
            <v-text-field v-model="whatsapp" label="WhatsApp para retorno" variant="outlined" density="comfortable" color="#7C3AED" prepend-inner-icon="mdi-whatsapp" placeholder="(00) 00000-0000" @input="mascaraTelefone" maxlength="15" />
          </div>
          <v-text-field v-model="email" label="E-mail para retorno" variant="outlined" density="comfortable" color="#7C3AED" prepend-inner-icon="mdi-email-outline" placeholder="seu@email.com.br" type="email" class="mb-1" />
          <div class="form-grid">
            <v-select v-model="segmento" :items="segmentos" label="Segmento de moda" variant="outlined" density="comfortable" color="#7C3AED" />
            <v-select v-model="perfil" :items="perfis" label="Seu canal de venda" variant="outlined" density="comfortable" color="#7C3AED" />
          </div>
          <v-menu v-model="menuData" :close-on-content-click="false">
            <template #activator="{ props }">
              <v-text-field v-bind="props" :model-value="dataFormatada" label="Quando precisa dos fornecedores?" variant="outlined" density="comfortable" color="#7C3AED" prepend-inner-icon="mdi-calendar" readonly class="mb-1" />
            </template>
            <v-date-picker v-model="data" color="#7C3AED" :min="hoje" @update:model-value="menuData = false" />
          </v-menu>
          <v-textarea v-model="descricao" label="Descreva seu negócio e o que você procura" variant="outlined" rows="4" color="#7C3AED" />
          <a :href="whatsappLink" target="_blank" class="btn-submit" @click="confirmar">
            Solicitar seleção
          </a>
          <p class="form-note">Resposta em até 24h • Sem compromisso</p>
        </div>
        <div class="success-card" v-else>
          <v-icon size="48" color="#7C3AED">mdi-check-circle</v-icon>
          <h3 class="success-title">Solicitação recebida!</h3>
          <p class="success-text">Recebemos suas informações e vamos entrar em contato em breve pelo WhatsApp ou e-mail que você informou.</p>
          <div class="success-badges">
            <div class="success-badge">
              <v-icon size="14" color="#7C3AED" class="mr-2">mdi-whatsapp</v-icon>
              Via WhatsApp
            </div>
            <div class="success-badge">
              <v-icon size="14" color="#7C3AED" class="mr-2">mdi-email-outline</v-icon>
              Via e-mail
            </div>
          </div>
          <button class="btn-novo" @click="novaSolicitacao">Nova solicitação</button>
        </div>
      </v-container>
    </section>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
const nome = ref(''); const whatsapp = ref(''); const email = ref(''); const segmento = ref(''); const perfil = ref(''); const descricao = ref('')
const data = ref(null); const menuData = ref(false); const enviado = ref(false)
const hoje = new Date().toISOString().slice(0,10)
const dataFormatada = computed(() => { if (!data.value) return ''; return new Date(data.value).toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric' }) })
function mascaraTelefone() { let v = whatsapp.value.replace(/\D/g,'').slice(0,11); if (v.length <= 10) v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3'); else v = v.replace(/^(\d{2})(\d{5})(\d{0,4})/,'($1) $2-$3'); whatsapp.value = v }
function confirmar() { menuData.value = false; setTimeout(() => { enviado.value = true }, 500) }
function novaSolicitacao() { nome.value=''; whatsapp.value=''; email.value=''; segmento.value=''; perfil.value=''; descricao.value=''; data.value=null; enviado.value=false }
const segmentos = [
  'Casual',
  'Feminino Premium',
  'Moda Fitness',
  'Plus Size',
  'Moda Praia',
  'Básicos & Essenciais',
  'Lingerie & Moda Íntima',
  'Moda Masculina',
  'Camisas de Times',
  'Moda Infantil',
  'Moda Evangélica',
  'Moda Festa',
  'Outros',
]
const perfis = ['Loja física','Revendedora online (Instagram/WhatsApp)','Boutique','Loja virtual (site)','Estou começando']
const numero = '5511916395526'
const whatsappLink = computed(() => { const texto = `Olá, sou ${nome.value} e gostaria de solicitar uma seleção de fornecedores.\n\nSegmento: ${segmento.value}\nCanal: ${perfil.value}\nPrazo desejado: ${dataFormatada.value}\nDescrição: ${descricao.value}\nContato: ${whatsapp.value}`; return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}` })
</script>
<style scoped>
.page-header { background: linear-gradient(160deg, #FAFAFA 55%, #F5F3FF 100%); padding: 72px 16px 48px; }
.page-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #7C3AED; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
.page-eyebrow::before { content: ''; display: block; width: 20px; height: 1px; background: #7C3AED; }
.page-title { font-family: serif; font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 300; color: #1E1B4B; line-height: 1.05; margin-bottom: 12px; }
.gradient-text { background: linear-gradient(90deg, #7C3AED, #A855F7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-style: italic; }
.page-sub { font-size: 15px; color: #7C7A99; font-weight: 300; }
.form-card { background: #fff; border: 1px solid #E5E1F5; border-radius: 16px; padding: 40px; border-top: 3px solid #7C3AED; }
.form-intro { margin-bottom: 28px; }
.form-title { font-size: 20px; font-weight: 600; color: #1E1B4B; margin-bottom: 4px; }
.form-sub { font-size: 13px; color: #7C7A99; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 4px; }
.btn-submit { display: flex; align-items: center; justify-content: center; gap: 10px; background: linear-gradient(135deg, #7C3AED, #A855F7); color: #fff; font-size: 14px; font-weight: 600; padding: 15px; border-radius: 100px; text-decoration: none; transition: all 0.25s cubic-bezier(0.22,1,0.36,1); margin-top: 16px; box-shadow: 0 6px 20px rgba(124,58,237,0.3); }
.btn-submit:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(124,58,237,0.45); }
.form-note { text-align: center; font-size: 12px; color: #7C7A99; margin-top: 12px; }
.success-card { background: #fff; border: 1px solid #E5E1F5; border-radius: 16px; padding: 56px 40px; text-align: center; border-top: 3px solid #7C3AED; }
.success-title { font-family: serif; font-size: 1.8rem; font-weight: 300; color: #1E1B4B; margin: 16px 0 12px; }
.success-text { font-size: 15px; color: #7C7A99; line-height: 1.7; margin-bottom: 20px; max-width: 420px; margin-left: auto; margin-right: auto; }
.success-badges { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px; }
.success-badge { display: inline-flex; align-items: center; background: #EDE9FE; border-radius: 100px; padding: 8px 18px; font-size: 13px; color: #7C7A99; }
.success-badge strong { color: #7C3AED; margin-left: 4px; }
.btn-novo { background: transparent; border: 2px solid #1E1B4B; color: #1E1B4B; font-size: 13px; font-weight: 600; padding: 10px 28px; border-radius: 100px; cursor: pointer; transition: all 0.25s cubic-bezier(0.22,1,0.36,1); }
.btn-novo:hover { background: #1E1B4B; color: #fff; transform: translateY(-1px); }
@media (max-width: 600px) { .form-card { padding: 24px 16px; } .form-grid { grid-template-columns: 1fr; } }
</style>
