// Playing around with the Rust syntax

fn main() {
  let mut name = "Luiz";
  println!("Initial value: {}", name);

  name = "New name";
  println!("New assigned value: {}", name);

  const COMPILE_TIME_CONST: bool = true;
  println!("Compile time const: {}", COMPILE_TIME_CONST);

  let list_example: [u32; 3] = [42, 52, 62];
  println!("List: {:?} - Length: {}", list_example, list_example.len());

  println!("Floats sum: {}", sum_floats(5.50, 42.24));

  let sum = |x,y| x + y;
  println!("Anonymous sum: {}", sum(10, 5));

  enums();
}

fn sum_floats(a: f64, b: f64) -> f64 {
  a + b
}

fn enums() {
  #[derive(Debug)]
  enum Color {
    Red,
    Blue
  }

  let red = Color::Red;
  println!("Apples are {:?}", red);

  let blue = Color::Blue;
  println!("The sky is {:?}", blue);
}
