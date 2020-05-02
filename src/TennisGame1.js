class TennisGame1 {
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name
    this.player1Score = 0
    this.player2Name = player2Name
    this.player2Score = 0
  }

  wonPoint(playerName) {
    if (playerName === this.player1Name)
      this.player1Score += 1
    else
      this.player2Score += 1
  }

  getScore() {
    const scoreDifference = Math.abs(this.player1Score - this.player2Score)
    const playerAhead = (this.player1Score > this.player2Score) ? this.player1Name : this.player2Name
    const isGameOver = () => (this.player1Score >= 4 || this.player2Score >= 4) && scoreDifference >= 2
    const playerHasAdvantage = () => (this.player1Score >= 3 && this.player2Score >= 3) && scoreDifference === 1

    let score = '';
    let tempScore = 0;
    if (isGameOver())
        return `Win for ${playerAhead}`
    if (playerHasAdvantage())
      return `Advantage ${playerAhead}`

    if (this.player1Score === this.player2Score) {
      switch (this.player1Score) {
        case 0:
          score = 'Love-All'
          break
        case 1:
          score = 'Fifteen-All'
          break
        case 2:
          score = 'Thirty-All'
          break
        default:
          score = 'Deuce'
          break
      }
    }
    else {
      for (var i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.player1Score
        else {
          score += '-'
          tempScore = this.player2Score
        }
        switch (tempScore) {
          case 0:
            score += 'Love'
            break
          case 1:
            score += 'Fifteen'
            break
          case 2:
            score += 'Thirty'
            break
          case 3:
            score += 'Forty'
            break
        }
      }
    }
    return score
  }


}

if (typeof window === 'undefined') {
  module.exports = TennisGame1
}
