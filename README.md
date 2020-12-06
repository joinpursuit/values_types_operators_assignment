# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to?
* `17` // number, 17
* `1 + 2 * 3 + 4`// number, 11
* `800 / 80 / 8`// number, 1.25
* `400 > 200`// boolean, true 
* `1 !== 1`// boolean, false
* `true || false`// boolean, true
* `true && false`// boolean, true
* `20 % 6`// number , 2
* `'a' + 'b'`// string , 'ab'

2. What will the following return?
* `typeof 4`// number 
*  `typeof 'hello'`// string 
*  `typeof true`//  boolean
* `2 === 1 || 3 === 4`// false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

A	     B	   A && B  A ll B
true 	true	true	true
false	true	false	true 
true	false	false	true
false	false	false   false 

```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & !B| !A&&!B|
| true  | true  | false  | false | false |
| false | true  | false  | false | false |
| true  | false | true   | true  | false |
| false | false | true   | false | true  | 

5. Create a truth table for the expression !(A || B).

A	     B	   A && B  !(A ll B)
true 	true	true	false
false	true	false	false 
true	false	false	false
false	false	false   true 




```
6. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
              // 2 + 3 * 2 + 1
              // 2 + 6 + 1
              // 8 + 1
              // 9
  ```

 7. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 4 / 2 + 8 / 4
 2 + 8 / 4
 2 + 2
 4 

 8. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
'ca' + 'ter' + 'pi' + 'llar'
'cater' + 'pi' + 'llar'
'caterpi' + 'llar'
'caterpillar'

 9. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'carpool' === 'carpool'
true && true 
true 

10. Write a step-by-step evaluation for the following expression: '1' + '2' + '3' - '1'.

'1' + '2' + '3' - '1'.
'12' + '3' - '1'
'123' - '1'
122