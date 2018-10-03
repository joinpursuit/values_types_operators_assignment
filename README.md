# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // This is a number that evaluates to 17 because it is only a number.
* `1 + 2 * 3 + 4`  // This evaluates to the number 11 because it follows pemdas, and it only a number.
* `800 / 80 / 8` // This evaluates to number 1.25 because this number expression evaluates to the number 1.25.
* `400 > 200` // This evaluates to the true boolean, because we are using a comparison operator to compare two numbers.
* `1 !== 1` //This evaluates to false a boolean, because 1 does equal to 1 and it is asking if it does not equal.
* `true || false` //This evaluates to the true boolean because the logical operator || only needs one true statement.
* `true && false` //This evaluates to the false boolean because the logical operator && requires all statements to be true.
* `20 % 6` //This evaluates to the number 2 because the remainder of 20 divided by 6 is 2.
* `'a' + 'b'` //This evaluates to the string 'ab' because we are using the addition operator to add two string together.

2. What will the following return?
* `typeof 4` //number
*  `typeof 'hello'` // string
*  `typeof true` // boolean
* `2 === 1 || 3 === 4` // false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A & B |         |  A    |  B    | A || B |
| true  | true  | true  |         | true  | true  | true   |
| false | true  | false |         | false | true  | true   |
| true  | false | false |         | true  | false | true   |
| false | false | false |         | false | false | false  |

```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & B |   |   A    |  !A    |   B   |   !B   | A & B | !A & !B |
| true  | true  | false  | false |   |  true  | false  | true  | false  | true  |  false  |
| false | true  | false  | false |   |  false | true   | true  | false  | false |  false  |
| true  | false | true   | true  |   |  true  | false  | false | true   | false |  false  |
| false | false |  true  | false |   |  false | true   | false |  true  | false |  true   |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4     2 + 3 * 2 + 1
      3 + 3 + 4         2 + 6 + 1  
          6 + 4             8 + 1
              10                9
  ```

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
         true && 'car' + 'pool' === 'carpool'
              true && 'carpool' === 'carpool'
                                 true && true
                                         true
