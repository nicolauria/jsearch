class Dog {
  int age;
  public Dog(int dogsAge) {
    age = dogsAge;
  }

  public void bark() {
    System.out.println("Spike barks!");
  }

  public static void main(String[] args) {
    Dog spike = new Dog(10);
    spike.bark();
  }
}
