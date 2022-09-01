calc = require('./calc')
add = calc.add
parse = require('./parser').parse
r = parse('3+3')
s = add(r.ast)
console.log(s)