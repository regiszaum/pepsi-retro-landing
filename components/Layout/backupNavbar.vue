<template>
  <nav class="bg-black border-b-4 border-[#C9002B] font-press relative overflow-visible">
    <!-- NAV CONTENT -->
    <div class="flex items-center justify-between p-2 relative z-20">
      <div class="h-8 pixelated flex-shrink-0">
        <slot name="logo">
          <img src="@/assets/imgs/pepsi-logo.webp" alt="Logo" class="h-8" />
        </slot>
      </div>
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
    <div class="absolute inset-x-0 top-0 h-full flex justify-center items-center pointer-events-none z-10">
      <button
        @click="togglePlay"
        class="pointer-events-auto button pixelated"
        aria-label="Play/Pause"
      >
        <Icon
          v-if="!audioStore.isPlaying"
          name="lucide:play"
          class="text-2xl text-white hover:text-[#C9002B] cursor-pointer"
        />
        <Icon
          v-else
          name="lucide:pause"
          class="text-2xl text-white hover:text-[#C9002B] cursor-pointer"
        />
      </button>
      <!-- áudio escondido, mas com listeners -->
      <audio
        ref="audioRef"
        :src="musicFile"
        @timeupdate="onTimeUpdate"
      ></audio>
    </div>

    <!-- Mobile dropdown -->
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
import { ref, onMounted, watch } from 'vue'
import { useAudioStore } from '@/stores/audio'
import musicFile from '@/assets/sounds/top-gear-theme.mp3'

const props = defineProps({
  items: {
    type: Array as () => string[],
    default: () => ['Promo', 'Sabores', 'Saiba mais']
  }
})

const isOpen = ref(false)
const audioRef = ref<HTMLAudioElement | null>(null)
const audioStore = useAudioStore()

// Ao montar, configure volume, tempo e autoplay
onMounted(() => {
  if (!audioRef.value) return
  const audio = audioRef.value

  audio.volume = 0.15
  audio.currentTime = audioStore.progress
  audio.play().then(() => {
    audioStore.setPlaying(true)
  }).catch(() => {
    // autoplay pode falhar se não houver interação prévia
    audioStore.setPlaying(false)
  })
})

// Sincroniza progresso do audio ao store
function onTimeUpdate() {
  if (!audioRef.value) return
  audioStore.setProgress(audioRef.value.currentTime)
}

// Controla play/pause e store
function togglePlay() {
  if (!audioRef.value) return
  const audio = audioRef.value

  if (audioStore.isPlaying) {
    audio.pause()
    audioStore.setPlaying(false)
  } else {
    audio.play()
    audioStore.setPlaying(true)
  }
}

// Se quiser que alterações diretas no store reflitam no player:
watch(() => audioStore.isPlaying, (playing) => {
  if (!audioRef.value) return
  playing ? audioRef.value.play() : audioRef.value.pause()
})

watch(() => audioStore.progress, (time) => {
  if (!audioRef.value) return
  // apenas ajuste se a diferença for considerável
  if (Math.abs(audioRef.value.currentTime - time) > 0.5) {
    audioRef.value.currentTime = time
  }
})
</script>

<style scoped>
.font-press {
  font-family: 'Press Start 2P', monospace;
}
.pixelated {
  image-rendering: pixelated;
  text-rendering: optimizeLegibility;
}
.button {
  padding: 0.5rem;
  font-size: 1.25rem;
}
</style>
