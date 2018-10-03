# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`
*/Number: Evaluates to "17" because it's just the number 17. /*

* `1 + 2 * 3 + 4`
*/
Arithmetic: Evaluates to 11. Order of operations:
1 + 2 * 3 + 4
-> 1 + 6 + 4
-> 7 + 4
-> 11
/*

* `800 / 80 / 8`
*/
Arithmetic: Evaluates to 1.25.
800 / 80 / 8
-> 10 / 8
-> 1.25
/*

* `400 > 200`
*/
Comparison Operator: Evaluates to true.
'>' means 'greater than' and 400 is greater than 200.
/*

* `1 !== 1`
*/
Logical Operator: Evaluates to false.
'!==' means 'does not equal to'. 1 is equal to 1.
/*

* `true || false`
*/
Logical Operator: Evaluates to true.
'||' is or. Since there is a true value, it returns 'true'.
/*

* `true && false`
*/
Logical Operator: Evaluates to false.
Something can't be true and false, so it returns false.
/*

* `20 % 6`
*/
Arithmetic: Evaluates to 2.
% is the modular operator which is the remainder. The remainder of 20 / 6 is 2.
/*

* `'a' + 'b'`
*/ String: Evaluates to 'ab'. + between two strings concatenates the strings. /*

2. What will the following return?
* `typeof 4`
// Number

*  `typeof 'hello'`
// String

*  `typeof true`
// boolean

* `2 === 1 || 3 === 4`
// false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```

*/

|   A   |   B   | A || B |
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  |

/*

4. Create a truth table for the expression !A && !B.

*/

|   A   |   B   | !A && !B |
| true  | true  | true     |
| false | true  | false    |
| true  | false | false    |
| false | false | false    |

/*

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```

*/

|   A   |   B   |   !B   | A && !B |
| true  | true  | false  | false   |
| false | true  | false  | false   |
| true  | false | true   | true    |
| false | false |  true  | false   |

/*

5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
*/
2 + 3 * 2 + 1
-> 2 + 6 + 1
-> 8 + 1
-> 9
/*


 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
*/
4 / 2 + 8 / 4
-> 2 + 8 / 4
-> 2 + 2
-> 4
/*

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 */
'ca' + 'ter' + 'pi' + 'llar'
-> 'cater' + 'pi' + 'llar'
-> 'caterpi' + 'llar'
-> 'caterpillar'
 /*

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 */
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'car' + 'pool' === 'carpool'
true && 'car' + 'pool' === 'carpool'
true && 'carpool' === 'carpool'
true && true
 /*
