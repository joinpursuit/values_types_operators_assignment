# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` It is a number because it has a numerical value without quotations.
* `1 + 2 * 3 + 4` 11. You do the multiplication first and then the addition.
* `800 / 80 / 8` 1.25. 800/80 = 10. 10/8 = 1.25
* `400 > 200` True
* `1 !== 1` false
* `true || false` true, because once the first is true JavaScript does not even go to the second.
* `true && false` false, because both need to be true in order for it to be true.
* `20 % 6` 2, because 6 * 3 = 18 and 20 - 18 = 2
* `'a' + 'b'` ab, because you are combining both strings.

2. What will the following return?
* `typeof 4` Number
*  `typeof 'hello'` String
*  `typeof true` Boolean
* `2 === 1 || 3 === 4` false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
MY TTRUTH TABLE FOR A || B

|   A   |   B   | A || B |
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  |



4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
|   A   |   B   | !A && !B |
| true  | true  | false    |
| false | true  | false    |
| true  | false | false    |
| false | false | true     |


5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```

  2 + 3 * 2 + 1
  2 +   6   + 1
      8     + 1
          9

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 4 / 2 + 8 / 4
   2   +   2
       4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

'ca' + 'ter' + 'pi' + 'llar'
    'cater'  + 'pi' + 'llar'
         'caterpi'  + 'llar'
               'caterpillar'    

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
   8   === 8 &&     'carpool'  === 'carpool'
      true   &&             true
              true 
