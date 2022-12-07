export function deleteLine(stream: NodeJS.WriteStream): void {
  if (stream.isTTY) {
    stream.write('\x1b[' + 'A') // moves cursor up one line
    stream.write('\x1b[' + 'K') // clears from cursor to line end
  }
}

export function clearLine(stream: NodeJS.WriteStream): void {
  if (stream.isTTY) {
    stream.write('\x1b[999D\x1b[K')
  }
}
