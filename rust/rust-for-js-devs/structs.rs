struct URL {
  protocol: String,
  hostname: String,
  pathname: String,
}

impl URL {
  fn to_string(&self) -> String {
    format!("{}://{}/{}", self.protocol, self.hostname, self.pathname)
  }
}

fn main() {
  let url = URL {
    protocol: String::from("http"),
    hostname: String::from("theoldreader.com/kittens"),
    pathname: String::from("600/400")
  };

  println!("URL: {}", url.to_string());
}
