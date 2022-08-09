type MyExclude<T, U> = T extends U ? never : T;

// 分配条件类型 https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
