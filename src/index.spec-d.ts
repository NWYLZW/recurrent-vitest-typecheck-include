import { expectTypeOf, test } from 'vitest'

test('base', () => {
  expectTypeOf<2>().toEqualTypeOf<1>()
})
