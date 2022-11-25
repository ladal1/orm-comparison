export default function clearLine(stream: NodeJS.WriteStream): void {
  if (stream.isTTY) {
    stream.write('\x1b[999D\x1b[K')
  }
}
