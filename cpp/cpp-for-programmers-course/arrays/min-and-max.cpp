#include <iostream>

using namespace std;

int main() {
  int min;
  int max;
  int currentNumber;
  int total = 0;

  for (int i = 0; i < 15; i++) {
    cout << "Enter a number (" << i << "): ";
    cin >> currentNumber;

    if (currentNumber < min) {
      min = currentNumber;
    }

    if (currentNumber > max) {
      max = currentNumber;
    }

    total += currentNumber;
  }

  cout << "Min: " << min << '\n';
  cout << "Max: " << max << '\n';
  cout << "Average: " << (total / 15) << '\n';

  return 0;
}
