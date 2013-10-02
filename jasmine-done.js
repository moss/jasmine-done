(function(globals, jasmine) {
    function makeAsyncSpecFunction(func, timeout, description) {
        return function() {
            var done = startAsyncSpec(timeout, 'spec "' + description + '"');
            return func(done);
        };
    }

    function startAsyncSpec(timeout, description) {
        var finished = false;
        waitsFor(function() { return finished }, timeout, description);
        return function() { finished = true };
    }

    globals.it = function(desc, func, optionalTimeout) {
        optionalTimeout = optionalTimeout || 250;
        if (func.length == 1) {
            func = makeAsyncSpecFunction(func, optionalTimeout, desc);
        }
        jasmine.getEnv().it(desc, func);
    };
})(this, jasmine);
