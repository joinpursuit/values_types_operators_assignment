# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // 17 number gives Values
* `1 + 2 * 3 + 4` // 11  operator does mathematic expressions
* `800 / 80 / 8`// 1.25 operator
* `400 > 200` //true  Boolean
* `1 !== 1   // false // Boolean
* `true || false` // false // Boolean
* `true && false`  // false // boolean

* `20 % 6` // 2 number
* `'a' + 'b'`// ab string

2. What will the following return?
* `typeof 4` //number
*  `typeof 'hello'`//string
*  `typeof true`//boolean
* `2 === 1 || 3 === 4// false Boolean

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  | // true
| false | true  | false | // B
| true  | false | false | // A
| false | false | false | //false or  undefined

```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false | // false
| false | true  | false  | false | // false
| true  | false | true   | true  | //false
| false | false |  true  | false | // true

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
//
//2 + 6 + 1
//8 + 1
//9
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 //2 + 2
 //4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 // 'cater' + 'pillar'
 //'caterpillar'
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 // 2 * 4 === 8 true
 //'car' + 'pool' === 'carpool' true
 //true
