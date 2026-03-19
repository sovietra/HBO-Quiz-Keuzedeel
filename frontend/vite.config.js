import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir  = path.resolve(__dirname, '..', 'images')
const publicImgs = path.resolve(__dirname, 'public', 'images')

function imagesPlugin() {
  return {
    name: 'images-plugin',

    // DEV: serve /images/* from the sibling images/ folder
    configureServer(server) {
      server.middlewares.use('/images', (req, res, next) => {
        const file = path.join(imagesDir, decodeURIComponent(req.url ?? '/').replace(/^\/+/, ''))
        if (fs.existsSync(file) && fs.statSync(file).isFile()) {
          const ext = path.extname(file).toLowerCase()
          res.setHeader('Content-Type', ext === '.png' ? 'image/png' : 'image/jpeg')
          res.setHeader('Cache-Control', 'public, max-age=86400')
          fs.createReadStream(file).pipe(res)
        } else {
          next()
        }
      })
    },

    // BUILD: copy images into public/images/ so Vite includes them in dist/
    buildStart() {
      if (fs.existsSync(imagesDir)) {
        fs.mkdirSync(publicImgs, { recursive: true })
        fs.cpSync(imagesDir, publicImgs, { recursive: true, force: true })
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), imagesPlugin()],
  server: { port: 5173 }
})
