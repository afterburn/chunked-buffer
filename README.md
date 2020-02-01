# chunked-buffer
[![Downloads](https://img.shields.io/npm/dt/chunked-buffer.svg)]()

Small function you can wrap fs.createReadStream with to get fixed size data chunks.

### Usage
```javascript
const chunked = require('chunked-buffer')
const rs = chunked(fs.createReadStream('path/to/file'), { chunkSize: 20000 })

chunked.on('data', (chunk) => {
  // chunk is a Buffer with a size of 20000 bytes.
})
```