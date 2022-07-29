type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

// 错误解答1 - [P in keyof T] : P
// 数组的遍历和对象的遍历的不同

// number 数组的遍历
