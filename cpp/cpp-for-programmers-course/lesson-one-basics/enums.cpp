/* Enum example */

#include <iostream>

int main() {
  enum MONTHS { Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec };

  MONTHS bestMonth = Dec;

  if (bestMonth == Dec) {
    std::cout << "Dec is the best month o/" << "\n";
  }

  MONTHS jan = Jan;

  std::cout << "Jan value: " << jan << "\n";

  return 0;
}
