type Concat<T extends any[], U extends any[]> = [...T,...U]

/*
* 解构
* 拼接
* 错误写法：type Concat<T extends any[], U extends any[]> = [...T[number],...U[number]]
*/
