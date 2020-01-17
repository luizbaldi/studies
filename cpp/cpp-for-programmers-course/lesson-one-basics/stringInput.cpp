#include <iostream>
#include <string>

using namespace std;

int main() {
  for (int i = 0; i < 2; i++) {
    string name, address, phone;

    cout << "What's your name? ";
    getline(cin, name);

    cout << "What's your address? ";
    getline(cin, address);

    cout << "What's your phone number? ";
    getline(cin, phone);

    cout << name << '\n';
    cout << address << " - " << phone << '\n';
  }

  return 0;
}
