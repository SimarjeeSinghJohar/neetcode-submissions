class Solution {
    public boolean isValid(String s) {
        HashMap<Character,Character> res = new HashMap<>();
        Stack<Character> stack = new Stack<>();
        res.put(')','(');
        res.put(']','[');
        res.put('}','{');

        for(int i = 0; i < s.length(); i++){
           if(res.containsKey(s.charAt(i))) {
              if(!stack.isEmpty() && stack.peek() == res.get(s.charAt(i))){
                stack.pop();
              }else {
                return false;
              }
            } else {
                stack.push(s.charAt(i));
            }

        }
        return stack.isEmpty();
    }
}
