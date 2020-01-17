#include <iostream>

using namespace std;

int main() {
  int a = 65;
  char charA = 65;
  char charB = 'B';
  float answer = 0;
  char charC = 67;
  int integer = 80;
  float floatNumber = 0.0;

  cout << "a = " << a << "\n";
  cout << "charA = " << charA << "\n";
  cout << "charB = " << charB << "\n";
  cout << "integer = " << integer << "\n\n";

  // we can assign an integer to a float
  floatNumber = integer;
  cout << "floatNumber = integer = " << floatNumber << "\n\n";

  // we can assign a char to a float
  floatNumber = charB;
  cout << "floatNumber = charB = " << floatNumber << "\n\n";

  answer = floatNumber / 4;
  cout << "answer = floatNumber/4 = " << answer << "\n\n";

  // but assigning a float to a char doesn't quite work
  charC = answer;
  cout << "charC = answer = " << charC << "\n\n";

  // assigning a float to an interger, results in the float being truncated
  integer = answer;
  cout << "integer = floatNumber = " << integer << "\n\n";

  return 0;
}
