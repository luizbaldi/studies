fn main() {
  let year = 1996;
  let generation = get_generation(1996);
  println!("Generation for year {}: {}", year, generation);

  for_in();

  let mut lan = Status::Connected;
  pattern_matching(lan);

  lan = Status::Failure(String::from("Something went wrong."));
  pattern_matching(lan);
}

// if/else blocks can be treated like expressions
fn get_generation(year: u32) ->  &'static str {
  let generation = if year >= 1946 && year < 1965 {
    "Boomer"
  } else if year >= 1965 && year < 1981 {
    "Generation X"
  } else if year >= 1981 && year < 1997 {
    "Millenial"
  } else if year >= 1997 && year < 2012 {
    "Generation Z"
  } else {
    "Unknown Generation"
  };

  generation
}

fn for_in() {
  let planets: [&str; 8] = [
      "Mercury",
      "Venus",
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
  ];

  println!("\n-- Planets --");
  for planet in planets {
    print!("{} ", planet);
  }
}

enum Status {
  Connected,
  Disconnected,
  Failure(String),
}

fn pattern_matching(lan: Status) {
  println!("\n\n-- Pattern maching --");

  match lan {
    Status::Connected => {
      println!("Connection established.");
    }
    Status::Disconnected => {
      println!("Connection lost");
    }
    Status::Failure(error) => {
      println!("Error: {}", error);
    }
  }
}
