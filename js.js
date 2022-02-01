var x = 3, y = 2, z = 1, result;


/*
    Bitwise operators
    helps to perform operations in the computer bit level
    types
        & -Bitwise AND operator
        | -bitwise OR operator
        ^ -bitwise ^OR(Exclusive OR) operator => if two oprands are same then it returns a false 
        ~ -bitwise NOT operator => inverts all the values of the bit

        3 - 0000 0011
        2 - 0000 0010
        1 - 0000 0001
*/ 
/*
Tenary Operator
requires three oprands to execute
*/
var result, x = 3;
result = x > 2 ? "Ya!" : "Nah!";
console.log(result);

/*
Branching Statements
types
    Decision making Construct
        IF statements
        Switch statments
    Iterators/repeatation/loop
        for...loop
        for(initialization; test_expr; incr/decrementation/skip){
            code to be executed;
        }
        use for loop when you know the number of times to iterate while the others is preferable when
        you dont know the number of times to iterate.
        "continue"=> is used to iterate thus sending the program back to the loop
        "break"=> is used to stop a program from running
        while....loop
        while(test_expr; ){
            code to be executed;
            var--/++
        }
        do whlie....loop
        do{
            code to be executed;
        }while(test_expr);



    "ARRAYS" => are collection of ariables accessed using thesame name
    the collection of variable are called "Elements"
    var cars = []; => creating an empty array
    var cars = new Array(); creating an array by referencing the array function
    ArrayName.length => gives the total number of element in an array
    "pop" and "push" is used to add and remove values from an array from the rear/back
    "shift" and "unshift" is used to remove or add values from an array from the front
    ==>to print an associative array for (var newvariable of oldvariable){console.log(astudent)}
    ==>to print an associative array for (var newvariable in oldvariable){console.log(astudent)}
    An array inside an array is multidimensional var cars = [
        [],
        [],
        []
    ]; 2 x 3 multidimensional array
    to push values in dimentional array
    arrayName[index/row].push(element);
    arrayName[index/row][column].push(element);
    e.g
    var cars = new Array(
        new array("kia p2", "kia kamoski")
    )
    
*/