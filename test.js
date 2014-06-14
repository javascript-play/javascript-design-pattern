var pattern = require("./pattern");

/*
* CONSTRUCTOR
*/
exports.testClassDeclaration = function(test) {
  var Car = pattern.classDeclaration();
  var car = new Car("Z001");
  test.equal(car.model, "Z001");
  test.done();
};

exports.testConstructorPattern = function(test) {
  test.notEqual(pattern.constructorPattern1(), null);
  test.notEqual(pattern.constructorPattern2(), null);
  test.notEqual(pattern.constructorPattern3(), null);
  test.done();
};

exports.testAssignValue = function(test) {
  test.equal(pattern.assignByDot().someKey, "Hello World");
  test.equal(pattern.assignBySquareBracket()["someKey"], "Hello World");
  test.notEqual(pattern.assignByDefineProperty().someKey, null);
  test.notEqual(pattern.assignByDefineProperty2().car, null);
  test.notEqual(pattern.assignByDefineProperties().someKey, null);
  test.equal(pattern.assignByDefineProperties().noKey, null);
  test.done();
};

exports.testBasicConstructor = function(test) {
  var Car = pattern.basicConstructor();
  var myCar = new Car("Honda Civic", 2009, 200000);
  test.equal(myCar.year, 2009);
  test.done();
};

exports.testConstructorWithPrototype = function(test) {
  var Car = pattern.constructorWithPrototype();
  var myCar = new Car("Ford Mondeo", 2010, 5000);
  test.equal(myCar.miles, 5000);
  test.done();
};

/**
* MODULE
*/
exports.testSelfContainModule = function(test) {
  var testModule = pattern.selfContainModule();
  test.equal(testModule.incrementCounter(), 0);
  test.equal(testModule.incrementCounter(), 1);
  test.equal(testModule.incrementCounter(), 2);

  testModule.resetCounter();
  test.equal(testModule.incrementCounter(), 0);
  test.done();
};

exports.testSelfContainModuleTemplate = function(test) {
  var testModule = pattern.selfContainModuleTemplate();

  test.notEqual(testModule.publicVar, undefined, "public var != undefined");
  test.notEqual(testModule.publicMethod, undefined, "public method != undefined");
  test.equal(testModule.privateVar, undefined, "private var === undefined");
  test.equal(testModule.privateMthod, undefined, "private method === undefined");
  test.done();
};


exports.testExportModule = function(test){
  var testModule = pattern.exportModule();

  test.notEqual(testModule.publicProperty, undefined, "public var != undefined");
  test.notEqual(testModule.publicMethod, undefined, "public method != undefined");
  test.equal(testModule.privateVariable, undefined, "private var === undefined");
  test.equal(testModule.privateMthod, undefined, "private method === undefined");
  test.done();
};
