
function gcd(a, b) {
  if (!b) {
    return a
  }
  return gcd(b, a % b)
}

export default function (...args) {
  if (!args.length) {
    throw new TypeError('gcd: At least one parameter is required')
  }
  return args.reduce(gcd)
}
