'use strict'
let coForEach = require('../index')
let assert = require('assert')
describe('test to coEach', function  () {
    it('should return a promise', function  () {
    let returned = coForEach()
    assert(returned instanceof Promise )
    })

    it('should get the item from array passed', function  (done) {
    let returned = coForEach.call([1], function * (item) {
        assert(item ===1)
    })
    assert(returned instanceof Promise )
    returned.then(done)
    })

    it('should get the context  passed', function  (done) {
    let returned = coForEach.call([2], function * (item) {
        assert(item ===2)
        assert(this.test === 'test')
    }, {test: 'test'})
    assert(returned instanceof Promise )
    returned.then(done)
    })

    it('should get the array from third argument passed', function  (done) {
    let returned = coForEach(function * (item) {
        assert(item ===3)
        assert(this.test === 'test2')
    }, {test: 'test2'},[3])
    assert(returned instanceof Promise )
    returned.then(done)
    })

    it('should catch every error throw', function  (done) {
    let returned = coForEach(function * (item) {
        assert(item ===4)
        assert(this.test === 'test3')
        throw new Error('error to test')
    }, {test: 'test3'},[4])
    assert(returned instanceof Promise )
    returned
    .catch(err => {
        assert(err.message === 'error to test');
        done()
    })
    })
    
})