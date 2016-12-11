
let expect = require('chai').expect

let mockStdout = require('../src/index')

describe('stdout mock', function () {
  describe('#write()', function () {
    it('takes data as input', function () {
      // ## Setup
      let mock = mockStdout.create()
      mock._resetData()
      // ## TEST
      mock.write('foo')
      // ## Assert
      expect(mock._data).to.equal('foo')
      // ## End
    })
  })
  describe('#_data', function () {
    it('accumulate data sent to write', function () {
      // ## Setup
      let mock = mockStdout.create()
      mock._resetData()
      // ## TEST
      mock.write('foo')
      mock.write('bar')
      // ## Assert
      expect(mock._data).to.equal('foobar')
      // ## End
    })
  })
  describe('#_resetData()', function () {
    it('clear _data', function () {
      // ## Setup
      let mock = mockStdout.create()
      mock._resetData()
      mock.write('foo')
      // ## TEST
      mock._resetData()
      // ## Assert
      expect(mock._data).to.equal('')
      // ## End
    })
  })
  describe('#_setup()', function () {
    it('replace process.stdout with mock', function () {
      // ## Setup
      let mock = mockStdout.create()
      mock._resetData()
      // ## TEST
      mock._setup()
      process.stdout.write('foo')
      // ## Assert
      expect(mock._data).to.equal('foo')
      // ## End
    })
  })
  describe('#_restore()', function () {
    it('restore default process.stdout', function () {
      // ## Setup
      let mock = mockStdout.create()
      mock._resetData()
      mock._setup()
      mock._restore()
      // ## TEST
      process.stdout.write('foo')
      // ## Assert
      expect(mock._data).to.equal('')
      // ## End
    })
  })
})
