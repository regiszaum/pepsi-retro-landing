<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false); // Estado do menu responsivo

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav class="bg-white dark:bg-gray-900 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="/" class="text-2xl font-bold text-primary dark:text-white">
            LOGO
          </a>
        </div>

        <!-- Menu Desktop -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink to="/" class="text-gray-800 dark:text-gray-200 hover:text-primary">Início</NuxtLink>
          <NuxtLink to="/informacoes" class="text-gray-800 dark:text-gray-200 hover:text-primary">Informações</NuxtLink>
          <NuxtLink to="/contato" class="text-gray-800 dark:text-gray-200 hover:text-primary">Contato</NuxtLink>
          <NuxtLink to="/loja" class="text-gray-800 dark:text-gray-200 hover:text-primary">Loja</NuxtLink>
        </div>

        <!-- Botão Menu Mobile -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-800 dark:text-gray-200 focus:outline-none">
            <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div v-if="isOpen" class="md:hidden bg-white dark:bg-gray-900 shadow-md">
      <NuxtLink to="/" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Início</NuxtLink>
      <NuxtLink to="/informacoes" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Informações</NuxtLink>
      <NuxtLink to="/contato" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Contato</NuxtLink>
      <NuxtLink to="/loja" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Loja</NuxtLink>
    </div>
  </nav>
</template>
