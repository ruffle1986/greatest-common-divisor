import test from 'ava'
import gcd from '.'

test('find the greatest common divisor', t => {
  t.is(gcd(36, 27, 45, 81), 9)
  t.is(gcd(12, 18), 6)
  t.is(gcd(7, 15, 21), 1)
  t.is(gcd(123), 123)
  t.is(gcd(44, 12, 44), 4)
  t.end()
})

test('tolerate zeros', t => {
  t.is(gcd(0, 0, 0), 0)
  t.end()
})

test('require at least one parameter', t => {
  try {
    t.is(gcd(), 123)
  } catch (x) {
    t.is((x instanceof TypeError), true)
    t.is(x.message, 'gcd: At least one parameter is required')
  }
  t.end()
})
