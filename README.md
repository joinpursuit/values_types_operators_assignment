# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`
//number | 17 | integer
* `1 + 2 * 3 + 4`
//number | 11 | order of operations (* -> L->R)
* `800 / 80 / 8`
// number | 1.25 | order of operations (/ -> L->R)
* `400 > 200`
//boolean | true | larger is greater than smaller = true
* `1 !== 1`
//boolean | false | 1 does equal 1
* `true || false`
//boolean | true | evaluates L->R and stops evaluating after first true if || operator
* `true && false`
//boolean | false | evaluates L->R, per & operator returns last true value if all values true
* `20 % 6`
//number | 2 | 6 goes into 20 (3) times with a remainder of (2)
* `'a' + 'b'`
//string | "ab" | concatenate operator
2. What will the following return?
* `typeof 4`
//number
*  `typeof 'hello'`
//string
*  `typeof true`
//boolean
* `2 === 1 || 3 === 4`
//false
3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A & B | A || B  |
| true  | true  | true  | true    |
| false | true  | false | true    |
| true  | false | false | true    |
| false | false | false | false   |

```
4. Create a truth table for the expression !A && !B.
|   A   |   B   | !A    |   !B   | !A & !B  |
| true  | true  | false | false  | false    |
| false | true  | true  | false  | false    |
| true  | false | false | true   | false    |
| false | false | true  | true   | true     |

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
2 + 3 * 2 + 1
2 + 6 + 1
8 + 1
9


 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 4 / 2 + 8 / 4
 2 + 8/4
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
 true && 'car' + 'pool' === 'carpool'
 true && 'carpool' === 'carpool'
 true && true
 true
