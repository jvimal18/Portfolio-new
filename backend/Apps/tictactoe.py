from bottle import Bottle, request
from mixins import enable_cors


# Defining API for application
ttt = Bottle()

move_map = ( (0,0), (0,1), (0,2), (1,0), (1,1), (1,2), (2,0), (2,1), (2,2) )


def spaceIsFree(board, pos):
    return board[pos] == ' '


def check_equal(array, coin):
    for i in array:
        if i != coin:
            return False
    return True


def isWinner(board, coin):
    rows = [ board[x : x+3] for x in [0, 3, 6] ]  # Getting row of board
    flag = check_equal(rows[0], coin) or check_equal(rows[1], coin) or check_equal(rows[2], coin)

    if not flag: 
        diag = [ [ board[0], board[4], board[8] ], [ board[2], board[4], board[6] ] ] #Getting diagonals of board
        flag = check_equal(diag[0], coin) or check_equal(diag[1], coin)

    if not flag: # validating columns
        cols = []
        for idx in range(0,3):
            col = []
            for row in rows:
                col.append(row[idx])
            cols.append(col)

        flag = check_equal(cols[0], coin) or check_equal(cols[1], coin) or check_equal(cols[2], coin)
    return flag


def playerMove():
    pass


def computerMove(board):
    possibleMoves = [x for x, letter in enumerate(board) if letter == ' '] # Create a list of possible moves
    print(possibleMoves)
    move = 0
    
    #Check for possible winning move to take or to block opponents winning move
    for let in ['O','X']:
        for i in possibleMoves:
            boardCopy = board[:]
            boardCopy[i] = let
            if isWinner(boardCopy, let):
                move = i
                return (move, True) if let == 'O' else (move, False)

    
    #Try to take the center
    if 4 in possibleMoves:
        move = 4
        return (move, False)


    #Try to take one of the corners
    cornersOpen = []
    for i in possibleMoves:
        if i in [0,2,5,8]:
            cornersOpen.append(i)
    if len(cornersOpen) > 0:
        move = selectRandom(cornersOpen)
        return (move, False)

    #Take any edge
    edgesOpen = []
    for i in possibleMoves:
        if i in [1,3,5,7]:
            edgesOpen.append(i)
    
    if len(edgesOpen) > 0:
        move = selectRandom(edgesOpen)

    return (move, False)

def selectRandom(li):
    import random
    ln = len(li)
    r = random.randrange(0, ln)
    return li[r]


def isBoardFull(board):
    return board.count(' ') <= 1



@ttt.post('/ttt/play')
def play():
    board = request.json.get('board')
    coin = request.json.get('coin')
    res = {}
    res['status'] = 0

    if isWinner(board, 'X'): 
    # Checking player winx
        res['status'] = 1 
        return res

    # Check board full
    if isBoardFull(board):
        res['status'] = 3
        return res

    # Gen computer move
    move, winning_move = computerMove(board)

    if winning_move:
        res['status'] = 2

    res['row'], res['col'] = move_map[move]
    print(move, res['row'], res['col'])

    return res


# Cross Origin Bypass for all routes
@ttt.route("/<url:re:.+>", method="OPTIONS")
def handle_options(url):
    enable_cors()
