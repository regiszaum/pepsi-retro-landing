<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const modules = [Pagination, Autoplay];
definePageMeta({
  layout: 'app'
})
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <!-- Hero Section -->
    <section class="relative h-[500px] flex items-center justify-center bg-gray-800 text-white text-center px-4">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold finter">Sua Agência de Tecnologia</h1>
        <p class="mt-3 text-lg md:text-xl max-w-2xl mx-auto fpress">
          Criamos sites, sistemas internos, aplicativos móveis, marketing digital e social media para impulsionar sua empresa no mundo digital.
        </p>
      </div>
    </section>

    <!-- Slider de Imagens -->
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-primary">Nossos Projetos</h2>
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 3000 }"
          class="mt-6"
        >
          <SwiperSlide>
            <img src="https://source.unsplash.com/800x400/?technology,website" alt="Projeto 1" class="w-full h-64 object-cover rounded-lg shadow-md" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://source.unsplash.com/800x400/?mobile,app" alt="Projeto 2" class="w-full h-64 object-cover rounded-lg shadow-md" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://source.unsplash.com/800x400/?marketing,digital" alt="Projeto 3" class="w-full h-64 object-cover rounded-lg shadow-md" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <!-- Sobre a Empresa -->
    <section class="py-12 bg-white dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-primary">Quem Somos</h2>
        <p class="mt-4 text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Somos uma agência especializada no desenvolvimento de soluções digitais, incluindo sites institucionais, sistemas internos personalizados, 
          aplicativos mobile e estratégias de marketing digital para empresas de todos os tamanhos.
        </p>
      </div>
    </section>

    <!-- Valores da Empresa -->
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-primary froboto">Nossos Valores</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
            <h3 class="text-xl font-semibold text-secondary">Inovação</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Estamos sempre à frente das tendências, desenvolvendo soluções inovadoras para nossos clientes.
            </p>
          </div>
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
            <h3 class="text-xl font-semibold text-secondary">Qualidade</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Entregamos projetos com excelência, garantindo alto desempenho e usabilidade.
            </p>
          </div>
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
            <h3 class="text-xl font-semibold text-secondary">Compromisso</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Trabalhamos lado a lado com nossos clientes para garantir os melhores resultados.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 bg-primary text-white text-center">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold">Pronto para levar sua empresa ao próximo nível?</h2>
        <p class="mt-2 text-lg">
          Entre em contato conosco e descubra como podemos transformar seu negócio digitalmente!
        </p>
        <NuxtLink to="/contato" class="mt-4 inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
          Fale Conosco
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style>
.finter {
  font-family: 'Inter';
}

.fpress {
  font-family: 'Press Start 2P';
}

.froboto {
  font-family: 'Roboto';
}
</style>