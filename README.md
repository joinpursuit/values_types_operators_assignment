# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` number
* `1 + 2 * 3 + 4` arithmetic expression  It evaluates to 11, using the order of operations
* `800 / 80 / 8` arithmetic expression. It evaluates to 1.25
* `400 > 200` Comparison boolean. It evaluates to True . 400 is bigger than 200.
* `1 !== 1` boolean statement. It evaluates to false because they are the same number therefore true.
* `true || false` Comparison expression. It evaluates to true. OR statements always look for truthy Values
* `true && false` Comparison expression. It evaluates to false. AND statements will be checking both to be true and since false is the last string to be checked. Whichever is the last statement is what it will return
* `20 % 6` arithmetic expression. This is a modulo expression and it equates to 2. 6 goes into 20 three times and has a REMAINDER of 2.  
* `'a' + 'b'`arithmetic expression. These are two strings being added NOT COMBINED together. It will return ab

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

          A || B
|  A     | B     | A || B |
| true   | true  | true   |
| false  | true  | false  |
| true   | false | true   |
|false   | true  | true   |
|false   | false | false  |

```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

            !A && !B
|   A   |   B   |  !A      |  !B   | !A & !B |
| false | false |  true    |true   | true    |
| true  | false |  false   |true   | false   |
| false | true  |   true   |false  | false   |
| true  | true  |    false |false  | true   |
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

 4/2 + 8/4
   2 + 8/4
   2 + 4
     6


 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
  'ca' + 'ter' + 'pi' + 'llar'
        'cater' + 'pi'+ 'llar'
             'caterpi'+ 'llar'
                 'caterpillar'


 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
  2 * 4 === 8 && 'car' + 'pool' === 'carpool'
      8 === 8 && 'car' + 'pool' === 'carpool'
           8 === 8 && 'carpool' === 'carpool'
                                        true
