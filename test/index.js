
let expect = require('chai').expect

let makeStdoutMock = require('../src/index')

describe('stdout mock', function () {
  describe('#write()', function () {
    it('takes data as input', function () {
      let stdoutMock = makeStdoutMock()
      stdoutMock.write('foo')
    })
  })
  describe('#_data', function () {
    it('stores data sent to write', function () {
      let stdoutMock = makeStdoutMock()
      stdoutMock._resetData()
      stdoutMock.write('foo')
      stdoutMock.write('bar')
      expect(stdoutMock._data).to.equal('foobar')
    })
  })
  describe('#_resetData()', function () {
    it('clear _data', function () {
      let stdoutMock = makeStdoutMock()
      stdoutMock._resetData()
      stdoutMock.write('foo')
      stdoutMock._resetData()
      expect(stdoutMock._data).to.equal('')
    })
  })
  describe('#_setup()', function () {
    it('replace process.stdout with mock', function () {
      let stdoutMock = makeStdoutMock()
      stdoutMock._setup()
      stdoutMock._resetData()
      process.stdout.write('foo')
      expect(stdoutMock._data).to.equal('foo')
    })
  })
})
