import { cpSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src  = resolve(__dirname, '../../images')
const dest = resolve(__dirname, '../public/images')

mkdirSync(dest, { recursive: true })
cpSync(src, dest, { recursive: true, force: true })
console.log('Images copied to public/images/')
