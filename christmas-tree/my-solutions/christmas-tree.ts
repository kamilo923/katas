export class DrawTree {
  christmasTree(numb: number) {
    for (var i = 0; i < numb; i++) {
      var star = ''
      var space = numb - i
      if (i == 0) {
        star += ' '.repeat(space + 1) + '\n'
      }
      star += ' '.repeat(space + 4)
      var zero = 2 * i + 1
      star += '*'.repeat(zero)
      console.log(star)
    }
  }
}
