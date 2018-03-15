class PuzzleNode
{
	// var priority, moves, prevState, state, prevNode;
	constructor(priority, moves, prevState, state, prevNode, prevMoveDirection)
	{
		this.priority = priority;
		this.moves = moves;
		this.prevState = prevState;
		this.state = state;
		this.prevNode = prevNode;
		this.prevMoveDirection = prevMoveDirection;
	}
}