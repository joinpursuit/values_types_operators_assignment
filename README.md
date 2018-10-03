# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`
// number, 17, 17 is a number
* `1 + 2 * 3 + 4`
// number, 11, order of operations: 1 + 6 + 4 => 7 + 4 => 11
* `800 / 80 / 8`
// number, 1.25, order of operations: 10 / 8 => 1.25
* `400 > 200`
// boolean, true, ">" operator results in boolean
* `1 !== 1`
// boolean, false, 1 is not equal to 1 => false
* `true || false`
// boolean, true, true or false => true
* `true && false`
// boolean, false, true and false => false
* `20 % 6`
// number, 2, "%" results in a remainder of 2 which is a number
* `'a' + 'b'`
// string, 'ab', string concatenation results in string

2. What will the following return?
* `typeof 4`
// 'number'
*  `typeof 'hello'`
// 'string'
*  `typeof true`
// 'boolean'
* `2 === 1 || 3 === 4`
// false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

/*     
|   A   |   B   | A || B |
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false |
*/

```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

/*
|   A   |   B   |   !A   |   !B   | A & B |
| true  | true  |  false |  false | false |
| false | true  |  true  |  false | false |
| true  | false |  false |  true  | false |
| false | false |  true  |  true  | true  |
*/

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
  2 + 3 * 2 + 1
      2 + 6 + 1
          8 + 1
              9

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 4 / 2 + 8 / 4
     2 + 8 / 4
         2 + 2
             4
 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 'ca' + 'ter' + 'pi' + 'llar'
      'cater' + 'pi' + 'llar'
           'caterpi' + 'llar'
                'caterpillar'
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
  2 * 4 === 8 && 'car' + 'pool' === 'carpool'
      8 === 8 && 'car' + 'pool' === 'carpool'
        true  &&      'carpool' === 'carpool'
        true  && true
                 true
