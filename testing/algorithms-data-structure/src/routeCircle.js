/* Exercise from leetcode: https://leetcode.com/problems/judge-route-circle
  Initially, there is a Robot at position (0, 0).
  Given a sequence of its moves, judge if this robot makes a circle,
  which means it moves back to the original place.
  The move sequence is represented by a string.
  And each move is represent by a character.
  The valid robot moves are R (Right), L (Left), U (Up) and D (down).
  The output should be true or false representing whether the robot makes a circle.
*/

const routeCircle = moves => {
  const currentMoves = {
    vertical: 0,
    horizontal: 0
  };

  for (let letter of moves) {
    switch(letter) {
      case 'U':
        currentMoves.horizontal++;
        break;
      case 'D':
        currentMoves.horizontal--;
        break;
      case 'R':
        currentMoves.vertical++;
        break;
      case 'L':
        currentMoves.vertical--;
        break;
    }
  }

  return Object.values(currentMoves).every(val => val === 0);
}

export default routeCircle;
