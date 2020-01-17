#include <iostream>
#include <string>

using namespace std;

int main() {
  int givenInt;
  float givenFloat;
  string givenString;
  char givenChar;

  int *pointerGivenInt = &givenInt;

  /* joking around with pointers lol */
  int **pointerPointerGivenInt = &pointerGivenInt;

  cout << "Int value: ";
  cin >> givenInt;
  cout << "Value: " << givenInt << ", address value: " << &givenInt << '\n';

  cout << "Float value: ";
  cin >> givenFloat;
  cout << "Value: " << givenFloat << ", address value: " << &givenFloat << '\n';

  cout <<"String value: ";
  cin >> givenString;
  cout << "Value: " << givenString << ", address value: " << &givenString << '\n';

  cout <<"Char value: ";
  cin >> givenChar;
  cout << "Value: " << (char) givenChar << ", address value: " << &givenChar << '\n';

  cout << "Pointer of given Int: " << *pointerGivenInt << '\n';
  cout << "Pointer of pointer of given Int: " << **pointerPointerGivenInt << '\n';

  return 0;
}
