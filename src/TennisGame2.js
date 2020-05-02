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
    var score = ''

    if (this.pointsP1 === this.pointsP2 && this.pointsP1 < 3) {
      if (this.pointsP1 === 0) score = 'Love'
      if (this.pointsP1 === 1) score = 'Fifteen'
      if (this.pointsP1 === 2) score = 'Thirty'
      score += '-All'
    }
    if (this.pointsP1 === this.pointsP2 && this.pointsP1 > 2) score = 'Deuce'

    if (this.pointsP1 > 0 && this.pointsP2 === 0) {
      if (this.pointsP1 === 1) this.scoreP1 = 'Fifteen'
      if (this.pointsP1 === 2) this.scoreP1 = 'Thirty'
      if (this.pointsP1 === 3) this.scoreP1 = 'Forty'

      this.scoreP2 = 'Love'
      score = this.scoreP1 + '-' + this.scoreP2
    }
    if (this.pointsP2 > 0 && this.pointsP1 === 0) {
      if (this.pointsP2 === 1) this.scoreP2 = 'Fifteen'
      if (this.pointsP2 === 2) this.scoreP2 = 'Thirty'
      if (this.pointsP2 === 3) this.scoreP2 = 'Forty'

      this.scoreP1 = 'Love'
      score = this.scoreP1 + '-' + this.scoreP2
    }

    if (this.pointsP1 > this.pointsP2 && this.pointsP1 < 4) {
      if (this.pointsP1 === 2) this.scoreP1 = 'Thirty'
      if (this.pointsP1 === 3) this.scoreP1 = 'Forty'
      if (this.pointsP2 === 1) this.scoreP2 = 'Fifteen'
      if (this.pointsP2 === 2) this.scoreP2 = 'Thirty'
      score = this.scoreP1 + '-' + this.scoreP2
    }
    if (this.pointsP2 > this.pointsP1 && this.pointsP2 < 4) {
      if (this.pointsP2 === 2) this.scoreP2 = 'Thirty'
      if (this.pointsP2 === 3) this.scoreP2 = 'Forty'
      if (this.pointsP1 === 1) this.scoreP1 = 'Fifteen'
      if (this.pointsP1 === 2) this.scoreP1 = 'Thirty'
      score = this.scoreP1 + '-' + this.scoreP2
    }

    if (this.pointsP1 > this.pointsP2 && this.pointsP2 >= 3) {
      score = `Advantage ${this.nameP1}`
    }

    if (this.pointsP2 > this.pointsP1 && this.pointsP1 >= 3) {
      score = `Advantage ${this.nameP2}`
    }

    if (
      this.pointsP1 >= 4 &&
      this.pointsP2 >= 0 &&
      this.pointsP1 - this.pointsP2 >= 2
    ) {
      score = `Win for ${this.nameP1}`
    }
    if (
      this.pointsP2 >= 4 &&
      this.pointsP1 >= 0 &&
      this.pointsP2 - this.pointsP1 >= 2
    ) {
      score = `Win for ${this.nameP2}`
    }
    return score
  }

  wonPoint(player) {
    if (player === this.nameP1)
      this.pointsP1++
    else
      this.pointsP2++
  }
}

module.exports = TennisGame2
