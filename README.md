jasmine-done - Easier asynchronous testing for Jasmine.
=======================================================

What?
-----
Ordinarily, if you want to test async code with Jasmine, it requires a
bunch of confusing `runs` and `waitsFor` calls:

```javascript
it('should load some data', function () {
  var result = null;
  callRemoteMethod(function(theResult) {  	
    result = theResult;
  });

  waitsFor(function() {
    return result != null;
  }, "Result never loaded", 10000);

  runs(function () {
    expect(result).toEqual(200);
  });
});
```

Inspired by Mocha, jasmine-done gives you an easier way to do it:

```
it('should load some data', function (done) {
  var result = null;
  callRemoteMethod(function(theResult) {  	
    expect(result).toEqual(200);
    done();
  });
}, 10000);
```

Why?
----
Everyone on my team was getting confused by the `waitFor` style. When I added this, they stopped being confused.

How?
----
Include jasmine-done.js when running Jasmine tests.

Alternatives
------------
[Jasmine.Async](http://lostechies.com/derickbailey/2012/08/18/jasmine-async-making-asynchronous-testing-with-jasmine-suck-less/) accomplishes the same thing, but requires a little bit of boilerplate added to your tests.

If you're using NodeJS, [jasmine-node](https://github.com/mhevery/jasmine-node) supports this syntax out of the box.

[Mocha](http://visionmedia.github.io/mocha/) is, of course, where the syntax came from.

Why so little documentation?
----------------------------
[Rumour has it](https://github.com/pivotal/jasmine/issues/178) Jasmine is going to support this syntax natively in version 2.0. That being the case, I didn't want to invest TOO much energy in getting my little hack out there.

License
-------
MIT.
