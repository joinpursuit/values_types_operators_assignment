# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` -Number because there is no quotations
* `1 + 2 * 3 + 4` 11 -PEMDAS
* `800 / 80 / 8` 1.25 simply divide start from far left then move to right
* `400 > 200` true because it's a boolean type that uses comparison a
* `1 !== 1` false
* `true || false` true because with or only 1 have to be true
* `true && false` false because both have to be true to return true
* `20 % 6` is 2 which is the remainder
* `'a' + 'b'` will return ab because the + is performing a concatenation that joins a with b

2. What will the following return?
* `typeof 4` number
*  `typeof 'hello'` string
*  `typeof true` boolean
* `2 === 1 || 3 === 4`

3. Create a truth table for the expression A || B.
|   A   |   B   | A || B |
| true  | true  | true  |
| false | true  | true |
| true  | false | true |
| false | false | false |

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.
|   A   |   B   | !A && !B |
| true  | true  | false  |
| false | true  | false |
| true  | false | false |
| false | false | true |


For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
2 + 3 * 2 + 1
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
4 / 2 + 8 / 4
  2+2
    4
 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 ca + ter + pi  + llar
      cater + pi + llar
          caterpi + llar
              "caterpillar"
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

      2 * 4 === 8 && 'car' + 'pool' === 'carpool'
        8 === 8 true && car + pool === 'carpool' true
        true && true = true
