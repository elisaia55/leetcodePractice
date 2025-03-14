class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        A, B = nums1, nums2
        total = len(nums1) + len(nums2)
        half = total // 2
        if len(B) < len(A):
            A, B = B, A

        left, right = 0, len(A) - 1
        while True:
            i = (left + right) // 2 # A
            j = half - i - 2 #B

            A_left = A[i] if i >= 0 else float('-infinity')
            A_right = A[i + 1] if (i + 1) < len(A) else float('infinity')
            B_left = B[j] if j >= 0 else float('-infinity')
            B_right = B[j + 1] if (j + 1) < len(B) else float('infinity')

            # partition is correct
            if A_left <= B_right and B_left <= A_right:
                #odd 
                if total % 2:
                    return min(A_right, B_right)
                #even
                return (max(A_left, B_left) + min(A_right, B_right)) / 2
            elif A_left > B_right:
                right = i - 1
            else:
                left = i + 1

                ## log(min(n,m))
