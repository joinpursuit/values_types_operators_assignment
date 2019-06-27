# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`
//This is a number and it evaluates to 17 because numbers follow basic math rules.
* `1 + 2 * 3 + 4`
//This is a number and it evaluates to 11 because it did multiplication before addition.
* `800 / 80 / 8`
//This is a number and it evaluates to 1.25 because it did division.
* `400 > 200`
//This is a boolean and it evaluates to true because 400 is indeed greater than 200.
* `1 !== 1`
//This is a boolean and it evaluates to false because 1 is definitely equal to 1.
* `true || false`
//This is a boolean and it evaluates to true because at least one of the values of the expression is true.
* `true && false`
//This is a boolean and it evaluates to false because both of the values of the expression is not true.
* `20 % 6`
//This is a number and it evaluates to 2 because the expression is looking for the remainder after the division occurs.
* `'a' + 'b'`
//This is a string and evaluates to ab because the plus sign between the two strings is used to join the two together.

2. What will the following return?
* `typeof 4`
//number
*  `typeof 'hello'`
//string
*  `typeof true`
//boolean
* `2 === 1 || 3 === 4`
//false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

/*
|   A   |   B   |  A || B |
| true  | true  |   true  |
| true  | false |   true  |
| false | true  |   true  |
| false | false |   false |
*/
```
4. Create a truth table for the expression !A && !B.

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

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
