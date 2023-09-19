### 1. Arrays and Strings:
- **Look for**: Sorting, reversing, manipulating elements, finding duplicates, or finding contiguous subsequences.
- **Example**: Find the "Kth largest element" in an unsorted array.
- **Detailed Insights**: 
  - Sorting may be unnecessary; use a min-heap or QuickSelect.
  - Beware of off-by-one errors and duplicates.
  - Consider space complexity in solutions.
- **Common Pitfalls**: Thinking you need a complex structure; overlooking edge cases; time complexity issues with nested loops.

### 2. Linked Lists:
- **Look for**: Reversal, middle element, cycle detection, merging sorted lists.
- **Example**: "Reverse a Linked List."
- **Detailed Insights**: 
  - Watch out for null pointers.
  - Use multiple pointers to track positions.
- **Common Pitfalls**: Not handling head or tail pointers properly; missing edge cases with one or two nodes.

### 3. Stacks and Queues:
- **Look for**: Balancing symbols, basic algorithms, LIFO/FIFO structures, tracking maximum elements.
- **Example**: "Validate Parentheses."
- **Detailed Insights**: 
  - Stacks are useful for balancing and tracking previous states.
  - Queues help in breadth-first traversal or maintaining order.
- **Common Pitfalls**: Confusing when to use stack vs queue; forgetting to handle underflow/overflow.

### 4. Hashing:
- **Look for**: Efficient search, insertion, deletion; counting elements; finding duplicates or pairs.
- **Example**: "Find the first non-repeating character."
- **Detailed Insights**: 
  - Unordered maps provide quick look-up.
  - Beware of collisions and understand underlying hash functions.
- **Common Pitfalls**: Hash collisions; using the wrong key; forgetting to update the value.

### 5. Trees and Graphs:
- **Look for**: Hierarchical relationships, traversal, shortest paths, minimal spanning trees.
- **Example**: "Find the lowest common ancestor in a binary tree."
- **Detailed Insights**: 
  - Depth/Breadth-first search techniques are vital.
  - Handling different types of trees: Binary, AVL, Red-Black, etc.
- **Common Pitfalls**: Confusing different traversal methods; graph cycles.

### 6. Heaps:
- **Look for**: Finding kth largest or smallest elements, median finding, priority queues.
- **Example**: "Merge K sorted lists."
- **Detailed Insights**: 
  - Min-heap and max-heap selection based on context.
  - Heaps are efficient for priority processing.
- **Common Pitfalls**: Choosing the wrong type of heap (min-heap vs max-heap).

### 7. Dynamic Programming:
- **Look for**: Optimization problems, counting problems, overlapping subproblems.
- **Example**: "Coin Change Problem."
- **Detailed Insights**: 
  - Break problems into overlapping subproblems.
  - Utilize memoization for efficient computation.
- **Common Pitfalls**: Not identifying proper subproblems or base case; recursion without memoization.

### 8. Searching and Sorting:
- **Look for**: Sorting algorithms, binary search, quick sort, or merge sort variants.
- **Example**: "Search in Rotated Sorted Array."
- **Detailed Insights**: 
  - Binary search for quick lookup in sorted arrays.
  - Quick sort or merge sort for efficient sorting, considering worst-case scenarios.
- **Common Pitfalls**: Choosing an inefficient sort algorithm; off-by-one errors in binary search.

### 9. Bit Manipulation:
- **Look for**: Counting bits, finding single numbers, binary representations.
- **Example**: "Find the single number where every element appears twice except for one."
- **Detailed Insights**: 
  - Utilize XOR operations.
  - Understand shifting and AND, OR, NOT operations.
- **Common Pitfalls**: Confusion with binary operations and shifting bits.

### 10. Math and Geometry:
- **Look for**: Mathematical operations, prime numbers, greatest common divisor, geometrical calculations.
- **Example**: "Compute the area of overlap between two rectangles."
- **Detailed Insights**: 
  - Use fundamental mathematical properties or geometrical algorithms.
  - Beware of integer overflows or floating-point inaccuracies.
- **Common Pitfalls**: Overcomplicating simple mathematical relationships; floating-point precision errors.

### Tips:
- Read the problem statement multiple times.
- Try to identify the underlying problem with examples or analogies.
- Use brute force first if the optimal solution is not obvious, then optimize.
- Think about edge cases and test thoroughly.
- Write down, talk through, practice with constraints, and test with different cases to deepen understanding.