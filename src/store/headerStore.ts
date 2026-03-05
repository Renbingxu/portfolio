import { defineStore } from "pinia";



export const useSplashStore = defineStore('splash', {
    state: () => ({
        isVisible: false
    }),
    actions: {
        changeStatus(status: boolean) {
            this.isVisible = status
        }
    }
})