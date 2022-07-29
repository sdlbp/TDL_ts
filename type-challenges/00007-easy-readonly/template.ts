type MyReadonly<T> = {
    readonly [k in keyof T ]: T[k]
}

// readonly 关键字
