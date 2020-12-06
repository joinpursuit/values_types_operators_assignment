//PROBLEM ONE

17
//number, 17
1 + 2 * 3 + 4
//number, 11
800 / 80 / 8
//number, 1.25
400 > 200
//boolean, true
1 !== 1
//boolean, false
true || false
//boolean, true
true && false
//boolean, false
20 % 6
//number, 2
"a" + "b"
//string, 'ab'


//PROBLEM TWO

typeof 4
//number
typeof "hello"
//string
typeof true
//boolean
2 === 1 || 3 === 4
//false


//PROBLEM THREE

|   A   |   B   |  A && B  |  A || B  |
|-------|-------|----------|----------|
| true  | true  |   true   |   true   |
|-------|-------|----------|----------|
| false | true  |   false  |   true   |
|-------|-------|----------|----------|
| true  | false |   false  |   true   |
|-------|-------|----------|----------|
| false | false |   false  |   false  |


//PROBLEM FOUR

|   A   |   B	|  !B	| A && !B | !A && !B |
|-------|-------|-------|---------|----------|
| true	| true	| false |  false  |  false   |	
|-------|-------|-------|---------|----------|
| false	| true	| false	|  false  |	 false   |
|-------|-------|-------|---------|----------|
| true  | false	| true	|  true	  |  false   |
|-------|-------|-------|---------|----------|
| false | false	| true	|  false  |  true    |	


//PROBLEM FIVE

|   A   |   B	|  !(A || B)  | 
|-------|-------|-------------|
| true	| true	|    false    |	
|-------|-------|-------------|
| false	| true	|    false	  | 
|-------|-------|-------------|
| true  | false	|    false	  |
|-------|-------|-------------|
| false | false	|    true     |


//PROBLEM SIX

2 + 3 * 2 + 1
//Step 1: 2 + 6 + 1
//Step 2: 8 + 1
//Step 3: 9


//PROBLEM SEVEN

4 / 2 + 8 / 4
//Step 1: 2 + 8 / 4
//Step 2: 2 + 2
//Step 3: 4


//PROBLEM EIGHT

'ca' + 'ter' + 'pi' + 'llar'
//Step 1: 'cater' + 'pi' + 'llar'
//Step 2: 'caterpi' + 'llar'
//Step 3: 'caterpillar'


//PROBLEM NINE

2 * 4 === 8 && 'car' + 'pool' === 'carpool'
//Step 1: 8 === 8  && 'car' + 'pool' === 'carpool'
//Step 2: True && 'carpool' === 'carpool
//Step 3: True && True
//Step 4: True


//PROBLEM TEN

'1' + '2' + '3' - '1'
//Step 1: '12' + '3' - '1'
//Step 2: '123' - '1'
//Step 3: '122'
