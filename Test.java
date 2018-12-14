public class Solution {

    public static void main (String[] argv) {
        double probability = getTruck(10);
        System.out.println (probability);
    }

    static double coincidingBirthdays (int sampleSize) {
        int repititions = 10000;
        int overlappingBdays = 0;
        for (int n=0; n < repititions; n++) {
            Hash<Integer, Integer> bdays = new HashMap<Integer, Integer>();
            for (int i=0; i < sampleSize; i++) {
                int day = (int) (Math.random()*365 + 1);
                if (bdays.get(day) > 0) {
                  overlappingBdays++;
                  break;
                }
                bdays.put(day, 1);
            }                        
        }

        double probability = (double) overlappingBdays / (double) repititions;
        return probability;

    }

}
