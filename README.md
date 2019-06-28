# Values, Types & Operators Exercises
edited by Hupaul Camacho

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // This is a number value, which evaluates to 17, because node just interprets it as a single number.
* `1 + 2 * 3 + 4` // This is an arithmetic operation between number values, and evaluates to 11 because of the order of operations.
* `800 / 80 / 8` // This is another arithmetic operation that uses division to evaluate to 1.25, a number value.
* `400 > 200` // This expression uses a comparison operator to return a boolean value, which in this case is true, because 400 IS greater than 200.
* `1 !== 1` // This expression contains another comparison operator that tests for inequality, and evaluates to false, because 1 is the same as 1
* `true || false` // The OR operator checks to see if one of two statements are true and in this case the left side is true, making this evaluate to true
* `true && false` // The AND operator is used to test for truthy values on BOTH sides of the operator, making this evaluate to false because of the false value on the right side
* `20 % 6` // This expression uses the modulo operator, and evaluates to 2 which is the remainder from dividing 20 by 6
* `'a' + 'b'` // This expression uses the + operator to join or concatenate these two strings together, which evaluates to 'ab'

2. What will the following return?
* `typeof 4` // It will return 'number'
*  `typeof 'hello'` // It will return 'string'
*  `typeof true` // It will return 'boolean'
* `2 === 1 || 3 === 4` // It will return false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

A || B Truth table

|   A   |   B   | A || B|
| false | false | false |
| false | true  | true  |
|  true | false | true  |
|  true |  true | true  |

```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
// 2 + 3 * 2 + 1
// 2 + 6 + 1
// 8 + 1
// 9

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

// 4 / 2 + 8 / 4
// 2 + 8 / 4
// 2 + 2
// 4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

// 'ca' + 'ter' + 'pi' + 'llar'
// 'cater' + 'pi' + 'llar'
// 'caterpi' + 'llar'
// 'caterpillar'

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

// 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
// 8 === 8 && 'car' + 'pool' === 'carpool'
// 8 === 8 && 'carpool' === 'carpool'
// true
