<template>
  <nav class="bg-black border-b-4 border-[#C9002B] font-press relative overflow-visible">
    <!-- flex principal com logo / menu desktop / burger -->
    <div class="flex items-center justify-between p-2 relative z-20">
      <!-- Logo -->
      <div class="h-8 pixelated flex-shrink-0">
        <slot name="logo">
          <img src="@/assets/imgs/pepsi-logo.webp" alt="Logo" class="h-8" />
        </slot>
      </div>
      <!-- Menu desktop -->
      <ul class="hidden sm:flex space-x-4 pixelated">
        <li
          v-for="item in items"
          :key="item"
          @click="$emit('select', item)"
          class="px-3 py-1 text-white cursor-pointer hover:bg-[#005CB4]"
        >
          {{ item }}
        </li>
      </ul>
      <!-- Burger mobile -->
      <button
        @click="isOpen = !isOpen"
        class="sm:hidden flex flex-col justify-around w-8 h-6 bg-transparent border-none cursor-pointer"
        aria-label="Toggle menu"
      >
        <span class="block w-full h-[4px] bg-[#f0c000]"></span>
        <span class="block w-full h-[4px] bg-[#f0c000]"></span>
        <span class="block w-full h-[4px] bg-[#f0c000]"></span>
      </button>
    </div>

    <!-- Ícone play/pause centralizado -->
    <div class="absolute inset-x-0 top-0 h-full flex justify-center items-center pointer-events-none">
      <span
        @click="togglePlay"
        class="pointer-events-auto button pixelated z-30"
        aria-label="Play/Pause"
      >
        <Icon name="lucide:play" v-if="!isPlaying" class="text-2xl text-white hover:text-[#C9002B] active:text-[#C9002B] focus:text-[#C9002B] cursor-pointer z-30" />
        <Icon name="lucide:pause" v-else class="text-2xl text-white hover:text-[#C9002B] active:text-[#C9002B] focus:text-[#C9002B] cursor-pointer z-30" />
      </span>
      <!-- elemento de áudio escondido -->
      <audio ref="audioRef" :src="musicFile"></audio>
    </div>

    <!-- Dropdown mobile -->
    <ul
      :class="[
        'sm:hidden absolute inset-x-0 top-full bg-black overflow-hidden transform origin-top transition-transform duration-300 ease-out',
        isOpen ? 'scale-y-100 z-20' : 'scale-y-0'
      ]"
    >
      <li
        v-for="item in items"
        :key="item"
        @click="$emit('select', item); isOpen = false"
        class="px-3 py-2 text-white cursor-pointer hover:bg-[#f0c000] hover:text-black pixelated"
      >
        {{ item }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import musicFile from '@/assets/sounds/top-gear-theme.mp3'

const props = defineProps({
  items: {
    type: Array as () => string[],
    default: () => ['Promo', 'Sabores', 'Saiba mais'],
  }
})

const isOpen = ref(false)
const isPlaying = ref(false)
const audioRef = ref<HTMLAudioElement>()


function togglePlay() {
  if (!audioRef.value) return

  // Garantir que o volume esteja em 15% antes de tocar
  audioRef.value.volume = 0.15

  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play()
    isPlaying.value = true
  }
}
</script>

<style scoped>
.font-press {
  font-family: 'Press Start 2P', monospace;
}
.pixelated {
  image-rendering: pixelated;
  text-rendering: optimizeLegibility;
}
/* Ajustes extras se quiser um ícone maior */
.button {
  padding: 0.5rem;
  font-size: 1.25rem;
}
</style>
