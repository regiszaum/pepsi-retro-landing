<script setup>
definePageMeta({
  layout: 'app'
})

const colors = ['#C9002B', '#004B93', '#005CB4', '#FFF']
const colorIndex = ref(0)
const colorDynamic = ref(colors[0])

let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    colorIndex.value = (colorIndex.value + 1) % colors.length
    colorDynamic.value = colors[colorIndex.value]
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <!-- Hero Section -->
    <section class="relative h-[500px] flex items-center justify-center bg-gray-800 text-white text-center px-4 overflow-hidden">
      <!-- Vídeo de fundo -->
      <video
        src="@/assets/video/pepsi_opening.mp4"
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover z-0"
      ></video>

      <!-- Overlay escura -->
      <div class="absolute inset-0 bg-black/50 z-10"></div>

      <!-- Conteúdo por cima do vídeo -->
      <div class="relative z-20">
        <h1 class="text-4xl md:text-5xl font-bold fpress">PESPI RETRÔ</h1>
        <p class="mt-3 text-lg md:text-xl max-w-2xl mx-auto fpress bg-black py-2 px-2">
          A QUERIDINHA DOS "MADRUGUERS"
        </p>
      </div>
    </section>


    <section class="py-12 bg-black relative">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-primary fpress">+ REFRESCÂNCIA</h2>
        <h2 class="text-3xl font-bold text-center text-primary mt-2 fpress">+ SABOR</h2>
        <div class="flex justify-center overflow-visible relative z-10">
          <img
            src="@/assets/imgs/pepsi-8bit.png"
            alt="Pepsi"
            class="transition-transform duration-300 ease-in-out hover:scale-125 relative z-20"
          />
        </div>
        <h2 class="text-3xl font-bold text-center mt-2 fpress transition-colors duration-500" :style="{ color: colorDynamic }">PEPSI 8bit</h2>
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