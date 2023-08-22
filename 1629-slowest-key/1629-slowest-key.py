class Solution:
    def slowestKey(self, releaseTimes: List[int], keysPressed: str) -> str:
        timer = {releaseTimes[0]: [keysPressed[0]]}
        
        for i in range(1, len(releaseTimes)):
            t = releaseTimes[i] - releaseTimes[i - 1]
            if (t in timer):
                timer[t].append(keysPressed[i])
            else:
                timer[t] = [keysPressed[i]]
        keys = timer[max(timer.keys())]
        
        return max(keys)