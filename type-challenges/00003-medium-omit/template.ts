import {MyExclude} from "../00043-easy-exclude/template";
import {MyPick} from "../00004-easy-pick/template";

// export type MyOmit<T, K extends keyof T> = {
//     [P in MyExclude<keyof T,K>]: T[P]
// }

export type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>

/*
错误1：
{
    [k in K] : T[k]
}
in表达式的结果怎么取反??
这个地方不是in的属性判断，是遍历
这个题目和pick相反，比较直观想法是直接取反pick

pick 是拿指定的元素
omit 是省略指定的元素

错误2：
type MyOmit<T, K> = MyPick<T, MyExclude<T, K>>
*/
