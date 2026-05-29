<template>
  <v-app-bar height="72" flat color="transparent" elevation="0" class="vt-header-glass" style="background: rgba(8,5,26,0.92) !important; backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);">
    <v-container class="d-flex align-center" style="max-width:1280px">

      <v-btn icon class="mr-2 d-md-none" @click="drawer = !drawer" variant="text">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <router-link to="/" style="text-decoration:none; display:flex; align-items:center">
        <img :src="require('@/assets/logoheader.png')" style="height:52px; width:auto" />
      </router-link>

      <v-spacer />

      <nav class="d-none d-md-flex align-center" style="gap:4px">
        <router-link to="/sobre" class="vt-nav-link">Sobre</router-link>
        <router-link to="/como-funciona" class="vt-nav-link">Como funciona</router-link>
        <router-link to="/catalogo" class="vt-nav-link">Catálogo</router-link>
        <div class="vt-divider"></div>
        <router-link to="/solicitar" class="vt-cta-link">
          Acessar catálogo
          <v-icon size="13" class="ml-1">mdi-arrow-right</v-icon>
        </router-link>
      </nav>

    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary location="left">
    <div class="pa-5" style="border-bottom:1px solid #E5E1F5">
      <img :src="require('@/assets/logoheader.png')" style="height:48px; width:auto" />
    </div>
    <v-list class="mt-2">
      <v-list-item to="/" title="Início" prepend-icon="mdi-home-outline" />
      <v-list-item to="/sobre" title="Sobre" prepend-icon="mdi-information-outline" />
      <v-list-item to="/como-funciona" title="Como funciona" prepend-icon="mdi-help-circle-outline" />
      <v-list-item to="/catalogo" title="Catálogo" prepend-icon="mdi-view-grid-outline" />
      <v-divider class="my-2" />
      <v-list-item to="/solicitar" title="Acessar catálogo" prepend-icon="mdi-sparkles" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>

<style scoped>
.vt-header-glass {
  background: rgba(8, 5, 26, 0.72) !important;
  backdrop-filter: blur(18px) !important;
  -webkit-backdrop-filter: blur(18px) !important;
  border-bottom: 1px solid rgba(167, 139, 250, 0.12) !important;
}
.vt-nav-link { text-decoration:none; color:#7C7A99; font-size:11px; font-weight:500; padding:8px 14px; border-radius:100px; transition:all 0.2s; letter-spacing:0.12em; text-transform:uppercase; }
.vt-nav-link:hover { color:#7C3AED; background:#F5F3FF; }
.vt-divider { width:1px; height:20px; background:rgba(255,255,255,0.15); margin:0 8px; }
.vt-cta-link { text-decoration:none; display:inline-flex; align-items:center; background:#7C3AED; color:#fff; font-size:12px; font-weight:600; padding:9px 20px; border-radius:100px; transition:all 0.25s; letter-spacing:0.08em; text-transform:uppercase; }
.vt-cta-link:hover { background:#6D28D9; transform:translateY(-1px); box-shadow:0 8px 20px rgba(124,58,237,0.4); }
</style>
