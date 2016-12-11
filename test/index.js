
let expect = require('chai').expect

let mockStdout = require('../src/index')

describe('stdout mock', function () {
  describe('#write()', function () {
    it('takes data as input', function () {
      let mock = mockStdout.create()
      mock.write('foo')
    })
  })
  describe('#_data', function () {
    it('stores data sent to write', function () {
      let mock = mockStdout.create()
      mock._resetData()
      mock.write('foo')
      mock.write('bar')
      expect(mock._data).to.equal('foobar')
    })
  })
  describe('#_resetData()', function () {
    it('clear _data', function () {
      let mock = mockStdout.create()
      mock._resetData()
      mock.write('foo')
      mock._resetData()
      expect(mock._data).to.equal('')
    })
  })
  describe('#_setup()', function () {
    it('replace process.stdout with mock', function () {
      let mock = mockStdout.create()
      mock._setup()
      mock._resetData()
      process.stdout.write('foo')
      expect(mock._data).to.equal('foo')
    })
  })
})
