# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // number 17
* `1 + 2 * 3 + 4` // number 11, bc of order of operations
* `800 / 80 / 8` // 1.25 number and is floating
* `400 > 200` // true comparison bc 400 is greater than 200
* `1 !== 1` // false comparison Operators
* `true || false` // true booleans there is a true in there
* `true && false` // false booleans it's false because it is looking for two truths
* `20 % 6` // 2 is the remainder
* `'a' + 'b'` // concatenate the answer will be ab. we are adding a string to another string

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` // string
*  `typeof true` // booleans
* `2 === 1 || 3 === 4` // comparison Operators

3. Create a truth table for the expression A || B.
// |  A    |   B   |  A || B
// | true  | true  | true   |
// | false | true  | true   |
// | true  | false | true   |
// | false | false | false  |

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.

// |   A   |   B   |  !A   |   !B   | !A & !B |
// | true  | true  | false | false  |  false  |
// | false | true  | true  | false  |  false  |
// | true  | false | false | true   |  false  |
// | false | false | true  | true   |  false  |

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & !B |
| true  | true  | false  | false  |
| false | true  | false  | false  |
| true  | false | true   | true   |
| false | false |  true  | false  |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
