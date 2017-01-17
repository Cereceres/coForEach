'use strict'
let co = require('co')
/**
 * @function
 * @param {iterater} cb - iterater is a generator to be passed to co
 * @param {object} context - to be passed to every iterate
 * @param {array} self -array to iterate
 * @return {object} return a promise
 */
/**
 * This iterater will receive the item and index, is a generator
 * @callback iterater
 * @param {object} item
 * @param {number} index
 * @return {object} null
 */
var coForEach = module.exports = function  (iterater, context, self) {
    // set the dafault value to self from third arg or context of coForEach
    self = self || this
    // set the dafault value to context
    context = context || {}
    // check if self is a array
    if(!Array.isArray(self)) return Promise.resolve()
    // init to iterate
    let index = 0
    // define the looper
    function looper () {
        // call co
     return co.call(context,iterater,self[index],index)
     // wait to promise to be resolved
     .then(() => {
         //increment the index
        index++
        // check if will be to iterate
        if(index < self.length) return looper()
     })
    }
    // iterate with looper
    return looper.call(self)
}