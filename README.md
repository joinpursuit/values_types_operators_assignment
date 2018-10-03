# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`//17---datatype is number
* `1 + 2 * 3 + 4`//11---number
* `800 / 80 / 8`//2.25---floating point number
* `400 > 200`//true---comparative statement---boolean
* `1 !== 1`//false---bang 1 doesn't equal 1---boolean
* `true || false`//true---boolean
* `true && false`//false---boolean
* `20 % 6`//4---modulo operator---number
* `'a' + 'b'`//ab---concat---string

2. What will the following return?
* `typeof 4`//number
*  `typeof 'hello'`//string
*  `typeof true`//boolean
* `2 === 1 || 3 === 4`---false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

|   A   |   B   | A || B |
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false |


```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

|   !A   |   !B   |   !B   | !A && !B |
| false | false | true  | false |
| true | false | true | true |
| false | true | false  | false |
| true | true |  false | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10//
  2 + 3 * 2 + 1
      2 + 6 + 1
          8 + 1
              9
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 //
 4 / 2 + 8 / 4
         2 + 2
             4


 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 // 'cat' + 'ter' + 'pi' + 'llar'
         'catter' + 'pi' + 'llar'
              'catterpi' + 'llar'
                   'catterpillar'

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 // 2 * 4 === 8  && 'car' + 'pool' === 'carpool'
         8 === 8 && 'car' + 'pool' === 'carpool'
              8 === 8 && 'carpool' === 'carpool'
                                    true && true
                                            true
