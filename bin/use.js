calc = require('../dist/calc')
add = calc.add
parse = require('../dist/parser').parse
r = parse('3+3')
s = add(r.ast)
console.log(s)