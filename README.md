# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // number, 17
* `1 + 2 * 3 + 4` // Number, arithmetic expression. This is equal to 11 because of the order of operations.
* `800 / 80 / 8` // Number, arithmetic expression. This is equal to 1.25 because 800/80 is 10 and 10/8 is 1.25.
* `400 > 200` // Boolean expression, true. This is true because 400 is greater than 200.
* `1 !== 1` //
* `true || false` // Boolean expression, true. This is true because || signifies that one of the sides has to be true for the expression to be true.
* `true && false` // Boolean expression, false. This is false because && needs both of the sides to be true.
* `20 % 6` // Number, 2. This is 2 because the modulu stands for the remainder of the expression. 20/6 has a remainder of 2 because 6*3 is 18.
* `'a' + 'b'` // String, ab. The answer is ab because we are adding string a to string b to make them one.

2. What will the following return?
* `typeof 4`// number, 4
*  `typeof 'hello'` // string hello
*  `typeof true` // boolean, true
* `2 === 1 || 3 === 4` // boolean, false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |  
| false | true  | false |
| true  | false | false |
| false | false | false |

```
ANSWER:

|   A   |   B   | A || B |
| true  | true  | true |
| true  | false | true |
| false | true  | true |
| false | false | false|

4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```

ANSWER:
|  A  |  B  | !A && !B|
| true| true| false |
| true| false| false|
| false| true| false |
| false| false| true|

5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
`ANSWER:
2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9`

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
  4 / 2 + 8 / 4  
      2 + 8 / 4
          2 + 2
              4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 'ca' + 'ter' + 'pi' + 'llar'
 'cater' + 'pi' + 'llar'
 'caterpi' + 'llar'
 ANSWER: 'caterpillar'

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
`2 * 4 === 8 && 'car' + 'pool' === 'carpool'`
    8 === 8 && 'car' + 'pool' === 'carpool' // 2 * 4 is 8 and it is === to 8
         8 === 8 && 'carpool' === 'carpool' // 'car' + 'pool' is 'carpool'
                                      true // 8 === 8 is true and 'carpool' === 'carpool' is true making this  boolean true
