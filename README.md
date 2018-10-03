# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // number, because, well it's a number
* `1 + 2 * 3 + 4` // number; it is an expression
* `800 / 80 / 8` // number same as above
* `400 > 200` // boolean; true
* `1 !== 1` // boolean; false- type that has one of two possible values true or false
* `true || false` //boolean; true - tests the relationship
* `true && false` //boolean; false - tests the relationship
* `20 % 6` // number; modulo - it is an operator
* `'a' + 'b'` // string - it has quotations

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` // string
*  `typeof true` // boolean
* `2 === 1 || 3 === 4` // false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

// |   A   |   B   | A || B |
// | true  | true  | true   |
// | false | true  | false  |
// | true  | false | true   |
// | false | false | false  |

``` js

|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.

// |  A    |  !A   |   B   |   !B   |!A && !B|
// | false | true  | true  | false  | false  |
// | true  | false | true  | false  | false  |
// | false | true  | false | true   | true   |
// | true  | false | false |  true  | false  |

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & B |
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
  //     6 + 2 + 1
  //         8 + 1
  //             9

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 // 4 / 2 + 8 / 4
 //     2 + 8 / 4
 //         2 + 2
 //             4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 // 'ca' + 'ter' + 'pi' + 'llar'
 //      'cater' + 'pi' + 'llar'
 //             caterpi + 'llar'
                     caterpillar
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 // 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
 //     8 === 8 && 'car' + 'pool' === 'carpool'
 //            8 === 8 && carpool === 'carpool'
 //                                true && true
 //                                        true
