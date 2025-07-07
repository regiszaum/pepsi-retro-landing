<script setup>
defineProps({
  error: Object, // Captura o erro gerado pelo Nuxt
});

// Função para voltar à página anterior
const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    navigateTo("/"); // Redireciona para a página inicial se não houver histórico
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <!-- Imagem de erro -->
    <img src="https://via.placeholder.com/400x300?text=404+Not+Found" alt="Página não encontrada" class="w-96 mb-6" />

    <!-- Mensagem de erro -->
    <h1 class="text-4xl font-bold">Oops! Página não encontrada</h1>
    <p class="text-gray-600 dark:text-gray-400 mt-2">
      Parece que a página que você está tentando acessar não existe ou foi removida.
    </p>

    <!-- Botão para voltar -->
    <button
      @click="goBack"
      class="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition hover:cursor-pointer"
    >
      Voltar
    </button>
  </div>
</template>