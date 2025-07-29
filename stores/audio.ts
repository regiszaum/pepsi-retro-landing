import { defineStore } from 'pinia'

export const useAudioStore = defineStore('audio', {
    state: () => ({
        isPlaying: false as boolean,
        progress: 0 as number
    }),
    actions: {
        setPlaying(val: boolean) {
            this.isPlaying = val
        },
        setProgress(time: number) {
            this.progress = time
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'audio',
                storage: localStorage,
            },
        ],
    }
})
