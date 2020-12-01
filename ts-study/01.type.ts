// 布尔
let bool: boolean
bool = false

// 数字
let num: number
num = 123

// 字符串
let str: string
str = ''

// 数组
let arr1: number[]
arr1 = [1]
let arr2: Array<number>
arr2 = [1]
let arr3: (string | number)[]
arr3 = [1, '']

// 元组类型 数组类型拓展
let tuple: [string, number, boolean]
tuple = ['', 1, true]

// 枚举类型
enum Roles {
  SUPER_ADMIN = 1,
  ADMIN = 3,
  USER = 8
}
console.log(Roles.SUPER_ADMIN)

// any类型 全部类型
let value: any;
value = '';
value = 1
let arr4: any[];
arr4 = [1, '']

// void类型 没有返回值的类型
const consoleText = (text: string): void => {
  console.log(text)
}
consoleText('123')

// null undefined
let u: undefined;
u = undefined;

// never类型  没有返回值的类型 抛出错误的类型
const errorFunc = (message: string): never => {
  throw new Error(message)
}

// object类型
let obj = {
  name: 'json'
}
function getObject(obj: object): void {
  console.log(obj)
}
getObject({})

// 类型断言 (target as string)
const getLength = (target: string | number): number => {
  if ((target as string).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}