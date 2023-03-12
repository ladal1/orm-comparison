import path from 'path'
import * as fs from 'fs'

export const redirectedPath = (file: string) => {
  return path.join(process.cwd(), file).replace('dist', 'src')
}

export const redirectedFileRead = (file: string) => {
  return fs.readFileSync(redirectedPath(file), 'utf8')
}
