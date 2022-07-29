type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

// pick 代表从一个已有数据取出想要的字段，构建出新的类型

// 泛型的约束 - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
