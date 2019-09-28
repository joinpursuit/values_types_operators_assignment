# Testing Submiting 
# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`
* Number
* `1 + 2 * 3 + 4`
* Number `11` 
* `800 / 80 / 8`
* Number `1.25`
* `400 > 200`
* Boolean `true` 
* `1 !== 1`
* Boolean `false` 
* `true || false`
* Boolean `true`
* `true && false`
* Boolean `false`
* `20 % 6`
* Number `2`
* `'a' + 'b'`
* String `ab`




2. What will the following return?
* `typeof 4`
* Number
*  `typeof 'hello'`
* String
*  `typeof true`
* Boolean 
* `2 === 1 || 3 === 4`
* False

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:



|   A   |   B   | A && B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 


|   A   |   B   | A || B |
|-------|-------|--------|
| true  | true  |  true |
| false | true  |  true |
| true  | false |  true |
| false | false | false | 

4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:



|   A   |   B   |   !B   | A && B | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

5. 
|   A   |   B   |   !B   |  !A   | A || B | 
|-------|-------|--------|-------|--------|
| true  | true  | false  | true  |
| false | true  | false  | true  |
| true  | false | true   | false |
| false | false |  true  | false | 
6. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4  
      3 + 3 + 4
          6 + 4
              10
  ```
  
 7. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 
 8. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 
 9. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
  
 10. Write a step-by-step evaluation for the following expression `1` + `2` + `3` - `1`. 