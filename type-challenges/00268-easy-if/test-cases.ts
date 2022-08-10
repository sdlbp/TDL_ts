import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
    Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error1 = If<null, 'a', 'b'>
// @ts-expect-error
type error2 = If<undefined, 'a', 'b'>
