# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` -> Number: All integers a decimals will be considered numbers by the terminal
* `1 + 2 * 3 + 4` -> 11 -> Number: After the operators are completed the solution is considered a Number
* `800 / 80 / 8` -> 1.25 -> Number: Here we can see even decimals are considered Numbers
* `400 > 200` -> True -> Boolean: Comparison operators will produce true or false values
* `1 !== 1` -> False -> Boolean: The value and type are both equal so they don't meet !== Requirements
* `true || false` -> True -> Boolean: Both sides must be false for the result to be false. So its true
* `true && false` -> False -> Boolean: If both sides are true for && then it must be true, otherwise false
* `20 % 6` -> 2 -> Number: The operator produces the remainder of the two numbers. CLI Considers it a number
* `'a' + 'b'` -> 'ab' -> String: Once the two strings are concatenated it still creates a string

2. What will the following return?
* `typeof 4` -> Number
*  `typeof 'hello'` -> String
*  `typeof true` -> Boolean
* `2 === 1 || 3 === 4` -> false || false -> false -> Boolean

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

#Example
|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

#Answer
|   A   |   B   | A || B |
| true  | true  | true  |
| false | true  | true |
| true  | false | true |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

#Example
|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

#Answer
|   A   |   !A   |   B   |   !B   | A && B |
| true  | false  | true  | false  | false  |
| false | true   | true  | false  | false  |
| true  | true   | false | true   | true   |
| false | true   | false | true   | false  |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:

  ```js
#Example
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
#Answer
  2 + 3 * 2 + 1
      2 + 6 + 1
          8 + 1
              9              
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

```js
 #Answer
  4 / 2 + 8 / 4
      2 + 8 / 4
          2 + 2
              4

 ```

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

```js
#Answer
  'ca' + 'ter' + 'pi' + 'llar'
       'cater' + 'pi' + 'llar'
            'caterpi' + 'llar'
                 'caterpillar'
```


 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 ```js
 #Answer
  2 * 4 === 8 && 'car' + 'pool' === 'carpool'
      8 === 8 && 'car' + 'pool' === 'carpool'
         true && 'car' + 'pool' === 'carpool'
              true && 'carpool' === 'carpool'
                                 true && true
                                         true
 ```

 #By Kameron Montague
