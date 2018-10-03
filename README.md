# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`
A number, 17
* `1 + 2 * 3 + 4`
A number, 21
* `800 / 80 / 8`
A number, 1.25
* `400 > 200`
A number, true bc 400 is larger than 200
* `1 !== 1`
A boolean. False, bc ! makes the first number false
* `true || false`
Boolean. True, bc of the "or" it looks for one true
* `true && false`
Boolean. False bc the && means both have to be true in order for it to be true
* `20 % 6`
A number. 2 bc that is the remainder
* `'a' + 'b'`
A string. ab, It is a string concatenation
2. What will the following return?
* `typeof 4`
A number,
*  `typeof 'hello'`
A string
*  `typeof true`
A boolean
* `2 === 1 || 3 === 4`
A boolean

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A || B |
| true  | true  | true  |
| false | true  | true |
| true  | false | true |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   |  !A   | !A && !B |
| true  | true  | false  | false |   false  |
| false | true  | false  | true  |   false  |
| true  | false | true   | false |   false  |
| false | false |  true  | true  |   true   |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
2 + 6 + 1
8 + 1
9

  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 2 + 8 / 4
 2 + 2
 4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 'cater' + 'pi' + "llar"
 'caterpi' + "llar"
 'caterpillar'
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 '8 === 8 && 'car' + 'pool' === 'carpool'`
 true && 'car' + 'pool' === 'carpool'`
 true && 'carpool' === 'carpool'`
 true && true
 true
