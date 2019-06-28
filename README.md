# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` //Number, it evaluates to 17 because that's the only value here
* `1 + 2 * 3 + 4` //Number, it evaluates to 11 by using order of operations
* `800 / 80 / 8`//Number, floating point number, evaluates to 1.25 by using order of operations
* `400 > 200` //Boolean, evaluates to true
* `1 !== 1` //Boolean, False, 1 absolutely equals 1
* `true || false` //Boolean, True, only one has to be true.
* `true && false` //Boolean, False, both have to be true
* `20 % 6` //Number, answer is 2 because 20 / 6 is 3 with a remainder 2.
* `'a' + 'b'` //String, evaluates to 'ab'

2. What will the following return?
* `typeof 4` //returns number
*  `typeof 'hello'` //returns string
*  `typeof true` //returns boolean
* `2 === 1 || 3 === 4` //returns boolean, which is going to be false.

3. Create a truth table for the expression A || B.
A,B | !A | !B | A&&B | A||B
T,T | F  | F  | T    | T
T,F | F  | T  | F    | T
F,T | T  | F  | F    | T
F,F | T  | T  | F    | F

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.
A,B | !A | !B | A&&B | A||B | (!A && !B)
T,T | F  | F  | T    | T    | F
T,F | F  | T  | F    | T    | F
F,T | T  | F  | F    | T    | F
F,F | T  | T  | F    | F    | T


For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
`2 + 3 * 2 + 1` == 2 + (3 * 2) + 1 == 2 + 6 + 1 == 8 + 1 == 9

  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
`4 / 2 + 8 / 4` --> (4 / 2) + (8 / 4) --> 2 + 2 --> 4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 `'ca' + 'ter' + 'pi' + 'llar'` --> ('ca' + 'ter') + 'pi' + 'llar' --> 'cater' + 'pi' + 'llar' --> 'caterpi' + 'llar' --> "caterpillar"

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
`2 * 4 === 8 && 'car' + 'pool' === 'carpool'` --> ((2 * 4) === 8) && ('car' + 'pool') === 'carpool' --> (8 === 8) && 'carpool' === carpool --> True for first conditional, and true for the second conditional, therefore true. 
