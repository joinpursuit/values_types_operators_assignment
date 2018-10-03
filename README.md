# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // number that evaluates to 17
* `1 + 2 * 3 + 4` // an expression that will return the value of 11
* `800 / 80 / 8` // an expression that once divided will return the value of 1.25
* `400 > 200` // an expression which will evaluate both the left and right hand side and compare them. The operand in the middle is asking if the left side is greater than the right side, in this case 400 is greater than 200, so the return value will be true
* `1 !== 1` // an expression that will also evaluate the left and right side. The operand is asking if the left side is not eqaul to the right. in this case 1 is equal to 1, so the return value is False
* `true || false` // an expression evaluating both sides again, asking if either side is true, in this case the left side is true which means that the return value is True
* `true && false` // an expression that will again evaluate both sides , this is asking if both sides are true. in this case the right side is false, which means this will return a value of false
* `20 % 6` //an expression asking to find the remainder after you divide these two numbers. The operand is called modulo, when dividing the two numbers the remainder will be 2
* `'a' + 'b'` // an expression asking to join two strings together, called concatenating, it will return ab

2. What will the following return?
* `typeof 4` // this expression will return 'number'
*  `typeof 'hello'` // this expression will return 'string'
*  `typeof true` // this expression will return 'boolean'
* `2 === 1 || 3 === 4` // this expression will return false because the operand in the middle is suppose to determine whether either side is equal, on the left side 2 does not equal 1, on the right side 3 does not equal 4, so the return should be false

3. Create a truth table for the expression A || B.


// |   A   |   B   | A || B |
// | true  | true  | true  |
// | false | true  | true  |
// | true  | false | true  |
// | false | false | false |
```
4. Create a truth table for the expression !A && !B.



``` js

// |   A   |   B   |   !A   |  !B   | !A && !B |
// | true  | true  | false  | false | true     |
// | false | true  | true   | false | false    |
// | true  | false | false  | true  | false    |
// | false | false | true   | true  | true     |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.

    // 2 + 3 * 2 + 1
    // 2 + 6 + 1
    // 8 + 1
    // 9
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

    // 4 /2 + 8 /4
    // 2 + 8 / 4
    // 2 + 2
    //4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

    // 'ca' + 'ter' + 'pi' + 'llar'
    // 'cater' + 'pi' + 'llar'
    // 'caterpi' + 'llar'
    // 'caterpillar'

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

  // 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
  // 8 === 8 && 'car' + 'pool' === 'carpool'
  // TRUE && 'carpool' === 'carpool'
  // TRUE && True
  // TRUE 
