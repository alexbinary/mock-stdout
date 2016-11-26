
function makeStdoutMock () {
  let instance = {
    _data: '',
    _resetData: function () {
      this._data = ''
    },
    write: function (data) {
      this._data += data
    }
  }
  instance._resetData()
  return instance
}

module.exports = makeStdoutMock
