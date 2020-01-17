#include <iostream>
#include <string>

using namespace std;

int main() {
  int* pointerInteger;
  int number;
  char* pointerCharacter;
  char character;
  string *pointerSentence;
  string sentence;

  pointerInteger = &number;
  *pointerInteger = 42;

  pointerCharacter = &character;
  *pointerCharacter = 'c';

  pointerSentence = &sentence;
  *pointerSentence = "Life is just an illusion.";

  cout << "Number = " << number << '\n';
  cout << "Character = " << character << '\n';
  cout << "Sentence = " << sentence << '\n';

  return 0;
}
