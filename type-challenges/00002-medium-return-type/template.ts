type MyReturnType<T extends Function> = T extends (...rest: any[]) => infer U ? U : never;


/*
* 错误1： T extends () => infer U ? U : never;
* 为什么推断不出来U
* 错误原因，没有写覆盖函数有参数的情况
* */
