 # Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`//number, 17, simple number 
* `1 + 2 * 3 + 4` //arithmetic, 11, PEMDAS and behind the scenes thanks to *, and +
* `800 / 80 / 8`// division, 1.25, straight forward division 
* `400 > 200`//greater than, true, 400 is the bigger number 
* `1 !== 1`//boolean, test for inequality, false, 1 is equal to 1
* `true || false` //OR operator, true, one side has to be true for it to stand 
* `true && false`// AND, false, one statement is false
* `20 % 6`//modulo, 2, remainder is 2
* `'a' + 'b'`//string, 'ab', + puts the two text together

2. What will the following return?
* `typeof 4`// number
*  `typeof 'hello'`//string
*  `typeof true`//true
* `2 === 1 || 3 === 4`//false

3. Create a truth table for the expression A || B.
``` js

|   A   |   B   | A || B |
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  |
```

4. Create a truth table for the expression !A && !B.

``` js 

|   A   |  !A   |   B   |  !B   | !A && !B |
| true  | false | true  | false |  false   |
| false | true  | false | true  |  true    |
| true  | false | false | true  |  false   |
| false | true  | true  | false |  false   |

```

5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
 
 ``` js 

 2 + 3 * 2 + 1
     2 + 6 + 1
	 8 + 1
	     9

```  
  
 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
   
 ``` js

    4 / 2 + 8 / 4
        2 + 8 / 4
	    2 + 2
	        4

 ```

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 
  ``` js

   'ca' + 'ter' + 'pi' + 'llar'
	 'cater' + 'pi' + 'llar'
	      'caterpi' + 'llar'
		   'caterpillar'

```

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
   
     ``` js
   
     2 * 4 === 8 && 'car' + 'pool' === 'carpool'
	 8 === 8 && 'car' + 'pool' === 'carpool'
	      8 === 8 && 'carpool' === 'carpool'
					    true

```
