export const handleImage = (url: string) => {
    const imagePath = `/src/assets/img/${url}`
    return new URL(imagePath, import.meta.url).href
}


export const handleSessionStorage = {
    set: (key: string, value: any) => {
        sessionStorage.setItem(key, JSON.stringify(value))
    },
    get: (key: string) => {
        const value = sessionStorage.getItem(key)
        return value ? JSON.parse(value) : null
    },
    remove: (key: string) => {
        sessionStorage.removeItem(key)
    },
    clear: () => {
        sessionStorage.clear()
    }
}