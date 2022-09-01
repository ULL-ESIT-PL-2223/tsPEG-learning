import { inspect } from 'util'
import * as process from 'process'
import { add } from './calc'
import { parse } from './parser'
const input = process.argv[2] || '3*3'
let r = parse(input)
console.log(r)
if (r.ast) {
  let s = add(r.ast)
  console.log(s)
} else {
  console.error(inspect(r.errs, { depth: null }))
}
