calc = require('./calc')
add = calc.add
parse = require('./parser').parse
r = parse('2+3')
s = add(r.ast)
console.log(s)