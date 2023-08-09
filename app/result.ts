/* 
This is a pretty basic interface. It's just four properties and no methods. I want objects that implement this interface to be able to store the name of the player, the score they got in the game, the number of problems in the game, and the multiplication factor they used. This is a perfect example of a case in which an interface will almost certainly meet my needs. 

I could have created a class with the same properties. But since I don't have any methods to implement and I suspect I'll be using object literals to implement the interface (duck typing), I don't really need the additional features offered by classes such as constructors, methods, and inheritance.
*/

interface Result {
    playerName: string;
    score: number;
    problemCount: number;
    factor: number;
}