# chunked-buffer
[![Downloads](https://img.shields.io/npm/dt/chunked-buffer.svg)]()

#### Small function you can wrap fs.createReadStream with to get fixed size data chunks.

*chunked-buffer* modifies the stream.Readable 'data' event to make so that chunks will have a fixed amount of bytes instead of getting randomly sized chunks. This can be useful if the target you pipe to expects a certain amount of bytes or if that target has a byte limitation (a udp packet for example).


### Usage
```javascript
const chunked = require('chunked-buffer')
const rs = chunked(fs.createReadStream('path/to/file'), { chunkSize: 20000 })

rs.on('data', (chunk) => {
  // chunk is a Buffer with a size of 20000 bytes.
})
```