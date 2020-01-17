#include <iostream>
#include <string>

using namespace std;

int main() {
  /* creates an array for:
    0 = false
    1 = true
   */

  string trueOrFalse[] = { "False", "True" };

  int a = 100;
  int b = 33;
  int c = 33;

  cout << "a < b is " << trueOrFalse[a < b] << '\n';
  cout << "a > b is " << trueOrFalse[a > b] << '\n';
  cout << "a != b is " << trueOrFalse[a != b] << '\n';
  cout << "a >= b is " << trueOrFalse[a >= b] << '\n';
  cout << "a >= b is " << trueOrFalse[a >= b] << '\n';
  cout << "a <= b is " << trueOrFalse[a <= b] << '\n';

  return 0;
}
