# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` //typeof number, 17, just an integer
* `1 + 2 * 3 + 4`//typeof number, evaluates to 11, order of operations
* `800 / 80 / 8` //typeof number, evaluates to 1.25, basic division
* `400 > 200` // type of Boolean, evaluates to true, comparison operator
* `1 !== 1` // type of boolean, evaluates to false, comparison operator
* `true || false`// type of boolean, evaluates to true, comparison operator
* `true && false`// type of boolean, evaluates to false, comparison operator
* `20 % 6` //typeof number, evalutates to 2, modulo operator
* `'a' + 'b'` //type of string, evaluates to "ab", string concatenation 

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` //string
*  `typeof true` //boolean
* `2 === 1 || 3 === 4` //false

3. Create a truth table for the expression A || B.
//|   A   |   B   | A||B  | 
//| true  | true  | true  |
//| false | true  | true  |
//| true  | false | true  |
//| false | false | false | 

For reference, here is a truth table for the expression A && B:

``` js 

|   A   |   B   | A & B | 
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 

```
4. Create a truth table for the expression !A && !B.
//|   A   |   B   |   !A  |  !B   |!A && !B| 
//| true  | true  | false | false | true   |
//| false | true  | true  | false | false  |
//| true  | false | false | true  | false  |
//| false | false | true  | true  | true   | 

For reference, here is a truth table for the expression A && !B:

``` js 

|   A   |   B   |   !B   | A & B | 
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.

//2 + 3 * 2 + 1
//    2 + 6 + 1
//        8 + 1
//            9

  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
  
 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 //4 / 2 + 8 / 4
 //    2 + 8 / 4
 //        2 + 2
 //            4
 
 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 //ca
 //cater
 //caterpi
 //caterpillar

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 //2 * 4 === 8 && 'car' + 'pool' === 'carpool'
 //8 === 8 && 'car' + 'pool' === 'carpool'
 //true && 'car' + 'pool' === 'carpool'
 //true && 'carpool' === 'carpool'
 //true && true
 //true

  
