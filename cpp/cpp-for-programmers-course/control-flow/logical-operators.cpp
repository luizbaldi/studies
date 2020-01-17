#include <iostream>
#include <string>

using namespace std;

int main()
{
  int A = 5;
  int B = 4;
  int C = 5;
  int D = 0;

  string trueOrFalse[] = {"False", "True"};

  /* The && operator */
  cout << "A == C is " << trueOrFalse[A == C];
  cout << "\n(B == D) is " << trueOrFalse[B == D];
  cout << "\n(B > D) is " << trueOrFalse[B > D];

  /* A true && false = false */
  cout << "\n\n(A == C) && (B == D) is " << trueOrFalse[(A == C) && (B == D)] ;

  /* A true and true = true */
  cout << "\n(A == C) && (B > D) is " << trueOrFalse[(A == C) && (B > D)] ;

  /* The || operator */
  /* A true || false = true */
  cout << "\n\n(A == C) || (B == D) is " << trueOrFalse[(A == C) || (B == D)] ;
  /* A true || true = true */
  cout << "\n(A == C) || (B > D) is " << trueOrFalse[(A == C) || (B > D)] ;

  /* The 'Not' operator */
  cout << "\n\nA < B is " << trueOrFalse[A < B];
  cout << "\n!(A < B) is " << trueOrFalse[!(A < B)];

  cout << "\n\nA == C is " << trueOrFalse[A == C];
  cout << "\n!(A == C) is " << trueOrFalse[!(A == C)];

  return 0;
}
