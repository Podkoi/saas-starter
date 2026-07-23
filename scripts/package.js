import fs from 'fs'
import path from 'path'
import archiver from 'archiver'

const outDir = path.resolve('deliverables')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
const output = fs.createWriteStream(path.join(outDir, 'saas-starter.zip'))
const archive = archiver('zip', { zlib: { level: 9 } })

output.on('close', function () {
  console.log(archive.pointer() + ' total bytes')
  console.log('Deliverable created at ' + path.join(outDir, 'saas-starter.zip'))
})

archive.on('error', function (err) {
  throw err
})

archive.pipe(output)
// include build output and README
// if PAGES_CUSTOM_DOMAIN env is set, write a CNAME into dist so GitHub Pages can use it
const customDomain = process.env.PAGES_CUSTOM_DOMAIN || process.env.CUSTOM_DOMAIN || ''
if (customDomain) {
  const cnamePath = path.join('dist', 'CNAME')
  try {
    fs.mkdirSync(path.dirname(cnamePath), { recursive: true })
    fs.writeFileSync(cnamePath, customDomain.trim() + '\n')
    console.log('Wrote CNAME to', cnamePath)
  } catch (err) {
    console.warn('Failed to write CNAME:', err.message)
  }
}
archive.directory('dist/', 'dist')
if (fs.existsSync('README.md')) archive.file('README.md', { name: 'README.md' })
if (fs.existsSync('.env.example')) archive.file('.env.example', { name: '.env.example' })
archive.finalize()
