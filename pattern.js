
/**
* Class declaration.
* Class Car consist of 3 properties & 1 method.
*/
exports.classDeclaration = function() {

  function Car(model) {
    this.model = model;
    this.color = "silver";
    this.year = "2012";
    this.getInfo = function() {
      return this.model + " " + this.year;
    };
  }
  return Car;

};

/**
* Constuctor pattern for object creation.
* There are three way to create object in JavaScript.
*/
exports.constructorPattern1 = function() {
  var newObject = {};
  return newObject;
};

exports.constructorPattern2 = function() {
  var newObject = Object.create(Object.prototype);
  return newObject;
};

exports.constructorPattern3 = function() {
  var newObject = new Object();
  return newObject;
};

/**
* Four way to assign value to object.
*/
exports.assignByDot = function() {
  var newObject = {};
  newObject.someKey = "Hello World";
  return newObject;
};

exports.assignBySquareBracket = function() {
  var newObject = {};
  newObject["someKey"] = "Hello World";
  return newObject;
};

exports.assignByDefineProperty = function() {
  var newObject = {};
  Object.defineProperty(newObject, "someKey", {
    value: "for more control of the property's behavior",
    writeable: true,
    enumerable: true,
    configurable: true
  });

  return newObject;
};

exports.assignByDefineProperty2 = function() {
  var defineProp = function(obj, key, value) {
    var config = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    };

    Object.defineProperty(obj, key, config);
  }

  var person = Object.create(Object.prototype);
  defineProp(person, "car", "Delorean");
  defineProp(person, "dateOfBirth", "1981");
  defineProp(person, "hashBeard", false);

  return person;
};

exports.assignByDefineProperties = function() {
  var newObject = {};
  Object.defineProperties(newObject, {
    "someKey": { value: "Hello World", writable: true },
    "anotherKey" : { value: "Foo bar", writable: false}
  });

  return newObject;
};

/**
* Basic constructor.
* Problem
* - Makes inheritance difficult.
* - toString() are redefined for each of the new object creation (not shar function between object).
*/
exports.basicConstructor = function()  {
  function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = function() {
      return this.model + " has done " + this.miles + " miles";
    };
  }
  return Car;
};


/**
* Constructor with prototypes
* Multi Car object can be created with access the same proptotype.
* toString() will now be chared bwteen all of the Car object.
*/
exports.constructorWithPrototype = function() {
  function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  };

  Car.prototype.toString = function() {
      return this.model + " has done " + this.miles + " miles";
  };

  return Car;
};


/**
* MODULE PATTERN
*/

exports.selfContainModule = function() {
  var testModule = (function(){
    var counter = 0;
    return {
      incrementCounter: function() {
         return counter ++;
      },
      resetCounter: function() {
        counter = 0;
      },
    };
  })();
  return testModule;
};


exports.selfContainModuleTemplate = function() {

  var privateVar, privateMethod;
  privateVar = 0;
  privateMethod = function(foo) {
    console.log(foo);
  };

  return {
   publicVar: "foot",
    publicMethod: function(bar) {
      privateVar ++;
      privateMethod(bar);
    }
  };
};


/**
* Local alias
*/
exports.importMixins = function() {

  var myModule = (function(jQ, _) {
    function privateMethod1() {
      jQ(".container").html("test");
    }

    function privateMethod2() {
      console.log(_.min[10,5,100,2,10000]);
    }

    return {
      publicMethod: function(){
        privateMethod1();
      }
    };
  })(jQuery, _);

  return myModule;
};

exports.exportModule = function() {
  var myModule = (function(){
    var _module = {};
    var privateVariable = "Hello World";

    function privateMethod() { }

    _module.publicProperty = "Foobar";
    _module.publicMethod = function() {
      console.log( privateVariable);
    };
    return _module;
  })();

  return myModule;
};
















