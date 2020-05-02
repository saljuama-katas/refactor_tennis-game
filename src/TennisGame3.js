class TennisGame3 {
  constructor(p1name, p2Name) {
    this.p1score = 0
    this.p2score = 0
    this.p1name = p1name
    this.p2name = p2Name
  }

  getScore() {
    const scoreDifference = Math.abs(this.p1score - this.p2score)
    const playerAhead = this.p1score > this.p2score ? this.p1name : this.p2name

    const isGameOver = () => (this.p1score >= 4 || this.p2score >= 4) && scoreDifference >= 2
    if (isGameOver()) return `Win for ${playerAhead}`

    const playerHasAdvantage = () => (this.p1score >= 3 && this.p2score >= 3) && scoreDifference === 1
    if (playerHasAdvantage()) return `Advantage ${playerAhead}`

    const isDeuce = () => (this.p1score === this.p2score) && this.p1score >= 3
    if (isDeuce()) return 'Deuce'

    const scoreNames = ['Love', 'Fifteen', 'Thirty', 'Forty']
    const p1ScoreValue = scoreNames[this.p1score]
    const p2ScoreValue = scoreNames[this.p2score]
    return this.p1score === this.p2score
      ? `${p1ScoreValue}-All`
      : `${p1ScoreValue}-${p2ScoreValue}`
  }

  wonPoint(playerName) {
    if (playerName === this.p1name) this.p1score += 1
    else this.p2score += 1
  }
}

module.exports = TennisGame3
