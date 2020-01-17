/*Fix the errors and get an error free compilation and execution.*/

#include <iostream>
#include <math.h>

using namespace std;

int main() {
  int coeff1, coEff2, constant;
  int exp1, exp2;
  int y;
  int x;

  /* Calculate the value of y for a user defined three term polynomial */
  /* Get the coefficients, exponents, and the constants */

  cout << "What is the first coefficient?";
  cin >> coeff1;
  cout << coeff1 << '\n';

  cout<<"What is the exponent of the first term?";
  cin >> exp1;
  cout << exp1 << '\n';

  cout << "What is the second coefficient?";
  cin >> coEff2;
  cout << coEff2 << '\n';

  cout << "What is the exponent of the second term?";
  cin >> exp2;
  cout << exp2 << "n";

  cout << "What is the constant?";
  cin >> constant;
  cout << constant << "\n";

  /* Print the complete equation */
  cout << "The polynomial we are solving is "<< '\n';
  cout << '\t' << coeff1 << "*x^exp1 "<< coEff2 << "*x^" << exp2 << "+ " << constant;

  cout << "\nWhat is the value of x?";
  cin >> x;
  cout << x << '\n';

  /* Solve the equation with the given x */
  y = coeff1 * pow(x, exp1) + coEff2 * pow(x, exp2);
  cout << "y = " << coeff1 << '*' << x << '^' << exp1 << " + " << coEff2 << '*' << x << '^' << exp2 << constant <<" = "<< y;

  return 0;
}
