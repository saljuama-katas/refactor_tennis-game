class TennisGame3 {
  constructor(p1name, p2Name) {
    this.p1score = 0
    this.p2score = 0
    this.p1name = p1name
    this.p2name = p2Name
  }

  getScore() {
    const scoreNames = ['Love', 'Fifteen', 'Thirty', 'Forty']
    let s
    if (this.p1score < 4 && this.p2score < 4 && this.p1score + this.p2score < 6) {
      s = scoreNames[this.p1score]
      return this.p1score == this.p2score ? s + '-All' : s + '-' + scoreNames[this.p2score]
    } else {
      if (this.p1score == this.p2score) return 'Deuce'
      s = this.p1score > this.p2score ? this.p1name : this.p2name
      return (this.p1score - this.p2score) * (this.p1score - this.p2score) == 1
        ? 'Advantage ' + s
        : 'Win for ' + s
    }
  }

  wonPoint(playerName) {
    if (playerName == this.p1name) this.p1score += 1
    else this.p2score += 1
  }
}

module.exports = TennisGame3
