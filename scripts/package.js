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
archive.directory('dist/', 'dist')
if (fs.existsSync('README.md')) archive.file('README.md', { name: 'README.md' })
if (fs.existsSync('.env.example')) archive.file('.env.example', { name: '.env.example' })
archive.finalize()
