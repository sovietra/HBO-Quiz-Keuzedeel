import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.resolve(__dirname, '..', 'images')

function serveParentImages() {
  return {
    name: 'serve-parent-images',
    configureServer(server) {
      server.middlewares.use('/images', (req, res, next) => {
        const file = path.join(imagesDir, decodeURIComponent(req.url ?? '/').replace(/^\/+/, ''))
        if (fs.existsSync(file) && fs.statSync(file).isFile()) {
          const ext = path.extname(file).toLowerCase()
          const mime = ext === '.png' ? 'image/png' : 'image/jpeg'
          res.setHeader('Content-Type', mime)
          res.setHeader('Cache-Control', 'public, max-age=86400')
          fs.createReadStream(file).pipe(res)
        } else {
          next()
        }
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), serveParentImages()],
  server: { port: 5173 }
})
