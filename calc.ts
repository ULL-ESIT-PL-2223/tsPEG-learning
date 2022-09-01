/*
interface sum {
  left: string;
  right: string;
}
*/

import { sum } from "./parser";

export function add(ast: sum): number {
    return parseInt(ast.left) + parseInt(ast.right);
}

/*
parse = require('./parser.js')
{
  ASTKinds: { sum: 'sum', num: 'num' },
  Parser: [class Parser],
  parse: [Function: parse],
  SyntaxErr: [class SyntaxErr]
}
> p = parse.p
parse.propertyIsEnumerable

parse.parse

> p = parse.p
parse.propertyIsEnumerable

parse.parse

> p = parse.parse
[Function: parse]
> p('2+3')
*/