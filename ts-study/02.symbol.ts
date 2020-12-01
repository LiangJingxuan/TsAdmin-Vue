// symbol 独一无二的值 参数是字符串类型做标识用
const s = Symbol()

const s1 = Symbol('s1')

// symbol属性名
let p = 'name'
const info = {
  // 普通
  [p]: 'liii',
  
  // Symbol
  [Symbol('name')]: '11111'
}
console.log(info)

// 获取Symbol属性名
Object.getOwnPropertySymbols(info)
Reflect.ownKeys(info)

// 方法
const s8 = Symbol.for('iii')
const s9 = Symbol.for('iii')
// 返回Symbol的标识
Symbol.keyFor(s8)

// 内置属性和方法
// Symbol.hasInstance