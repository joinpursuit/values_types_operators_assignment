# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* 17
// Number expression, evaluate to 17, because it is a single integer.

* 1 + 2 * 3 + 4
// Number expression, evaluate to 11, because of the order of operation (PEMDAS).

* 800 / 80 / 8
// Number expression, evaluate to 1.25, because they all contain the same order of operation (division).

* 400 > 200
// Boolean expression, evaluate to true, because 400 is > (greater) than 200.

* 1 !== 1
// Boolean expression, evaluate to false, because the !== (not equal) returns the opposite value.

* true || false
// Boolean expression, evaluate to true, because the || (OR operator)  check if one of the two statements is true.

* true && false
// Boolean expression, evaluate to false, because the && operator check that both left-hand and right-hand sides are true. If they are not the value is return false.

* 20 % 6
// Number expression, evaluate to 2 because the remainder of 20 / 6 = 2 ( check for odd and even numbers).

* 'a' + 'b'
// String concatenation expression, evaluate to 'ab,' because the + (addition sign) join two strings together.

2. What will the following return?

* typeof 4
// Number expression, evaluate to 'number,' because typeof operator returns a string with the type of the value that follows it. In this case, the value is a number 4.

*  typeof 'hello'
// String expression, evaluate to 'string,' because typeof operator returns a string with the type of the value that follows it. In this case, the value is a string.

*  typeof true
// Boolean expression, evaluate to 'boolean', because typeof operator returns a string with the type of the value that follows it. In this case, a boolean, because it indicates whether a statement is true or false.

2 === 1 || 3 === 4
// Boolean expression, evaluate to 'false', because we use || operator to check if one of the two statements is true. In this case, both left-hand and right-hand side are false.

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
//      A || B     

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
// !A && !B   

|   A   |   B   | !A     |  !B     | A && B|
| true  | true  | false  |  false  | true  |
| false | true  | true   |  false  | false |
| true  | false | false  |  true   | false |
| false | false | true   |  true   | false |

5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4     
      3 + 3 + 4          
          6 + 4
              10
  ```
  // `2 + 3 * 2 + 1`
          2 + 6 + 1
              8 + 1
                  9

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

// `4 / 2 + 8 / 4`
         2 + 8 /4
            2 + 2
                4


 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 // `'ca' + 'ter' + 'pi' + 'llar'`
          `'cater + 'pi' + 'llar'`
              `' caterpi + 'llar'`
                  `' caterpillar'`


 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

  //`2 * 4 === 8 && 'car' + 'pool' === 'carpool'`
       `8 === 8 && ' car' + 'pool' === 'carpool'`
             `8 === 8 && 'carpool' === 'carpool'`
                `true && 'carpool' === 'carpool'`
                                  `true && true'`
                                            true
