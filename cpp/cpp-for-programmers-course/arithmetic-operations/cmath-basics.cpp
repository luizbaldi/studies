#include<iostream>
#include<cmath>

using namespace std;

int main() {
    // Dimension of the cube
    float cubeSide = 5.4;

    // Dimension of sphere
    float sphereRadius = 2.33;

    // Dimensions of cone
    float coneRadius = 7.65;
    float coneHeight = 14;

    // Volumes
    float volCube = pow(cubeSide, 3);
    float volSphere = (4/3) * M_PI * pow(sphereRadius, 3);
    float volCone = M_PI * pow(coneRadius, 2) * (coneHeight / 3);

    cout << "Cube volume: " << volCube << '\n';
    cout << "Sphere volume: " << volSphere << '\n';
    cout << "Cone volume: " << volCone << '\n';

    return 0;
}
