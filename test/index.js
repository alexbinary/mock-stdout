
let expect = require('chai').expect

let makeStdoutMock = require('../src/index')

describe('stdout mock', function () {
  it('has property `_data`', function () {
    let stdoutMock = makeStdoutMock()
    expect(stdoutMock).to.have.property('_data')
  })
  it('has method `_resetData`', function () {
    let stdoutMock = makeStdoutMock()
    expect(stdoutMock).to.respondTo('_resetData')
  })
  it('has method `write`', function () {
    let stdoutMock = makeStdoutMock()
    expect(stdoutMock).to.respondTo('write')
  })
  describe('_data', function () {
    it('receives data sent to method `write`', function () {
      let stdoutMock = makeStdoutMock()
      stdoutMock._resetData()
      stdoutMock.write('foo')
      expect(stdoutMock._data).to.equal('foo')
    })
    it('add new data to existing data', function () {
      let stdoutMock = makeStdoutMock()
      stdoutMock._resetData()
      stdoutMock.write('foo')
      stdoutMock.write('bar')
      expect(stdoutMock._data).to.equal('foobar')
    })
  })
  describe('_resetData', function () {
    it('clear `_data`', function () {
      let stdoutMock = makeStdoutMock()
      stdoutMock._resetData()
      stdoutMock.write('foo')
      stdoutMock._resetData()
      expect(stdoutMock._data).to.equal('')
    })
  })
})
