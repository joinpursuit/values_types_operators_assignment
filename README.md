# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` number
* `1 + 2 * 3 + 4` 11, follows the order of operations. unless using parenthesis.
* `800 / 80 / 8` 1.25 divide in order
* `400 > 200` true 400 is greater than 200
* `1 !== 1` false because 1 is equal
* `true || false` true || looks for first truth
* `true && false` false && checks both sides and displays latest valule
* `20 % 6` 2 modulo value
* `'a' + 'b'` ab strings are added

2. What will the following return?
* `typeof 4` number
*  `typeof 'hello'` string
*  `typeof true` boolean
* `2 === 1 || 3 === 4` false 

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

|   A   |   B   | A || B |
| true  | true  | true |
| false | true  | true |
| true  | false | true |
| false | false | false|

```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

|   A   |   B   |   !B   | !A    | !A && !B
| true  | true  | false  | false |  
| false | true  | false  | true  |
| true  | false | true   | false |
| false | false |  true  | true  |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10

2 + 3 * 2 + 1
2 + 6 + 1
8 + 1
9              
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 4 / 2 + 8 / 4
2 + 8 / 4
2 + 2
4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 'ca' + 'ter' + 'pi' + 'llar'
 'cater' + 'pillar'
 'caterpillar'

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 `2 * 4 === 8 && 'car' + 'pool' === 'carpool'
 '8 === 8 && carpool === carpool'
 true
