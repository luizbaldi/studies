#include <iostream>
#include <string>
#include <fstream>

using namespace std;

const string FILE_NAME = "file.txt";

void printReadFile() {
  /* create an input stream to read the file */
  ifstream myReadFile;
  string line;

  myReadFile.open(FILE_NAME);

  if (myReadFile.is_open()) {
    while (getline(myReadFile, line)) {
      cout << line << '\n';
    }

    myReadFile.close();
  } else {
    cout << "Unable to open " << FILE_NAME << " for reading" << '\n';
  }
}

void writeFile() {
  /* create an output stream to write to the file */
  ofstream myInputFile;

  myInputFile.open(FILE_NAME);

  if (myInputFile.is_open()) {
    myInputFile << "Reality is just an ilusion" << "\n";
    myInputFile << "And this is fine." << '\n';

    myInputFile.close();
  } else {
    cout << "Unable to open " << FILE_NAME << " for writing" << '\n';
  }
}

int main() {
  /* prepares a file writing on it */
  writeFile();

  /* reads the content on the file */
  printReadFile();

  return 0;
}
