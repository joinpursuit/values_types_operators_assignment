# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // Number expression, evaluates to 17 because the computer recognizes it as a number.
* `1 + 2 * 3 + 4` //Arithmetic expressions, evaluates to 11 because + and * are mathematical operator and would follow the the order of operations.
* `800 / 80 / 8`//Arithmetic expression, evaluates to 1.25 because / is a mathematical operator. the Laws of operations if theres more than 1 of the same sign, it must go left to right.
* `400 > 200` //Boolean expression, evaluates as true because 400 is greater than 200.
* `1 !== 1`// Boolean expression, evaluates to false because 1=1. !== means not equal to.
* `true || false`// Boolean expression. It evaluates to true because || is an or operator and if true is one on the options, the answer will always be true.//
* `true && false`// Boolean expression, It evaluates to false because both sides must be true for it to be true.//
* `20 % 6`//Arithmetic expression, evaluates to 2 because 2 is the remainder when dividing 20 by 6.
* `'a' + 'b'`Strings, it evaluates to 'ab' because the addition sign combines the 2 string 'a' and 'b' together.

2. What will the following return?
* `typeof 4` //number
*  `typeof 'hello'`//string
*  `typeof true`//boolean
* `2 === 1 || 3 === 4` //false

3. Create a truth table for the expression A || B.

//
|    A   |   B    | A || B |
|  true  |  true  |  true  |
|  false |  true  |  true  |
|  true  |  false |  true  |
|  false |  false |  false |
For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.

//
|    A   |   B    |!A && !B|
|  true  |  true  |  false |
|  false |  true  |  false |
|  true  |  false |  false |
|  false |  false |  true  |

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
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
  // 2 + 3 * 2 + 1
     2 + 6 + 1
         8 + 1
             9
 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 //  4 / 2 + 8 / 4
      2 + 8 / 4
      2 + 2
          4
 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 //caterpillar
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
// 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
       8 === 8 && 'car' + 'pool' === 'carpool'
        true   &&      'carpool' === 'carpool'
        true   &&       true
                        true
  
