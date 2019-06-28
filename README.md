# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // number, 17, because there's no operators
* `1 + 2 * 3 + 4` // numbers, 11, because of math expressions
* `800 / 80 / 8` // numbers, 1.25, because of divisions
* `400 > 200` // numbers, true, because of the comparison operator
* `1 !== 1` // numbers, false, because of the comparison operator  
* `true || false` // booleans, true, because "or" needs only one true to be true
* `true && false` // booleans, false, because "and" needs both sides to be true in order to give true
* `20 % 6` // numbers, 2, because of the modulo operator
* `'a' + 'b'` // strings, 'ab', because you can add one string to the other using the '+' operator.

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` // string
*  `typeof true` // boolean
* `2 === 1 || 3 === 4` // false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

//

|   A   |   B   | A || B |
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  |
```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

//

|   A   |   B   |  !A   |  !B   | !A && !B |
| true  | true  | false | false | false    |
| false | true  | true  | false | false    |
| true  | false | false | true  | false    |
| false | false | true  | true  | true     |
```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10

//

2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 //

 4 / 2 + 8 / 4
     2 + 8 / 4
         2 + 2
             4


 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

//

 'ca' + 'ter' + 'pi' + 'llar'
      'cater' + 'pi' + 'llar'
           'caterpi' + 'llar'
                'caterpillar'

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

//

2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
         8 === 8 && 'carpool' === 'carpool'
              true && 'carpool === carpool'
                               true && true
                                       true
