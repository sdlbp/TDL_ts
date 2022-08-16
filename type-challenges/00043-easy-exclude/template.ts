export type MyExclude<T, U> = T extends U ? never : T;

// 分配条件类型 https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types


/*
错误1：
type MyExclude<T, U> = U extends T ? never : T
*/
