import {dirname} from 'path'
import { fileURLToPath } from 'url'

const __filaname = fileURLToPath(import.meta.url)
const __dirname = dirname(__filaname)
console.log(__dirname)

export {__filaname,__dirname}