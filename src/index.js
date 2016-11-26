
function makeStdoutMock () {
  let instance = {
    _data: '',
    _resetData: function () {
      this._data = ''
    },
    _setup: function () {
      Object.defineProperty(process, 'stdout', {
        value: this
      })
    },
    write: function (data) {
      this._data += data
    }
  }
  instance._resetData()
  return instance
}

module.exports = makeStdoutMock
