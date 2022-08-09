import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type cases = [
    Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
    Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
    Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]
const abc = typeof tupleNumber;
console.log('--lbp 13', 'test-cases.ts', abc, '');

const test = (abc: TupleToObject<typeof tuple>) => {
    console.log('--lbp 16', 'test-cases.ts', 'test', abc);
    console.log('--lbp 17', 'test-cases.ts', 'test', abc.tesla);
    // @ts-expect-error
    console.log('--lbp 18', 'test-cases.ts', 'test', abc.a);
};

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>
