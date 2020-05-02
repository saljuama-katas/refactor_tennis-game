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
    if (
      this.pointsP1 >= 4 &&
      this.pointsP2 >= 0 &&
      this.pointsP1 - this.pointsP2 >= 2
    ) {
      return `Win for ${this.nameP1}`
    }
    if (
      this.pointsP2 >= 4 &&
      this.pointsP1 >= 0 &&
      this.pointsP2 - this.pointsP1 >= 2
    ) {
      return `Win for ${this.nameP2}`
    }

    if (this.pointsP1 === this.pointsP2 && this.pointsP1 < 3) {
      let score = ''
      if (this.pointsP1 === 0) score = 'Love'
      if (this.pointsP1 === 1) score = 'Fifteen'
      if (this.pointsP1 === 2) score = 'Thirty'
      score += '-All'
      return score
    }
    if (this.pointsP1 === this.pointsP2 && this.pointsP1 > 2)
      return 'Deuce'

    if (this.pointsP1 > 0 && this.pointsP2 === 0) {
      if (this.pointsP1 === 1) this.scoreP1 = 'Fifteen'
      if (this.pointsP1 === 2) this.scoreP1 = 'Thirty'
      if (this.pointsP1 === 3) this.scoreP1 = 'Forty'

      this.scoreP2 = 'Love'
      return this.scoreP1 + '-' + this.scoreP2
    }
    if (this.pointsP2 > 0 && this.pointsP1 === 0) {
      if (this.pointsP2 === 1) this.scoreP2 = 'Fifteen'
      if (this.pointsP2 === 2) this.scoreP2 = 'Thirty'
      if (this.pointsP2 === 3) this.scoreP2 = 'Forty'

      this.scoreP1 = 'Love'
      return this.scoreP1 + '-' + this.scoreP2
    }

    if (this.pointsP1 > this.pointsP2 && this.pointsP1 < 4) {
      if (this.pointsP1 === 2) this.scoreP1 = 'Thirty'
      if (this.pointsP1 === 3) this.scoreP1 = 'Forty'
      if (this.pointsP2 === 1) this.scoreP2 = 'Fifteen'
      if (this.pointsP2 === 2) this.scoreP2 = 'Thirty'
      return this.scoreP1 + '-' + this.scoreP2
    }
    if (this.pointsP2 > this.pointsP1 && this.pointsP2 < 4) {
      if (this.pointsP2 === 2) this.scoreP2 = 'Thirty'
      if (this.pointsP2 === 3) this.scoreP2 = 'Forty'
      if (this.pointsP1 === 1) this.scoreP1 = 'Fifteen'
      if (this.pointsP1 === 2) this.scoreP1 = 'Thirty'
      return this.scoreP1 + '-' + this.scoreP2
    }

    if (this.pointsP1 > this.pointsP2 && this.pointsP2 >= 3) {
      return `Advantage ${this.nameP1}`
    }

    if (this.pointsP2 > this.pointsP1 && this.pointsP1 >= 3) {
      return `Advantage ${this.nameP2}`
    }

  }

  wonPoint(player) {
    if (player === this.nameP1)
      this.pointsP1++
    else
      this.pointsP2++
  }
}

module.exports = TennisGame2
