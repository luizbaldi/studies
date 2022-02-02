fn main() {
  print_first("Sweet Potato");
  print_first("Michael Cera");
}

fn print_first(str: &str) {
  let parsed_string = String::from(str);
  let parts: Vec<&str> = parsed_string.split_whitespace().collect();

  println!("First name: {}", parts[0]);
}
