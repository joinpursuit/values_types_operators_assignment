# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`-
 a number, 17 bc it's a number
* `1 + 2 * 3 + 4`
 number, 21
* `800 / 80 / 8`
 a number, 1.25,
* `400 > 200`
numbers, true bc 400 is greater than 200
* `1 !== 1`
false bc the ! makes it untrue
* `true || false`
Boolean, true bc the || looks for atleast one true and it has one.
* `true && false`
Boolean, False bc the && means both need to be true in order for it to return a true.
* `20 % 6`
Number, 2 bc that is the remainder
* `'a' + 'b'`
string, AB bc it is a string concatenation

2. What will the following return?
* `typeof 4`
 Number
*  `typeof 'hello'`
String
*  `typeof true`
Boolean
* 2 === 1 || 3 === 4`
Boolean
3. Create a truth table for the expression A || B.

A   |   B   | A || B |
| true  | true  | true|
| false | true  |true |
| true  | false | true|
| false | false |false|



```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|  A   |  !A  |   B  |   !B   | A! & !B |
| true  |false| true |  false  | false |
| false |true | true |  false  | false |
| true  |false| false|  true   | false |
| false |true | false|  true   | true  |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.


  ````2 + 3 * 2 + 1
          2 + 6 + 1
              8 + 1
                  9

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 ````4 / 2 + 8 / 4`
             2 + 4
                  6


 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

    'cater' + "pi" + "llar"
         "caterpi" + "llar"
              "caterpillar"



 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

    2 * 4 === 8 && 'car' + 'pool' === 'carpool'`
    8 === 8 && 'car' + 'pool' === 'carpool'
    true && "carpool" === "carpool"
    true && true
  returns  true.
