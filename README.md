# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`--> 17  //17 -> number because it is a number
* `1 + 2 * 3 + 4`  //11 -> number because adding the numbers together via order of operations creates a number
* `800 / 80 / 8`// 1.25 -> number because dividing the numbers via order of operations creates a number as well
* `400 > 200`// true -> boolean  because > creates a boolean expression
* `1 !== 1`// false -> boolean because !== is not equal and is a boolean expression
* `true || false`//true -> boolean because || yields true if one side of the expression is true
* `true && false`//false -> boolean because both sides of the expression must be true
* `20 % 6`//2 -> number because modulo takes the remainder of the number.
* `'a' + 'b'`// ab -> string because when adding two strings together, they concatenate and form one string

2. What will the following return?
* `typeof 4`// number
*  `typeof 'hello'`//string
*  `typeof true` //boolean
* `2 === 1 || 3 === 4` //boolean

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js 

|   A   |   B   | A && B | 
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 

```

|   A   |   B   | A || B | 
| true  | true  | true  |
| false | true  | true |
| true  | false | true |
| false | false | false | 
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js 

|   A   |   B   |   !B   | A && B | 
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

```

|   A   |   B   | !A && !B | 
| true  | true  | false |
| false | true  | false   |
| true  | false | false |
| false | false | true |

5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
2 + 3 * 2 + 1`
2 + 6 + 1
8 + 1
9

  
 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

4 / 2 + 8 / 4`
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
  
