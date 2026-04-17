class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        while(i < j){
            if(numbers[i] === numbers[i-1]){
                i++;
            }
            let sum = numbers[i] + numbers[j];
            if(sum < target){
                i++;
            }else if(sum > target){
                j--;
            }else {
                return [i+1,j+1];
            }
        }
        return [];
    }
}
