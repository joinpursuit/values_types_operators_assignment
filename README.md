# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`
Is a number 17
* `1 + 2 * 3 + 4`
Is an arithmetic operator of numbers, the result is 21
* `800 / 80 / 8`
Is another arithmetic operator, the result is 1.25.
* `400 > 200`
Is a comparison operator, where the 400 is bigger than 200.
* `1 !== 1`
Is a Booleans, is looking for the opposite, the result is False.
* `true || false`
Is a Booleans, with the operator OR. The result is true.
* `true && false`
Is another Booleans, with the operator AND, the result is false.
* `20 % 6`
 Is a arithmetic operator with Modulo, the remainder is 2.
* `'a' + 'b'`
 Is a concatenation of two strings, the result is "ab".

2. What will the following return?
* `typeof 4` Number
*  `typeof 'hello'` String
*  `typeof true` Boolean
* `2 === 1 || 3 === 4` Is a Boolean where compare two outputs.

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js
|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
``` js
|  A   |   B   |  A||B |
| true | true  | true  |
| false| true  | true  |
| true | false | true  |
|false | false | false |
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

``` js
|  A   |   B   |  !A  |  !B   | !A && !B |
| true | true  | false| false | false    |
| false| true  | true | false | false    |
| true | false | false| true  | true     |
|false | false | true | true  | true     |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
  ``` js
  2 + 3 * 2 + 1
      5 * 3
       15
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

``` js
4 / 2 + 8 / 4
    2 + 2
      4
```
 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 ``` js
 'ca' + 'ter' + 'pi' + 'llar'
 caterpillar
  ```
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
  ``` js
  2 * 4 === 8 && 'car' + 'pool' === 'carpool'
      8 === 8 && carpool === carpool
      Boolean True.
  ```
