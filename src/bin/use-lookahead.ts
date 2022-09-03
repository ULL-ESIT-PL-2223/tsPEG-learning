import { inspect } from 'util'
import { parse } from '../lookahead-parser'
const inputs = ['aabbcc', 'aabbc']

for (let input of inputs) {
  let r = parse(input)
  if (r.ast) {
    console.log(`INPUT: ${input}\nast:\n${inspect(r.ast, { depth: null })}`)
  } else {
    console.error(`INPUT: ${input}\nerror:\n${inspect(r.errs, { depth: null })}`)
  }  
}
