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
    const isGameOver = () => (this.player1Score >= 4 || this.player2Score >= 4) && scoreDifference >= 2
    const playerHasAdvantage = () => (this.player1Score >= 3 && this.player2Score >= 3) && scoreDifference === 1
    const isGameTied = () => this.player1Score === this.player2Score
    const playerScoreValue = score => {
      switch (score) {
        case 0:
          return 'Love'
        case 1:
          return 'Fifteen'
        case 2:
          return 'Thirty'
        case 3:
          return 'Forty'
      }
    }

    const playerAhead = (this.player1Score > this.player2Score) ? this.player1Name : this.player2Name
    if (isGameOver())
      return `Win for ${playerAhead}`
    else if (playerHasAdvantage())
      return `Advantage ${playerAhead}`
    else if (isGameTied())
      return this.player1Score >= 3 ? 'Deuce' : `${playerScoreValue(this.player1Score)}-All`
    else
      return `${playerScoreValue(this.player1Score)}-${playerScoreValue(this.player2Score)}`
  }
}

module.exports = TennisGame1
