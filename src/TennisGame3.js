class TennisGame3 {
  constructor(p1name, p2Name) {
    this.p1score = 0
    this.p2score = 0
    this.p1name = p1name
    this.p2name = p2Name
  }

  getScore() {
    if (this.p1score >= 4 || this.p2score >= 4 || this.p1score + this.p2score >= 6) {
      if (this.p1score === this.p2score) return 'Deuce'
      const playerAhead = this.p1score > this.p2score ? this.p1name : this.p2name
      return (this.p1score - this.p2score) * (this.p1score - this.p2score) === 1
        ? 'Advantage ' + playerAhead
        : 'Win for ' + playerAhead
    }

    const scoreNames = ['Love', 'Fifteen', 'Thirty', 'Forty']
    const p1ScoreValue = scoreNames[this.p1score]
    const p2ScoreValue = scoreNames[this.p2score]
    return this.p1score === this.p2score ? `${p1ScoreValue}-All` : `${p1ScoreValue}-${p2ScoreValue}`
  }

  wonPoint(playerName) {
    if (playerName === this.p1name) this.p1score += 1
    else this.p2score += 1
  }
}

module.exports = TennisGame3
