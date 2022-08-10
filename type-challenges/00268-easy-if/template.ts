type If<C extends boolean, T, F> = C extends true ? T : F;

/*
* ?? 表达式怎么执行
* ?? 限制类型非空
*   - 限制固定类型布尔
* */
