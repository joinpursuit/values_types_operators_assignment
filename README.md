# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` ... Number expression (17)
* `1 + 2 * 3 + 4` ... Number expression (11)
* `800 / 80 / 8` ... Number expression (1.25)
* `400 > 200` ... Boolean expression (true)
* `true || false` ... Boolean expression (true)
* `true && false` ... Boolean expression (false)
* `20 % 6` ... Number expression (2)
* `'a' + 'b'` ... String expression ('ab')

2. What will the following return?
* `typeof 4` ... 'number'
*  `typeof 'hello'` ... 'string'
*  `typeof true` ... 'boolean'
* `2 === 1 || 3 === 4` ... false

3. Create a truth table for the expression A || B.

``` js

   A   |   B   |  A || B
-------|-------|----------
 true  | true  |  true
 true  | false |  true
 false | true  |  true
 false | false |  false

```

4. Create a truth table for the expression !A && !B.

``` js

   A   |   B   |   !A   |   !B   |  !A && !B  
-------|-------|--------|--------|------------
 true  | true  | false  | false  |  false
 true  | false | false  | true   |  false
 false | true  | true   | false  |  false
 false | false | true   | true   |  true

```

5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.

```js

2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9

```

6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

```js

4 / 2 + 8 / 4
    2 + 8 / 4
        2 + 2
            4

```

7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

```js

'ca' + 'ter' + 'pi' + 'llar'
     'cater' + 'pi' + 'llar'
          'caterpi' + 'llar'
               'caterpillar'

```

8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

```js

2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
       true && 'car' + 'pool' === 'carpool'
       true && 'carpool' === 'carpool'
       true && true
           true

```
