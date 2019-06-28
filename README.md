# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // Number expression, Evaluates to 17, because it identifies as a number when it is not in quotations.

* `1 + 2 * 3 + 4` // Number expression, Evaluates to 11, Using arithmetic you multiply first then add.

* `800 / 80 / 8` // Number expression, Evaluates to 1.25, Using arithmetic you divide the numbers in order.

* `400 > 200` // Boolean expression, Evaluates to true, because 400 is greater than 200.

* `1 !== 1` // Boolean expression, Evaluates to false, because it (!==) requires for the numbers to not be equal

* `true || false` // Boolean expression, Evaluates to true, because OR requires only one statement to be true

* `true && false` // Boolean expression, evaluates to false, because AND requires all statements to be true

* `20 % 6` // Number expression, evaluates 2,

* `'a' + 'b'` // String expression, evaluates to ab, when it is in single or double quotations it is considered a string.

2. What will the following return?
* `typeof 4` // Number

*  `typeof 'hello'` // String

*  `typeof true` // Boolean

* `2 === 1 || 3 === 4` // Boolean



3. Create a truth table for the expression A || B.


|   A   |   B   | A || B |
--------|-------|-----------
| true | true | true |
| false | true  | true |
| true | false | true |
| false | false | false |



4. Create a truth table for the expression !A && !B.


| A | B | !A && !B |
----|---|-----------
| true | false | false |
| false | true  | false |
| true | true | false |
| false | true | true |


5. Write a step-by-step evaluation for the following expression (remember order of operations):

```
             `2 + 3 * 2 + 1`.
                  2 + 6 + 1
                      8 + 1
                          9
```


 6. Write a step-by-step evaluation for the following expression (remember order of operations):  

 ```
               `4 / 2 + 8 / 4`.
                    2 + 8 / 4
                        2 + 2
                            4
```

 7. Write a step-by-step evaluation for the following expression:

 ```
     `'ca' + 'ter' + 'pi' + 'llar'`.
           'cater' + 'pi' + 'llar'
                'caterpi' + 'llar'
                     'caterpillar'
```


 8. Write a step-by-step evaluation for the following expression:

 ```
     `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
          8 === 8 && 'car' + 'pool' === 'carpool'
               8 === 8 && 'carpool' === 'carpool'
                                    true && true
                                            true
```
