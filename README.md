# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // number 17 because an integer is a number
* `1 + 2 * 3 + 4` // number 1 + 6 + 4 = 11, bc of order of operations
* `800 / 80 / 8` // 1.25 number we use order of Operation to divide 800/80 which is 10 and divide that by 8 which is a floating number 1.25
* `400 > 200` // true comparison bc 400 is greater than 200
* `1 !== 1` // false comparison Operators because 1 does = to 1
* `true || false` // true booleans there is a true in there
* `true && false` // false booleans it's false because it is looking for two truths
* `20 % 6` // 2 is the remainder
* `'a' + 'b'` // concatenate the answer will be ab. we are adding a string to another string

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` // string
*  `typeof true` // booleans
* `2 === 1 || 3 === 4` // booleans and is false

3. Create a truth table for the expression A || B.
// |  A    |   B   |  A || B
// | true  | true  | true   |
// | false | true  | true   |
// | true  | false | true   |
// | false | false | false  |

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.

// |   A   |   B   |  !A   |   !B   | !A & !B |
// | true  | true  | false | false  |  false  |
// | false | true  | true  | false  |  false  |
// | true  | false | false | true   |  false  |
// | false | false | true  | true   |  true   |

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & !B |
| true  | true  | false  | false  |
| false | true  | false  | false  |
| true  | false | true   | true   |
| false | false |  true  | false  |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.

``` js
2 + 3 * 2 + 1
2 +     6 + 1
        8 + 1
            9   
we multiply 3 * 2 and then we add 6 to 2 and 8 to 1 to get 9
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
4 / 2 + 8 / 4
2 + 8 / 4
2 + 2
4
 ```

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

// 'ca' + 'ter' + 'pi' + 'llar'
// 'cater' + 'pi' + 'llar'
// 'caterpi' + 'llar'
// 'caterpillar'


 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

// 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
//     8 === 8    &&    'carpool' === 'carpool'
//      true      &&        true
//              true
