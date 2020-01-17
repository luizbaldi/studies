#include <iostream>
#include <stdio.h>

using namespace std;

int main() {
  int searchArray[10] = {324, 4567, 6789, 5421345, 7, 65, 8965, 12, 342, 485};

  //use searchKey for the number to be found
  //use location for the array index of the found value
  int searchKey;
  int location = -1;

  cout << "Enter the value to be searched: ";
  cin >> searchKey;

  for (int i = 0; i < 10; i++) {
    if (searchArray[i] == searchKey) {
      location = i;
      break;
    }
  }

  if (location != -1) {
    cout << searchKey << " is at location " << location << " in the array.\n";
  } else {
    cout << searchKey << " is not in the array.\n";
  }

  return 0;
}
