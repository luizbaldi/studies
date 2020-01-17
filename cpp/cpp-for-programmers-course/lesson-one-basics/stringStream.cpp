#include <iostream>
#include <sstream>
#include <string>

using namespace std;

const int UNIVERSE_ANSWER = 42;

int main() {
  string answerInput;

  int answer;

  cout << "Please tell me the answer to the universe: ";
  getline(cin, answerInput);
  stringstream(answerInput) >> answer;

  cout << "Answer: " << answer << '\n';
  cout << "Typed: " << answerInput << '\n';

  if (answer != UNIVERSE_ANSWER) {
    cout << "Hmm, unfortunately that's not the answer :(";

    return 1;
  }

  cout << "Wubbalubbadubdub!";

  return 0;
}
