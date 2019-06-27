# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`              //number, 17, no operations used here
* `1 + 2 * 3 + 4`   //arithmetic, 11, follows order of operations 2*3 is 6 +1 +4
* `800 / 80 / 8`    //arithmetic, 1.25, 800/80 equals 10 10/8 = 1.25
* `400 > 200`       //comparison, true, 400 is greater than 200 therefore comparison is true
* `1 !== 1`         //comparison, false, 1 is equal to 1 therefore cannot be both true and false
* `true || false`   //boolean, true, in an or statement at least 1 side must be true
* `true && false`   //boolean, false, in an and statement both sides must be true  o.w false
* `20 % 6`          //arithmetic, 2, 20 / 6 equals 18 remainder 2
* `'a' + 'b'`       //concatenation, ab, takes two strings and combines them

2. What will the following return?
* `typeof 4`            //number
*  `typeof 'hello'`     //string
*  `typeof true`        //boolean
* `2 === 1 || 3 === 4`  //false

3. Create a truth table for the expression A || B.
//////////// Below is my answer
``` js

|   A   |   B   | A || B |
| true  | true  | true   |   
| false | true  | true   |
| true  | false | true   |
| false | false | false  |
```
/////////////////////////////////////////////////

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.
//////////// Below is my answer
``` js

|   A   |   B   |   !A   |   !B   | !A && !B |
| true  | true  | false  | false  | false    |
| false | true  | true   | false  | false    |
| true  | false | false  | true   | false    |
| false | false | true   | true   | true     |

```
/////////////////////////////////////////////////

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
//////////// Below is my answer
```js
2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9
```
/////////////////////////////////////////////////

  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 //////////// Below is my answer
 ```js
 4 / 2 + 8 / 4
     2 + 8 / 4
         2 + 2
             4
 ```
 /////////////////////////////////////////////////

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 //////////// Below is my answer
 ```js
 'ca' + 'ter' + 'pi' + 'llar'
      'cater' + 'pi' + 'llar'
           'caterpi' + 'llar'
                'caterpillar'
 ```
 /////////////////////////////////////////////////

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 //////////// Below is my answer
 ```js
 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
     8 === 8 && 'car' + 'pool' === 'carpool'
        true && 'car' + 'pool' === 'carpool'
             true && 'carpool' === 'carpool'
                                true && true
                                        true
 ```
 /////////////////////////////////////////////////
