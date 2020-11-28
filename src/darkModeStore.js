import { writable } from 'svelte/store'
const darkMode = writable('DarkMode')
darkMode.set(false)
export default darkMode