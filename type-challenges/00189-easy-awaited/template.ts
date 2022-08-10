type MyAwaited<T extends Promise<any>> = T extends Promise<infer X>
    ? (X extends Promise<any> ? MyAwaited<X> : X)
    : never;

// infer 解构类型获取局部
