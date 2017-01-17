# coForEach
co wrap to forEach method 

# Install
 ```bash
npm install coforeach
 ```

 # Usage
 ```js
let coFor = require('coforeach')
let returned = coFor(function * (item, index) {
        assert(item ===3) // the item is equal to item in array
        assert(this.test === 'context is the second arg') // the context is the passed as second arg to coForEach
    }, {test: 'context is the second arg'} // this is the context,
        [3] // this is array over which iterate)
    assert(returned instanceof Promise )
 ```

 #API

 coFor(iterater[, context, arrayToIterate]) -> Promise

 ## iterater(item, index) -> null
 iterater should be a generator receive the item and index of arrayToIterate  

 ## context 
 the context to call  iterater, default is {}

## arrayToIterate 
The array to iterate, can be passed as thid arg or with context with is called coFor
 

