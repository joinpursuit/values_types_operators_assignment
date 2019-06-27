# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // number, this evaluates to 17, because it is a number that was entered 
* `1 + 2 * 3 + 4` // number, this evaluates to the number 11, because it is following the order of operations
* `800 / 80 / 8` // number, this evaluates to the number 1.25, because it is moving sequentially and the order of operation is from left to right
* `400 > 200`// Boolean, this evaluates to true, because it is asking if 400 is greater than 200 which it is
* `1 !== 1` // Boolean, this evaluates to false, because it is asking if 1 is itself
* `true || false` // Boolean, this evaluates to true, because the operand is asking true or false
* `true && false`// Boolean, evaluates to false, because && (AND) requires both sides to be false to give us false
* `20 % 6` // number, this evaluates to 2, because it is looking for the remainder of 20 divided by 6
* `'a' + 'b'`// string, this evaluates to ab, because the two strings are being concatenated

2. What will the following return?
* `typeof 4` // It will return a message telling you that 4 is a number
*  `typeof 'hello'`// This will return a message stating that this is a string
*  `typeof true` // This will show you that it is a Boolean
* `2 === 1 || 3 === 4` // This will give you a Boolean message that the expression is false

3. Create a truth table for the expression A || B.

|   A   |   B    | A || B |
| false |  false | false  |
| false |  true  | true   |
| true  |  false | true   |
| true  |  true | true    |

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.

|   A   |   B    |  !A   |   !B  | !A || !B |
| false |  false | true  | true  | false  |
| false |  true  | true  | false | true   |
| true  |  false | false | true  | true   |
| true  |  true  | false | false | false  |

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
2 + 6 + 1
    8 + 1
        9  

  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
    4 / 2 + 8 / 4
            2 + 2
                4
 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
      caterpillar

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.
     8 === 8 && carpool === carpool
                               true
