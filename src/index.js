
let original = process.stdout

function create () {
  let instance = {
    _data: '',
    _resetData: function () {
      this._data = ''
    },
    _setup: function () {
      original = process.stdout
      Object.defineProperty(process, 'stdout', {
        value: this
      })
    },
    _restore: function () {
      Object.defineProperty(process, 'stdout', {
        value: original
      })
    },
    write: function (data) {
      this._data += data
    }
  }
  instance._resetData()
  return instance
}

module.exports = {
  create
}
