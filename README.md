# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` Number- just a simple number 17
* `1 + 2 * 3 + 4` These are numbers, = to 11
* `800 / 80 / 8` numbers that are equal to 1.25
* `400 > 200` Boolean, true, because 400 is greater than 200
* `1 !== 1` Boolean, this false because 1=1
* `true || false` Boolean, true because true makes it true.
* `true && false` boolean- false because both need to be true
* `20 % 6` Number, the result is the number 2
* `'a' + 'b'` String, this adds a and b together to get the result 'ab'

2. What will the following return?
* `typeof 4` result = number
*  `typeof 'hello'` result = string
*  `typeof true` result = boolean
* `2 === 1 || 3 === 4` result = false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js
|   A   |   B   | A ||B |
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false |

|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

| !A    |   A   |   B   |   !B   | A & B |
| false | true  | true  | false  | false |
| true  | false | true  | false  | false |
| false | true  | false | true   | false |
|  true | false | false |  true  | true  |





|   A   |   B   |   !B   | A & B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.

2 + 3 * 2 + 1
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
