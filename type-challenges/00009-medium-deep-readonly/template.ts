// type DeepReadonly<T> = {
//     readonly [k in keyof T]: ( keyof T[k] extends never ? T[k]: DeepReadonly<T[k]> )
// }

type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends string | boolean | number | Function
        ? T[K]
        : DeepReadonly<T[K]>;
};

// never  https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
