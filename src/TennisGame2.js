class TennisGame2 {
  constructor(player1Name, player2Name) {
    this.pointsP1 = 0
    this.pointsP2 = 0
    this.nameP1 = player1Name
    this.nameP2 = player2Name
  }

  getScore() {
    const scoreDifference = Math.abs(this.pointsP1 - this.pointsP2)
    const playerAhead = (this.pointsP1 > this.pointsP2) ? this.nameP1 : this.nameP2
    const isGameOver = () => (this.pointsP1 >= 4 || this.pointsP2 >= 4) && scoreDifference >= 2
    const playerHasAdvantage = () => (this.pointsP1 >= 3 && this.pointsP2 >= 3) && scoreDifference === 1
    if (isGameOver())
      return `Win for ${playerAhead}`
    if (playerHasAdvantage())
      return `Advantage ${playerAhead}`

    const scoreNames = ['Love', 'Fifteen', 'Thirty', 'Forty']
    const scoreP1 = scoreNames[this.pointsP1]
    const scoreP2 = scoreNames[this.pointsP2]
    if (this.pointsP1 === this.pointsP2)
      return this.pointsP1 > 2 ? 'Deuce' : `${scoreP1}-All`
    else
      return `${scoreP1}-${scoreP2}`
  }

  wonPoint(player) {
    if (player === this.nameP1)
      this.pointsP1++
    else
      this.pointsP2++
  }
}

module.exports = TennisGame2
