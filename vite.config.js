// vite.config.js
import { readFile } from 'node:fs/promises'

// Encode with `node vite.config.js "my secret message"`
const E = [' :/?=&!#%']
try {
  process.env.VITE_ALPHA = await readFile('/s', { encoding: 'utf-8' })
} catch {}
if (import.meta?.url?.endsWith(process.argv[1]) && process.argv[2]) {
  const orig = process.argv[2]
  const result = orig
    .split('')
    .map((c) => (E.includes(c) ? encodeURIComponent(c) : c))
    .join(',')
  console.log(result)
}

export default {
  // config options
}
