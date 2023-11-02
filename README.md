[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12047897&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answer
I think this function will go to the worst-case runtime would be n^2. 

First, it takes the first element in the array as the pivot, the left element starts from the beginning of the array, and the right element is the last element in the array. Then compare the left and right index, partition bigger elements that go to the right side, and smaller elements that go to the left side, and also change the pivot position all the time(time complexity is constant time). Continue to swap positions until it is sorted in place. 

The outer while loop in the worst case will run O(n), n is the number of elements in the array.

while (L < R)  the partition step with the worst case would be O(n). swap position takes constant time. 

So, the total worst-case time analysis should be O(n^2). 
