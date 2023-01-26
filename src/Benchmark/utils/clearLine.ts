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

// Doesn't clear the console, but moves the view so it starts with next output
export function clearConsole(stream: NodeJS.WriteStream): void {
  if (stream.isTTY) {
    stream.write('\u001b[2J\u001b[0;0H')
  }
}
