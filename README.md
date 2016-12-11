# mock-stdout
Simple mock for node stdout 👻

# Install

Install with npm/yarn :

```
$ npm install https://github.com/alexbinary/mock-stdout.git

$yarn add https://github.com/alexbinary/mock-stdout.git
```

# Usage

```javascript
let mockStdout = require('alexbinary.mock-stdout')

let mock = mockStdout.create()
mock._setup() // replace process.stdout

process.stdout.write('foo')

console.log(mock._data) // foo
mock._restore() // restore original process.stdout
```
