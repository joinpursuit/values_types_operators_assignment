# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // Number expression, it will evaluate to 17, because a number will return itself if there's no equation.
* `1 + 2 * 3 + 4` // Number expression it will evaluate to 11, because JS uses the operators to calculate
the numbers using PEMDAS.
* `800 / 80 / 8`// Number expression it will evaluate to 1.25, because JS uses the operators to calculate
the numbers using PEMDAS
* `400 > 200` // Boolean expression, it will evaluate to true because 400 is greater than 200 making the expression true
* `1 !== 1` // Boolean expression, it will evaluate to false because 1 is === to 1 and the comparison operator says NOT
* `true || false` //Boolean expression, it will evaluate to true because with the OR operator only one needs to be true
* `true && false` //Boolean expression, it will evaluate to false because the AND operator needs both values to be correct
* `20 % 6` // number expression, it will evaluate to 2. % operator only calculates the remainder.
* `'a' + 'b'` // string expression it will evaluate 'ab', because the string operator inputs text and the +sign puts the two expressions together.

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'`// string
*  `typeof true` //Boolean
* `2 === 1 || 3 === 4`//false

3. Create a truth table for the expression A || B.
// true  ||  true   =   true
// true  ||  false  =   true
// false ||  true   =   true
// false ||  false  =  false
For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.
//  !true && !true   =  false
//  !true && !false  =  false
//  !false && !true  =  false
//  !false && !false = true

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
  // 2+3*2+1
  //2+6+1
  //8+1
  //9

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 // 4/2+8/4
 //2+8/4
 //2+2
 //4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 //caterpillar

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 //2*4 === 8 && "car" + "pool" === "carpool"
 //8 === 8 && carpool ===carpool
 //true
