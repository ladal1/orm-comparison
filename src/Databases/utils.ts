import path from 'path'
import * as fs from 'fs'

export const redirectedFileRead = (file: string) => {
  return fs.readFileSync(
    path.join(__dirname, file).replace('dist', 'src'),
    'utf8'
  )
}
