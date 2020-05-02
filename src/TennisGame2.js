class TennisGame2 {
  constructor(player1Name, player2Name) {
    this.pointsP1 = 0
    this.pointsP2 = 0
    this.scoreP1 = ''
    this.scoreP2 = ''
    this.nameP1 = player1Name
    this.nameP2 = player2Name
  }

  getScore() {
    const playerScoreValue = points => {
      if (points === 0) return 'Love'
      if (points === 1) return 'Fifteen'
      if (points === 2) return 'Thirty'
      if (points === 3) return 'Forty'
    }
    this.scoreP1 = playerScoreValue(this.pointsP1)
    this.scoreP2 = playerScoreValue(this.pointsP2)

    if (this.pointsP1 >= 4 && this.pointsP2 >= 0 && this.pointsP1 - this.pointsP2 >= 2)
      return `Win for ${this.nameP1}`
    if (this.pointsP2 >= 4 && this.pointsP1 >= 0 && this.pointsP2 - this.pointsP1 >= 2)
      return `Win for ${this.nameP2}`
    if (this.pointsP1 > this.pointsP2 && this.pointsP2 >= 3)
      return `Advantage ${this.nameP1}`
    if (this.pointsP2 > this.pointsP1 && this.pointsP1 >= 3)
      return `Advantage ${this.nameP2}`
    if (this.pointsP1 === this.pointsP2) {
      if (this.pointsP1 > 2) return 'Deuce'
      else return `${playerScoreValue(this.pointsP1)}-All`
    }
    return this.scoreP1 + '-' + this.scoreP2
  }

  wonPoint(player) {
    if (player === this.nameP1)
      this.pointsP1++
    else
      this.pointsP2++
  }
}

module.exports = TennisGame2
