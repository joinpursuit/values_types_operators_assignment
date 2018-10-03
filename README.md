# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // number, 17, there is no operator. 
* `1 + 2 * 3 + 4` // returns a number, 11, order of operations
* `800 / 80 / 8`// returns a number, 10/8, order of operations
* `400 > 200` // returns a boolean, true, the expression is true.
* `1 !== 1` // comparison (returns boolean), false, the expression is false. 
* `true || false` // comparison (returns boolean), true, returns the first true value. 
* `true && false` // comparison (returns boolean), false, both have to be true to return true. Otherwise, false.
* `20 % 6` // number, 2, returns the result of the mod operation.
* `'a' + 'b'` // string, 'ab', concatenates two strings

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` // string
*  `typeof true` // boolean 
* `2 === 1 || 3 === 4` // boolean

3. Create a truth table for the expression A || B.
``` js
|   A   |   B   | A || B | 
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  |
```

For reference, here is a truth table for the expression A && B:

``` js 

|   A   |   B   | A && B | 
| true  | true  | true   |
| false | true  | false  |
| true  | false | false  |
| false | false | false  | 

```

4. Create a truth table for the expression !A && !B.
``` js 
|   A   |   B   |   !A   |   !B   | !A && !B |
| true  | true  | false  | false  |  false   |
| false | true  | true   | false  |  false   |
| true  | false | false  | true   |  false   |
| false | false |  true  | true   |  true    |
```
For reference, here is a truth table for the expression A && !B:

``` js 

|   A   |   B   |   !B   | A && !B | 
| true  | true  | false  | false   |
| false | true  | false  | false   |
| true  | false | true   | true    |
| false | false |  true  | false   | 

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
``` js 
3*2 = 6
2 + 6 = 8
8 + 1 = 9
```
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
  
 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
   ```js
 4/2 = 2
 8/4 = 2
 2 + 2 = 4
  ```
 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
   ```js
ca 
cater
caterpi
caterpillar
  ```
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
   ```js
 /* order of events is multipication, adding, comparison and "AND"
2*4 = 8
'car' + 'pool' = 'carpool'
8 === 8 // returns true
'carpool' === 'carpool' // returns true
true && true // returns true
*/
  ```
  
