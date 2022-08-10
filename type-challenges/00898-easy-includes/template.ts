import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> =  T extends [infer First, ...infer Reset] ?
    Equal<First, U> extends true ? true : Includes<Reset, U>
    : false

/*
* 错误1：type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;
* // 元素类型不匹配，
* 递归每个元素进行比较
*
* 错误2：infer... Reset
* */
