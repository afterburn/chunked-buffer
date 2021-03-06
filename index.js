const EventEmitter = require('events').EventEmitter

class ChunkedBuffer extends EventEmitter {
  constructor (readStream, opts) {
    super()
    readStream.on('data', buffer => {
      for (let start = 0;start < buffer.byteLength;start+=opts.chunkSize) {
        const chunk = buffer.slice(start, start + opts.chunkSize)
        this.emit('data', chunk)
      }
    })
    readStream.on('end', () => this.emit('end'))
    readStream.on('close', () => this.emit('close'))
    readStream.on('pause', () => this.emit('pause'))
    readStream.on('resume', () => this.emit('resume'))
    readStream.on('error', (err) => this.emit('error', err))
  }
}

module.exports = (readStream, opts) => {
  return new ChunkedBuffer(readStream, opts)
}