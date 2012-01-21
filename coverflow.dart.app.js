//  ********** Library dart:core **************
//  ********** Natives dart:core **************
Object.defineProperty(Object.prototype, '$typeNameOf', { value: function() {
  if ((typeof(window) != 'undefined' && window.constructor.name == 'DOMWindow')
      || typeof(process) != 'undefined') { // fast-path for Chrome and Node
    return this.constructor.name;
  }
  var str = Object.prototype.toString.call(this);
  str = str.substring(8, str.length - 1);
  if (str == 'Window') {
    str = 'DOMWindow';
  } else if (str == 'Document') {
    str = 'HTMLDocument';
  }
  return str;
}, enumerable: false, writable: true, configurable: true});
function $throw(e) {
  // If e is not a value, we can use V8's captureStackTrace utility method.
  // TODO(jmesserly): capture the stack trace on other JS engines.
  if (e && (typeof e == 'object') && Error.captureStackTrace) {
    // TODO(jmesserly): this will clobber the e.stack property
    Error.captureStackTrace(e, $throw);
  }
  throw e;
}
Object.defineProperty(Object.prototype, '$index', { value: function(i) {
  var proto = Object.getPrototypeOf(this);
  if (proto !== Object) {
    proto.$index = function(i) { return this[i]; }
  }
  return this[i];
}, enumerable: false, writable: true, configurable: true});
Object.defineProperty(Array.prototype, '$index', { value: function(i) { 
  return this[i]; 
}, enumerable: false, writable: true, configurable: true});
Object.defineProperty(String.prototype, '$index', { value: function(i) { 
  return this[i]; 
}, enumerable: false, writable: true, configurable: true});
Object.defineProperty(Object.prototype, '$setindex', { value: function(i, value) {
  var proto = Object.getPrototypeOf(this);
  if (proto !== Object) {
    proto.$setindex = function(i, value) { return this[i] = value; }
  }
  return this[i] = value;
}, enumerable: false, writable: true, configurable: true});
Object.defineProperty(Array.prototype, '$setindex', { value: function(i, value) { 
  return this[i] = value; }, enumerable: false, writable: true, 
  configurable: true});
function $wrap_call$0(fn) { return fn; }
function $wrap_call$1(fn) { return fn; }
function $add(x, y) {
  return ((typeof(x) == 'number' && typeof(y) == 'number') ||
          (typeof(x) == 'string'))
    ? x + y : x.$add(y);
}
function $eq(x, y) {
  if (x == null) return y == null;
  return (typeof(x) == 'number' && typeof(y) == 'number') ||
         (typeof(x) == 'boolean' && typeof(y) == 'boolean') ||
         (typeof(x) == 'string' && typeof(y) == 'string')
    ? x == y : x.$eq(y);
}
// TODO(jimhug): Should this or should it not match equals?
Object.defineProperty(Object.prototype, '$eq', { value: function(other) { 
  return this === other;
}, enumerable: false, writable: true, configurable: true });
function $truncdiv(x, y) {
  if (typeof(x) == 'number' && typeof(y) == 'number') {
    if (y == 0) $throw(new IntegerDivisionByZeroException());
    var tmp = x / y;
    return (tmp < 0) ? Math.ceil(tmp) : Math.floor(tmp);
  } else {
    return x.$truncdiv(y);
  }
}
Object.defineProperty(Object.prototype, "get$typeName", { value: Object.prototype.$typeNameOf, enumerable: false, writable: true, configurable: true});
// ********** Code for Object **************
Object.defineProperty(Object.prototype, "get$dynamic", { value: function() {
  "use strict"; return this;
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "noSuchMethod", { value: function(name, args) {
  $throw(new NoSuchMethodException(this, name, args));
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "_asNonSentinelEntry$0", { value: function() {
  return this.noSuchMethod("_asNonSentinelEntry", []);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "add$1", { value: function($0) {
  return this.noSuchMethod("add", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "add$2", { value: function($0, $1) {
  return this.noSuchMethod("add", [$0, $1]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "addAll$1", { value: function($0) {
  return this.noSuchMethod("addAll", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "addEventListener$3", { value: function($0, $1, $2) {
  return this.noSuchMethod("addEventListener", [$0, $1, $2]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "appendChild$1", { value: function($0) {
  return this.noSuchMethod("appendChild", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "beginPath$0", { value: function() {
  return this.noSuchMethod("beginPath", []);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "clear$0", { value: function() {
  return this.noSuchMethod("clear", []);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "clear$1", { value: function($0) {
  return this.noSuchMethod("clear", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "click$0", { value: function() {
  return this.noSuchMethod("click", []);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "clip$0", { value: function() {
  return this.noSuchMethod("clip", []);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "drawImage$3", { value: function($0, $1, $2) {
  return this.noSuchMethod("drawImage", [$0, $1, $2]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "drawImage$5", { value: function($0, $1, $2, $3, $4) {
  return this.noSuchMethod("drawImage", [$0, $1, $2, $3, $4]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "drawImage$9", { value: function($0, $1, $2, $3, $4, $5, $6, $7, $8) {
  return this.noSuchMethod("drawImage", [$0, $1, $2, $3, $4, $5, $6, $7, $8]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "forEach$1", { value: function($0) {
  return this.noSuchMethod("forEach", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "getAttribute$1", { value: function($0) {
  return this.noSuchMethod("getAttribute", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "getContext$0", { value: function() {
  return this.noSuchMethod("getContext", []);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "getContext$1", { value: function($0) {
  return this.noSuchMethod("getContext", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "getPropertyValue$1", { value: function($0) {
  return this.noSuchMethod("getPropertyValue", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "getRange$2", { value: function($0, $1) {
  return this.noSuchMethod("getRange", [$0, $1]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "group$1", { value: function($0) {
  return this.noSuchMethod("group", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "hasAttribute$1", { value: function($0) {
  return this.noSuchMethod("hasAttribute", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "hasNext$0", { value: function() {
  return this.noSuchMethod("hasNext", []);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "hashCode$0", { value: function() {
  return this.noSuchMethod("hashCode", []);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "is$CanvasElement", { value: function() {
  return false;
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "is$ImageElement", { value: function() {
  return false;
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "is$html_html_Element", { value: function() {
  return false;
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "item$1", { value: function($0) {
  return this.noSuchMethod("item", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "iterator$0", { value: function() {
  return this.noSuchMethod("iterator", []);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "lineTo$2", { value: function($0, $1) {
  return this.noSuchMethod("lineTo", [$0, $1]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "moveTo$2", { value: function($0, $1) {
  return this.noSuchMethod("moveTo", [$0, $1]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "next$0", { value: function() {
  return this.noSuchMethod("next", []);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "putIfAbsent$2", { value: function($0, $1) {
  return this.noSuchMethod("putIfAbsent", [$0, $1]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "quadraticCurveTo$4", { value: function($0, $1, $2, $3) {
  return this.noSuchMethod("quadraticCurveTo", [$0, $1, $2, $3]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "querySelector$1", { value: function($0) {
  return this.noSuchMethod("querySelector", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "querySelectorAll$1", { value: function($0) {
  return this.noSuchMethod("querySelectorAll", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "remove$0", { value: function() {
  return this.noSuchMethod("remove", []);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "removeAttribute$1", { value: function($0) {
  return this.noSuchMethod("removeAttribute", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "removeChild$1", { value: function($0) {
  return this.noSuchMethod("removeChild", [$0]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "replaceChild$2", { value: function($0, $1) {
  return this.noSuchMethod("replaceChild", [$0, $1]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "setAttribute$2", { value: function($0, $1) {
  return this.noSuchMethod("setAttribute", [$0, $1]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "setProperty$3", { value: function($0, $1, $2) {
  return this.noSuchMethod("setProperty", [$0, $1, $2]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "setTimeout$2", { value: function($0, $1) {
  return this.noSuchMethod("setTimeout", [$0, $1]);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "toLowerCase$0", { value: function() {
  return this.noSuchMethod("toLowerCase", []);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(Object.prototype, "toString$0", { value: function() {
  return this.toString();
}, enumerable: false, writable: true, configurable: true });
// ********** Code for IndexOutOfRangeException **************
function IndexOutOfRangeException(_index) {
  this._index = _index;
}
IndexOutOfRangeException.prototype.toString = function() {
  return ("IndexOutOfRangeException: " + this._index);
}
IndexOutOfRangeException.prototype.toString$0 = IndexOutOfRangeException.prototype.toString;
// ********** Code for IllegalAccessException **************
function IllegalAccessException() {

}
IllegalAccessException.prototype.toString = function() {
  return "Attempt to modify an immutable object";
}
IllegalAccessException.prototype.toString$0 = IllegalAccessException.prototype.toString;
// ********** Code for NoSuchMethodException **************
function NoSuchMethodException(_receiver, _functionName, _arguments) {
  this._receiver = _receiver;
  this._functionName = _functionName;
  this._arguments = _arguments;
}
NoSuchMethodException.prototype.toString = function() {
  var sb = new StringBufferImpl("");
  for (var i = (0);
   i < this._arguments.get$length(); i++) {
    if (i > (0)) {
      sb.add(", ");
    }
    sb.add(this._arguments.$index(i));
  }
  sb.add("]");
  return ("NoSuchMethodException - receiver: '" + this._receiver + "' ") + ("function name: '" + this._functionName + "' arguments: [" + sb + "]");
}
NoSuchMethodException.prototype.toString$0 = NoSuchMethodException.prototype.toString;
// ********** Code for ClosureArgumentMismatchException **************
function ClosureArgumentMismatchException() {

}
ClosureArgumentMismatchException.prototype.toString = function() {
  return "Closure argument mismatch";
}
ClosureArgumentMismatchException.prototype.toString$0 = ClosureArgumentMismatchException.prototype.toString;
// ********** Code for ObjectNotClosureException **************
function ObjectNotClosureException() {

}
ObjectNotClosureException.prototype.toString = function() {
  return "Object is not closure";
}
ObjectNotClosureException.prototype.toString$0 = ObjectNotClosureException.prototype.toString;
// ********** Code for IllegalArgumentException **************
function IllegalArgumentException(args) {
  this._args = args;
}
IllegalArgumentException.prototype.toString = function() {
  return ("Illegal argument(s): " + this._args);
}
IllegalArgumentException.prototype.toString$0 = IllegalArgumentException.prototype.toString;
// ********** Code for StackOverflowException **************
function StackOverflowException() {

}
StackOverflowException.prototype.toString = function() {
  return "Stack Overflow";
}
StackOverflowException.prototype.toString$0 = StackOverflowException.prototype.toString;
// ********** Code for BadNumberFormatException **************
function BadNumberFormatException(_s) {
  this._s = _s;
}
BadNumberFormatException.prototype.toString = function() {
  return ("BadNumberFormatException: '" + this._s + "'");
}
BadNumberFormatException.prototype.toString$0 = BadNumberFormatException.prototype.toString;
// ********** Code for NullPointerException **************
function NullPointerException() {

}
NullPointerException.prototype.toString = function() {
  return "NullPointerException";
}
NullPointerException.prototype.toString$0 = NullPointerException.prototype.toString;
// ********** Code for NoMoreElementsException **************
function NoMoreElementsException() {

}
NoMoreElementsException.prototype.toString = function() {
  return "NoMoreElementsException";
}
NoMoreElementsException.prototype.toString$0 = NoMoreElementsException.prototype.toString;
// ********** Code for EmptyQueueException **************
function EmptyQueueException() {

}
EmptyQueueException.prototype.toString = function() {
  return "EmptyQueueException";
}
EmptyQueueException.prototype.toString$0 = EmptyQueueException.prototype.toString;
// ********** Code for UnsupportedOperationException **************
function UnsupportedOperationException(_message) {
  this._message = _message;
}
UnsupportedOperationException.prototype.toString = function() {
  return ("UnsupportedOperationException: " + this._message);
}
UnsupportedOperationException.prototype.toString$0 = UnsupportedOperationException.prototype.toString;
// ********** Code for NotImplementedException **************
function NotImplementedException() {

}
NotImplementedException.prototype.toString = function() {
  return "NotImplementedException";
}
NotImplementedException.prototype.toString$0 = NotImplementedException.prototype.toString;
// ********** Code for dart_core_Function **************
Function.prototype.to$call$0 = function() {
  this.call$0 = this._genStub(0);
  this.to$call$0 = function() { return this.call$0; };
  return this.call$0;
};
Function.prototype.call$0 = function() {
  return this.to$call$0()();
};
function to$call$0(f) { return f && f.to$call$0(); }
Function.prototype.to$call$1 = function() {
  this.call$1 = this._genStub(1);
  this.to$call$1 = function() { return this.call$1; };
  return this.call$1;
};
Function.prototype.call$1 = function($0) {
  return this.to$call$1()($0);
};
function to$call$1(f) { return f && f.to$call$1(); }
Function.prototype.to$call$2 = function() {
  this.call$2 = this._genStub(2);
  this.to$call$2 = function() { return this.call$2; };
  return this.call$2;
};
Function.prototype.call$2 = function($0, $1) {
  return this.to$call$2()($0, $1);
};
function to$call$2(f) { return f && f.to$call$2(); }
// ********** Code for Math **************
Math.parseInt = function(str) {
  var ret = parseInt(str);
    if (isNaN(ret)) $throw(new BadNumberFormatException(str));
    return ret;
}
Math.min = function(a, b) {
  if (a == b) return a;
    if (a < b) {
      if (isNaN(b)) return b;
      else return a;
    }
    if (isNaN(a)) return a;
    else return b;
}
// ********** Code for Strings **************
function Strings() {}
Strings.join = function(strings, separator) {
  return StringBase.join(strings, separator);
}
// ********** Code for top level **************
function dart_core_print(obj) {
  return _print(obj);
}
function _print(obj) {
  if (typeof console == 'object') {
    if (obj) obj = obj.toString();
    console.log(obj);
  } else {
    write(obj);
    write('\n');
  }
}
function _toDartException(e) {
  function attachStack(dartEx) {
    // TODO(jmesserly): setting the stack property is not a long term solution.
    var stack = e.stack;
    // The stack contains the error message, and the stack is all that is
    // printed (the exception's toString() is never called).  Make the Dart
    // exception's toString() be the dominant message.
    if (typeof stack == 'string') {
      var message = dartEx.toString();
      if (/^(Type|Range)Error:/.test(stack)) {
        // Indent JS message (it can be helpful) so new message stands out.
        stack = '    (' + stack.substring(0, stack.indexOf('\n')) + ')\n' +
                stack.substring(stack.indexOf('\n') + 1);
      }
      stack = message + '\n' + stack;
    }
    dartEx.stack = stack;
    return dartEx;
  }

  if (e instanceof TypeError) {
    switch(e.type) {
      case 'property_not_function':
      case 'called_non_callable':
        if (e.arguments[0] == null) {
          return attachStack(new NullPointerException());
        } else {
          return attachStack(new ObjectNotClosureException());
        }
        break;
      case 'non_object_property_call':
      case 'non_object_property_load':
        return attachStack(new NullPointerException());
        break;
      case 'undefined_method':
        var mname = e.arguments[0];
        if (typeof(mname) == 'string' && (mname.indexOf('call$') == 0
            || mname == 'call' || mname == 'apply')) {
          return attachStack(new ObjectNotClosureException());
        } else {
          // TODO(jmesserly): fix noSuchMethod on operators so we don't hit this
          return attachStack(new NoSuchMethodException('', e.arguments[0], []));
        }
        break;
    }
  } else if (e instanceof RangeError) {
    if (e.message.indexOf('call stack') >= 0) {
      return attachStack(new StackOverflowException());
    }
  }
  return e;
}
//  ********** Library dart:coreimpl **************
// ********** Code for ListFactory **************
ListFactory = Array;
ListFactory.ListFactory$from$factory = function(other) {
  var list = [];
  for (var $$i = other.iterator$0(); $$i.hasNext$0(); ) {
    var e = $$i.next$0();
    list.add$1(e);
  }
  return list;
}
Object.defineProperty(ListFactory.prototype, "get$length", { value: function() { return this.length; }, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "set$length", { value: function(value) { return this.length = value; }, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "add", { value: function(value) {
  this.push(value);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "addAll", { value: function(collection) {
  for (var $$i = collection.iterator$0(); $$i.hasNext$0(); ) {
    var item = $$i.next$0();
    this.add(item);
  }
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "clear", { value: function() {
  this.set$length((0));
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "get$clear", { value: function() {
  return this.clear.bind(this);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "getRange", { value: function(start, length) {
  return this.slice(start, start + length);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "removeRange", { value: function(start, length) {
  this.splice(start, length);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "iterator", { value: function() {
  return new ListIterator(this);
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "add$1", { value: ListFactory.prototype.add, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "addAll$1", { value: ListFactory.prototype.addAll, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "clear$0", { value: ListFactory.prototype.clear, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "forEach$1", { value: function($0) {
  return this.forEach(to$call$1($0));
}, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "getRange$2", { value: ListFactory.prototype.getRange, enumerable: false, writable: true, configurable: true });
Object.defineProperty(ListFactory.prototype, "iterator$0", { value: ListFactory.prototype.iterator, enumerable: false, writable: true, configurable: true });
ListFactory_E = ListFactory;
ListFactory_Map = ListFactory;
ListFactory_html_html_Node = ListFactory;
ListFactory_dart_core_String = ListFactory;
ListFactory_V = ListFactory;
ListFactory__EventListenerWrapper = ListFactory;
// ********** Code for ListIterator **************
function ListIterator(array) {
  this._array = array;
  this._pos = (0);
}
ListIterator.prototype.hasNext = function() {
  return this._array.get$length() > this._pos;
}
ListIterator.prototype.next = function() {
  if (!this.hasNext()) {
    $throw(const$0002);
  }
  return this._array.$index(this._pos++);
}
ListIterator.prototype.hasNext$0 = ListIterator.prototype.hasNext;
ListIterator.prototype.next$0 = ListIterator.prototype.next;
// ********** Code for ImmutableMap **************
function ImmutableMap(keyValuePairs) {
  this._internal = _map(keyValuePairs);
}
ImmutableMap.prototype.$index = function(key) {
  return this._internal.$index(key);
}
ImmutableMap.prototype.get$length = function() {
  return this._internal.get$length();
}
ImmutableMap.prototype.forEach = function(f) {
  this._internal.forEach(f);
}
ImmutableMap.prototype.containsKey = function(key) {
  return this._internal.containsKey(key);
}
ImmutableMap.prototype.$setindex = function(key, value) {
  $throw(const$0004);
}
ImmutableMap.prototype.putIfAbsent = function(key, ifAbsent) {
  $throw(const$0004);
}
ImmutableMap.prototype.clear = function() {
  $throw(const$0004);
}
ImmutableMap.prototype.get$clear = function() {
  return this.clear.bind(this);
}
ImmutableMap.prototype.clear$0 = ImmutableMap.prototype.clear;
ImmutableMap.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$2($0));
};
ImmutableMap.prototype.putIfAbsent$2 = function($0, $1) {
  return this.putIfAbsent($0, to$call$0($1));
};
// ********** Code for JSSyntaxRegExp **************
function JSSyntaxRegExp(pattern, multiLine, ignoreCase) {
  JSSyntaxRegExp._create$ctor.call(this, pattern, ($eq(multiLine, true) ? "m" : "") + ($eq(ignoreCase, true) ? "i" : ""));
}
JSSyntaxRegExp._create$ctor = function(pattern, flags) {
  this.re = new RegExp(pattern, flags);
      this.pattern = pattern;
      this.multiLine = this.re.multiline;
      this.ignoreCase = this.re.ignoreCase;
}
JSSyntaxRegExp._create$ctor.prototype = JSSyntaxRegExp.prototype;
JSSyntaxRegExp.prototype.firstMatch = function(str) {
  var m = this._exec(str);
  return m == null ? null : new MatchImplementation(this.pattern, str, this._matchStart(m), this.get$_lastIndex(), m);
}
JSSyntaxRegExp.prototype._exec = function(str) {
  return this.re.exec(str);
}
JSSyntaxRegExp.prototype._matchStart = function(m) {
  return m.index;
}
JSSyntaxRegExp.prototype.get$_lastIndex = function() {
  return this.re.lastIndex;
}
// ********** Code for MatchImplementation **************
function MatchImplementation(pattern, str, _start, _end, _groups) {
  this.pattern = pattern;
  this.str = str;
  this._start = _start;
  this._end = _end;
  this._groups = _groups;
}
MatchImplementation.prototype.group = function(group) {
  return this._groups.$index(group);
}
MatchImplementation.prototype.$index = function(group) {
  return this._groups.$index(group);
}
MatchImplementation.prototype.group$1 = MatchImplementation.prototype.group;
// ********** Code for NumImplementation **************
NumImplementation = Number;
NumImplementation.prototype.hashCode = function() {
  'use strict'; return this & 0x1FFFFFFF;
}
NumImplementation.prototype.hashCode$0 = NumImplementation.prototype.hashCode;
// ********** Code for HashMapImplementation **************
function HashMapImplementation() {
  this._numberOfEntries = (0);
  this._numberOfDeleted = (0);
  this._loadLimit = HashMapImplementation._computeLoadLimit((8));
  this._keys = new Array((8));
  this._values = new Array((8));
}
HashMapImplementation._computeLoadLimit = function(capacity) {
  return $truncdiv((capacity * (3)), (4));
}
HashMapImplementation._firstProbe = function(hashCode, length) {
  return hashCode & (length - (1));
}
HashMapImplementation._nextProbe = function(currentProbe, numberOfProbes, length) {
  return (currentProbe + numberOfProbes) & (length - (1));
}
HashMapImplementation.prototype._probeForAdding = function(key) {
  var hash = HashMapImplementation._firstProbe(key.hashCode$0(), this._keys.get$length());
  var numberOfProbes = (1);
  var initialHash = hash;
  var insertionIndex = (-1);
  while (true) {
    var existingKey = this._keys.$index(hash);
    if (existingKey == null) {
      if (insertionIndex < (0)) return hash;
      return insertionIndex;
    }
    else if ($eq(existingKey, key)) {
      return hash;
    }
    else if ((insertionIndex < (0)) && (const$0000 == existingKey)) {
      insertionIndex = hash;
    }
    hash = HashMapImplementation._nextProbe(hash, numberOfProbes++, this._keys.get$length());
  }
}
HashMapImplementation.prototype._probeForLookup = function(key) {
  var hash = HashMapImplementation._firstProbe(key.hashCode$0(), this._keys.get$length());
  var numberOfProbes = (1);
  var initialHash = hash;
  while (true) {
    var existingKey = this._keys.$index(hash);
    if (existingKey == null) return (-1);
    if ($eq(existingKey, key)) return hash;
    hash = HashMapImplementation._nextProbe(hash, numberOfProbes++, this._keys.get$length());
  }
}
HashMapImplementation.prototype._ensureCapacity = function() {
  var newNumberOfEntries = this._numberOfEntries + (1);
  if (newNumberOfEntries >= this._loadLimit) {
    this._grow(this._keys.get$length() * (2));
    return;
  }
  var capacity = this._keys.get$length();
  var numberOfFreeOrDeleted = capacity - newNumberOfEntries;
  var numberOfFree = numberOfFreeOrDeleted - this._numberOfDeleted;
  if (this._numberOfDeleted > numberOfFree) {
    this._grow(this._keys.get$length());
  }
}
HashMapImplementation._isPowerOfTwo = function(x) {
  return ((x & (x - (1))) == (0));
}
HashMapImplementation.prototype._grow = function(newCapacity) {
  var capacity = this._keys.get$length();
  this._loadLimit = HashMapImplementation._computeLoadLimit(newCapacity);
  var oldKeys = this._keys;
  var oldValues = this._values;
  this._keys = new Array(newCapacity);
  this._values = new Array(newCapacity);
  for (var i = (0);
   i < capacity; i++) {
    var key = oldKeys.$index(i);
    if (key == null || key == const$0000) {
      continue;
    }
    var value = oldValues.$index(i);
    var newIndex = this._probeForAdding(key);
    this._keys.$setindex(newIndex, key);
    this._values.$setindex(newIndex, value);
  }
  this._numberOfDeleted = (0);
}
HashMapImplementation.prototype.clear = function() {
  this._numberOfEntries = (0);
  this._numberOfDeleted = (0);
  var length = this._keys.get$length();
  for (var i = (0);
   i < length; i++) {
    this._keys.$setindex(i);
    this._values.$setindex(i);
  }
}
HashMapImplementation.prototype.get$clear = function() {
  return this.clear.bind(this);
}
HashMapImplementation.prototype.$setindex = function(key, value) {
  this._ensureCapacity();
  var index = this._probeForAdding(key);
  if ((this._keys.$index(index) == null) || (this._keys.$index(index) == const$0000)) {
    this._numberOfEntries++;
  }
  this._keys.$setindex(index, key);
  this._values.$setindex(index, value);
}
HashMapImplementation.prototype.$index = function(key) {
  var index = this._probeForLookup(key);
  if (index < (0)) return null;
  return this._values.$index(index);
}
HashMapImplementation.prototype.putIfAbsent = function(key, ifAbsent) {
  var index = this._probeForLookup(key);
  if (index >= (0)) return this._values.$index(index);
  var value = ifAbsent();
  this.$setindex(key, value);
  return value;
}
HashMapImplementation.prototype.get$length = function() {
  return this._numberOfEntries;
}
HashMapImplementation.prototype.forEach = function(f) {
  var length = this._keys.get$length();
  for (var i = (0);
   i < length; i++) {
    if ((this._keys.$index(i) != null) && (this._keys.$index(i) != const$0000)) {
      f(this._keys.$index(i), this._values.$index(i));
    }
  }
}
HashMapImplementation.prototype.containsKey = function(key) {
  return (this._probeForLookup(key) != (-1));
}
HashMapImplementation.prototype.clear$0 = HashMapImplementation.prototype.clear;
HashMapImplementation.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$2($0));
};
HashMapImplementation.prototype.putIfAbsent$2 = function($0, $1) {
  return this.putIfAbsent($0, to$call$0($1));
};
// ********** Code for HashMapImplementation_E$E **************
/** Implements extends for Dart classes on JavaScript prototypes. */
function $inherits(child, parent) {
  if (child.prototype.__proto__) {
    child.prototype.__proto__ = parent.prototype;
  } else {
    function tmp() {};
    tmp.prototype = parent.prototype;
    child.prototype = new tmp();
    child.prototype.constructor = child;
  }
}
$inherits(HashMapImplementation_E$E, HashMapImplementation);
function HashMapImplementation_E$E() {
  this._numberOfEntries = (0);
  this._numberOfDeleted = (0);
  this._loadLimit = HashMapImplementation._computeLoadLimit((8));
  this._keys = new Array((8));
  this._values = new Array((8));
}
HashMapImplementation_E$E._computeLoadLimit = function(capacity) {
  return $truncdiv((capacity * (3)), (4));
}
HashMapImplementation_E$E._firstProbe = function(hashCode, length) {
  return hashCode & (length - (1));
}
HashMapImplementation_E$E._nextProbe = function(currentProbe, numberOfProbes, length) {
  return (currentProbe + numberOfProbes) & (length - (1));
}
HashMapImplementation_E$E.prototype._probeForAdding = function(key) {
  var hash = HashMapImplementation._firstProbe(key.hashCode$0(), this._keys.get$length());
  var numberOfProbes = (1);
  var initialHash = hash;
  var insertionIndex = (-1);
  while (true) {
    var existingKey = this._keys.$index(hash);
    if (existingKey == null) {
      if (insertionIndex < (0)) return hash;
      return insertionIndex;
    }
    else if ($eq(existingKey, key)) {
      return hash;
    }
    else if ((insertionIndex < (0)) && (const$0000 == existingKey)) {
      insertionIndex = hash;
    }
    hash = HashMapImplementation._nextProbe(hash, numberOfProbes++, this._keys.get$length());
  }
}
HashMapImplementation_E$E.prototype._ensureCapacity = function() {
  var newNumberOfEntries = this._numberOfEntries + (1);
  if (newNumberOfEntries >= this._loadLimit) {
    this._grow(this._keys.get$length() * (2));
    return;
  }
  var capacity = this._keys.get$length();
  var numberOfFreeOrDeleted = capacity - newNumberOfEntries;
  var numberOfFree = numberOfFreeOrDeleted - this._numberOfDeleted;
  if (this._numberOfDeleted > numberOfFree) {
    this._grow(this._keys.get$length());
  }
}
HashMapImplementation_E$E._isPowerOfTwo = function(x) {
  return ((x & (x - (1))) == (0));
}
HashMapImplementation_E$E.prototype._grow = function(newCapacity) {
  var capacity = this._keys.get$length();
  this._loadLimit = HashMapImplementation._computeLoadLimit(newCapacity);
  var oldKeys = this._keys;
  var oldValues = this._values;
  this._keys = new Array(newCapacity);
  this._values = new Array(newCapacity);
  for (var i = (0);
   i < capacity; i++) {
    var key = oldKeys.$index(i);
    if (key == null || key == const$0000) {
      continue;
    }
    var value = oldValues.$index(i);
    var newIndex = this._probeForAdding(key);
    this._keys.$setindex(newIndex, key);
    this._values.$setindex(newIndex, value);
  }
  this._numberOfDeleted = (0);
}
HashMapImplementation_E$E.prototype.clear = function() {
  this._numberOfEntries = (0);
  this._numberOfDeleted = (0);
  var length = this._keys.get$length();
  for (var i = (0);
   i < length; i++) {
    this._keys.$setindex(i);
    this._values.$setindex(i);
  }
}
HashMapImplementation_E$E.prototype.$setindex = function(key, value) {
  this._ensureCapacity();
  var index = this._probeForAdding(key);
  if ((this._keys.$index(index) == null) || (this._keys.$index(index) == const$0000)) {
    this._numberOfEntries++;
  }
  this._keys.$setindex(index, key);
  this._values.$setindex(index, value);
}
HashMapImplementation_E$E.prototype.forEach = function(f) {
  var length = this._keys.get$length();
  for (var i = (0);
   i < length; i++) {
    if ((this._keys.$index(i) != null) && (this._keys.$index(i) != const$0000)) {
      f(this._keys.$index(i), this._values.$index(i));
    }
  }
}
// ********** Code for HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V **************
$inherits(HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V, HashMapImplementation);
function HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V() {}
// ********** Code for HashSetImplementation **************
function HashSetImplementation() {
  this._backingMap = new HashMapImplementation_E$E();
}
HashSetImplementation.prototype.clear = function() {
  this._backingMap.clear();
}
HashSetImplementation.prototype.get$clear = function() {
  return this.clear.bind(this);
}
HashSetImplementation.prototype.add = function(value) {
  this._backingMap.$setindex(value, value);
}
HashSetImplementation.prototype.addAll = function(collection) {
  var $this = this; // closure support
  collection.forEach(function _(value) {
    $this.add(value);
  }
  );
}
HashSetImplementation.prototype.forEach = function(f) {
  this._backingMap.forEach(function _(key, value) {
    f(key);
  }
  );
}
HashSetImplementation.prototype.get$length = function() {
  return this._backingMap.get$length();
}
HashSetImplementation.prototype.iterator = function() {
  return new HashSetIterator_E(this);
}
HashSetImplementation.prototype.add$1 = HashSetImplementation.prototype.add;
HashSetImplementation.prototype.addAll$1 = HashSetImplementation.prototype.addAll;
HashSetImplementation.prototype.clear$0 = HashSetImplementation.prototype.clear;
HashSetImplementation.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
HashSetImplementation.prototype.iterator$0 = HashSetImplementation.prototype.iterator;
// ********** Code for HashSetImplementation_E **************
$inherits(HashSetImplementation_E, HashSetImplementation);
function HashSetImplementation_E() {}
// ********** Code for HashSetImplementation_dart_core_String **************
$inherits(HashSetImplementation_dart_core_String, HashSetImplementation);
function HashSetImplementation_dart_core_String() {}
// ********** Code for HashSetIterator **************
function HashSetIterator(set_) {
  this._entries = set_._backingMap._keys;
  this._nextValidIndex = (-1);
  this._advance();
}
HashSetIterator.prototype.hasNext = function() {
  if (this._nextValidIndex >= this._entries.get$length()) return false;
  if (this._entries.$index(this._nextValidIndex) == const$0000) {
    this._advance();
  }
  return this._nextValidIndex < this._entries.get$length();
}
HashSetIterator.prototype.next = function() {
  if (!this.hasNext()) {
    $throw(const$0002);
  }
  var res = this._entries.$index(this._nextValidIndex);
  this._advance();
  return res;
}
HashSetIterator.prototype._advance = function() {
  var length = this._entries.get$length();
  var entry;
  var deletedKey = const$0000;
  do {
    if (++this._nextValidIndex >= length) break;
    entry = this._entries.$index(this._nextValidIndex);
  }
  while ((entry == null) || (entry == deletedKey))
}
HashSetIterator.prototype.hasNext$0 = HashSetIterator.prototype.hasNext;
HashSetIterator.prototype.next$0 = HashSetIterator.prototype.next;
// ********** Code for HashSetIterator_E **************
$inherits(HashSetIterator_E, HashSetIterator);
function HashSetIterator_E(set_) {
  this._nextValidIndex = (-1);
  this._entries = set_._backingMap._keys;
  this._advance();
}
HashSetIterator_E.prototype._advance = function() {
  var length = this._entries.get$length();
  var entry;
  var deletedKey = const$0000;
  do {
    if (++this._nextValidIndex >= length) break;
    entry = this._entries.$index(this._nextValidIndex);
  }
  while ((entry == null) || (entry == deletedKey))
}
// ********** Code for _DeletedKeySentinel **************
function _DeletedKeySentinel() {

}
// ********** Code for KeyValuePair **************
function KeyValuePair(key, value) {
  this.key = key;
  this.value = value;
}
KeyValuePair.prototype.get$value = function() { return this.value; };
KeyValuePair.prototype.set$value = function(value) { return this.value = value; };
// ********** Code for KeyValuePair_K$V **************
$inherits(KeyValuePair_K$V, KeyValuePair);
function KeyValuePair_K$V(key, value) {
  this.key = key;
  this.value = value;
}
// ********** Code for LinkedHashMapImplementation **************
function LinkedHashMapImplementation() {
  this._map = new HashMapImplementation();
  this._list = new DoubleLinkedQueue_KeyValuePair_K$V();
}
LinkedHashMapImplementation.prototype.$setindex = function(key, value) {
  if (this._map.containsKey(key)) {
    this._map.$index(key).get$element().set$value(value);
  }
  else {
    this._list.addLast(new KeyValuePair_K$V(key, value));
    this._map.$setindex(key, this._list.lastEntry());
  }
}
LinkedHashMapImplementation.prototype.$index = function(key) {
  var entry = this._map.$index(key);
  if (entry == null) return null;
  return entry.get$element().get$value();
}
LinkedHashMapImplementation.prototype.putIfAbsent = function(key, ifAbsent) {
  var value = this.$index(key);
  if ((this.$index(key) == null) && !(this.containsKey(key))) {
    value = ifAbsent();
    this.$setindex(key, value);
  }
  return value;
}
LinkedHashMapImplementation.prototype.forEach = function(f) {
  this._list.forEach(function _(entry) {
    f(entry.key, entry.value);
  }
  );
}
LinkedHashMapImplementation.prototype.containsKey = function(key) {
  return this._map.containsKey(key);
}
LinkedHashMapImplementation.prototype.get$length = function() {
  return this._map.get$length();
}
LinkedHashMapImplementation.prototype.clear = function() {
  this._map.clear();
  this._list.clear();
}
LinkedHashMapImplementation.prototype.get$clear = function() {
  return this.clear.bind(this);
}
LinkedHashMapImplementation.prototype.clear$0 = LinkedHashMapImplementation.prototype.clear;
LinkedHashMapImplementation.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$2($0));
};
LinkedHashMapImplementation.prototype.putIfAbsent$2 = function($0, $1) {
  return this.putIfAbsent($0, to$call$0($1));
};
// ********** Code for DoubleLinkedQueueEntry **************
function DoubleLinkedQueueEntry(e) {
  this._element = e;
}
DoubleLinkedQueueEntry.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry.prototype.prepend = function(e) {
  new DoubleLinkedQueueEntry_E(e)._link(this._previous, this);
}
DoubleLinkedQueueEntry.prototype.remove = function() {
  this._previous._next = this._next;
  this._next._previous = this._previous;
  this._next = null;
  this._previous = null;
  return this._element;
}
DoubleLinkedQueueEntry.prototype._asNonSentinelEntry = function() {
  return this;
}
DoubleLinkedQueueEntry.prototype.previousEntry = function() {
  return this._previous._asNonSentinelEntry();
}
DoubleLinkedQueueEntry.prototype.get$element = function() {
  return this._element;
}
DoubleLinkedQueueEntry.prototype._asNonSentinelEntry$0 = DoubleLinkedQueueEntry.prototype._asNonSentinelEntry;
DoubleLinkedQueueEntry.prototype.remove$0 = DoubleLinkedQueueEntry.prototype.remove;
// ********** Code for DoubleLinkedQueueEntry_E **************
$inherits(DoubleLinkedQueueEntry_E, DoubleLinkedQueueEntry);
function DoubleLinkedQueueEntry_E(e) {
  this._element = e;
}
DoubleLinkedQueueEntry_E.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry_E.prototype.prepend = function(e) {
  new DoubleLinkedQueueEntry_E(e)._link(this._previous, this);
}
DoubleLinkedQueueEntry_E.prototype._asNonSentinelEntry = function() {
  return this;
}
DoubleLinkedQueueEntry_E.prototype.previousEntry = function() {
  return this._previous._asNonSentinelEntry();
}
// ********** Code for DoubleLinkedQueueEntry_KeyValuePair_K$V **************
$inherits(DoubleLinkedQueueEntry_KeyValuePair_K$V, DoubleLinkedQueueEntry);
function DoubleLinkedQueueEntry_KeyValuePair_K$V(e) {
  this._element = e;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype.prepend = function(e) {
  new DoubleLinkedQueueEntry_KeyValuePair_K$V(e)._link(this._previous, this);
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype._asNonSentinelEntry = function() {
  return this;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype.previousEntry = function() {
  return this._previous._asNonSentinelEntry$0();
}
// ********** Code for _DoubleLinkedQueueEntrySentinel **************
$inherits(_DoubleLinkedQueueEntrySentinel, DoubleLinkedQueueEntry_E);
function _DoubleLinkedQueueEntrySentinel() {
  DoubleLinkedQueueEntry_E.call(this, null);
  this._link(this, this);
}
_DoubleLinkedQueueEntrySentinel.prototype.remove = function() {
  $throw(const$0003);
}
_DoubleLinkedQueueEntrySentinel.prototype._asNonSentinelEntry = function() {
  return null;
}
_DoubleLinkedQueueEntrySentinel.prototype.get$element = function() {
  $throw(const$0003);
}
_DoubleLinkedQueueEntrySentinel.prototype._asNonSentinelEntry$0 = _DoubleLinkedQueueEntrySentinel.prototype._asNonSentinelEntry;
_DoubleLinkedQueueEntrySentinel.prototype.remove$0 = _DoubleLinkedQueueEntrySentinel.prototype.remove;
// ********** Code for _DoubleLinkedQueueEntrySentinel_E **************
$inherits(_DoubleLinkedQueueEntrySentinel_E, _DoubleLinkedQueueEntrySentinel);
function _DoubleLinkedQueueEntrySentinel_E() {
  DoubleLinkedQueueEntry_E.call(this, null);
  this._link(this, this);
}
// ********** Code for _DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V **************
$inherits(_DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V, _DoubleLinkedQueueEntrySentinel);
function _DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V() {
  DoubleLinkedQueueEntry_KeyValuePair_K$V.call(this, null);
  this._link(this, this);
}
// ********** Code for DoubleLinkedQueue **************
function DoubleLinkedQueue() {
  this._sentinel = new _DoubleLinkedQueueEntrySentinel_E();
}
DoubleLinkedQueue.prototype.addLast = function(value) {
  this._sentinel.prepend(value);
}
DoubleLinkedQueue.prototype.add = function(value) {
  this.addLast(value);
}
DoubleLinkedQueue.prototype.addAll = function(collection) {
  for (var $$i = collection.iterator$0(); $$i.hasNext$0(); ) {
    var e = $$i.next$0();
    this.add(e);
  }
}
DoubleLinkedQueue.prototype.first = function() {
  return this._sentinel._next.get$element();
}
DoubleLinkedQueue.prototype.get$first = function() {
  return this.first.bind(this);
}
DoubleLinkedQueue.prototype.lastEntry = function() {
  return this._sentinel.previousEntry();
}
DoubleLinkedQueue.prototype.get$length = function() {
  var counter = (0);
  this.forEach(function _(element) {
    counter++;
  }
  );
  return counter;
}
DoubleLinkedQueue.prototype.clear = function() {
  this._sentinel._next = this._sentinel;
  this._sentinel._previous = this._sentinel;
}
DoubleLinkedQueue.prototype.get$clear = function() {
  return this.clear.bind(this);
}
DoubleLinkedQueue.prototype.forEach = function(f) {
  var entry = this._sentinel._next;
  while (entry != this._sentinel) {
    var nextEntry = entry._next;
    f(entry._element);
    entry = nextEntry;
  }
}
DoubleLinkedQueue.prototype.iterator = function() {
  return new _DoubleLinkedQueueIterator_E(this._sentinel);
}
DoubleLinkedQueue.prototype.add$1 = DoubleLinkedQueue.prototype.add;
DoubleLinkedQueue.prototype.addAll$1 = DoubleLinkedQueue.prototype.addAll;
DoubleLinkedQueue.prototype.clear$0 = DoubleLinkedQueue.prototype.clear;
DoubleLinkedQueue.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
DoubleLinkedQueue.prototype.iterator$0 = DoubleLinkedQueue.prototype.iterator;
// ********** Code for DoubleLinkedQueue_KeyValuePair_K$V **************
$inherits(DoubleLinkedQueue_KeyValuePair_K$V, DoubleLinkedQueue);
function DoubleLinkedQueue_KeyValuePair_K$V() {
  this._sentinel = new _DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V();
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.addLast = function(value) {
  this._sentinel.prepend(value);
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.lastEntry = function() {
  return this._sentinel.previousEntry();
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.clear = function() {
  this._sentinel._next = this._sentinel;
  this._sentinel._previous = this._sentinel;
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.forEach = function(f) {
  var entry = this._sentinel._next;
  while (entry != this._sentinel) {
    var nextEntry = entry._next;
    f(entry._element);
    entry = nextEntry;
  }
}
// ********** Code for _DoubleLinkedQueueIterator **************
function _DoubleLinkedQueueIterator(_sentinel) {
  this._sentinel = _sentinel;
  this._currentEntry = this._sentinel;
}
_DoubleLinkedQueueIterator.prototype.hasNext = function() {
  return this._currentEntry._next != this._sentinel;
}
_DoubleLinkedQueueIterator.prototype.next = function() {
  if (!this.hasNext()) {
    $throw(const$0002);
  }
  this._currentEntry = this._currentEntry._next;
  return this._currentEntry.get$element();
}
_DoubleLinkedQueueIterator.prototype.hasNext$0 = _DoubleLinkedQueueIterator.prototype.hasNext;
_DoubleLinkedQueueIterator.prototype.next$0 = _DoubleLinkedQueueIterator.prototype.next;
// ********** Code for _DoubleLinkedQueueIterator_E **************
$inherits(_DoubleLinkedQueueIterator_E, _DoubleLinkedQueueIterator);
function _DoubleLinkedQueueIterator_E(_sentinel) {
  this._sentinel = _sentinel;
  this._currentEntry = this._sentinel;
}
// ********** Code for StringBufferImpl **************
function StringBufferImpl(content) {
  this.clear();
  this.add(content);
}
StringBufferImpl.prototype.get$length = function() {
  return this._length;
}
StringBufferImpl.prototype.add = function(obj) {
  var str = obj.toString();
  if (str == null || str.isEmpty()) return this;
  this._buffer.add$1(str);
  this._length += str.length;
  return this;
}
StringBufferImpl.prototype.addAll = function(objects) {
  for (var $$i = objects.iterator$0(); $$i.hasNext$0(); ) {
    var obj = $$i.next$0();
    this.add(obj);
  }
  return this;
}
StringBufferImpl.prototype.clear = function() {
  this._buffer = new Array();
  this._length = (0);
  return this;
}
StringBufferImpl.prototype.get$clear = function() {
  return this.clear.bind(this);
}
StringBufferImpl.prototype.toString = function() {
  if (this._buffer.get$length() == (0)) return "";
  if (this._buffer.get$length() == (1)) return this._buffer.$index((0));
  var result = StringBase.concatAll(this._buffer);
  this._buffer.clear$0();
  this._buffer.add$1(result);
  return result;
}
StringBufferImpl.prototype.add$1 = StringBufferImpl.prototype.add;
StringBufferImpl.prototype.addAll$1 = StringBufferImpl.prototype.addAll;
StringBufferImpl.prototype.clear$0 = StringBufferImpl.prototype.clear;
StringBufferImpl.prototype.toString$0 = StringBufferImpl.prototype.toString;
// ********** Code for StringBase **************
function StringBase() {}
StringBase.join = function(strings, separator) {
  if (strings.get$length() == (0)) return "";
  var s = strings.$index((0));
  for (var i = (1);
   i < strings.get$length(); i++) {
    s = s + separator + strings.$index(i);
  }
  return s;
}
StringBase.concatAll = function(strings) {
  return StringBase.join(strings, "");
}
// ********** Code for StringImplementation **************
StringImplementation = String;
StringImplementation.prototype.get$length = function() { return this.length; };
StringImplementation.prototype.isEmpty = function() {
  return this.length == (0);
}
StringImplementation.prototype.hashCode = function() {
      'use strict';
      var hash = 0;
      for (var i = 0; i < this.length; i++) {
        hash = 0x1fffffff & (hash + this.charCodeAt(i));
        hash = 0x1fffffff & (hash + ((0x0007ffff & hash) << 10));
        hash ^= hash >> 6;
      }

      hash = 0x1fffffff & (hash + ((0x03ffffff & hash) << 3));
      hash ^= hash >> 11;
      return 0x1fffffff & (hash + ((0x00003fff & hash) << 15));
}
StringImplementation.prototype.hashCode$0 = StringImplementation.prototype.hashCode;
StringImplementation.prototype.toLowerCase$0 = StringImplementation.prototype.toLowerCase;
// ********** Code for _Worker **************
// ********** Code for _ArgumentMismatchException **************
$inherits(_ArgumentMismatchException, ClosureArgumentMismatchException);
function _ArgumentMismatchException(_message) {
  this._dart_coreimpl_message = _message;
  ClosureArgumentMismatchException.call(this);
}
_ArgumentMismatchException.prototype.toString = function() {
  return ("Closure argument mismatch: " + this._dart_coreimpl_message);
}
_ArgumentMismatchException.prototype.toString$0 = _ArgumentMismatchException.prototype.toString;
// ********** Code for _FunctionImplementation **************
_FunctionImplementation = Function;
_FunctionImplementation.prototype._genStub = function(argsLength, names) {
      // Fast path #1: if no named arguments and arg count matches
      if (this.length == argsLength && !names) {
        return this;
      }

      var paramsNamed = this.$optional ? (this.$optional.length / 2) : 0;
      var paramsBare = this.length - paramsNamed;
      var argsNamed = names ? names.length : 0;
      var argsBare = argsLength - argsNamed;

      // Check we got the right number of arguments
      if (argsBare < paramsBare || argsLength > this.length ||
          argsNamed > paramsNamed) {
        return function() {
          $throw(new _ArgumentMismatchException(
            'Wrong number of arguments to function. Expected ' + paramsBare +
            ' positional arguments and at most ' + paramsNamed +
            ' named arguments, but got ' + argsBare +
            ' positional arguments and ' + argsNamed + ' named arguments.'));
        };
      }

      // First, fill in all of the default values
      var p = new Array(paramsBare);
      if (paramsNamed) {
        p = p.concat(this.$optional.slice(paramsNamed));
      }
      // Fill in positional args
      var a = new Array(argsLength);
      for (var i = 0; i < argsBare; i++) {
        p[i] = a[i] = '$' + i;
      }
      // Then overwrite with supplied values for optional args
      var lastParameterIndex;
      var namesInOrder = true;
      for (var i = 0; i < argsNamed; i++) {
        var name = names[i];
        a[i + argsBare] = name;
        var j = this.$optional.indexOf(name);
        if (j < 0 || j >= paramsNamed) {
          return function() {
            $throw(new _ArgumentMismatchException(
              'Named argument "' + name + '" was not expected by function.' +
              ' Did you forget to mark the function parameter [optional]?'));
          };
        } else if (lastParameterIndex && lastParameterIndex > j) {
          namesInOrder = false;
        }
        p[j + paramsBare] = name;
        lastParameterIndex = j;
      }

      if (this.length == argsLength && namesInOrder) {
        // Fast path #2: named arguments, but they're in order and all supplied.
        return this;
      }

      // Note: using Function instead of 'eval' to get a clean scope.
      // TODO(jmesserly): evaluate the performance of these stubs.
      var f = 'function(' + a.join(',') + '){return $f(' + p.join(',') + ');}';
      return new Function('$f', 'return ' + f + '').call(null, this);
    
}
// ********** Code for top level **************
function _map(itemsAndKeys) {
  var ret = new LinkedHashMapImplementation();
  for (var i = (0);
   i < itemsAndKeys.get$length(); ) {
    ret.$setindex(itemsAndKeys.$index(i++), itemsAndKeys.$index(i++));
  }
  return ret;
}
function _constMap(itemsAndKeys) {
  return new ImmutableMap(itemsAndKeys);
}
//  ********** Library dom **************
// ********** Code for Window **************
// ********** Code for AbstractWorker **************
function $dynamic(name) {
  var f = Object.prototype[name];
  if (f && f.methods) return f.methods;

  var methods = {};
  if (f) methods.Object = f;
  function $dynamicBind() {
    // Find the target method
    var obj = this;
    var tag = obj.$typeNameOf();
    var method = methods[tag];
    if (!method) {
      var table = $dynamicMetadata;
      for (var i = 0; i < table.length; i++) {
        var entry = table[i];
        if (entry.map.hasOwnProperty(tag)) {
          method = methods[entry.tag];
          if (method) break;
        }
      }
    }
    method = method || methods.Object;
    var proto = Object.getPrototypeOf(obj);
    if (!proto.hasOwnProperty(name)) {
      Object.defineProperty(proto, name,
        { value: method, enumerable: false, writable: true, 
        configurable: true });
    }

    return method.apply(this, Array.prototype.slice.call(arguments));
  };
  $dynamicBind.methods = methods;
  Object.defineProperty(Object.prototype, name, { value: $dynamicBind,
      enumerable: false, writable: true, configurable: true});
  return methods;
}
if (typeof $dynamicMetadata == 'undefined') $dynamicMetadata = [];

function $dynamicSetMetadata(inputTable) {
  // TODO: Deal with light isolates.
  var table = [];
  for (var i = 0; i < inputTable.length; i++) {
    var tag = inputTable[i][0];
    var tags = inputTable[i][1];
    var map = {};
    var tagNames = tags.split('|');
    for (var j = 0; j < tagNames.length; j++) {
      map[tagNames[j]] = true;
    }
    table.push({tag: tag, tags: tags, map: map});
  }
  $dynamicMetadata = table;
}
$dynamic("get$dartObjectLocalStorage").AbstractWorker = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AbstractWorker = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").AbstractWorker = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for ArrayBuffer **************
$dynamic("get$dartObjectLocalStorage").ArrayBuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ArrayBuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ArrayBufferView **************
$dynamic("get$dartObjectLocalStorage").ArrayBufferView = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ArrayBufferView = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_Attr **************
$dynamic("get$name").Attr = function() { return this.name; };
$dynamic("set$name").Attr = function(value) { return this.name = value; };
$dynamic("get$value").Attr = function() { return this.value; };
$dynamic("set$value").Attr = function(value) { return this.value = value; };
// ********** Code for AudioBuffer **************
$dynamic("get$length").AudioBuffer = function() { return this.length; };
$dynamic("set$length").AudioBuffer = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").AudioBuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioBuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioBufferSourceNode **************
// ********** Code for AudioChannelMerger **************
// ********** Code for AudioChannelSplitter **************
// ********** Code for AudioContext **************
$dynamic("get$dartObjectLocalStorage").AudioContext = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioContext = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioDestinationNode **************
// ********** Code for AudioGain **************
// ********** Code for AudioGainNode **************
// ********** Code for AudioListener **************
$dynamic("get$dartObjectLocalStorage").AudioListener = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioListener = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioNode **************
$dynamic("get$dartObjectLocalStorage").AudioNode = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioNode = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioPannerNode **************
// ********** Code for AudioParam **************
$dynamic("get$name").AudioParam = function() { return this.name; };
$dynamic("set$name").AudioParam = function(value) { return this.name = value; };
$dynamic("get$value").AudioParam = function() { return this.value; };
$dynamic("set$value").AudioParam = function(value) { return this.value = value; };
$dynamic("get$dartObjectLocalStorage").AudioParam = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioParam = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioProcessingEvent **************
// ********** Code for AudioSourceNode **************
// ********** Code for BarInfo **************
$dynamic("get$dartObjectLocalStorage").BarInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").BarInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for BeforeLoadEvent **************
// ********** Code for BiquadFilterNode **************
// ********** Code for Blob **************
$dynamic("get$dartObjectLocalStorage").Blob = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Blob = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CDATASection **************
// ********** Code for CSSCharsetRule **************
// ********** Code for CSSFontFaceRule **************
$dynamic("get$style").CSSFontFaceRule = function() { return this.style; };
$dynamic("set$style").CSSFontFaceRule = function(value) { return this.style = value; };
// ********** Code for CSSImportRule **************
// ********** Code for CSSMediaRule **************
// ********** Code for CSSPageRule **************
$dynamic("get$style").CSSPageRule = function() { return this.style; };
$dynamic("set$style").CSSPageRule = function(value) { return this.style = value; };
// ********** Code for CSSPrimitiveValue **************
// ********** Code for CSSRule **************
$dynamic("get$dartObjectLocalStorage").CSSRule = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CSSRule = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CSSRuleList **************
$dynamic("get$length").CSSRuleList = function() { return this.length; };
$dynamic("set$length").CSSRuleList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").CSSRuleList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CSSRuleList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").CSSRuleList = function($0) {
  return this.item($0);
};
// ********** Code for CSSStyleDeclaration **************
$dynamic("get$length").CSSStyleDeclaration = function() { return this.length; };
$dynamic("set$length").CSSStyleDeclaration = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").CSSStyleDeclaration = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CSSStyleDeclaration = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("getPropertyValue$1").CSSStyleDeclaration = function($0) {
  return this.getPropertyValue($0);
};
$dynamic("item$1").CSSStyleDeclaration = function($0) {
  return this.item($0);
};
$dynamic("setProperty$3").CSSStyleDeclaration = function($0, $1, $2) {
  return this.setProperty($0, $1, $2);
};
// ********** Code for CSSStyleRule **************
$dynamic("get$style").CSSStyleRule = function() { return this.style; };
$dynamic("set$style").CSSStyleRule = function(value) { return this.style = value; };
// ********** Code for CSSStyleSheet **************
// ********** Code for CSSUnknownRule **************
// ********** Code for CSSValue **************
$dynamic("get$dartObjectLocalStorage").CSSValue = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CSSValue = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CSSValueList **************
$dynamic("get$length").CSSValueList = function() { return this.length; };
$dynamic("set$length").CSSValueList = function(value) { return this.length = value; };
$dynamic("item$1").CSSValueList = function($0) {
  return this.item($0);
};
// ********** Code for CanvasGradient **************
$dynamic("get$dartObjectLocalStorage").CanvasGradient = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CanvasGradient = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CanvasPattern **************
$dynamic("get$dartObjectLocalStorage").CanvasPattern = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CanvasPattern = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CanvasPixelArray **************
$dynamic("get$length").CanvasPixelArray = function() { return this.length; };
$dynamic("set$length").CanvasPixelArray = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").CanvasPixelArray = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CanvasPixelArray = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CanvasRenderingContext **************
$dynamic("get$dartObjectLocalStorage").CanvasRenderingContext = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CanvasRenderingContext = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CanvasRenderingContext2D **************
$dynamic("beginPath$0").CanvasRenderingContext2D = function() {
  return this.beginPath();
};
$dynamic("clip$0").CanvasRenderingContext2D = function() {
  return this.clip();
};
$dynamic("drawImage$3").CanvasRenderingContext2D = function($0, $1, $2) {
  return this.drawImage($0, $1, $2);
};
$dynamic("drawImage$5").CanvasRenderingContext2D = function($0, $1, $2, $3, $4) {
  return this.drawImage($0, $1, $2, $3, $4);
};
$dynamic("drawImage$9").CanvasRenderingContext2D = function($0, $1, $2, $3, $4, $5, $6, $7, $8) {
  return this.drawImage($0, $1, $2, $3, $4, $5, $6, $7, $8);
};
$dynamic("lineTo$2").CanvasRenderingContext2D = function($0, $1) {
  return this.lineTo($0, $1);
};
$dynamic("moveTo$2").CanvasRenderingContext2D = function($0, $1) {
  return this.moveTo($0, $1);
};
$dynamic("quadraticCurveTo$4").CanvasRenderingContext2D = function($0, $1, $2, $3) {
  return this.quadraticCurveTo($0, $1, $2, $3);
};
// ********** Code for CharacterData **************
$dynamic("get$length").CharacterData = function() { return this.length; };
$dynamic("set$length").CharacterData = function(value) { return this.length = value; };
// ********** Code for ClientRect **************
$dynamic("get$height").ClientRect = function() { return this.height; };
$dynamic("set$height").ClientRect = function(value) { return this.height = value; };
$dynamic("get$width").ClientRect = function() { return this.width; };
$dynamic("set$width").ClientRect = function(value) { return this.width = value; };
$dynamic("get$dartObjectLocalStorage").ClientRect = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ClientRect = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ClientRectList **************
$dynamic("get$length").ClientRectList = function() { return this.length; };
$dynamic("set$length").ClientRectList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").ClientRectList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ClientRectList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").ClientRectList = function($0) {
  return this.item($0);
};
// ********** Code for Clipboard **************
$dynamic("get$dartObjectLocalStorage").Clipboard = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Clipboard = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CloseEvent **************
// ********** Code for Comment **************
// ********** Code for CompositionEvent **************
// ********** Code for Console **************
Console = (typeof console == 'undefined' ? {} : console);
Console.get$dartObjectLocalStorage = function() { return this.dartObjectLocalStorage; };
Console.set$dartObjectLocalStorage = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ConvolverNode **************
// ********** Code for Coordinates **************
$dynamic("get$dartObjectLocalStorage").Coordinates = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Coordinates = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Counter **************
$dynamic("get$dartObjectLocalStorage").Counter = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Counter = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Crypto **************
$dynamic("get$dartObjectLocalStorage").Crypto = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Crypto = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CustomEvent **************
// ********** Code for DOMApplicationCache **************
$dynamic("get$dartObjectLocalStorage").DOMApplicationCache = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMApplicationCache = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").DOMApplicationCache = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for DOMException **************
$dynamic("get$name").DOMException = function() { return this.name; };
$dynamic("set$name").DOMException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").DOMException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").DOMException = function() {
  return this.toString();
};
// ********** Code for DOMFileSystem **************
$dynamic("get$name").DOMFileSystem = function() { return this.name; };
$dynamic("set$name").DOMFileSystem = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").DOMFileSystem = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMFileSystem = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMFileSystemSync **************
$dynamic("get$name").DOMFileSystemSync = function() { return this.name; };
$dynamic("set$name").DOMFileSystemSync = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").DOMFileSystemSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMFileSystemSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMFormData **************
$dynamic("get$dartObjectLocalStorage").DOMFormData = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMFormData = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_DOMImplementation **************
$dynamic("get$dartObjectLocalStorage").DOMImplementation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMImplementation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMMimeType **************
$dynamic("get$dartObjectLocalStorage").DOMMimeType = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMMimeType = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMMimeTypeArray **************
$dynamic("get$length").DOMMimeTypeArray = function() { return this.length; };
$dynamic("set$length").DOMMimeTypeArray = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").DOMMimeTypeArray = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMMimeTypeArray = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").DOMMimeTypeArray = function($0) {
  return this.item($0);
};
// ********** Code for DOMParser **************
$dynamic("get$dartObjectLocalStorage").DOMParser = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMParser = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMPlugin **************
$dynamic("get$length").DOMPlugin = function() { return this.length; };
$dynamic("set$length").DOMPlugin = function(value) { return this.length = value; };
$dynamic("get$name").DOMPlugin = function() { return this.name; };
$dynamic("set$name").DOMPlugin = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").DOMPlugin = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMPlugin = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").DOMPlugin = function($0) {
  return this.item($0);
};
// ********** Code for DOMPluginArray **************
$dynamic("get$length").DOMPluginArray = function() { return this.length; };
$dynamic("set$length").DOMPluginArray = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").DOMPluginArray = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMPluginArray = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").DOMPluginArray = function($0) {
  return this.item($0);
};
// ********** Code for DOMSelection **************
$dynamic("get$dartObjectLocalStorage").DOMSelection = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMSelection = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").DOMSelection = function() {
  return this.toString();
};
// ********** Code for DOMSettableTokenList **************
$dynamic("get$value").DOMSettableTokenList = function() { return this.value; };
$dynamic("set$value").DOMSettableTokenList = function(value) { return this.value = value; };
// ********** Code for DOMTokenList **************
$dynamic("get$length").DOMTokenList = function() { return this.length; };
$dynamic("set$length").DOMTokenList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").DOMTokenList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMTokenList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("add$1").DOMTokenList = function($0) {
  return this.add($0);
};
$dynamic("item$1").DOMTokenList = function($0) {
  return this.item($0);
};
$dynamic("toString$0").DOMTokenList = function() {
  return this.toString();
};
// ********** Code for DOMURL **************
$dynamic("get$dartObjectLocalStorage").DOMURL = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMURL = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_DOMWindow **************
$dynamic("get$length").DOMWindow = function() { return this.length; };
$dynamic("set$length").DOMWindow = function(value) { return this.length = value; };
$dynamic("get$name").DOMWindow = function() { return this.name; };
$dynamic("set$name").DOMWindow = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").DOMWindow = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMWindow = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").DOMWindow = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("moveTo$2").DOMWindow = function($0, $1) {
  return this.moveTo($0, $1);
};
$dynamic("setTimeout$2").DOMWindow = function($0, $1) {
  return this.setTimeout($wrap_call$0(to$call$0($0)), $1);
};
// ********** Code for DataTransferItem **************
$dynamic("get$dartObjectLocalStorage").DataTransferItem = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DataTransferItem = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DataTransferItemList **************
$dynamic("get$length").DataTransferItemList = function() { return this.length; };
$dynamic("set$length").DataTransferItemList = function(value) { return this.length = value; };
$dynamic("get$clear").DataTransferItemList = function() {
  return this.clear.bind(this);
}
$dynamic("get$dartObjectLocalStorage").DataTransferItemList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DataTransferItemList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("add$2").DataTransferItemList = function($0, $1) {
  return this.add($0, $1);
};
$dynamic("clear$0").DataTransferItemList = function() {
  return this.clear();
};
$dynamic("item$1").DataTransferItemList = function($0) {
  return this.item($0);
};
// ********** Code for DataView **************
// ********** Code for dom_Database **************
$dynamic("get$dartObjectLocalStorage").Database = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Database = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_DatabaseSync **************
$dynamic("get$dartObjectLocalStorage").DatabaseSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DatabaseSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_DedicatedWorkerContext **************
// ********** Code for DelayNode **************
// ********** Code for DeviceMotionEvent **************
// ********** Code for DeviceOrientationEvent **************
// ********** Code for DirectoryEntry **************
// ********** Code for DirectoryEntrySync **************
// ********** Code for DirectoryReader **************
$dynamic("get$dartObjectLocalStorage").DirectoryReader = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DirectoryReader = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DirectoryReaderSync **************
$dynamic("get$dartObjectLocalStorage").DirectoryReaderSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DirectoryReaderSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Document **************
$dynamic("get$defaultView").Document = function() { return this.defaultView; };
$dynamic("set$defaultView").Document = function(value) { return this.defaultView = value; };
$dynamic("get$documentElement").Document = function() { return this.documentElement; };
$dynamic("set$documentElement").Document = function(value) { return this.documentElement = value; };
$dynamic("querySelector$1").Document = function($0) {
  return this.querySelector($0);
};
$dynamic("querySelectorAll$1").Document = function($0) {
  return this.querySelectorAll($0);
};
// ********** Code for DocumentFragment **************
$dynamic("querySelector$1").DocumentFragment = function($0) {
  return this.querySelector($0);
};
$dynamic("querySelectorAll$1").DocumentFragment = function($0) {
  return this.querySelectorAll($0);
};
// ********** Code for dom_DocumentType **************
$dynamic("get$name").DocumentType = function() { return this.name; };
$dynamic("set$name").DocumentType = function(value) { return this.name = value; };
// ********** Code for DynamicsCompressorNode **************
// ********** Code for Element **************
$dynamic("get$childElementCount").Element = function() { return this.childElementCount; };
$dynamic("set$childElementCount").Element = function(value) { return this.childElementCount = value; };
$dynamic("get$firstElementChild").Element = function() { return this.firstElementChild; };
$dynamic("set$firstElementChild").Element = function(value) { return this.firstElementChild = value; };
$dynamic("get$style").Element = function() { return this.style; };
$dynamic("set$style").Element = function(value) { return this.style = value; };
$dynamic("getAttribute$1").Element = function($0) {
  return this.getAttribute($0);
};
$dynamic("hasAttribute$1").Element = function($0) {
  return this.hasAttribute($0);
};
$dynamic("querySelector$1").Element = function($0) {
  return this.querySelector($0);
};
$dynamic("querySelectorAll$1").Element = function($0) {
  return this.querySelectorAll($0);
};
$dynamic("removeAttribute$1").Element = function($0) {
  return this.removeAttribute($0);
};
$dynamic("setAttribute$2").Element = function($0, $1) {
  return this.setAttribute($0, $1);
};
// ********** Code for ElementTimeControl **************
$dynamic("get$dartObjectLocalStorage").ElementTimeControl = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ElementTimeControl = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_ElementTraversal **************
$dynamic("get$childElementCount").ElementTraversal = function() { return this.childElementCount; };
$dynamic("set$childElementCount").ElementTraversal = function(value) { return this.childElementCount = value; };
$dynamic("get$firstElementChild").ElementTraversal = function() { return this.firstElementChild; };
$dynamic("set$firstElementChild").ElementTraversal = function(value) { return this.firstElementChild = value; };
$dynamic("get$dartObjectLocalStorage").ElementTraversal = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ElementTraversal = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Entity **************
// ********** Code for EntityReference **************
// ********** Code for Entry **************
$dynamic("get$name").Entry = function() { return this.name; };
$dynamic("set$name").Entry = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").Entry = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Entry = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("moveTo$2").Entry = function($0, $1) {
  return this.moveTo($0, $1, $wrap_call$1(to$call$1(null)), $wrap_call$1(to$call$1(null)));
};
// ********** Code for EntryArray **************
$dynamic("get$length").EntryArray = function() { return this.length; };
$dynamic("set$length").EntryArray = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").EntryArray = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EntryArray = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").EntryArray = function($0) {
  return this.item($0);
};
// ********** Code for EntryArraySync **************
$dynamic("get$length").EntryArraySync = function() { return this.length; };
$dynamic("set$length").EntryArraySync = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").EntryArraySync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EntryArraySync = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").EntryArraySync = function($0) {
  return this.item($0);
};
// ********** Code for EntrySync **************
$dynamic("get$name").EntrySync = function() { return this.name; };
$dynamic("set$name").EntrySync = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").EntrySync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EntrySync = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("moveTo$2").EntrySync = function($0, $1) {
  return this.moveTo($0, $1);
};
$dynamic("remove$0").EntrySync = function() {
  return this.remove();
};
// ********** Code for ErrorEvent **************
// ********** Code for Event **************
$dynamic("get$dartObjectLocalStorage").Event = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Event = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for EventException **************
$dynamic("get$name").EventException = function() { return this.name; };
$dynamic("set$name").EventException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").EventException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EventException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").EventException = function() {
  return this.toString();
};
// ********** Code for EventSource **************
$dynamic("get$dartObjectLocalStorage").EventSource = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EventSource = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").EventSource = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for EventTarget **************
$dynamic("get$dartObjectLocalStorage").EventTarget = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EventTarget = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").EventTarget = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for File **************
$dynamic("get$name").File = function() { return this.name; };
$dynamic("set$name").File = function(value) { return this.name = value; };
// ********** Code for FileEntry **************
// ********** Code for FileEntrySync **************
// ********** Code for FileError **************
$dynamic("get$dartObjectLocalStorage").FileError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for FileException **************
$dynamic("get$name").FileException = function() { return this.name; };
$dynamic("set$name").FileException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").FileException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").FileException = function() {
  return this.toString();
};
// ********** Code for FileList **************
$dynamic("get$length").FileList = function() { return this.length; };
$dynamic("set$length").FileList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").FileList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").FileList = function($0) {
  return this.item($0);
};
// ********** Code for FileReader **************
$dynamic("get$dartObjectLocalStorage").FileReader = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileReader = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").FileReader = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for FileReaderSync **************
$dynamic("get$dartObjectLocalStorage").FileReaderSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileReaderSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for FileWriter **************
$dynamic("get$length").FileWriter = function() { return this.length; };
$dynamic("set$length").FileWriter = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").FileWriter = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileWriter = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for FileWriterSync **************
$dynamic("get$length").FileWriterSync = function() { return this.length; };
$dynamic("set$length").FileWriterSync = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").FileWriterSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileWriterSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Float32Array **************
$dynamic("get$length").Float32Array = function() { return this.length; };
$dynamic("set$length").Float32Array = function(value) { return this.length = value; };
// ********** Code for Float64Array **************
$dynamic("get$length").Float64Array = function() { return this.length; };
$dynamic("set$length").Float64Array = function(value) { return this.length = value; };
// ********** Code for Geolocation **************
$dynamic("get$dartObjectLocalStorage").Geolocation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Geolocation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Geoposition **************
$dynamic("get$dartObjectLocalStorage").Geoposition = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Geoposition = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for HTMLAllCollection **************
$dynamic("get$length").HTMLAllCollection = function() { return this.length; };
$dynamic("set$length").HTMLAllCollection = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").HTMLAllCollection = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").HTMLAllCollection = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").HTMLAllCollection = function($0) {
  return this.item($0);
};
// ********** Code for dom_HTMLAnchorElement **************
$dynamic("get$name").HTMLAnchorElement = function() { return this.name; };
$dynamic("set$name").HTMLAnchorElement = function(value) { return this.name = value; };
$dynamic("toString$0").HTMLAnchorElement = function() {
  return this.toString();
};
// ********** Code for dom_HTMLAppletElement **************
$dynamic("get$height").HTMLAppletElement = function() { return this.height; };
$dynamic("set$height").HTMLAppletElement = function(value) { return this.height = value; };
$dynamic("get$name").HTMLAppletElement = function() { return this.name; };
$dynamic("set$name").HTMLAppletElement = function(value) { return this.name = value; };
$dynamic("get$width").HTMLAppletElement = function() { return this.width; };
$dynamic("set$width").HTMLAppletElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLAreaElement **************
// ********** Code for dom_HTMLAudioElement **************
// ********** Code for dom_HTMLBRElement **************
$dynamic("get$clear").HTMLBRElement = function() { return this.clear; };
$dynamic("set$clear").HTMLBRElement = function(value) { return this.clear = value; };
$dynamic("clear$0").HTMLBRElement = function() {
  return this.clear.call$0();
};
$dynamic("clear$1").HTMLBRElement = function($0) {
  return this.clear.call$1($0);
};
// ********** Code for dom_HTMLBaseElement **************
// ********** Code for dom_HTMLBaseFontElement **************
// ********** Code for dom_HTMLBodyElement **************
// ********** Code for dom_HTMLButtonElement **************
$dynamic("get$name").HTMLButtonElement = function() { return this.name; };
$dynamic("set$name").HTMLButtonElement = function(value) { return this.name = value; };
$dynamic("get$value").HTMLButtonElement = function() { return this.value; };
$dynamic("set$value").HTMLButtonElement = function(value) { return this.value = value; };
$dynamic("get$click").HTMLButtonElement = function() {
  return this.click.bind(this);
}
$dynamic("click$0").HTMLButtonElement = function() {
  return this.click();
};
// ********** Code for dom_HTMLCanvasElement **************
$dynamic("get$height").HTMLCanvasElement = function() { return this.height; };
$dynamic("set$height").HTMLCanvasElement = function(value) { return this.height = value; };
$dynamic("get$width").HTMLCanvasElement = function() { return this.width; };
$dynamic("set$width").HTMLCanvasElement = function(value) { return this.width = value; };
$dynamic("getContext$1").HTMLCanvasElement = function($0) {
  return this.getContext($0);
};
// ********** Code for dom_HTMLCollection **************
$dynamic("get$length").HTMLCollection = function() { return this.length; };
$dynamic("set$length").HTMLCollection = function(value) { return this.length = value; };
$dynamic("$setindex").HTMLCollection = function(index, value) {
  $throw(new UnsupportedOperationException("Cannot assign element of immutable List."));
}
$dynamic("get$dartObjectLocalStorage").HTMLCollection = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").HTMLCollection = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").HTMLCollection = function($0) {
  if (Object.getPrototypeOf(this).hasOwnProperty("item$1")) {
    return this.item($0);
  }
  return Object.prototype.item$1.call(this, $0);
};
// ********** Code for dom_HTMLDListElement **************
// ********** Code for dom_HTMLDataListElement **************
// ********** Code for dom_HTMLDetailsElement **************
// ********** Code for dom_HTMLDirectoryElement **************
// ********** Code for dom_HTMLDivElement **************
// ********** Code for dom_HTMLDocument **************
$dynamic("get$clear").HTMLDocument = function() {
  return this.clear.bind(this);
}
$dynamic("clear$0").HTMLDocument = function() {
  return this.clear();
};
// ********** Code for dom_HTMLElement **************
$dynamic("get$children").HTMLElement = function() { return this.children; };
$dynamic("set$children").HTMLElement = function(value) { return this.children = value; };
$dynamic("get$className").HTMLElement = function() { return this.className; };
$dynamic("set$className").HTMLElement = function(value) { return this.className = value; };
$dynamic("get$hidden").HTMLElement = function() { return this.hidden; };
$dynamic("set$hidden").HTMLElement = function(value) { return this.hidden = value; };
$dynamic("get$innerHTML").HTMLElement = function() { return this.innerHTML; };
$dynamic("set$innerHTML").HTMLElement = function(value) { return this.innerHTML = value; };
// ********** Code for dom_HTMLEmbedElement **************
$dynamic("get$height").HTMLEmbedElement = function() { return this.height; };
$dynamic("set$height").HTMLEmbedElement = function(value) { return this.height = value; };
$dynamic("get$name").HTMLEmbedElement = function() { return this.name; };
$dynamic("set$name").HTMLEmbedElement = function(value) { return this.name = value; };
$dynamic("get$src").HTMLEmbedElement = function() { return this.src; };
$dynamic("set$src").HTMLEmbedElement = function(value) { return this.src = value; };
$dynamic("get$width").HTMLEmbedElement = function() { return this.width; };
$dynamic("set$width").HTMLEmbedElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLFieldSetElement **************
// ********** Code for dom_HTMLFontElement **************
// ********** Code for dom_HTMLFormElement **************
$dynamic("get$elements").HTMLFormElement = function() { return this.elements; };
$dynamic("set$elements").HTMLFormElement = function(value) { return this.elements = value; };
$dynamic("get$length").HTMLFormElement = function() { return this.length; };
$dynamic("set$length").HTMLFormElement = function(value) { return this.length = value; };
$dynamic("get$name").HTMLFormElement = function() { return this.name; };
$dynamic("set$name").HTMLFormElement = function(value) { return this.name = value; };
// ********** Code for dom_HTMLFrameElement **************
$dynamic("get$height").HTMLFrameElement = function() { return this.height; };
$dynamic("set$height").HTMLFrameElement = function(value) { return this.height = value; };
$dynamic("get$name").HTMLFrameElement = function() { return this.name; };
$dynamic("set$name").HTMLFrameElement = function(value) { return this.name = value; };
$dynamic("get$src").HTMLFrameElement = function() { return this.src; };
$dynamic("set$src").HTMLFrameElement = function(value) { return this.src = value; };
$dynamic("get$width").HTMLFrameElement = function() { return this.width; };
$dynamic("set$width").HTMLFrameElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLFrameSetElement **************
// ********** Code for dom_HTMLHRElement **************
$dynamic("get$width").HTMLHRElement = function() { return this.width; };
$dynamic("set$width").HTMLHRElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLHeadElement **************
// ********** Code for dom_HTMLHeadingElement **************
// ********** Code for dom_HTMLHtmlElement **************
// ********** Code for dom_HTMLIFrameElement **************
$dynamic("get$height").HTMLIFrameElement = function() { return this.height; };
$dynamic("set$height").HTMLIFrameElement = function(value) { return this.height = value; };
$dynamic("get$name").HTMLIFrameElement = function() { return this.name; };
$dynamic("set$name").HTMLIFrameElement = function(value) { return this.name = value; };
$dynamic("get$src").HTMLIFrameElement = function() { return this.src; };
$dynamic("set$src").HTMLIFrameElement = function(value) { return this.src = value; };
$dynamic("get$width").HTMLIFrameElement = function() { return this.width; };
$dynamic("set$width").HTMLIFrameElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLImageElement **************
$dynamic("get$height").HTMLImageElement = function() { return this.height; };
$dynamic("set$height").HTMLImageElement = function(value) { return this.height = value; };
$dynamic("get$name").HTMLImageElement = function() { return this.name; };
$dynamic("set$name").HTMLImageElement = function(value) { return this.name = value; };
$dynamic("get$naturalHeight").HTMLImageElement = function() { return this.naturalHeight; };
$dynamic("set$naturalHeight").HTMLImageElement = function(value) { return this.naturalHeight = value; };
$dynamic("get$naturalWidth").HTMLImageElement = function() { return this.naturalWidth; };
$dynamic("set$naturalWidth").HTMLImageElement = function(value) { return this.naturalWidth = value; };
$dynamic("get$src").HTMLImageElement = function() { return this.src; };
$dynamic("set$src").HTMLImageElement = function(value) { return this.src = value; };
$dynamic("get$width").HTMLImageElement = function() { return this.width; };
$dynamic("set$width").HTMLImageElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLInputElement **************
$dynamic("get$name").HTMLInputElement = function() { return this.name; };
$dynamic("set$name").HTMLInputElement = function(value) { return this.name = value; };
$dynamic("get$src").HTMLInputElement = function() { return this.src; };
$dynamic("set$src").HTMLInputElement = function(value) { return this.src = value; };
$dynamic("get$value").HTMLInputElement = function() { return this.value; };
$dynamic("set$value").HTMLInputElement = function(value) { return this.value = value; };
$dynamic("get$valueAsNumber").HTMLInputElement = function() { return this.valueAsNumber; };
$dynamic("set$valueAsNumber").HTMLInputElement = function(value) { return this.valueAsNumber = value; };
$dynamic("get$click").HTMLInputElement = function() {
  return this.click.bind(this);
}
$dynamic("click$0").HTMLInputElement = function() {
  return this.click();
};
// ********** Code for dom_HTMLIsIndexElement **************
// ********** Code for dom_HTMLKeygenElement **************
$dynamic("get$name").HTMLKeygenElement = function() { return this.name; };
$dynamic("set$name").HTMLKeygenElement = function(value) { return this.name = value; };
// ********** Code for dom_HTMLLIElement **************
$dynamic("get$value").HTMLLIElement = function() { return this.value; };
$dynamic("set$value").HTMLLIElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLLabelElement **************
// ********** Code for dom_HTMLLegendElement **************
// ********** Code for dom_HTMLLinkElement **************
// ********** Code for dom_HTMLMapElement **************
$dynamic("get$name").HTMLMapElement = function() { return this.name; };
$dynamic("set$name").HTMLMapElement = function(value) { return this.name = value; };
// ********** Code for dom_HTMLMarqueeElement **************
$dynamic("get$height").HTMLMarqueeElement = function() { return this.height; };
$dynamic("set$height").HTMLMarqueeElement = function(value) { return this.height = value; };
$dynamic("get$width").HTMLMarqueeElement = function() { return this.width; };
$dynamic("set$width").HTMLMarqueeElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLMediaElement **************
$dynamic("get$src").HTMLMediaElement = function() { return this.src; };
$dynamic("set$src").HTMLMediaElement = function(value) { return this.src = value; };
// ********** Code for dom_HTMLMenuElement **************
// ********** Code for dom_HTMLMetaElement **************
$dynamic("get$name").HTMLMetaElement = function() { return this.name; };
$dynamic("set$name").HTMLMetaElement = function(value) { return this.name = value; };
// ********** Code for dom_HTMLMeterElement **************
$dynamic("get$value").HTMLMeterElement = function() { return this.value; };
$dynamic("set$value").HTMLMeterElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLModElement **************
// ********** Code for dom_HTMLOListElement **************
// ********** Code for dom_HTMLObjectElement **************
$dynamic("get$height").HTMLObjectElement = function() { return this.height; };
$dynamic("set$height").HTMLObjectElement = function(value) { return this.height = value; };
$dynamic("get$name").HTMLObjectElement = function() { return this.name; };
$dynamic("set$name").HTMLObjectElement = function(value) { return this.name = value; };
$dynamic("get$width").HTMLObjectElement = function() { return this.width; };
$dynamic("set$width").HTMLObjectElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLOptGroupElement **************
// ********** Code for dom_HTMLOptionElement **************
$dynamic("get$value").HTMLOptionElement = function() { return this.value; };
$dynamic("set$value").HTMLOptionElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLOptionsCollection **************
$dynamic("get$length").HTMLOptionsCollection = function() { return this.length; };
$dynamic("set$length").HTMLOptionsCollection = function(value) { return this.length = value; };
// ********** Code for dom_HTMLOutputElement **************
$dynamic("get$name").HTMLOutputElement = function() { return this.name; };
$dynamic("set$name").HTMLOutputElement = function(value) { return this.name = value; };
$dynamic("get$value").HTMLOutputElement = function() { return this.value; };
$dynamic("set$value").HTMLOutputElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLParagraphElement **************
// ********** Code for dom_HTMLParamElement **************
$dynamic("get$name").HTMLParamElement = function() { return this.name; };
$dynamic("set$name").HTMLParamElement = function(value) { return this.name = value; };
$dynamic("get$value").HTMLParamElement = function() { return this.value; };
$dynamic("set$value").HTMLParamElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLPreElement **************
$dynamic("get$width").HTMLPreElement = function() { return this.width; };
$dynamic("set$width").HTMLPreElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLProgressElement **************
$dynamic("get$value").HTMLProgressElement = function() { return this.value; };
$dynamic("set$value").HTMLProgressElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLPropertiesCollection **************
$dynamic("get$length").HTMLPropertiesCollection = function() { return this.length; };
$dynamic("set$length").HTMLPropertiesCollection = function(value) { return this.length = value; };
$dynamic("item$1").HTMLPropertiesCollection = function($0) {
  return this.item($0);
};
// ********** Code for dom_HTMLQuoteElement **************
// ********** Code for dom_HTMLScriptElement **************
$dynamic("get$src").HTMLScriptElement = function() { return this.src; };
$dynamic("set$src").HTMLScriptElement = function(value) { return this.src = value; };
// ********** Code for dom_HTMLSelectElement **************
$dynamic("get$length").HTMLSelectElement = function() { return this.length; };
$dynamic("set$length").HTMLSelectElement = function(value) { return this.length = value; };
$dynamic("get$name").HTMLSelectElement = function() { return this.name; };
$dynamic("set$name").HTMLSelectElement = function(value) { return this.name = value; };
$dynamic("get$value").HTMLSelectElement = function() { return this.value; };
$dynamic("set$value").HTMLSelectElement = function(value) { return this.value = value; };
$dynamic("add$2").HTMLSelectElement = function($0, $1) {
  return this.add($0, $1);
};
$dynamic("item$1").HTMLSelectElement = function($0) {
  return this.item($0);
};
// ********** Code for dom_HTMLSourceElement **************
$dynamic("get$src").HTMLSourceElement = function() { return this.src; };
$dynamic("set$src").HTMLSourceElement = function(value) { return this.src = value; };
// ********** Code for dom_HTMLSpanElement **************
// ********** Code for dom_HTMLStyleElement **************
// ********** Code for dom_HTMLTableCaptionElement **************
// ********** Code for dom_HTMLTableCellElement **************
$dynamic("get$height").HTMLTableCellElement = function() { return this.height; };
$dynamic("set$height").HTMLTableCellElement = function(value) { return this.height = value; };
$dynamic("get$width").HTMLTableCellElement = function() { return this.width; };
$dynamic("set$width").HTMLTableCellElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLTableColElement **************
$dynamic("get$width").HTMLTableColElement = function() { return this.width; };
$dynamic("set$width").HTMLTableColElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLTableElement **************
$dynamic("get$width").HTMLTableElement = function() { return this.width; };
$dynamic("set$width").HTMLTableElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLTableRowElement **************
// ********** Code for dom_HTMLTableSectionElement **************
// ********** Code for dom_HTMLTextAreaElement **************
$dynamic("get$name").HTMLTextAreaElement = function() { return this.name; };
$dynamic("set$name").HTMLTextAreaElement = function(value) { return this.name = value; };
$dynamic("get$value").HTMLTextAreaElement = function() { return this.value; };
$dynamic("set$value").HTMLTextAreaElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLTitleElement **************
// ********** Code for dom_HTMLTrackElement **************
$dynamic("get$src").HTMLTrackElement = function() { return this.src; };
$dynamic("set$src").HTMLTrackElement = function(value) { return this.src = value; };
// ********** Code for dom_HTMLUListElement **************
// ********** Code for dom_HTMLUnknownElement **************
// ********** Code for dom_HTMLVideoElement **************
$dynamic("get$height").HTMLVideoElement = function() { return this.height; };
$dynamic("set$height").HTMLVideoElement = function(value) { return this.height = value; };
$dynamic("get$width").HTMLVideoElement = function() { return this.width; };
$dynamic("set$width").HTMLVideoElement = function(value) { return this.width = value; };
// ********** Code for HashChangeEvent **************
// ********** Code for HighPass2FilterNode **************
// ********** Code for History **************
$dynamic("get$length").History = function() { return this.length; };
$dynamic("set$length").History = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").History = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").History = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBAny **************
$dynamic("get$dartObjectLocalStorage").IDBAny = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBAny = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBCursor **************
$dynamic("get$dartObjectLocalStorage").IDBCursor = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBCursor = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBCursorWithValue **************
$dynamic("get$value").IDBCursorWithValue = function() { return this.value; };
$dynamic("set$value").IDBCursorWithValue = function(value) { return this.value = value; };
// ********** Code for IDBDatabase **************
$dynamic("get$name").IDBDatabase = function() { return this.name; };
$dynamic("set$name").IDBDatabase = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").IDBDatabase = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBDatabase = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").IDBDatabase = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for IDBDatabaseError **************
$dynamic("get$dartObjectLocalStorage").IDBDatabaseError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBDatabaseError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBDatabaseException **************
$dynamic("get$name").IDBDatabaseException = function() { return this.name; };
$dynamic("set$name").IDBDatabaseException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").IDBDatabaseException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBDatabaseException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").IDBDatabaseException = function() {
  return this.toString();
};
// ********** Code for IDBFactory **************
$dynamic("get$dartObjectLocalStorage").IDBFactory = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBFactory = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBIndex **************
$dynamic("get$name").IDBIndex = function() { return this.name; };
$dynamic("set$name").IDBIndex = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").IDBIndex = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBIndex = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBKey **************
$dynamic("get$dartObjectLocalStorage").IDBKey = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBKey = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBKeyRange **************
$dynamic("get$dartObjectLocalStorage").IDBKeyRange = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBKeyRange = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBObjectStore **************
$dynamic("get$name").IDBObjectStore = function() { return this.name; };
$dynamic("set$name").IDBObjectStore = function(value) { return this.name = value; };
$dynamic("get$clear").IDBObjectStore = function() {
  return this.clear.bind(this);
}
$dynamic("get$dartObjectLocalStorage").IDBObjectStore = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBObjectStore = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("add$1").IDBObjectStore = function($0) {
  return this.add($0);
};
$dynamic("add$2").IDBObjectStore = function($0, $1) {
  return this.add($0, $1);
};
$dynamic("clear$0").IDBObjectStore = function() {
  return this.clear();
};
// ********** Code for IDBRequest **************
$dynamic("get$dartObjectLocalStorage").IDBRequest = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBRequest = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").IDBRequest = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for IDBTransaction **************
$dynamic("get$dartObjectLocalStorage").IDBTransaction = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBTransaction = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").IDBTransaction = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for IDBVersionChangeEvent **************
// ********** Code for IDBVersionChangeRequest **************
// ********** Code for ImageData **************
$dynamic("get$height").ImageData = function() { return this.height; };
$dynamic("set$height").ImageData = function(value) { return this.height = value; };
$dynamic("get$width").ImageData = function() { return this.width; };
$dynamic("set$width").ImageData = function(value) { return this.width = value; };
$dynamic("get$dartObjectLocalStorage").ImageData = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ImageData = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_InjectedScriptHost **************
$dynamic("get$dartObjectLocalStorage").InjectedScriptHost = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").InjectedScriptHost = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_InspectorFrontendHost **************
$dynamic("get$dartObjectLocalStorage").InspectorFrontendHost = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").InspectorFrontendHost = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Int16Array **************
$dynamic("get$length").Int16Array = function() { return this.length; };
$dynamic("set$length").Int16Array = function(value) { return this.length = value; };
// ********** Code for Int32Array **************
$dynamic("get$length").Int32Array = function() { return this.length; };
$dynamic("set$length").Int32Array = function(value) { return this.length = value; };
// ********** Code for Int8Array **************
$dynamic("get$length").Int8Array = function() { return this.length; };
$dynamic("set$length").Int8Array = function(value) { return this.length = value; };
// ********** Code for JavaScriptAudioNode **************
// ********** Code for dom_JavaScriptCallFrame **************
$dynamic("get$dartObjectLocalStorage").JavaScriptCallFrame = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").JavaScriptCallFrame = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for KeyboardEvent **************
// ********** Code for Location **************
$dynamic("get$dartObjectLocalStorage").Location = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Location = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").Location = function() {
  return this.toString();
};
// ********** Code for LowPass2FilterNode **************
// ********** Code for dom_MediaController **************
$dynamic("get$dartObjectLocalStorage").MediaController = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaController = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").MediaController = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for MediaElementAudioSourceNode **************
// ********** Code for MediaError **************
$dynamic("get$dartObjectLocalStorage").MediaError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MediaList **************
$dynamic("get$length").MediaList = function() { return this.length; };
$dynamic("set$length").MediaList = function(value) { return this.length = value; };
$dynamic("$setindex").MediaList = function(index, value) {
  $throw(new UnsupportedOperationException("Cannot assign element of immutable List."));
}
$dynamic("get$dartObjectLocalStorage").MediaList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").MediaList = function($0) {
  return this.item($0);
};
// ********** Code for MediaQueryList **************
$dynamic("get$dartObjectLocalStorage").MediaQueryList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaQueryList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MediaQueryListListener **************
$dynamic("get$dartObjectLocalStorage").MediaQueryListListener = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaQueryListListener = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_MemoryInfo **************
$dynamic("get$dartObjectLocalStorage").MemoryInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MemoryInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MessageChannel **************
$dynamic("get$dartObjectLocalStorage").MessageChannel = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MessageChannel = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MessageEvent **************
// ********** Code for MessagePort **************
$dynamic("get$dartObjectLocalStorage").MessagePort = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MessagePort = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").MessagePort = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for Metadata **************
$dynamic("get$dartObjectLocalStorage").Metadata = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Metadata = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MouseEvent **************
// ********** Code for MutationCallback **************
$dynamic("get$dartObjectLocalStorage").MutationCallback = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MutationCallback = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MutationEvent **************
// ********** Code for MutationRecord **************
$dynamic("get$dartObjectLocalStorage").MutationRecord = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MutationRecord = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_NamedNodeMap **************
$dynamic("get$length").NamedNodeMap = function() { return this.length; };
$dynamic("set$length").NamedNodeMap = function(value) { return this.length = value; };
$dynamic("$setindex").NamedNodeMap = function(index, value) {
  $throw(new UnsupportedOperationException("Cannot assign element of immutable List."));
}
$dynamic("get$dartObjectLocalStorage").NamedNodeMap = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NamedNodeMap = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").NamedNodeMap = function($0) {
  return this.item($0);
};
// ********** Code for Navigator **************
$dynamic("get$dartObjectLocalStorage").Navigator = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Navigator = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Node **************
$dynamic("get$attributes").Node = function() { return this.attributes; };
$dynamic("set$attributes").Node = function(value) { return this.attributes = value; };
$dynamic("get$childNodes").Node = function() { return this.childNodes; };
$dynamic("set$childNodes").Node = function(value) { return this.childNodes = value; };
$dynamic("get$firstChild").Node = function() { return this.firstChild; };
$dynamic("set$firstChild").Node = function(value) { return this.firstChild = value; };
$dynamic("get$parentNode").Node = function() { return this.parentNode; };
$dynamic("set$parentNode").Node = function(value) { return this.parentNode = value; };
$dynamic("get$textContent").Node = function() { return this.textContent; };
$dynamic("set$textContent").Node = function(value) { return this.textContent = value; };
$dynamic("get$dartObjectLocalStorage").Node = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Node = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").Node = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("appendChild$1").Node = function($0) {
  return this.appendChild($0);
};
$dynamic("removeChild$1").Node = function($0) {
  return this.removeChild($0);
};
$dynamic("replaceChild$2").Node = function($0, $1) {
  return this.replaceChild($0, $1);
};
// ********** Code for dom_NodeFilter **************
$dynamic("get$dartObjectLocalStorage").NodeFilter = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NodeFilter = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_NodeIterator **************
$dynamic("get$dartObjectLocalStorage").NodeIterator = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NodeIterator = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for NodeList **************
$dynamic("get$length").NodeList = function() { return this.length; };
$dynamic("set$length").NodeList = function(value) { return this.length = value; };
$dynamic("$setindex").NodeList = function(index, value) {
  $throw(new UnsupportedOperationException("Cannot assign element of immutable List."));
}
$dynamic("get$dartObjectLocalStorage").NodeList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NodeList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").NodeList = function($0) {
  return this.item($0);
};
// ********** Code for dom_NodeSelector **************
$dynamic("get$dartObjectLocalStorage").NodeSelector = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NodeSelector = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("querySelector$1").NodeSelector = function($0) {
  return this.querySelector($0);
};
$dynamic("querySelectorAll$1").NodeSelector = function($0) {
  return this.querySelectorAll($0);
};
// ********** Code for Notation **************
// ********** Code for Notification **************
$dynamic("get$dartObjectLocalStorage").Notification = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Notification = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").Notification = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for NotificationCenter **************
$dynamic("get$dartObjectLocalStorage").NotificationCenter = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NotificationCenter = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for OESStandardDerivatives **************
$dynamic("get$dartObjectLocalStorage").OESStandardDerivatives = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").OESStandardDerivatives = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for OESTextureFloat **************
$dynamic("get$dartObjectLocalStorage").OESTextureFloat = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").OESTextureFloat = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for OESVertexArrayObject **************
$dynamic("get$dartObjectLocalStorage").OESVertexArrayObject = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").OESVertexArrayObject = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for OfflineAudioCompletionEvent **************
// ********** Code for OperationNotAllowedException **************
$dynamic("get$name").OperationNotAllowedException = function() { return this.name; };
$dynamic("set$name").OperationNotAllowedException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").OperationNotAllowedException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").OperationNotAllowedException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").OperationNotAllowedException = function() {
  return this.toString();
};
// ********** Code for OverflowEvent **************
// ********** Code for PageTransitionEvent **************
// ********** Code for dom_Performance **************
$dynamic("get$dartObjectLocalStorage").Performance = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Performance = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_PerformanceNavigation **************
$dynamic("get$dartObjectLocalStorage").PerformanceNavigation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").PerformanceNavigation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_PerformanceTiming **************
$dynamic("get$dartObjectLocalStorage").PerformanceTiming = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").PerformanceTiming = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_PointerLock **************
$dynamic("get$dartObjectLocalStorage").PointerLock = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").PointerLock = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for PopStateEvent **************
// ********** Code for PositionError **************
$dynamic("get$dartObjectLocalStorage").PositionError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").PositionError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ProcessingInstruction **************
// ********** Code for ProgressEvent **************
// ********** Code for RGBColor **************
$dynamic("get$dartObjectLocalStorage").RGBColor = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").RGBColor = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Range **************
$dynamic("get$dartObjectLocalStorage").Range = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Range = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").Range = function() {
  return this.toString();
};
// ********** Code for RangeException **************
$dynamic("get$name").RangeException = function() { return this.name; };
$dynamic("set$name").RangeException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").RangeException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").RangeException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").RangeException = function() {
  return this.toString();
};
// ********** Code for RealtimeAnalyserNode **************
// ********** Code for Rect **************
$dynamic("get$dartObjectLocalStorage").Rect = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Rect = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLError **************
$dynamic("get$dartObjectLocalStorage").SQLError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLException **************
$dynamic("get$dartObjectLocalStorage").SQLException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLException = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLResultSet **************
$dynamic("get$dartObjectLocalStorage").SQLResultSet = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLResultSet = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLResultSetRowList **************
$dynamic("get$length").SQLResultSetRowList = function() { return this.length; };
$dynamic("set$length").SQLResultSetRowList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").SQLResultSetRowList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLResultSetRowList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").SQLResultSetRowList = function($0) {
  return this.item($0);
};
// ********** Code for dom_SQLTransaction **************
$dynamic("get$dartObjectLocalStorage").SQLTransaction = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLTransaction = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLTransactionSync **************
$dynamic("get$dartObjectLocalStorage").SQLTransactionSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLTransactionSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAElement **************
$dynamic("get$className").SVGAElement = function() { return this.className; };
$dynamic("set$className").SVGAElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGAElement = function() { return this.style; };
$dynamic("set$style").SVGAElement = function(value) { return this.style = value; };
// ********** Code for SVGAltGlyphDefElement **************
// ********** Code for SVGAltGlyphElement **************
// ********** Code for SVGAltGlyphItemElement **************
// ********** Code for SVGAngle **************
$dynamic("get$value").SVGAngle = function() { return this.value; };
$dynamic("set$value").SVGAngle = function(value) { return this.value = value; };
$dynamic("get$dartObjectLocalStorage").SVGAngle = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAngle = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimateColorElement **************
// ********** Code for SVGAnimateElement **************
// ********** Code for SVGAnimateMotionElement **************
// ********** Code for SVGAnimateTransformElement **************
// ********** Code for SVGAnimatedAngle **************
$dynamic("get$baseVal").SVGAnimatedAngle = function() { return this.baseVal; };
$dynamic("set$baseVal").SVGAnimatedAngle = function(value) { return this.baseVal = value; };
$dynamic("get$dartObjectLocalStorage").SVGAnimatedAngle = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedAngle = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedBoolean **************
$dynamic("get$baseVal").SVGAnimatedBoolean = function() { return this.baseVal; };
$dynamic("set$baseVal").SVGAnimatedBoolean = function(value) { return this.baseVal = value; };
$dynamic("get$dartObjectLocalStorage").SVGAnimatedBoolean = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedBoolean = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedEnumeration **************
$dynamic("get$baseVal").SVGAnimatedEnumeration = function() { return this.baseVal; };
$dynamic("set$baseVal").SVGAnimatedEnumeration = function(value) { return this.baseVal = value; };
$dynamic("get$dartObjectLocalStorage").SVGAnimatedEnumeration = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedEnumeration = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedInteger **************
$dynamic("get$baseVal").SVGAnimatedInteger = function() { return this.baseVal; };
$dynamic("set$baseVal").SVGAnimatedInteger = function(value) { return this.baseVal = value; };
$dynamic("get$dartObjectLocalStorage").SVGAnimatedInteger = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedInteger = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedLength **************
$dynamic("get$baseVal").SVGAnimatedLength = function() { return this.baseVal; };
$dynamic("set$baseVal").SVGAnimatedLength = function(value) { return this.baseVal = value; };
$dynamic("get$dartObjectLocalStorage").SVGAnimatedLength = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedLength = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedLengthList **************
$dynamic("get$baseVal").SVGAnimatedLengthList = function() { return this.baseVal; };
$dynamic("set$baseVal").SVGAnimatedLengthList = function(value) { return this.baseVal = value; };
$dynamic("get$dartObjectLocalStorage").SVGAnimatedLengthList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedLengthList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedNumber **************
$dynamic("get$baseVal").SVGAnimatedNumber = function() { return this.baseVal; };
$dynamic("set$baseVal").SVGAnimatedNumber = function(value) { return this.baseVal = value; };
$dynamic("get$dartObjectLocalStorage").SVGAnimatedNumber = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedNumber = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedNumberList **************
$dynamic("get$baseVal").SVGAnimatedNumberList = function() { return this.baseVal; };
$dynamic("set$baseVal").SVGAnimatedNumberList = function(value) { return this.baseVal = value; };
$dynamic("get$dartObjectLocalStorage").SVGAnimatedNumberList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedNumberList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedPreserveAspectRatio **************
$dynamic("get$baseVal").SVGAnimatedPreserveAspectRatio = function() { return this.baseVal; };
$dynamic("set$baseVal").SVGAnimatedPreserveAspectRatio = function(value) { return this.baseVal = value; };
$dynamic("get$dartObjectLocalStorage").SVGAnimatedPreserveAspectRatio = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedPreserveAspectRatio = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedRect **************
$dynamic("get$baseVal").SVGAnimatedRect = function() { return this.baseVal; };
$dynamic("set$baseVal").SVGAnimatedRect = function(value) { return this.baseVal = value; };
$dynamic("get$dartObjectLocalStorage").SVGAnimatedRect = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedRect = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedString **************
$dynamic("get$baseVal").SVGAnimatedString = function() { return this.baseVal; };
$dynamic("set$baseVal").SVGAnimatedString = function(value) { return this.baseVal = value; };
$dynamic("get$dartObjectLocalStorage").SVGAnimatedString = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedString = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedTransformList **************
$dynamic("get$baseVal").SVGAnimatedTransformList = function() { return this.baseVal; };
$dynamic("set$baseVal").SVGAnimatedTransformList = function(value) { return this.baseVal = value; };
$dynamic("get$dartObjectLocalStorage").SVGAnimatedTransformList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedTransformList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimationElement **************
// ********** Code for SVGCircleElement **************
$dynamic("get$className").SVGCircleElement = function() { return this.className; };
$dynamic("set$className").SVGCircleElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGCircleElement = function() { return this.style; };
$dynamic("set$style").SVGCircleElement = function(value) { return this.style = value; };
// ********** Code for SVGClipPathElement **************
$dynamic("get$className").SVGClipPathElement = function() { return this.className; };
$dynamic("set$className").SVGClipPathElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGClipPathElement = function() { return this.style; };
$dynamic("set$style").SVGClipPathElement = function(value) { return this.style = value; };
// ********** Code for SVGColor **************
// ********** Code for SVGComponentTransferFunctionElement **************
// ********** Code for SVGCursorElement **************
// ********** Code for SVGDefsElement **************
$dynamic("get$className").SVGDefsElement = function() { return this.className; };
$dynamic("set$className").SVGDefsElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGDefsElement = function() { return this.style; };
$dynamic("set$style").SVGDefsElement = function(value) { return this.style = value; };
// ********** Code for SVGDescElement **************
$dynamic("get$className").SVGDescElement = function() { return this.className; };
$dynamic("set$className").SVGDescElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGDescElement = function() { return this.style; };
$dynamic("set$style").SVGDescElement = function(value) { return this.style = value; };
// ********** Code for SVGDocument **************
// ********** Code for SVGElement **************
// ********** Code for SVGElementInstance **************
$dynamic("get$childNodes").SVGElementInstance = function() { return this.childNodes; };
$dynamic("set$childNodes").SVGElementInstance = function(value) { return this.childNodes = value; };
$dynamic("get$firstChild").SVGElementInstance = function() { return this.firstChild; };
$dynamic("set$firstChild").SVGElementInstance = function(value) { return this.firstChild = value; };
$dynamic("get$parentNode").SVGElementInstance = function() { return this.parentNode; };
$dynamic("set$parentNode").SVGElementInstance = function(value) { return this.parentNode = value; };
$dynamic("get$dartObjectLocalStorage").SVGElementInstance = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGElementInstance = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").SVGElementInstance = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for SVGElementInstanceList **************
$dynamic("get$length").SVGElementInstanceList = function() { return this.length; };
$dynamic("set$length").SVGElementInstanceList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").SVGElementInstanceList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGElementInstanceList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").SVGElementInstanceList = function($0) {
  return this.item($0);
};
// ********** Code for SVGEllipseElement **************
$dynamic("get$className").SVGEllipseElement = function() { return this.className; };
$dynamic("set$className").SVGEllipseElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGEllipseElement = function() { return this.style; };
$dynamic("set$style").SVGEllipseElement = function(value) { return this.style = value; };
// ********** Code for SVGException **************
$dynamic("get$name").SVGException = function() { return this.name; };
$dynamic("set$name").SVGException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").SVGException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").SVGException = function() {
  return this.toString();
};
// ********** Code for SVGExternalResourcesRequired **************
$dynamic("get$dartObjectLocalStorage").SVGExternalResourcesRequired = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGExternalResourcesRequired = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGFEBlendElement **************
$dynamic("get$height").SVGFEBlendElement = function() { return this.height; };
$dynamic("set$height").SVGFEBlendElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEBlendElement = function() { return this.width; };
$dynamic("set$width").SVGFEBlendElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEBlendElement = function() { return this.className; };
$dynamic("set$className").SVGFEBlendElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEBlendElement = function() { return this.style; };
$dynamic("set$style").SVGFEBlendElement = function(value) { return this.style = value; };
// ********** Code for SVGFEColorMatrixElement **************
$dynamic("get$height").SVGFEColorMatrixElement = function() { return this.height; };
$dynamic("set$height").SVGFEColorMatrixElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEColorMatrixElement = function() { return this.width; };
$dynamic("set$width").SVGFEColorMatrixElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEColorMatrixElement = function() { return this.className; };
$dynamic("set$className").SVGFEColorMatrixElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEColorMatrixElement = function() { return this.style; };
$dynamic("set$style").SVGFEColorMatrixElement = function(value) { return this.style = value; };
// ********** Code for SVGFEComponentTransferElement **************
$dynamic("get$height").SVGFEComponentTransferElement = function() { return this.height; };
$dynamic("set$height").SVGFEComponentTransferElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEComponentTransferElement = function() { return this.width; };
$dynamic("set$width").SVGFEComponentTransferElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEComponentTransferElement = function() { return this.className; };
$dynamic("set$className").SVGFEComponentTransferElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEComponentTransferElement = function() { return this.style; };
$dynamic("set$style").SVGFEComponentTransferElement = function(value) { return this.style = value; };
// ********** Code for dom_SVGFECompositeElement **************
$dynamic("get$height").SVGFECompositeElement = function() { return this.height; };
$dynamic("set$height").SVGFECompositeElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFECompositeElement = function() { return this.width; };
$dynamic("set$width").SVGFECompositeElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFECompositeElement = function() { return this.className; };
$dynamic("set$className").SVGFECompositeElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFECompositeElement = function() { return this.style; };
$dynamic("set$style").SVGFECompositeElement = function(value) { return this.style = value; };
// ********** Code for SVGFEConvolveMatrixElement **************
$dynamic("get$height").SVGFEConvolveMatrixElement = function() { return this.height; };
$dynamic("set$height").SVGFEConvolveMatrixElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEConvolveMatrixElement = function() { return this.width; };
$dynamic("set$width").SVGFEConvolveMatrixElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEConvolveMatrixElement = function() { return this.className; };
$dynamic("set$className").SVGFEConvolveMatrixElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEConvolveMatrixElement = function() { return this.style; };
$dynamic("set$style").SVGFEConvolveMatrixElement = function(value) { return this.style = value; };
// ********** Code for SVGFEDiffuseLightingElement **************
$dynamic("get$height").SVGFEDiffuseLightingElement = function() { return this.height; };
$dynamic("set$height").SVGFEDiffuseLightingElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEDiffuseLightingElement = function() { return this.width; };
$dynamic("set$width").SVGFEDiffuseLightingElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEDiffuseLightingElement = function() { return this.className; };
$dynamic("set$className").SVGFEDiffuseLightingElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEDiffuseLightingElement = function() { return this.style; };
$dynamic("set$style").SVGFEDiffuseLightingElement = function(value) { return this.style = value; };
// ********** Code for SVGFEDisplacementMapElement **************
$dynamic("get$height").SVGFEDisplacementMapElement = function() { return this.height; };
$dynamic("set$height").SVGFEDisplacementMapElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEDisplacementMapElement = function() { return this.width; };
$dynamic("set$width").SVGFEDisplacementMapElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEDisplacementMapElement = function() { return this.className; };
$dynamic("set$className").SVGFEDisplacementMapElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEDisplacementMapElement = function() { return this.style; };
$dynamic("set$style").SVGFEDisplacementMapElement = function(value) { return this.style = value; };
// ********** Code for SVGFEDistantLightElement **************
// ********** Code for SVGFEDropShadowElement **************
$dynamic("get$height").SVGFEDropShadowElement = function() { return this.height; };
$dynamic("set$height").SVGFEDropShadowElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEDropShadowElement = function() { return this.width; };
$dynamic("set$width").SVGFEDropShadowElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEDropShadowElement = function() { return this.className; };
$dynamic("set$className").SVGFEDropShadowElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEDropShadowElement = function() { return this.style; };
$dynamic("set$style").SVGFEDropShadowElement = function(value) { return this.style = value; };
// ********** Code for SVGFEFloodElement **************
$dynamic("get$height").SVGFEFloodElement = function() { return this.height; };
$dynamic("set$height").SVGFEFloodElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEFloodElement = function() { return this.width; };
$dynamic("set$width").SVGFEFloodElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEFloodElement = function() { return this.className; };
$dynamic("set$className").SVGFEFloodElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEFloodElement = function() { return this.style; };
$dynamic("set$style").SVGFEFloodElement = function(value) { return this.style = value; };
// ********** Code for SVGFEFuncAElement **************
// ********** Code for SVGFEFuncBElement **************
// ********** Code for SVGFEFuncGElement **************
// ********** Code for SVGFEFuncRElement **************
// ********** Code for SVGFEGaussianBlurElement **************
$dynamic("get$height").SVGFEGaussianBlurElement = function() { return this.height; };
$dynamic("set$height").SVGFEGaussianBlurElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEGaussianBlurElement = function() { return this.width; };
$dynamic("set$width").SVGFEGaussianBlurElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEGaussianBlurElement = function() { return this.className; };
$dynamic("set$className").SVGFEGaussianBlurElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEGaussianBlurElement = function() { return this.style; };
$dynamic("set$style").SVGFEGaussianBlurElement = function(value) { return this.style = value; };
// ********** Code for SVGFEImageElement **************
$dynamic("get$height").SVGFEImageElement = function() { return this.height; };
$dynamic("set$height").SVGFEImageElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEImageElement = function() { return this.width; };
$dynamic("set$width").SVGFEImageElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEImageElement = function() { return this.className; };
$dynamic("set$className").SVGFEImageElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEImageElement = function() { return this.style; };
$dynamic("set$style").SVGFEImageElement = function(value) { return this.style = value; };
// ********** Code for SVGFEMergeElement **************
$dynamic("get$height").SVGFEMergeElement = function() { return this.height; };
$dynamic("set$height").SVGFEMergeElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEMergeElement = function() { return this.width; };
$dynamic("set$width").SVGFEMergeElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEMergeElement = function() { return this.className; };
$dynamic("set$className").SVGFEMergeElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEMergeElement = function() { return this.style; };
$dynamic("set$style").SVGFEMergeElement = function(value) { return this.style = value; };
// ********** Code for SVGFEMergeNodeElement **************
// ********** Code for dom_SVGFEMorphologyElement **************
$dynamic("get$height").SVGFEMorphologyElement = function() { return this.height; };
$dynamic("set$height").SVGFEMorphologyElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEMorphologyElement = function() { return this.width; };
$dynamic("set$width").SVGFEMorphologyElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEMorphologyElement = function() { return this.className; };
$dynamic("set$className").SVGFEMorphologyElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEMorphologyElement = function() { return this.style; };
$dynamic("set$style").SVGFEMorphologyElement = function(value) { return this.style = value; };
// ********** Code for SVGFEOffsetElement **************
$dynamic("get$height").SVGFEOffsetElement = function() { return this.height; };
$dynamic("set$height").SVGFEOffsetElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEOffsetElement = function() { return this.width; };
$dynamic("set$width").SVGFEOffsetElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFEOffsetElement = function() { return this.className; };
$dynamic("set$className").SVGFEOffsetElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFEOffsetElement = function() { return this.style; };
$dynamic("set$style").SVGFEOffsetElement = function(value) { return this.style = value; };
// ********** Code for SVGFEPointLightElement **************
// ********** Code for SVGFESpecularLightingElement **************
$dynamic("get$height").SVGFESpecularLightingElement = function() { return this.height; };
$dynamic("set$height").SVGFESpecularLightingElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFESpecularLightingElement = function() { return this.width; };
$dynamic("set$width").SVGFESpecularLightingElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFESpecularLightingElement = function() { return this.className; };
$dynamic("set$className").SVGFESpecularLightingElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFESpecularLightingElement = function() { return this.style; };
$dynamic("set$style").SVGFESpecularLightingElement = function(value) { return this.style = value; };
// ********** Code for SVGFESpotLightElement **************
// ********** Code for SVGFETileElement **************
$dynamic("get$height").SVGFETileElement = function() { return this.height; };
$dynamic("set$height").SVGFETileElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFETileElement = function() { return this.width; };
$dynamic("set$width").SVGFETileElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFETileElement = function() { return this.className; };
$dynamic("set$className").SVGFETileElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFETileElement = function() { return this.style; };
$dynamic("set$style").SVGFETileElement = function(value) { return this.style = value; };
// ********** Code for SVGFETurbulenceElement **************
$dynamic("get$height").SVGFETurbulenceElement = function() { return this.height; };
$dynamic("set$height").SVGFETurbulenceElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFETurbulenceElement = function() { return this.width; };
$dynamic("set$width").SVGFETurbulenceElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFETurbulenceElement = function() { return this.className; };
$dynamic("set$className").SVGFETurbulenceElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFETurbulenceElement = function() { return this.style; };
$dynamic("set$style").SVGFETurbulenceElement = function(value) { return this.style = value; };
// ********** Code for SVGFilterElement **************
$dynamic("get$height").SVGFilterElement = function() { return this.height; };
$dynamic("set$height").SVGFilterElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFilterElement = function() { return this.width; };
$dynamic("set$width").SVGFilterElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGFilterElement = function() { return this.className; };
$dynamic("set$className").SVGFilterElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGFilterElement = function() { return this.style; };
$dynamic("set$style").SVGFilterElement = function(value) { return this.style = value; };
// ********** Code for SVGFilterPrimitiveStandardAttributes **************
$dynamic("get$height").SVGFilterPrimitiveStandardAttributes = function() { return this.height; };
$dynamic("set$height").SVGFilterPrimitiveStandardAttributes = function(value) { return this.height = value; };
$dynamic("get$width").SVGFilterPrimitiveStandardAttributes = function() { return this.width; };
$dynamic("set$width").SVGFilterPrimitiveStandardAttributes = function(value) { return this.width = value; };
// ********** Code for SVGFitToViewBox **************
$dynamic("get$dartObjectLocalStorage").SVGFitToViewBox = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGFitToViewBox = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGFontElement **************
// ********** Code for SVGFontFaceElement **************
// ********** Code for SVGFontFaceFormatElement **************
// ********** Code for SVGFontFaceNameElement **************
// ********** Code for SVGFontFaceSrcElement **************
// ********** Code for SVGFontFaceUriElement **************
// ********** Code for SVGForeignObjectElement **************
$dynamic("get$height").SVGForeignObjectElement = function() { return this.height; };
$dynamic("set$height").SVGForeignObjectElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGForeignObjectElement = function() { return this.width; };
$dynamic("set$width").SVGForeignObjectElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGForeignObjectElement = function() { return this.className; };
$dynamic("set$className").SVGForeignObjectElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGForeignObjectElement = function() { return this.style; };
$dynamic("set$style").SVGForeignObjectElement = function(value) { return this.style = value; };
// ********** Code for SVGGElement **************
$dynamic("get$className").SVGGElement = function() { return this.className; };
$dynamic("set$className").SVGGElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGGElement = function() { return this.style; };
$dynamic("set$style").SVGGElement = function(value) { return this.style = value; };
// ********** Code for SVGGlyphElement **************
// ********** Code for SVGGlyphRefElement **************
$dynamic("get$className").SVGGlyphRefElement = function() { return this.className; };
$dynamic("set$className").SVGGlyphRefElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGGlyphRefElement = function() { return this.style; };
$dynamic("set$style").SVGGlyphRefElement = function(value) { return this.style = value; };
// ********** Code for SVGGradientElement **************
$dynamic("get$className").SVGGradientElement = function() { return this.className; };
$dynamic("set$className").SVGGradientElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGGradientElement = function() { return this.style; };
$dynamic("set$style").SVGGradientElement = function(value) { return this.style = value; };
// ********** Code for SVGHKernElement **************
// ********** Code for SVGImageElement **************
$dynamic("get$height").SVGImageElement = function() { return this.height; };
$dynamic("set$height").SVGImageElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGImageElement = function() { return this.width; };
$dynamic("set$width").SVGImageElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGImageElement = function() { return this.className; };
$dynamic("set$className").SVGImageElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGImageElement = function() { return this.style; };
$dynamic("set$style").SVGImageElement = function(value) { return this.style = value; };
// ********** Code for SVGLangSpace **************
$dynamic("get$dartObjectLocalStorage").SVGLangSpace = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGLangSpace = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGLength **************
$dynamic("get$value").SVGLength = function() { return this.value; };
$dynamic("set$value").SVGLength = function(value) { return this.value = value; };
$dynamic("get$dartObjectLocalStorage").SVGLength = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGLength = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGLengthList **************
$dynamic("get$clear").SVGLengthList = function() {
  return this.clear.bind(this);
}
$dynamic("get$dartObjectLocalStorage").SVGLengthList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGLengthList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("clear$0").SVGLengthList = function() {
  return this.clear();
};
// ********** Code for SVGLineElement **************
$dynamic("get$className").SVGLineElement = function() { return this.className; };
$dynamic("set$className").SVGLineElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGLineElement = function() { return this.style; };
$dynamic("set$style").SVGLineElement = function(value) { return this.style = value; };
// ********** Code for SVGLinearGradientElement **************
// ********** Code for SVGLocatable **************
$dynamic("get$dartObjectLocalStorage").SVGLocatable = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGLocatable = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGMPathElement **************
// ********** Code for SVGMarkerElement **************
$dynamic("get$className").SVGMarkerElement = function() { return this.className; };
$dynamic("set$className").SVGMarkerElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGMarkerElement = function() { return this.style; };
$dynamic("set$style").SVGMarkerElement = function(value) { return this.style = value; };
// ********** Code for SVGMaskElement **************
$dynamic("get$height").SVGMaskElement = function() { return this.height; };
$dynamic("set$height").SVGMaskElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGMaskElement = function() { return this.width; };
$dynamic("set$width").SVGMaskElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGMaskElement = function() { return this.className; };
$dynamic("set$className").SVGMaskElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGMaskElement = function() { return this.style; };
$dynamic("set$style").SVGMaskElement = function(value) { return this.style = value; };
// ********** Code for SVGMatrix **************
$dynamic("get$dartObjectLocalStorage").SVGMatrix = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGMatrix = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGMetadataElement **************
// ********** Code for SVGMissingGlyphElement **************
// ********** Code for SVGNumber **************
$dynamic("get$value").SVGNumber = function() { return this.value; };
$dynamic("set$value").SVGNumber = function(value) { return this.value = value; };
$dynamic("get$dartObjectLocalStorage").SVGNumber = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGNumber = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGNumberList **************
$dynamic("get$clear").SVGNumberList = function() {
  return this.clear.bind(this);
}
$dynamic("get$dartObjectLocalStorage").SVGNumberList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGNumberList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("clear$0").SVGNumberList = function() {
  return this.clear();
};
// ********** Code for SVGPaint **************
// ********** Code for SVGPathElement **************
$dynamic("get$className").SVGPathElement = function() { return this.className; };
$dynamic("set$className").SVGPathElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGPathElement = function() { return this.style; };
$dynamic("set$style").SVGPathElement = function(value) { return this.style = value; };
// ********** Code for SVGPathSeg **************
$dynamic("get$dartObjectLocalStorage").SVGPathSeg = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPathSeg = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGPathSegArcAbs **************
// ********** Code for SVGPathSegArcRel **************
// ********** Code for SVGPathSegClosePath **************
// ********** Code for SVGPathSegCurvetoCubicAbs **************
// ********** Code for SVGPathSegCurvetoCubicRel **************
// ********** Code for SVGPathSegCurvetoCubicSmoothAbs **************
// ********** Code for SVGPathSegCurvetoCubicSmoothRel **************
// ********** Code for SVGPathSegCurvetoQuadraticAbs **************
// ********** Code for SVGPathSegCurvetoQuadraticRel **************
// ********** Code for SVGPathSegCurvetoQuadraticSmoothAbs **************
// ********** Code for SVGPathSegCurvetoQuadraticSmoothRel **************
// ********** Code for SVGPathSegLinetoAbs **************
// ********** Code for SVGPathSegLinetoHorizontalAbs **************
// ********** Code for SVGPathSegLinetoHorizontalRel **************
// ********** Code for SVGPathSegLinetoRel **************
// ********** Code for SVGPathSegLinetoVerticalAbs **************
// ********** Code for SVGPathSegLinetoVerticalRel **************
// ********** Code for SVGPathSegList **************
$dynamic("get$clear").SVGPathSegList = function() {
  return this.clear.bind(this);
}
$dynamic("get$dartObjectLocalStorage").SVGPathSegList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPathSegList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("clear$0").SVGPathSegList = function() {
  return this.clear();
};
// ********** Code for SVGPathSegMovetoAbs **************
// ********** Code for SVGPathSegMovetoRel **************
// ********** Code for SVGPatternElement **************
$dynamic("get$height").SVGPatternElement = function() { return this.height; };
$dynamic("set$height").SVGPatternElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGPatternElement = function() { return this.width; };
$dynamic("set$width").SVGPatternElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGPatternElement = function() { return this.className; };
$dynamic("set$className").SVGPatternElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGPatternElement = function() { return this.style; };
$dynamic("set$style").SVGPatternElement = function(value) { return this.style = value; };
// ********** Code for SVGPoint **************
$dynamic("get$dartObjectLocalStorage").SVGPoint = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPoint = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGPointList **************
$dynamic("get$clear").SVGPointList = function() {
  return this.clear.bind(this);
}
$dynamic("get$dartObjectLocalStorage").SVGPointList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPointList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("clear$0").SVGPointList = function() {
  return this.clear();
};
// ********** Code for SVGPolygonElement **************
$dynamic("get$className").SVGPolygonElement = function() { return this.className; };
$dynamic("set$className").SVGPolygonElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGPolygonElement = function() { return this.style; };
$dynamic("set$style").SVGPolygonElement = function(value) { return this.style = value; };
// ********** Code for SVGPolylineElement **************
$dynamic("get$className").SVGPolylineElement = function() { return this.className; };
$dynamic("set$className").SVGPolylineElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGPolylineElement = function() { return this.style; };
$dynamic("set$style").SVGPolylineElement = function(value) { return this.style = value; };
// ********** Code for SVGPreserveAspectRatio **************
$dynamic("get$dartObjectLocalStorage").SVGPreserveAspectRatio = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPreserveAspectRatio = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGRadialGradientElement **************
// ********** Code for SVGRect **************
$dynamic("get$height").SVGRect = function() { return this.height; };
$dynamic("set$height").SVGRect = function(value) { return this.height = value; };
$dynamic("get$width").SVGRect = function() { return this.width; };
$dynamic("set$width").SVGRect = function(value) { return this.width = value; };
$dynamic("get$dartObjectLocalStorage").SVGRect = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGRect = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGRectElement **************
$dynamic("get$height").SVGRectElement = function() { return this.height; };
$dynamic("set$height").SVGRectElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGRectElement = function() { return this.width; };
$dynamic("set$width").SVGRectElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGRectElement = function() { return this.className; };
$dynamic("set$className").SVGRectElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGRectElement = function() { return this.style; };
$dynamic("set$style").SVGRectElement = function(value) { return this.style = value; };
// ********** Code for SVGRenderingIntent **************
$dynamic("get$dartObjectLocalStorage").SVGRenderingIntent = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGRenderingIntent = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGSVGElement **************
$dynamic("get$height").SVGSVGElement = function() { return this.height; };
$dynamic("set$height").SVGSVGElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGSVGElement = function() { return this.width; };
$dynamic("set$width").SVGSVGElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGSVGElement = function() { return this.className; };
$dynamic("set$className").SVGSVGElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGSVGElement = function() { return this.style; };
$dynamic("set$style").SVGSVGElement = function(value) { return this.style = value; };
// ********** Code for SVGScriptElement **************
// ********** Code for SVGSetElement **************
// ********** Code for SVGStopElement **************
$dynamic("get$className").SVGStopElement = function() { return this.className; };
$dynamic("set$className").SVGStopElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGStopElement = function() { return this.style; };
$dynamic("set$style").SVGStopElement = function(value) { return this.style = value; };
// ********** Code for SVGStringList **************
$dynamic("get$clear").SVGStringList = function() {
  return this.clear.bind(this);
}
$dynamic("get$dartObjectLocalStorage").SVGStringList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGStringList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("clear$0").SVGStringList = function() {
  return this.clear();
};
// ********** Code for SVGStylable **************
$dynamic("get$className").SVGStylable = function() { return this.className; };
$dynamic("set$className").SVGStylable = function(value) { return this.className = value; };
$dynamic("get$style").SVGStylable = function() { return this.style; };
$dynamic("set$style").SVGStylable = function(value) { return this.style = value; };
$dynamic("get$dartObjectLocalStorage").SVGStylable = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGStylable = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGStyleElement **************
// ********** Code for SVGSwitchElement **************
$dynamic("get$className").SVGSwitchElement = function() { return this.className; };
$dynamic("set$className").SVGSwitchElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGSwitchElement = function() { return this.style; };
$dynamic("set$style").SVGSwitchElement = function(value) { return this.style = value; };
// ********** Code for SVGSymbolElement **************
$dynamic("get$className").SVGSymbolElement = function() { return this.className; };
$dynamic("set$className").SVGSymbolElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGSymbolElement = function() { return this.style; };
$dynamic("set$style").SVGSymbolElement = function(value) { return this.style = value; };
// ********** Code for SVGTRefElement **************
// ********** Code for SVGTSpanElement **************
// ********** Code for SVGTests **************
$dynamic("get$dartObjectLocalStorage").SVGTests = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGTests = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGTextContentElement **************
$dynamic("get$className").SVGTextContentElement = function() { return this.className; };
$dynamic("set$className").SVGTextContentElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGTextContentElement = function() { return this.style; };
$dynamic("set$style").SVGTextContentElement = function(value) { return this.style = value; };
// ********** Code for SVGTextElement **************
// ********** Code for SVGTextPathElement **************
// ********** Code for SVGTextPositioningElement **************
// ********** Code for SVGTitleElement **************
$dynamic("get$className").SVGTitleElement = function() { return this.className; };
$dynamic("set$className").SVGTitleElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGTitleElement = function() { return this.style; };
$dynamic("set$style").SVGTitleElement = function(value) { return this.style = value; };
// ********** Code for SVGTransform **************
$dynamic("get$dartObjectLocalStorage").SVGTransform = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGTransform = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGTransformList **************
$dynamic("get$clear").SVGTransformList = function() {
  return this.clear.bind(this);
}
$dynamic("get$dartObjectLocalStorage").SVGTransformList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGTransformList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("clear$0").SVGTransformList = function() {
  return this.clear();
};
// ********** Code for SVGTransformable **************
// ********** Code for SVGURIReference **************
$dynamic("get$dartObjectLocalStorage").SVGURIReference = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGURIReference = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGUnitTypes **************
$dynamic("get$dartObjectLocalStorage").SVGUnitTypes = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGUnitTypes = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGUseElement **************
$dynamic("get$height").SVGUseElement = function() { return this.height; };
$dynamic("set$height").SVGUseElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGUseElement = function() { return this.width; };
$dynamic("set$width").SVGUseElement = function(value) { return this.width = value; };
$dynamic("get$className").SVGUseElement = function() { return this.className; };
$dynamic("set$className").SVGUseElement = function(value) { return this.className = value; };
$dynamic("get$style").SVGUseElement = function() { return this.style; };
$dynamic("set$style").SVGUseElement = function(value) { return this.style = value; };
// ********** Code for SVGVKernElement **************
// ********** Code for SVGViewElement **************
// ********** Code for SVGViewSpec **************
// ********** Code for SVGZoomAndPan **************
$dynamic("get$dartObjectLocalStorage").SVGZoomAndPan = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGZoomAndPan = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGZoomEvent **************
// ********** Code for Screen **************
$dynamic("get$height").Screen = function() { return this.height; };
$dynamic("set$height").Screen = function(value) { return this.height = value; };
$dynamic("get$width").Screen = function() { return this.width; };
$dynamic("set$width").Screen = function(value) { return this.width = value; };
$dynamic("get$dartObjectLocalStorage").Screen = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Screen = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_ScriptProfile **************
$dynamic("get$dartObjectLocalStorage").ScriptProfile = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ScriptProfile = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_ScriptProfileNode **************
$dynamic("get$children").ScriptProfileNode = function() { return this.children; };
$dynamic("set$children").ScriptProfileNode = function(value) { return this.children = value; };
$dynamic("get$dartObjectLocalStorage").ScriptProfileNode = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ScriptProfileNode = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SharedWorker **************
// ********** Code for dom_SharedWorkercontext **************
$dynamic("get$name").SharedWorkercontext = function() { return this.name; };
$dynamic("set$name").SharedWorkercontext = function(value) { return this.name = value; };
// ********** Code for SpeechInputEvent **************
// ********** Code for SpeechInputResult **************
$dynamic("get$dartObjectLocalStorage").SpeechInputResult = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SpeechInputResult = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SpeechInputResultList **************
$dynamic("get$length").SpeechInputResultList = function() { return this.length; };
$dynamic("set$length").SpeechInputResultList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").SpeechInputResultList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SpeechInputResultList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").SpeechInputResultList = function($0) {
  return this.item($0);
};
// ********** Code for Storage **************
$dynamic("get$length").Storage = function() { return this.length; };
$dynamic("set$length").Storage = function(value) { return this.length = value; };
$dynamic("get$clear").Storage = function() {
  return this.clear.bind(this);
}
$dynamic("get$dartObjectLocalStorage").Storage = function() {
  
      if (this === window.localStorage)
        return window._dartLocalStorageLocalStorage;
      else if (this === window.sessionStorage)
        return window._dartSessionStorageLocalStorage;
      else
        throw new UnsupportedOperationException('Cannot dartObjectLocalStorage for unknown Storage object.');

}
$dynamic("set$dartObjectLocalStorage").Storage = function(value) {
  
      if (this === window.localStorage)
        window._dartLocalStorageLocalStorage = value;
      else if (this === window.sessionStorage)
        window._dartSessionStorageLocalStorage = value;
      else
        throw new UnsupportedOperationException('Cannot dartObjectLocalStorage for unknown Storage object.');

}
$dynamic("clear$0").Storage = function() {
  return this.clear();
};
// ********** Code for StorageEvent **************
// ********** Code for StorageInfo **************
$dynamic("get$dartObjectLocalStorage").StorageInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").StorageInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for StyleMedia **************
$dynamic("get$dartObjectLocalStorage").StyleMedia = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").StyleMedia = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for StyleSheet **************
$dynamic("get$dartObjectLocalStorage").StyleSheet = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").StyleSheet = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for StyleSheetList **************
$dynamic("get$length").StyleSheetList = function() { return this.length; };
$dynamic("set$length").StyleSheetList = function(value) { return this.length = value; };
$dynamic("$setindex").StyleSheetList = function(index, value) {
  $throw(new UnsupportedOperationException("Cannot assign element of immutable List."));
}
$dynamic("get$dartObjectLocalStorage").StyleSheetList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").StyleSheetList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").StyleSheetList = function($0) {
  return this.item($0);
};
// ********** Code for Text **************
// ********** Code for TextEvent **************
// ********** Code for TextMetrics **************
$dynamic("get$width").TextMetrics = function() { return this.width; };
$dynamic("set$width").TextMetrics = function(value) { return this.width = value; };
$dynamic("get$dartObjectLocalStorage").TextMetrics = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextMetrics = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for TextTrack **************
$dynamic("get$dartObjectLocalStorage").TextTrack = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextTrack = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").TextTrack = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for TextTrackCue **************
$dynamic("get$dartObjectLocalStorage").TextTrackCue = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextTrackCue = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").TextTrackCue = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for TextTrackCueList **************
$dynamic("get$length").TextTrackCueList = function() { return this.length; };
$dynamic("set$length").TextTrackCueList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").TextTrackCueList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextTrackCueList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").TextTrackCueList = function($0) {
  return this.item($0);
};
// ********** Code for dom_TextTrackList **************
$dynamic("get$length").TextTrackList = function() { return this.length; };
$dynamic("set$length").TextTrackList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").TextTrackList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextTrackList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").TextTrackList = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("item$1").TextTrackList = function($0) {
  return this.item($0);
};
// ********** Code for TimeRanges **************
$dynamic("get$length").TimeRanges = function() { return this.length; };
$dynamic("set$length").TimeRanges = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").TimeRanges = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TimeRanges = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Touch **************
$dynamic("get$dartObjectLocalStorage").Touch = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Touch = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for TouchEvent **************
// ********** Code for TouchList **************
$dynamic("get$length").TouchList = function() { return this.length; };
$dynamic("set$length").TouchList = function(value) { return this.length = value; };
$dynamic("$setindex").TouchList = function(index, value) {
  $throw(new UnsupportedOperationException("Cannot assign element of immutable List."));
}
$dynamic("get$dartObjectLocalStorage").TouchList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TouchList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").TouchList = function($0) {
  return this.item($0);
};
// ********** Code for dom_TrackEvent **************
// ********** Code for dom_TreeWalker **************
$dynamic("get$firstChild").TreeWalker = function() {
  return this.firstChild.bind(this);
}
$dynamic("get$parentNode").TreeWalker = function() {
  return this.parentNode.bind(this);
}
$dynamic("get$dartObjectLocalStorage").TreeWalker = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TreeWalker = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for UIEvent **************
$dynamic("get$keyCode").UIEvent = function() { return this.keyCode; };
$dynamic("set$keyCode").UIEvent = function(value) { return this.keyCode = value; };
// ********** Code for Uint16Array **************
$dynamic("get$length").Uint16Array = function() { return this.length; };
$dynamic("set$length").Uint16Array = function(value) { return this.length = value; };
// ********** Code for Uint32Array **************
$dynamic("get$length").Uint32Array = function() { return this.length; };
$dynamic("set$length").Uint32Array = function(value) { return this.length = value; };
// ********** Code for Uint8Array **************
$dynamic("get$length").Uint8Array = function() { return this.length; };
$dynamic("set$length").Uint8Array = function(value) { return this.length = value; };
// ********** Code for ValidityState **************
$dynamic("get$dartObjectLocalStorage").ValidityState = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ValidityState = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WaveShaperNode **************
// ********** Code for WebGLActiveInfo **************
$dynamic("get$name").WebGLActiveInfo = function() { return this.name; };
$dynamic("set$name").WebGLActiveInfo = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").WebGLActiveInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLActiveInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLBuffer **************
$dynamic("get$dartObjectLocalStorage").WebGLBuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLBuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebGLCompressedTextures **************
$dynamic("get$dartObjectLocalStorage").WebGLCompressedTextures = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLCompressedTextures = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLContextAttributes **************
$dynamic("get$dartObjectLocalStorage").WebGLContextAttributes = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLContextAttributes = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLContextEvent **************
// ********** Code for WebGLDebugRendererInfo **************
$dynamic("get$dartObjectLocalStorage").WebGLDebugRendererInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLDebugRendererInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLDebugShaders **************
$dynamic("get$dartObjectLocalStorage").WebGLDebugShaders = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLDebugShaders = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLFramebuffer **************
$dynamic("get$dartObjectLocalStorage").WebGLFramebuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLFramebuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebGLLoseContext **************
$dynamic("get$dartObjectLocalStorage").WebGLLoseContext = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLLoseContext = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLProgram **************
$dynamic("get$dartObjectLocalStorage").WebGLProgram = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLProgram = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLRenderbuffer **************
$dynamic("get$dartObjectLocalStorage").WebGLRenderbuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLRenderbuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLRenderingContext **************
$dynamic("get$clear").WebGLRenderingContext = function() {
  return this.clear.bind(this);
}
$dynamic("clear$1").WebGLRenderingContext = function($0) {
  return this.clear($0);
};
// ********** Code for WebGLShader **************
$dynamic("get$dartObjectLocalStorage").WebGLShader = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLShader = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLTexture **************
$dynamic("get$dartObjectLocalStorage").WebGLTexture = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLTexture = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLUniformLocation **************
$dynamic("get$dartObjectLocalStorage").WebGLUniformLocation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLUniformLocation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLVertexArrayObjectOES **************
$dynamic("get$dartObjectLocalStorage").WebGLVertexArrayObjectOES = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLVertexArrayObjectOES = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitAnimation **************
$dynamic("get$name").WebKitAnimation = function() { return this.name; };
$dynamic("set$name").WebKitAnimation = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").WebKitAnimation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitAnimation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitAnimationEvent **************
// ********** Code for dom_WebKitAnimationList **************
$dynamic("get$length").WebKitAnimationList = function() { return this.length; };
$dynamic("set$length").WebKitAnimationList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").WebKitAnimationList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitAnimationList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").WebKitAnimationList = function($0) {
  return this.item($0);
};
// ********** Code for dom_WebKitBlobBuilder **************
$dynamic("get$dartObjectLocalStorage").WebKitBlobBuilder = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitBlobBuilder = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebKitCSSFilterValue **************
// ********** Code for dom_WebKitCSSKeyframeRule **************
$dynamic("get$style").WebKitCSSKeyframeRule = function() { return this.style; };
$dynamic("set$style").WebKitCSSKeyframeRule = function(value) { return this.style = value; };
// ********** Code for dom_WebKitCSSKeyframesRule **************
$dynamic("get$name").WebKitCSSKeyframesRule = function() { return this.name; };
$dynamic("set$name").WebKitCSSKeyframesRule = function(value) { return this.name = value; };
// ********** Code for dom_WebKitCSSMatrix **************
$dynamic("get$dartObjectLocalStorage").WebKitCSSMatrix = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitCSSMatrix = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").WebKitCSSMatrix = function() {
  return this.toString();
};
// ********** Code for dom_WebKitCSSTransformValue **************
// ********** Code for WebKitMutationObserver **************
$dynamic("get$dartObjectLocalStorage").WebKitMutationObserver = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitMutationObserver = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitNamedFlow **************
$dynamic("get$dartObjectLocalStorage").WebKitNamedFlow = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitNamedFlow = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitPoint **************
$dynamic("get$dartObjectLocalStorage").WebKitPoint = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitPoint = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitTransitionEvent **************
// ********** Code for WebSocket **************
$dynamic("get$dartObjectLocalStorage").WebSocket = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebSocket = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").WebSocket = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for WheelEvent **************
// ********** Code for Worker **************
// ********** Code for dom_WorkerContext **************
$dynamic("get$dartObjectLocalStorage").WorkerContext = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WorkerContext = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").WorkerContext = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("setTimeout$2").WorkerContext = function($0, $1) {
  return this.setTimeout($wrap_call$0(to$call$0($0)), $1);
};
// ********** Code for dom_WorkerLocation **************
$dynamic("get$dartObjectLocalStorage").WorkerLocation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WorkerLocation = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").WorkerLocation = function() {
  return this.toString();
};
// ********** Code for dom_WorkerNavigator **************
$dynamic("get$dartObjectLocalStorage").WorkerNavigator = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WorkerNavigator = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for XMLHttpRequest **************
$dynamic("get$dartObjectLocalStorage").XMLHttpRequest = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XMLHttpRequest = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").XMLHttpRequest = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for XMLHttpRequestException **************
$dynamic("get$name").XMLHttpRequestException = function() { return this.name; };
$dynamic("set$name").XMLHttpRequestException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").XMLHttpRequestException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XMLHttpRequestException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").XMLHttpRequestException = function() {
  return this.toString();
};
// ********** Code for XMLHttpRequestProgressEvent **************
// ********** Code for XMLHttpRequestUpload **************
$dynamic("get$dartObjectLocalStorage").XMLHttpRequestUpload = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XMLHttpRequestUpload = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").XMLHttpRequestUpload = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for dom_XMLSerializer **************
$dynamic("get$dartObjectLocalStorage").XMLSerializer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XMLSerializer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XPathEvaluator **************
$dynamic("get$dartObjectLocalStorage").XPathEvaluator = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathEvaluator = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XPathException **************
$dynamic("get$name").XPathException = function() { return this.name; };
$dynamic("set$name").XPathException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").XPathException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").XPathException = function() {
  return this.toString();
};
// ********** Code for dom_XPathExpression **************
$dynamic("get$dartObjectLocalStorage").XPathExpression = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathExpression = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XPathNSResolver **************
$dynamic("get$dartObjectLocalStorage").XPathNSResolver = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathNSResolver = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XPathResult **************
$dynamic("get$dartObjectLocalStorage").XPathResult = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathResult = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XSLTProcessor **************
$dynamic("get$dartObjectLocalStorage").XSLTProcessor = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XSLTProcessor = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for _Collections **************
function _Collections() {}
// ********** Code for _VariableSizeListIterator_T **************
$inherits(_VariableSizeListIterator_T, _VariableSizeListIterator);
function _VariableSizeListIterator_T() {}
_VariableSizeListIterator_T.prototype.hasNext = function() {
  return this._dom_array.get$length() > this._dom_pos;
}
_VariableSizeListIterator_T.prototype.next = function() {
  if (!this.hasNext()) {
    $throw(const$0002);
  }
  return this._dom_array.$index(this._dom_pos++);
}
// ********** Code for _FixedSizeListIterator **************
$inherits(_FixedSizeListIterator, _VariableSizeListIterator_T);
function _FixedSizeListIterator() {}
_FixedSizeListIterator.prototype.hasNext = function() {
  return this._dom_length > this._dom_pos;
}
_FixedSizeListIterator.prototype.hasNext$0 = _FixedSizeListIterator.prototype.hasNext;
// ********** Code for _VariableSizeListIterator **************
function _VariableSizeListIterator() {}
_VariableSizeListIterator.prototype.hasNext = function() {
  return this._dom_array.get$length() > this._dom_pos;
}
_VariableSizeListIterator.prototype.hasNext$0 = _VariableSizeListIterator.prototype.hasNext;
_VariableSizeListIterator.prototype.next$0 = _VariableSizeListIterator.prototype.next;
// ********** Code for _Lists **************
function _Lists() {}
// ********** Code for top level **************
function get$window() {
  return window;
}
function get$document() {
  return window.document;
}
//  ********** Library htmlimpl **************
// ********** Code for DOMWrapperBase **************
function DOMWrapperBase() {}
DOMWrapperBase._wrap$ctor = function(_ptr) {
  this._ptr = _ptr;
  this._ptr.set$dartObjectLocalStorage(this);
}
DOMWrapperBase._wrap$ctor.prototype = DOMWrapperBase.prototype;
DOMWrapperBase.prototype.get$_ptr = function() { return this._ptr; };
// ********** Code for EventTargetWrappingImplementation **************
$inherits(EventTargetWrappingImplementation, DOMWrapperBase);
function EventTargetWrappingImplementation() {}
EventTargetWrappingImplementation._wrap$ctor = function(ptr) {
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
EventTargetWrappingImplementation._wrap$ctor.prototype = EventTargetWrappingImplementation.prototype;
// ********** Code for NodeWrappingImplementation **************
$inherits(NodeWrappingImplementation, EventTargetWrappingImplementation);
function NodeWrappingImplementation() {}
NodeWrappingImplementation._wrap$ctor = function(ptr) {
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
NodeWrappingImplementation._wrap$ctor.prototype = NodeWrappingImplementation.prototype;
NodeWrappingImplementation.prototype.get$nodes = function() {
  if (this._nodes == null) {
    this._nodes = new _ChildrenNodeList._wrap$ctor(this._ptr);
  }
  return this._nodes;
}
NodeWrappingImplementation.prototype.replaceWith = function(otherNode) {
  try {
    this._ptr.get$parentNode().replaceChild$2(LevelDom.unwrap(otherNode), this._ptr);
  } catch (e) {
    e = _toDartException(e);
  }
  return this;
}
NodeWrappingImplementation.prototype.remove = function() {
  if (this._ptr.get$parentNode() != null) {
    this._ptr.get$parentNode().removeChild$1(this._ptr);
  }
  return this;
}
NodeWrappingImplementation.prototype.remove$0 = NodeWrappingImplementation.prototype.remove;
// ********** Code for ElementWrappingImplementation **************
$inherits(ElementWrappingImplementation, NodeWrappingImplementation);
function ElementWrappingImplementation() {}
ElementWrappingImplementation._wrap$ctor = function(ptr) {
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
ElementWrappingImplementation._wrap$ctor.prototype = ElementWrappingImplementation.prototype;
ElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
ElementWrappingImplementation.ElementWrappingImplementation$html$factory = function(html) {
  var parentTag = "div";
  var tag;
  var match = const$0006.firstMatch(html);
  if (match != null) {
    tag = match.group$1((1)).toLowerCase$0();
    if (const$0007.containsKey(tag)) {
      parentTag = const$0007.$index(tag);
    }
  }
  var temp = get$document().createElement(parentTag);
  temp.set$innerHTML(html);
  if ($eq(temp.get$childElementCount(), (1))) {
    return LevelDom.wrapElement(temp.get$firstElementChild());
  }
  else if (parentTag == "html" && $eq(temp.get$childElementCount(), (2))) {
    return LevelDom.wrapElement(temp.get$children().item$1(tag == "head" ? (0) : (1)));
  }
  else {
    $throw(new IllegalArgumentException(("HTML had " + temp.get$childElementCount() + " ") + "top level elements but 1 expected"));
  }
}
ElementWrappingImplementation.ElementWrappingImplementation$tag$factory = function(tag) {
  return LevelDom.wrapElement(get$document().createElement(tag));
}
ElementWrappingImplementation.prototype.get$attributes = function() {
  if (this._elementAttributeMap == null) {
    this._elementAttributeMap = new ElementAttributeMap._wrap$ctor(this._ptr);
  }
  return this._elementAttributeMap;
}
ElementWrappingImplementation.prototype.get$elements = function() {
  if (this._elements == null) {
    this._elements = new _ChildrenElementList._wrap$ctor(this._ptr);
  }
  return this._elements;
}
ElementWrappingImplementation.prototype.get$classes = function() {
  if (this._cssClassSet == null) {
    this._cssClassSet = new _CssClassSet(this._ptr);
  }
  return this._cssClassSet;
}
ElementWrappingImplementation.prototype.get$firstElementChild = function() {
  return LevelDom.wrapElement(this._ptr.get$firstElementChild());
}
ElementWrappingImplementation.prototype.set$hidden = function(value) {
  this._ptr.set$hidden(value);
}
ElementWrappingImplementation.prototype.set$innerHTML = function(value) {
  this._ptr.set$innerHTML(value);
}
ElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
ElementWrappingImplementation.prototype.query = function(selectors) {
  return LevelDom.wrapElement(this._ptr.querySelector$1(selectors));
}
ElementWrappingImplementation.prototype.queryAll = function(selectors) {
  return new FrozenElementList._wrap$ctor(this._ptr.querySelectorAll$1(selectors));
}
ElementWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new ElementEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for AnchorElementWrappingImplementation **************
$inherits(AnchorElementWrappingImplementation, ElementWrappingImplementation);
function AnchorElementWrappingImplementation() {}
AnchorElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
AnchorElementWrappingImplementation._wrap$ctor.prototype = AnchorElementWrappingImplementation.prototype;
AnchorElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
AnchorElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
AnchorElementWrappingImplementation.prototype.toString = function() {
  return this._ptr.toString$0();
}
AnchorElementWrappingImplementation.prototype.toString$0 = AnchorElementWrappingImplementation.prototype.toString;
// ********** Code for AreaElementWrappingImplementation **************
$inherits(AreaElementWrappingImplementation, ElementWrappingImplementation);
function AreaElementWrappingImplementation() {}
AreaElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
AreaElementWrappingImplementation._wrap$ctor.prototype = AreaElementWrappingImplementation.prototype;
AreaElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for MediaElementWrappingImplementation **************
$inherits(MediaElementWrappingImplementation, ElementWrappingImplementation);
function MediaElementWrappingImplementation() {}
MediaElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MediaElementWrappingImplementation._wrap$ctor.prototype = MediaElementWrappingImplementation.prototype;
MediaElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
MediaElementWrappingImplementation.prototype.get$src = function() {
  return this._ptr.get$src();
}
MediaElementWrappingImplementation.prototype.set$src = function(value) {
  this._ptr.set$src(value);
}
// ********** Code for AudioElementWrappingImplementation **************
$inherits(AudioElementWrappingImplementation, MediaElementWrappingImplementation);
function AudioElementWrappingImplementation() {}
AudioElementWrappingImplementation._wrap$ctor = function(ptr) {
  MediaElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
AudioElementWrappingImplementation._wrap$ctor.prototype = AudioElementWrappingImplementation.prototype;
AudioElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for EventWrappingImplementation **************
$inherits(EventWrappingImplementation, DOMWrapperBase);
function EventWrappingImplementation() {}
EventWrappingImplementation._wrap$ctor = function(ptr) {
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
EventWrappingImplementation._wrap$ctor.prototype = EventWrappingImplementation.prototype;
// ********** Code for AudioProcessingEventWrappingImplementation **************
$inherits(AudioProcessingEventWrappingImplementation, EventWrappingImplementation);
function AudioProcessingEventWrappingImplementation() {}
AudioProcessingEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
AudioProcessingEventWrappingImplementation._wrap$ctor.prototype = AudioProcessingEventWrappingImplementation.prototype;
// ********** Code for BRElementWrappingImplementation **************
$inherits(BRElementWrappingImplementation, ElementWrappingImplementation);
function BRElementWrappingImplementation() {}
BRElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
BRElementWrappingImplementation._wrap$ctor.prototype = BRElementWrappingImplementation.prototype;
BRElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
BRElementWrappingImplementation.prototype.get$clear = function() {
  return this._ptr.get$clear();
}
BRElementWrappingImplementation.prototype.clear$0 = function() {
  return this.get$clear().call$0();
};
BRElementWrappingImplementation.prototype.clear$1 = function($0) {
  return this.get$clear().call$1($0);
};
// ********** Code for BaseElementWrappingImplementation **************
$inherits(BaseElementWrappingImplementation, ElementWrappingImplementation);
function BaseElementWrappingImplementation() {}
BaseElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
BaseElementWrappingImplementation._wrap$ctor.prototype = BaseElementWrappingImplementation.prototype;
BaseElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for ButtonElementWrappingImplementation **************
$inherits(ButtonElementWrappingImplementation, ElementWrappingImplementation);
function ButtonElementWrappingImplementation() {}
ButtonElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ButtonElementWrappingImplementation._wrap$ctor.prototype = ButtonElementWrappingImplementation.prototype;
ButtonElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
ButtonElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
ButtonElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
ButtonElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
ButtonElementWrappingImplementation.prototype.click = function() {
  this._ptr.click$0();
  return;
}
ButtonElementWrappingImplementation.prototype.get$click = function() {
  return this.click.bind(this);
}
ButtonElementWrappingImplementation.prototype.click$0 = ButtonElementWrappingImplementation.prototype.click;
// ********** Code for CharacterDataWrappingImplementation **************
$inherits(CharacterDataWrappingImplementation, NodeWrappingImplementation);
function CharacterDataWrappingImplementation() {}
CharacterDataWrappingImplementation._wrap$ctor = function(ptr) {
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
CharacterDataWrappingImplementation._wrap$ctor.prototype = CharacterDataWrappingImplementation.prototype;
CharacterDataWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
// ********** Code for TextWrappingImplementation **************
$inherits(TextWrappingImplementation, CharacterDataWrappingImplementation);
function TextWrappingImplementation() {}
TextWrappingImplementation._wrap$ctor = function(ptr) {
  CharacterDataWrappingImplementation._wrap$ctor.call(this, ptr);
}
TextWrappingImplementation._wrap$ctor.prototype = TextWrappingImplementation.prototype;
// ********** Code for CDATASectionWrappingImplementation **************
$inherits(CDATASectionWrappingImplementation, TextWrappingImplementation);
function CDATASectionWrappingImplementation() {}
CDATASectionWrappingImplementation._wrap$ctor = function(ptr) {
  TextWrappingImplementation._wrap$ctor.call(this, ptr);
}
CDATASectionWrappingImplementation._wrap$ctor.prototype = CDATASectionWrappingImplementation.prototype;
// ********** Code for CanvasElementWrappingImplementation **************
$inherits(CanvasElementWrappingImplementation, ElementWrappingImplementation);
function CanvasElementWrappingImplementation() {}
CanvasElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
CanvasElementWrappingImplementation._wrap$ctor.prototype = CanvasElementWrappingImplementation.prototype;
CanvasElementWrappingImplementation.prototype.is$CanvasElement = function(){return true};
CanvasElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
CanvasElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
CanvasElementWrappingImplementation.prototype.get$width = function() {
  return this._ptr.get$width();
}
CanvasElementWrappingImplementation.prototype.getContext = function(contextId) {
  if (contextId == null) {
    return LevelDom.wrapCanvasRenderingContext(this._ptr.getContext$0());
  }
  else {
    return LevelDom.wrapCanvasRenderingContext(this._ptr.getContext$1(contextId));
  }
}
CanvasElementWrappingImplementation.prototype.getContext$0 = CanvasElementWrappingImplementation.prototype.getContext;
CanvasElementWrappingImplementation.prototype.getContext$1 = CanvasElementWrappingImplementation.prototype.getContext;
// ********** Code for CanvasRenderingContextWrappingImplementation **************
$inherits(CanvasRenderingContextWrappingImplementation, DOMWrapperBase);
function CanvasRenderingContextWrappingImplementation() {}
CanvasRenderingContextWrappingImplementation._wrap$ctor = function(ptr) {
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
CanvasRenderingContextWrappingImplementation._wrap$ctor.prototype = CanvasRenderingContextWrappingImplementation.prototype;
// ********** Code for CanvasRenderingContext2DWrappingImplementation **************
$inherits(CanvasRenderingContext2DWrappingImplementation, CanvasRenderingContextWrappingImplementation);
function CanvasRenderingContext2DWrappingImplementation() {}
CanvasRenderingContext2DWrappingImplementation._wrap$ctor = function(ptr) {
  CanvasRenderingContextWrappingImplementation._wrap$ctor.call(this, ptr);
}
CanvasRenderingContext2DWrappingImplementation._wrap$ctor.prototype = CanvasRenderingContext2DWrappingImplementation.prototype;
CanvasRenderingContext2DWrappingImplementation.prototype.beginPath = function() {
  this._ptr.beginPath$0();
  return;
}
CanvasRenderingContext2DWrappingImplementation.prototype.clip = function() {
  this._ptr.clip$0();
  return;
}
CanvasRenderingContext2DWrappingImplementation.prototype.drawImage = function(canvas_OR_image, sx_OR_x, sy_OR_y, sw_OR_width, height_OR_sh, dx, dy, dw, dh) {
  if (!!(canvas_OR_image && canvas_OR_image.is$ImageElement())) {
    if (sw_OR_width == null) {
      if (height_OR_sh == null) {
        if (dx == null) {
          if (dy == null) {
            if (dw == null) {
              if (dh == null) {
                this._ptr.drawImage$3(LevelDom.unwrapMaybePrimitive(canvas_OR_image), sx_OR_x, sy_OR_y);
                return;
              }
            }
          }
        }
      }
    }
    else {
      if (dx == null) {
        if (dy == null) {
          if (dw == null) {
            if (dh == null) {
              this._ptr.drawImage$5(LevelDom.unwrapMaybePrimitive(canvas_OR_image), sx_OR_x, sy_OR_y, sw_OR_width, height_OR_sh);
              return;
            }
          }
        }
      }
      else {
        this._ptr.drawImage$9(LevelDom.unwrapMaybePrimitive(canvas_OR_image), sx_OR_x, sy_OR_y, sw_OR_width, height_OR_sh, dx, dy, dw, dh);
        return;
      }
    }
  }
  else {
    if (!!(canvas_OR_image && canvas_OR_image.is$CanvasElement())) {
      if (sw_OR_width == null) {
        if (height_OR_sh == null) {
          if (dx == null) {
            if (dy == null) {
              if (dw == null) {
                if (dh == null) {
                  this._ptr.drawImage$3(LevelDom.unwrapMaybePrimitive(canvas_OR_image), sx_OR_x, sy_OR_y);
                  return;
                }
              }
            }
          }
        }
      }
      else {
        if (dx == null) {
          if (dy == null) {
            if (dw == null) {
              if (dh == null) {
                this._ptr.drawImage$5(LevelDom.unwrapMaybePrimitive(canvas_OR_image), sx_OR_x, sy_OR_y, sw_OR_width, height_OR_sh);
                return;
              }
            }
          }
        }
        else {
          this._ptr.drawImage$9(LevelDom.unwrapMaybePrimitive(canvas_OR_image), sx_OR_x, sy_OR_y, sw_OR_width, height_OR_sh, dx, dy, dw, dh);
          return;
        }
      }
    }
  }
  $throw("Incorrect number or type of arguments");
}
CanvasRenderingContext2DWrappingImplementation.prototype.lineTo = function(x, y) {
  this._ptr.lineTo$2(x, y);
  return;
}
CanvasRenderingContext2DWrappingImplementation.prototype.moveTo = function(x, y) {
  this._ptr.moveTo$2(x, y);
  return;
}
CanvasRenderingContext2DWrappingImplementation.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {
  this._ptr.quadraticCurveTo$4(cpx, cpy, x, y);
  return;
}
CanvasRenderingContext2DWrappingImplementation.prototype.beginPath$0 = CanvasRenderingContext2DWrappingImplementation.prototype.beginPath;
CanvasRenderingContext2DWrappingImplementation.prototype.clip$0 = CanvasRenderingContext2DWrappingImplementation.prototype.clip;
CanvasRenderingContext2DWrappingImplementation.prototype.drawImage$3 = CanvasRenderingContext2DWrappingImplementation.prototype.drawImage;
CanvasRenderingContext2DWrappingImplementation.prototype.drawImage$5 = CanvasRenderingContext2DWrappingImplementation.prototype.drawImage;
CanvasRenderingContext2DWrappingImplementation.prototype.drawImage$9 = CanvasRenderingContext2DWrappingImplementation.prototype.drawImage;
CanvasRenderingContext2DWrappingImplementation.prototype.lineTo$2 = CanvasRenderingContext2DWrappingImplementation.prototype.lineTo;
CanvasRenderingContext2DWrappingImplementation.prototype.moveTo$2 = CanvasRenderingContext2DWrappingImplementation.prototype.moveTo;
CanvasRenderingContext2DWrappingImplementation.prototype.quadraticCurveTo$4 = CanvasRenderingContext2DWrappingImplementation.prototype.quadraticCurveTo;
// ********** Code for CommentWrappingImplementation **************
$inherits(CommentWrappingImplementation, CharacterDataWrappingImplementation);
function CommentWrappingImplementation() {}
CommentWrappingImplementation._wrap$ctor = function(ptr) {
  CharacterDataWrappingImplementation._wrap$ctor.call(this, ptr);
}
CommentWrappingImplementation._wrap$ctor.prototype = CommentWrappingImplementation.prototype;
// ********** Code for DListElementWrappingImplementation **************
$inherits(DListElementWrappingImplementation, ElementWrappingImplementation);
function DListElementWrappingImplementation() {}
DListElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
DListElementWrappingImplementation._wrap$ctor.prototype = DListElementWrappingImplementation.prototype;
DListElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for DataListElementWrappingImplementation **************
$inherits(DataListElementWrappingImplementation, ElementWrappingImplementation);
function DataListElementWrappingImplementation() {}
DataListElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
DataListElementWrappingImplementation._wrap$ctor.prototype = DataListElementWrappingImplementation.prototype;
DataListElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for DetailsElementWrappingImplementation **************
$inherits(DetailsElementWrappingImplementation, ElementWrappingImplementation);
function DetailsElementWrappingImplementation() {}
DetailsElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
DetailsElementWrappingImplementation._wrap$ctor.prototype = DetailsElementWrappingImplementation.prototype;
DetailsElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for DivElementWrappingImplementation **************
$inherits(DivElementWrappingImplementation, ElementWrappingImplementation);
function DivElementWrappingImplementation() {}
DivElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
DivElementWrappingImplementation._wrap$ctor.prototype = DivElementWrappingImplementation.prototype;
DivElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for EmbedElementWrappingImplementation **************
$inherits(EmbedElementWrappingImplementation, ElementWrappingImplementation);
function EmbedElementWrappingImplementation() {}
EmbedElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
EmbedElementWrappingImplementation._wrap$ctor.prototype = EmbedElementWrappingImplementation.prototype;
EmbedElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
EmbedElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
EmbedElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
EmbedElementWrappingImplementation.prototype.get$src = function() {
  return this._ptr.get$src();
}
EmbedElementWrappingImplementation.prototype.set$src = function(value) {
  this._ptr.set$src(value);
}
EmbedElementWrappingImplementation.prototype.get$width = function() {
  return this._ptr.get$width();
}
// ********** Code for EntityReferenceWrappingImplementation **************
$inherits(EntityReferenceWrappingImplementation, NodeWrappingImplementation);
function EntityReferenceWrappingImplementation() {}
EntityReferenceWrappingImplementation._wrap$ctor = function(ptr) {
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
EntityReferenceWrappingImplementation._wrap$ctor.prototype = EntityReferenceWrappingImplementation.prototype;
// ********** Code for EntityWrappingImplementation **************
$inherits(EntityWrappingImplementation, NodeWrappingImplementation);
function EntityWrappingImplementation() {}
EntityWrappingImplementation._wrap$ctor = function(ptr) {
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
EntityWrappingImplementation._wrap$ctor.prototype = EntityWrappingImplementation.prototype;
// ********** Code for FieldSetElementWrappingImplementation **************
$inherits(FieldSetElementWrappingImplementation, ElementWrappingImplementation);
function FieldSetElementWrappingImplementation() {}
FieldSetElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
FieldSetElementWrappingImplementation._wrap$ctor.prototype = FieldSetElementWrappingImplementation.prototype;
FieldSetElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for FontElementWrappingImplementation **************
$inherits(FontElementWrappingImplementation, ElementWrappingImplementation);
function FontElementWrappingImplementation() {}
FontElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
FontElementWrappingImplementation._wrap$ctor.prototype = FontElementWrappingImplementation.prototype;
FontElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for FormElementWrappingImplementation **************
$inherits(FormElementWrappingImplementation, ElementWrappingImplementation);
function FormElementWrappingImplementation() {}
FormElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
FormElementWrappingImplementation._wrap$ctor.prototype = FormElementWrappingImplementation.prototype;
FormElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
FormElementWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
FormElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
// ********** Code for HRElementWrappingImplementation **************
$inherits(HRElementWrappingImplementation, ElementWrappingImplementation);
function HRElementWrappingImplementation() {}
HRElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
HRElementWrappingImplementation._wrap$ctor.prototype = HRElementWrappingImplementation.prototype;
HRElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
HRElementWrappingImplementation.prototype.get$width = function() {
  return this._ptr.get$width();
}
// ********** Code for HeadElementWrappingImplementation **************
$inherits(HeadElementWrappingImplementation, ElementWrappingImplementation);
function HeadElementWrappingImplementation() {}
HeadElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
HeadElementWrappingImplementation._wrap$ctor.prototype = HeadElementWrappingImplementation.prototype;
HeadElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for HeadingElementWrappingImplementation **************
$inherits(HeadingElementWrappingImplementation, ElementWrappingImplementation);
function HeadingElementWrappingImplementation() {}
HeadingElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
HeadingElementWrappingImplementation._wrap$ctor.prototype = HeadingElementWrappingImplementation.prototype;
HeadingElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for IDBVersionChangeEventWrappingImplementation **************
$inherits(IDBVersionChangeEventWrappingImplementation, EventWrappingImplementation);
function IDBVersionChangeEventWrappingImplementation() {}
IDBVersionChangeEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
IDBVersionChangeEventWrappingImplementation._wrap$ctor.prototype = IDBVersionChangeEventWrappingImplementation.prototype;
// ********** Code for IFrameElementWrappingImplementation **************
$inherits(IFrameElementWrappingImplementation, ElementWrappingImplementation);
function IFrameElementWrappingImplementation() {}
IFrameElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
IFrameElementWrappingImplementation._wrap$ctor.prototype = IFrameElementWrappingImplementation.prototype;
IFrameElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
IFrameElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
IFrameElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
IFrameElementWrappingImplementation.prototype.get$src = function() {
  return this._ptr.get$src();
}
IFrameElementWrappingImplementation.prototype.set$src = function(value) {
  this._ptr.set$src(value);
}
IFrameElementWrappingImplementation.prototype.get$width = function() {
  return this._ptr.get$width();
}
// ********** Code for ImageElementWrappingImplementation **************
$inherits(ImageElementWrappingImplementation, ElementWrappingImplementation);
function ImageElementWrappingImplementation() {}
ImageElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ImageElementWrappingImplementation._wrap$ctor.prototype = ImageElementWrappingImplementation.prototype;
ImageElementWrappingImplementation.prototype.is$ImageElement = function(){return true};
ImageElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
ImageElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
ImageElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
ImageElementWrappingImplementation.prototype.get$naturalHeight = function() {
  return this._ptr.get$naturalHeight();
}
ImageElementWrappingImplementation.prototype.get$naturalWidth = function() {
  return this._ptr.get$naturalWidth();
}
ImageElementWrappingImplementation.prototype.get$src = function() {
  return this._ptr.get$src();
}
ImageElementWrappingImplementation.prototype.set$src = function(value) {
  this._ptr.set$src(value);
}
ImageElementWrappingImplementation.prototype.get$width = function() {
  return this._ptr.get$width();
}
// ********** Code for InputElementWrappingImplementation **************
$inherits(InputElementWrappingImplementation, ElementWrappingImplementation);
function InputElementWrappingImplementation() {}
InputElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
InputElementWrappingImplementation._wrap$ctor.prototype = InputElementWrappingImplementation.prototype;
InputElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
InputElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
InputElementWrappingImplementation.prototype.get$src = function() {
  return this._ptr.get$src();
}
InputElementWrappingImplementation.prototype.set$src = function(value) {
  this._ptr.set$src(value);
}
InputElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
InputElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
InputElementWrappingImplementation.prototype.set$valueAsNumber = function(value) {
  this._ptr.set$valueAsNumber(value);
}
InputElementWrappingImplementation.prototype.click = function() {
  this._ptr.click$0();
  return;
}
InputElementWrappingImplementation.prototype.get$click = function() {
  return this.click.bind(this);
}
InputElementWrappingImplementation.prototype.click$0 = InputElementWrappingImplementation.prototype.click;
// ********** Code for KeygenElementWrappingImplementation **************
$inherits(KeygenElementWrappingImplementation, ElementWrappingImplementation);
function KeygenElementWrappingImplementation() {}
KeygenElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
KeygenElementWrappingImplementation._wrap$ctor.prototype = KeygenElementWrappingImplementation.prototype;
KeygenElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
KeygenElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
// ********** Code for LIElementWrappingImplementation **************
$inherits(LIElementWrappingImplementation, ElementWrappingImplementation);
function LIElementWrappingImplementation() {}
LIElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
LIElementWrappingImplementation._wrap$ctor.prototype = LIElementWrappingImplementation.prototype;
LIElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
LIElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
LIElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for LabelElementWrappingImplementation **************
$inherits(LabelElementWrappingImplementation, ElementWrappingImplementation);
function LabelElementWrappingImplementation() {}
LabelElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
LabelElementWrappingImplementation._wrap$ctor.prototype = LabelElementWrappingImplementation.prototype;
LabelElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for LegendElementWrappingImplementation **************
$inherits(LegendElementWrappingImplementation, ElementWrappingImplementation);
function LegendElementWrappingImplementation() {}
LegendElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
LegendElementWrappingImplementation._wrap$ctor.prototype = LegendElementWrappingImplementation.prototype;
LegendElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for LinkElementWrappingImplementation **************
$inherits(LinkElementWrappingImplementation, ElementWrappingImplementation);
function LinkElementWrappingImplementation() {}
LinkElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
LinkElementWrappingImplementation._wrap$ctor.prototype = LinkElementWrappingImplementation.prototype;
LinkElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for MapElementWrappingImplementation **************
$inherits(MapElementWrappingImplementation, ElementWrappingImplementation);
function MapElementWrappingImplementation() {}
MapElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MapElementWrappingImplementation._wrap$ctor.prototype = MapElementWrappingImplementation.prototype;
MapElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
MapElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
// ********** Code for MarqueeElementWrappingImplementation **************
$inherits(MarqueeElementWrappingImplementation, ElementWrappingImplementation);
function MarqueeElementWrappingImplementation() {}
MarqueeElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MarqueeElementWrappingImplementation._wrap$ctor.prototype = MarqueeElementWrappingImplementation.prototype;
MarqueeElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
MarqueeElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
MarqueeElementWrappingImplementation.prototype.get$width = function() {
  return this._ptr.get$width();
}
// ********** Code for MenuElementWrappingImplementation **************
$inherits(MenuElementWrappingImplementation, ElementWrappingImplementation);
function MenuElementWrappingImplementation() {}
MenuElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MenuElementWrappingImplementation._wrap$ctor.prototype = MenuElementWrappingImplementation.prototype;
MenuElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for MetaElementWrappingImplementation **************
$inherits(MetaElementWrappingImplementation, ElementWrappingImplementation);
function MetaElementWrappingImplementation() {}
MetaElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MetaElementWrappingImplementation._wrap$ctor.prototype = MetaElementWrappingImplementation.prototype;
MetaElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
MetaElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
// ********** Code for MeterElementWrappingImplementation **************
$inherits(MeterElementWrappingImplementation, ElementWrappingImplementation);
function MeterElementWrappingImplementation() {}
MeterElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MeterElementWrappingImplementation._wrap$ctor.prototype = MeterElementWrappingImplementation.prototype;
MeterElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
MeterElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
MeterElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for ModElementWrappingImplementation **************
$inherits(ModElementWrappingImplementation, ElementWrappingImplementation);
function ModElementWrappingImplementation() {}
ModElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ModElementWrappingImplementation._wrap$ctor.prototype = ModElementWrappingImplementation.prototype;
ModElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for NotationWrappingImplementation **************
$inherits(NotationWrappingImplementation, NodeWrappingImplementation);
function NotationWrappingImplementation() {}
NotationWrappingImplementation._wrap$ctor = function(ptr) {
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
NotationWrappingImplementation._wrap$ctor.prototype = NotationWrappingImplementation.prototype;
// ********** Code for OListElementWrappingImplementation **************
$inherits(OListElementWrappingImplementation, ElementWrappingImplementation);
function OListElementWrappingImplementation() {}
OListElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
OListElementWrappingImplementation._wrap$ctor.prototype = OListElementWrappingImplementation.prototype;
OListElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for OfflineAudioCompletionEventWrappingImplementation **************
$inherits(OfflineAudioCompletionEventWrappingImplementation, EventWrappingImplementation);
function OfflineAudioCompletionEventWrappingImplementation() {}
OfflineAudioCompletionEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
OfflineAudioCompletionEventWrappingImplementation._wrap$ctor.prototype = OfflineAudioCompletionEventWrappingImplementation.prototype;
// ********** Code for OptGroupElementWrappingImplementation **************
$inherits(OptGroupElementWrappingImplementation, ElementWrappingImplementation);
function OptGroupElementWrappingImplementation() {}
OptGroupElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
OptGroupElementWrappingImplementation._wrap$ctor.prototype = OptGroupElementWrappingImplementation.prototype;
OptGroupElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for OptionElementWrappingImplementation **************
$inherits(OptionElementWrappingImplementation, ElementWrappingImplementation);
function OptionElementWrappingImplementation() {}
OptionElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
OptionElementWrappingImplementation._wrap$ctor.prototype = OptionElementWrappingImplementation.prototype;
OptionElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
OptionElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
OptionElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for OutputElementWrappingImplementation **************
$inherits(OutputElementWrappingImplementation, ElementWrappingImplementation);
function OutputElementWrappingImplementation() {}
OutputElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
OutputElementWrappingImplementation._wrap$ctor.prototype = OutputElementWrappingImplementation.prototype;
OutputElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
OutputElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
OutputElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
OutputElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for ParagraphElementWrappingImplementation **************
$inherits(ParagraphElementWrappingImplementation, ElementWrappingImplementation);
function ParagraphElementWrappingImplementation() {}
ParagraphElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ParagraphElementWrappingImplementation._wrap$ctor.prototype = ParagraphElementWrappingImplementation.prototype;
ParagraphElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for ParamElementWrappingImplementation **************
$inherits(ParamElementWrappingImplementation, ElementWrappingImplementation);
function ParamElementWrappingImplementation() {}
ParamElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ParamElementWrappingImplementation._wrap$ctor.prototype = ParamElementWrappingImplementation.prototype;
ParamElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
ParamElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
ParamElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
ParamElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for PreElementWrappingImplementation **************
$inherits(PreElementWrappingImplementation, ElementWrappingImplementation);
function PreElementWrappingImplementation() {}
PreElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
PreElementWrappingImplementation._wrap$ctor.prototype = PreElementWrappingImplementation.prototype;
PreElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
PreElementWrappingImplementation.prototype.get$width = function() {
  return this._ptr.get$width();
}
// ********** Code for ProcessingInstructionWrappingImplementation **************
$inherits(ProcessingInstructionWrappingImplementation, NodeWrappingImplementation);
function ProcessingInstructionWrappingImplementation() {}
ProcessingInstructionWrappingImplementation._wrap$ctor = function(ptr) {
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
ProcessingInstructionWrappingImplementation._wrap$ctor.prototype = ProcessingInstructionWrappingImplementation.prototype;
// ********** Code for ProgressElementWrappingImplementation **************
$inherits(ProgressElementWrappingImplementation, ElementWrappingImplementation);
function ProgressElementWrappingImplementation() {}
ProgressElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ProgressElementWrappingImplementation._wrap$ctor.prototype = ProgressElementWrappingImplementation.prototype;
ProgressElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
ProgressElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
ProgressElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for QuoteElementWrappingImplementation **************
$inherits(QuoteElementWrappingImplementation, ElementWrappingImplementation);
function QuoteElementWrappingImplementation() {}
QuoteElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
QuoteElementWrappingImplementation._wrap$ctor.prototype = QuoteElementWrappingImplementation.prototype;
QuoteElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGElementWrappingImplementation **************
$inherits(SVGElementWrappingImplementation, ElementWrappingImplementation);
function SVGElementWrappingImplementation() {}
SVGElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGElementWrappingImplementation._wrap$ctor.prototype = SVGElementWrappingImplementation.prototype;
SVGElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGElementWrappingImplementation.prototype.get$classes = function() {
  if (this._cssClassSet == null) {
    this._cssClassSet = new _SVGClassSet(this._ptr);
  }
  return this._cssClassSet;
}
SVGElementWrappingImplementation.prototype.get$elements = function() {
  if (this._elements == null) {
    this._elements = new FilteredElementList(this);
  }
  return this._elements;
}
SVGElementWrappingImplementation.prototype.set$elements = function(value) {
  var elements = this.get$elements();
  elements.clear$0();
  elements.addAll$1(value);
}
SVGElementWrappingImplementation.prototype.set$innerHTML = function(svg) {
  var container = ElementWrappingImplementation.ElementWrappingImplementation$tag$factory("div");
  container.set$innerHTML(("<svg version=\"1.1\">" + svg + "</svg>"));
  this.set$elements(container.get$elements().get$first().get$elements());
}
// ********** Code for SVGAElementWrappingImplementation **************
$inherits(SVGAElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGAElementWrappingImplementation() {}
SVGAElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAElementWrappingImplementation._wrap$ctor.prototype = SVGAElementWrappingImplementation.prototype;
SVGAElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGAElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGAElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGAltGlyphDefElementWrappingImplementation **************
$inherits(SVGAltGlyphDefElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGAltGlyphDefElementWrappingImplementation() {}
SVGAltGlyphDefElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAltGlyphDefElementWrappingImplementation._wrap$ctor.prototype = SVGAltGlyphDefElementWrappingImplementation.prototype;
SVGAltGlyphDefElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGTextContentElementWrappingImplementation **************
$inherits(SVGTextContentElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGTextContentElementWrappingImplementation() {}
SVGTextContentElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTextContentElementWrappingImplementation._wrap$ctor.prototype = SVGTextContentElementWrappingImplementation.prototype;
SVGTextContentElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGTextContentElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGTextContentElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGTextPositioningElementWrappingImplementation **************
$inherits(SVGTextPositioningElementWrappingImplementation, SVGTextContentElementWrappingImplementation);
function SVGTextPositioningElementWrappingImplementation() {}
SVGTextPositioningElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGTextContentElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTextPositioningElementWrappingImplementation._wrap$ctor.prototype = SVGTextPositioningElementWrappingImplementation.prototype;
SVGTextPositioningElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGAltGlyphElementWrappingImplementation **************
$inherits(SVGAltGlyphElementWrappingImplementation, SVGTextPositioningElementWrappingImplementation);
function SVGAltGlyphElementWrappingImplementation() {}
SVGAltGlyphElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGTextPositioningElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAltGlyphElementWrappingImplementation._wrap$ctor.prototype = SVGAltGlyphElementWrappingImplementation.prototype;
SVGAltGlyphElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGAltGlyphItemElementWrappingImplementation **************
$inherits(SVGAltGlyphItemElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGAltGlyphItemElementWrappingImplementation() {}
SVGAltGlyphItemElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAltGlyphItemElementWrappingImplementation._wrap$ctor.prototype = SVGAltGlyphItemElementWrappingImplementation.prototype;
SVGAltGlyphItemElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGAnimationElementWrappingImplementation **************
$inherits(SVGAnimationElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGAnimationElementWrappingImplementation() {}
SVGAnimationElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimationElementWrappingImplementation._wrap$ctor.prototype = SVGAnimationElementWrappingImplementation.prototype;
SVGAnimationElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGAnimateColorElementWrappingImplementation **************
$inherits(SVGAnimateColorElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGAnimateColorElementWrappingImplementation() {}
SVGAnimateColorElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimateColorElementWrappingImplementation._wrap$ctor.prototype = SVGAnimateColorElementWrappingImplementation.prototype;
SVGAnimateColorElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGAnimateElementWrappingImplementation **************
$inherits(SVGAnimateElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGAnimateElementWrappingImplementation() {}
SVGAnimateElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimateElementWrappingImplementation._wrap$ctor.prototype = SVGAnimateElementWrappingImplementation.prototype;
SVGAnimateElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGAnimateMotionElementWrappingImplementation **************
$inherits(SVGAnimateMotionElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGAnimateMotionElementWrappingImplementation() {}
SVGAnimateMotionElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimateMotionElementWrappingImplementation._wrap$ctor.prototype = SVGAnimateMotionElementWrappingImplementation.prototype;
SVGAnimateMotionElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGAnimateTransformElementWrappingImplementation **************
$inherits(SVGAnimateTransformElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGAnimateTransformElementWrappingImplementation() {}
SVGAnimateTransformElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimateTransformElementWrappingImplementation._wrap$ctor.prototype = SVGAnimateTransformElementWrappingImplementation.prototype;
SVGAnimateTransformElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGAnimatedLengthWrappingImplementation **************
$inherits(SVGAnimatedLengthWrappingImplementation, DOMWrapperBase);
function SVGAnimatedLengthWrappingImplementation() {}
SVGAnimatedLengthWrappingImplementation._wrap$ctor = function(ptr) {
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
SVGAnimatedLengthWrappingImplementation._wrap$ctor.prototype = SVGAnimatedLengthWrappingImplementation.prototype;
SVGAnimatedLengthWrappingImplementation.prototype.get$baseVal = function() {
  return LevelDom.wrapSVGLength(this._ptr.get$baseVal());
}
// ********** Code for SVGAnimatedStringWrappingImplementation **************
$inherits(SVGAnimatedStringWrappingImplementation, DOMWrapperBase);
function SVGAnimatedStringWrappingImplementation() {}
SVGAnimatedStringWrappingImplementation._wrap$ctor = function(ptr) {
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
SVGAnimatedStringWrappingImplementation._wrap$ctor.prototype = SVGAnimatedStringWrappingImplementation.prototype;
SVGAnimatedStringWrappingImplementation.prototype.get$baseVal = function() {
  return this._ptr.get$baseVal();
}
SVGAnimatedStringWrappingImplementation.prototype.set$baseVal = function(value) {
  this._ptr.set$baseVal(value);
}
// ********** Code for SVGCircleElementWrappingImplementation **************
$inherits(SVGCircleElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGCircleElementWrappingImplementation() {}
SVGCircleElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGCircleElementWrappingImplementation._wrap$ctor.prototype = SVGCircleElementWrappingImplementation.prototype;
SVGCircleElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGCircleElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGCircleElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGClipPathElementWrappingImplementation **************
$inherits(SVGClipPathElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGClipPathElementWrappingImplementation() {}
SVGClipPathElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGClipPathElementWrappingImplementation._wrap$ctor.prototype = SVGClipPathElementWrappingImplementation.prototype;
SVGClipPathElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGClipPathElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGClipPathElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGComponentTransferFunctionElementWrappingImplementation **************
$inherits(SVGComponentTransferFunctionElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGComponentTransferFunctionElementWrappingImplementation() {}
SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.prototype = SVGComponentTransferFunctionElementWrappingImplementation.prototype;
SVGComponentTransferFunctionElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGCursorElementWrappingImplementation **************
$inherits(SVGCursorElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGCursorElementWrappingImplementation() {}
SVGCursorElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGCursorElementWrappingImplementation._wrap$ctor.prototype = SVGCursorElementWrappingImplementation.prototype;
SVGCursorElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGDefsElementWrappingImplementation **************
$inherits(SVGDefsElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGDefsElementWrappingImplementation() {}
SVGDefsElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGDefsElementWrappingImplementation._wrap$ctor.prototype = SVGDefsElementWrappingImplementation.prototype;
SVGDefsElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGDefsElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGDefsElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGDescElementWrappingImplementation **************
$inherits(SVGDescElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGDescElementWrappingImplementation() {}
SVGDescElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGDescElementWrappingImplementation._wrap$ctor.prototype = SVGDescElementWrappingImplementation.prototype;
SVGDescElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGDescElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGDescElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGEllipseElementWrappingImplementation **************
$inherits(SVGEllipseElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGEllipseElementWrappingImplementation() {}
SVGEllipseElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGEllipseElementWrappingImplementation._wrap$ctor.prototype = SVGEllipseElementWrappingImplementation.prototype;
SVGEllipseElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGEllipseElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGEllipseElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEBlendElementWrappingImplementation **************
$inherits(SVGFEBlendElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEBlendElementWrappingImplementation() {}
SVGFEBlendElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEBlendElementWrappingImplementation._wrap$ctor.prototype = SVGFEBlendElementWrappingImplementation.prototype;
SVGFEBlendElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFEBlendElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEBlendElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFEBlendElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFEBlendElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEColorMatrixElementWrappingImplementation **************
$inherits(SVGFEColorMatrixElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEColorMatrixElementWrappingImplementation() {}
SVGFEColorMatrixElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEColorMatrixElementWrappingImplementation._wrap$ctor.prototype = SVGFEColorMatrixElementWrappingImplementation.prototype;
SVGFEColorMatrixElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFEColorMatrixElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEColorMatrixElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFEColorMatrixElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFEColorMatrixElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEComponentTransferElementWrappingImplementation **************
$inherits(SVGFEComponentTransferElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEComponentTransferElementWrappingImplementation() {}
SVGFEComponentTransferElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEComponentTransferElementWrappingImplementation._wrap$ctor.prototype = SVGFEComponentTransferElementWrappingImplementation.prototype;
SVGFEComponentTransferElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFEComponentTransferElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEComponentTransferElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFEComponentTransferElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFEComponentTransferElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEConvolveMatrixElementWrappingImplementation **************
$inherits(SVGFEConvolveMatrixElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEConvolveMatrixElementWrappingImplementation() {}
SVGFEConvolveMatrixElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEConvolveMatrixElementWrappingImplementation._wrap$ctor.prototype = SVGFEConvolveMatrixElementWrappingImplementation.prototype;
SVGFEConvolveMatrixElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFEConvolveMatrixElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEConvolveMatrixElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFEConvolveMatrixElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFEConvolveMatrixElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEDiffuseLightingElementWrappingImplementation **************
$inherits(SVGFEDiffuseLightingElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEDiffuseLightingElementWrappingImplementation() {}
SVGFEDiffuseLightingElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEDiffuseLightingElementWrappingImplementation._wrap$ctor.prototype = SVGFEDiffuseLightingElementWrappingImplementation.prototype;
SVGFEDiffuseLightingElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFEDiffuseLightingElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEDiffuseLightingElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFEDiffuseLightingElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFEDiffuseLightingElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEDisplacementMapElementWrappingImplementation **************
$inherits(SVGFEDisplacementMapElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEDisplacementMapElementWrappingImplementation() {}
SVGFEDisplacementMapElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEDisplacementMapElementWrappingImplementation._wrap$ctor.prototype = SVGFEDisplacementMapElementWrappingImplementation.prototype;
SVGFEDisplacementMapElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFEDisplacementMapElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEDisplacementMapElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFEDisplacementMapElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFEDisplacementMapElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEDistantLightElementWrappingImplementation **************
$inherits(SVGFEDistantLightElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEDistantLightElementWrappingImplementation() {}
SVGFEDistantLightElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEDistantLightElementWrappingImplementation._wrap$ctor.prototype = SVGFEDistantLightElementWrappingImplementation.prototype;
SVGFEDistantLightElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFEDropShadowElementWrappingImplementation **************
$inherits(SVGFEDropShadowElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEDropShadowElementWrappingImplementation() {}
SVGFEDropShadowElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEDropShadowElementWrappingImplementation._wrap$ctor.prototype = SVGFEDropShadowElementWrappingImplementation.prototype;
SVGFEDropShadowElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFEDropShadowElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEDropShadowElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFEDropShadowElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFEDropShadowElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEFloodElementWrappingImplementation **************
$inherits(SVGFEFloodElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEFloodElementWrappingImplementation() {}
SVGFEFloodElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFloodElementWrappingImplementation._wrap$ctor.prototype = SVGFEFloodElementWrappingImplementation.prototype;
SVGFEFloodElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFEFloodElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEFloodElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFEFloodElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFEFloodElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEFuncAElementWrappingImplementation **************
$inherits(SVGFEFuncAElementWrappingImplementation, SVGComponentTransferFunctionElementWrappingImplementation);
function SVGFEFuncAElementWrappingImplementation() {}
SVGFEFuncAElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFuncAElementWrappingImplementation._wrap$ctor.prototype = SVGFEFuncAElementWrappingImplementation.prototype;
SVGFEFuncAElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFEFuncBElementWrappingImplementation **************
$inherits(SVGFEFuncBElementWrappingImplementation, SVGComponentTransferFunctionElementWrappingImplementation);
function SVGFEFuncBElementWrappingImplementation() {}
SVGFEFuncBElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFuncBElementWrappingImplementation._wrap$ctor.prototype = SVGFEFuncBElementWrappingImplementation.prototype;
SVGFEFuncBElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFEFuncGElementWrappingImplementation **************
$inherits(SVGFEFuncGElementWrappingImplementation, SVGComponentTransferFunctionElementWrappingImplementation);
function SVGFEFuncGElementWrappingImplementation() {}
SVGFEFuncGElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFuncGElementWrappingImplementation._wrap$ctor.prototype = SVGFEFuncGElementWrappingImplementation.prototype;
SVGFEFuncGElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFEFuncRElementWrappingImplementation **************
$inherits(SVGFEFuncRElementWrappingImplementation, SVGComponentTransferFunctionElementWrappingImplementation);
function SVGFEFuncRElementWrappingImplementation() {}
SVGFEFuncRElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFuncRElementWrappingImplementation._wrap$ctor.prototype = SVGFEFuncRElementWrappingImplementation.prototype;
SVGFEFuncRElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFEGaussianBlurElementWrappingImplementation **************
$inherits(SVGFEGaussianBlurElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEGaussianBlurElementWrappingImplementation() {}
SVGFEGaussianBlurElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEGaussianBlurElementWrappingImplementation._wrap$ctor.prototype = SVGFEGaussianBlurElementWrappingImplementation.prototype;
SVGFEGaussianBlurElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFEGaussianBlurElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEGaussianBlurElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFEGaussianBlurElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFEGaussianBlurElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEImageElementWrappingImplementation **************
$inherits(SVGFEImageElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEImageElementWrappingImplementation() {}
SVGFEImageElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEImageElementWrappingImplementation._wrap$ctor.prototype = SVGFEImageElementWrappingImplementation.prototype;
SVGFEImageElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFEImageElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEImageElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFEImageElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFEImageElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEMergeElementWrappingImplementation **************
$inherits(SVGFEMergeElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEMergeElementWrappingImplementation() {}
SVGFEMergeElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEMergeElementWrappingImplementation._wrap$ctor.prototype = SVGFEMergeElementWrappingImplementation.prototype;
SVGFEMergeElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFEMergeElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEMergeElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFEMergeElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFEMergeElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEMergeNodeElementWrappingImplementation **************
$inherits(SVGFEMergeNodeElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEMergeNodeElementWrappingImplementation() {}
SVGFEMergeNodeElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEMergeNodeElementWrappingImplementation._wrap$ctor.prototype = SVGFEMergeNodeElementWrappingImplementation.prototype;
SVGFEMergeNodeElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFEOffsetElementWrappingImplementation **************
$inherits(SVGFEOffsetElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEOffsetElementWrappingImplementation() {}
SVGFEOffsetElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEOffsetElementWrappingImplementation._wrap$ctor.prototype = SVGFEOffsetElementWrappingImplementation.prototype;
SVGFEOffsetElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFEOffsetElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEOffsetElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFEOffsetElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFEOffsetElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEPointLightElementWrappingImplementation **************
$inherits(SVGFEPointLightElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEPointLightElementWrappingImplementation() {}
SVGFEPointLightElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEPointLightElementWrappingImplementation._wrap$ctor.prototype = SVGFEPointLightElementWrappingImplementation.prototype;
SVGFEPointLightElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFESpecularLightingElementWrappingImplementation **************
$inherits(SVGFESpecularLightingElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFESpecularLightingElementWrappingImplementation() {}
SVGFESpecularLightingElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFESpecularLightingElementWrappingImplementation._wrap$ctor.prototype = SVGFESpecularLightingElementWrappingImplementation.prototype;
SVGFESpecularLightingElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFESpecularLightingElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFESpecularLightingElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFESpecularLightingElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFESpecularLightingElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFESpotLightElementWrappingImplementation **************
$inherits(SVGFESpotLightElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFESpotLightElementWrappingImplementation() {}
SVGFESpotLightElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFESpotLightElementWrappingImplementation._wrap$ctor.prototype = SVGFESpotLightElementWrappingImplementation.prototype;
SVGFESpotLightElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFETileElementWrappingImplementation **************
$inherits(SVGFETileElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFETileElementWrappingImplementation() {}
SVGFETileElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFETileElementWrappingImplementation._wrap$ctor.prototype = SVGFETileElementWrappingImplementation.prototype;
SVGFETileElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFETileElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFETileElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFETileElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFETileElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFETurbulenceElementWrappingImplementation **************
$inherits(SVGFETurbulenceElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFETurbulenceElementWrappingImplementation() {}
SVGFETurbulenceElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFETurbulenceElementWrappingImplementation._wrap$ctor.prototype = SVGFETurbulenceElementWrappingImplementation.prototype;
SVGFETurbulenceElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFETurbulenceElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFETurbulenceElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFETurbulenceElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFETurbulenceElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFilterElementWrappingImplementation **************
$inherits(SVGFilterElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFilterElementWrappingImplementation() {}
SVGFilterElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFilterElementWrappingImplementation._wrap$ctor.prototype = SVGFilterElementWrappingImplementation.prototype;
SVGFilterElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGFilterElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFilterElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGFilterElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGFilterElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFontElementWrappingImplementation **************
$inherits(SVGFontElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontElementWrappingImplementation() {}
SVGFontElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontElementWrappingImplementation._wrap$ctor.prototype = SVGFontElementWrappingImplementation.prototype;
SVGFontElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFontFaceElementWrappingImplementation **************
$inherits(SVGFontFaceElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceElementWrappingImplementation() {}
SVGFontFaceElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceElementWrappingImplementation.prototype;
SVGFontFaceElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFontFaceFormatElementWrappingImplementation **************
$inherits(SVGFontFaceFormatElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceFormatElementWrappingImplementation() {}
SVGFontFaceFormatElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceFormatElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceFormatElementWrappingImplementation.prototype;
SVGFontFaceFormatElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFontFaceNameElementWrappingImplementation **************
$inherits(SVGFontFaceNameElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceNameElementWrappingImplementation() {}
SVGFontFaceNameElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceNameElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceNameElementWrappingImplementation.prototype;
SVGFontFaceNameElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFontFaceSrcElementWrappingImplementation **************
$inherits(SVGFontFaceSrcElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceSrcElementWrappingImplementation() {}
SVGFontFaceSrcElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceSrcElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceSrcElementWrappingImplementation.prototype;
SVGFontFaceSrcElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGFontFaceUriElementWrappingImplementation **************
$inherits(SVGFontFaceUriElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceUriElementWrappingImplementation() {}
SVGFontFaceUriElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceUriElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceUriElementWrappingImplementation.prototype;
SVGFontFaceUriElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGForeignObjectElementWrappingImplementation **************
$inherits(SVGForeignObjectElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGForeignObjectElementWrappingImplementation() {}
SVGForeignObjectElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGForeignObjectElementWrappingImplementation._wrap$ctor.prototype = SVGForeignObjectElementWrappingImplementation.prototype;
SVGForeignObjectElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGForeignObjectElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGForeignObjectElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGForeignObjectElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGForeignObjectElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGGElementWrappingImplementation **************
$inherits(SVGGElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGGElementWrappingImplementation() {}
SVGGElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGGElementWrappingImplementation._wrap$ctor.prototype = SVGGElementWrappingImplementation.prototype;
SVGGElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGGElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGGElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGGlyphElementWrappingImplementation **************
$inherits(SVGGlyphElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGGlyphElementWrappingImplementation() {}
SVGGlyphElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGGlyphElementWrappingImplementation._wrap$ctor.prototype = SVGGlyphElementWrappingImplementation.prototype;
SVGGlyphElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGGlyphRefElementWrappingImplementation **************
$inherits(SVGGlyphRefElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGGlyphRefElementWrappingImplementation() {}
SVGGlyphRefElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGGlyphRefElementWrappingImplementation._wrap$ctor.prototype = SVGGlyphRefElementWrappingImplementation.prototype;
SVGGlyphRefElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGGlyphRefElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGGlyphRefElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGGradientElementWrappingImplementation **************
$inherits(SVGGradientElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGGradientElementWrappingImplementation() {}
SVGGradientElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGGradientElementWrappingImplementation._wrap$ctor.prototype = SVGGradientElementWrappingImplementation.prototype;
SVGGradientElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGGradientElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGGradientElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGHKernElementWrappingImplementation **************
$inherits(SVGHKernElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGHKernElementWrappingImplementation() {}
SVGHKernElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGHKernElementWrappingImplementation._wrap$ctor.prototype = SVGHKernElementWrappingImplementation.prototype;
SVGHKernElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGImageElementWrappingImplementation **************
$inherits(SVGImageElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGImageElementWrappingImplementation() {}
SVGImageElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGImageElementWrappingImplementation._wrap$ctor.prototype = SVGImageElementWrappingImplementation.prototype;
SVGImageElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGImageElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGImageElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGImageElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGImageElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGLengthWrappingImplementation **************
$inherits(SVGLengthWrappingImplementation, DOMWrapperBase);
function SVGLengthWrappingImplementation() {}
SVGLengthWrappingImplementation._wrap$ctor = function(ptr) {
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
SVGLengthWrappingImplementation._wrap$ctor.prototype = SVGLengthWrappingImplementation.prototype;
SVGLengthWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
SVGLengthWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for SVGLineElementWrappingImplementation **************
$inherits(SVGLineElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGLineElementWrappingImplementation() {}
SVGLineElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGLineElementWrappingImplementation._wrap$ctor.prototype = SVGLineElementWrappingImplementation.prototype;
SVGLineElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGLineElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGLineElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGLinearGradientElementWrappingImplementation **************
$inherits(SVGLinearGradientElementWrappingImplementation, SVGGradientElementWrappingImplementation);
function SVGLinearGradientElementWrappingImplementation() {}
SVGLinearGradientElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGGradientElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGLinearGradientElementWrappingImplementation._wrap$ctor.prototype = SVGLinearGradientElementWrappingImplementation.prototype;
SVGLinearGradientElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGMPathElementWrappingImplementation **************
$inherits(SVGMPathElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMPathElementWrappingImplementation() {}
SVGMPathElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMPathElementWrappingImplementation._wrap$ctor.prototype = SVGMPathElementWrappingImplementation.prototype;
SVGMPathElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGMarkerElementWrappingImplementation **************
$inherits(SVGMarkerElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMarkerElementWrappingImplementation() {}
SVGMarkerElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMarkerElementWrappingImplementation._wrap$ctor.prototype = SVGMarkerElementWrappingImplementation.prototype;
SVGMarkerElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGMarkerElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGMarkerElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGMaskElementWrappingImplementation **************
$inherits(SVGMaskElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMaskElementWrappingImplementation() {}
SVGMaskElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMaskElementWrappingImplementation._wrap$ctor.prototype = SVGMaskElementWrappingImplementation.prototype;
SVGMaskElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGMaskElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGMaskElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGMaskElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGMaskElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGMetadataElementWrappingImplementation **************
$inherits(SVGMetadataElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMetadataElementWrappingImplementation() {}
SVGMetadataElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMetadataElementWrappingImplementation._wrap$ctor.prototype = SVGMetadataElementWrappingImplementation.prototype;
SVGMetadataElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGMissingGlyphElementWrappingImplementation **************
$inherits(SVGMissingGlyphElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMissingGlyphElementWrappingImplementation() {}
SVGMissingGlyphElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMissingGlyphElementWrappingImplementation._wrap$ctor.prototype = SVGMissingGlyphElementWrappingImplementation.prototype;
SVGMissingGlyphElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGPathElementWrappingImplementation **************
$inherits(SVGPathElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGPathElementWrappingImplementation() {}
SVGPathElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGPathElementWrappingImplementation._wrap$ctor.prototype = SVGPathElementWrappingImplementation.prototype;
SVGPathElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGPathElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGPathElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGPatternElementWrappingImplementation **************
$inherits(SVGPatternElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGPatternElementWrappingImplementation() {}
SVGPatternElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGPatternElementWrappingImplementation._wrap$ctor.prototype = SVGPatternElementWrappingImplementation.prototype;
SVGPatternElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGPatternElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGPatternElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGPatternElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGPatternElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGPolygonElementWrappingImplementation **************
$inherits(SVGPolygonElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGPolygonElementWrappingImplementation() {}
SVGPolygonElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGPolygonElementWrappingImplementation._wrap$ctor.prototype = SVGPolygonElementWrappingImplementation.prototype;
SVGPolygonElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGPolygonElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGPolygonElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGPolylineElementWrappingImplementation **************
$inherits(SVGPolylineElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGPolylineElementWrappingImplementation() {}
SVGPolylineElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGPolylineElementWrappingImplementation._wrap$ctor.prototype = SVGPolylineElementWrappingImplementation.prototype;
SVGPolylineElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGPolylineElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGPolylineElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGRadialGradientElementWrappingImplementation **************
$inherits(SVGRadialGradientElementWrappingImplementation, SVGGradientElementWrappingImplementation);
function SVGRadialGradientElementWrappingImplementation() {}
SVGRadialGradientElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGGradientElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGRadialGradientElementWrappingImplementation._wrap$ctor.prototype = SVGRadialGradientElementWrappingImplementation.prototype;
SVGRadialGradientElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGRectElementWrappingImplementation **************
$inherits(SVGRectElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGRectElementWrappingImplementation() {}
SVGRectElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGRectElementWrappingImplementation._wrap$ctor.prototype = SVGRectElementWrappingImplementation.prototype;
SVGRectElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGRectElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGRectElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGRectElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGRectElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGScriptElementWrappingImplementation **************
$inherits(SVGScriptElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGScriptElementWrappingImplementation() {}
SVGScriptElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGScriptElementWrappingImplementation._wrap$ctor.prototype = SVGScriptElementWrappingImplementation.prototype;
SVGScriptElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGSetElementWrappingImplementation **************
$inherits(SVGSetElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGSetElementWrappingImplementation() {}
SVGSetElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGSetElementWrappingImplementation._wrap$ctor.prototype = SVGSetElementWrappingImplementation.prototype;
SVGSetElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGStopElementWrappingImplementation **************
$inherits(SVGStopElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGStopElementWrappingImplementation() {}
SVGStopElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGStopElementWrappingImplementation._wrap$ctor.prototype = SVGStopElementWrappingImplementation.prototype;
SVGStopElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGStopElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGStopElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGStyleElementWrappingImplementation **************
$inherits(SVGStyleElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGStyleElementWrappingImplementation() {}
SVGStyleElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGStyleElementWrappingImplementation._wrap$ctor.prototype = SVGStyleElementWrappingImplementation.prototype;
SVGStyleElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGSwitchElementWrappingImplementation **************
$inherits(SVGSwitchElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGSwitchElementWrappingImplementation() {}
SVGSwitchElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGSwitchElementWrappingImplementation._wrap$ctor.prototype = SVGSwitchElementWrappingImplementation.prototype;
SVGSwitchElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGSwitchElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGSwitchElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGSymbolElementWrappingImplementation **************
$inherits(SVGSymbolElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGSymbolElementWrappingImplementation() {}
SVGSymbolElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGSymbolElementWrappingImplementation._wrap$ctor.prototype = SVGSymbolElementWrappingImplementation.prototype;
SVGSymbolElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGSymbolElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGSymbolElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGTRefElementWrappingImplementation **************
$inherits(SVGTRefElementWrappingImplementation, SVGTextPositioningElementWrappingImplementation);
function SVGTRefElementWrappingImplementation() {}
SVGTRefElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGTextPositioningElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTRefElementWrappingImplementation._wrap$ctor.prototype = SVGTRefElementWrappingImplementation.prototype;
SVGTRefElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGTSpanElementWrappingImplementation **************
$inherits(SVGTSpanElementWrappingImplementation, SVGTextPositioningElementWrappingImplementation);
function SVGTSpanElementWrappingImplementation() {}
SVGTSpanElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGTextPositioningElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTSpanElementWrappingImplementation._wrap$ctor.prototype = SVGTSpanElementWrappingImplementation.prototype;
SVGTSpanElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGTextElementWrappingImplementation **************
$inherits(SVGTextElementWrappingImplementation, SVGTextPositioningElementWrappingImplementation);
function SVGTextElementWrappingImplementation() {}
SVGTextElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGTextPositioningElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTextElementWrappingImplementation._wrap$ctor.prototype = SVGTextElementWrappingImplementation.prototype;
SVGTextElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGTextPathElementWrappingImplementation **************
$inherits(SVGTextPathElementWrappingImplementation, SVGTextContentElementWrappingImplementation);
function SVGTextPathElementWrappingImplementation() {}
SVGTextPathElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGTextContentElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTextPathElementWrappingImplementation._wrap$ctor.prototype = SVGTextPathElementWrappingImplementation.prototype;
SVGTextPathElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGTitleElementWrappingImplementation **************
$inherits(SVGTitleElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGTitleElementWrappingImplementation() {}
SVGTitleElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTitleElementWrappingImplementation._wrap$ctor.prototype = SVGTitleElementWrappingImplementation.prototype;
SVGTitleElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGTitleElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGTitleElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGUseElementWrappingImplementation **************
$inherits(SVGUseElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGUseElementWrappingImplementation() {}
SVGUseElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGUseElementWrappingImplementation._wrap$ctor.prototype = SVGUseElementWrappingImplementation.prototype;
SVGUseElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGUseElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGUseElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGUseElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGUseElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGVKernElementWrappingImplementation **************
$inherits(SVGVKernElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGVKernElementWrappingImplementation() {}
SVGVKernElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGVKernElementWrappingImplementation._wrap$ctor.prototype = SVGVKernElementWrappingImplementation.prototype;
SVGVKernElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SVGViewElementWrappingImplementation **************
$inherits(SVGViewElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGViewElementWrappingImplementation() {}
SVGViewElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGViewElementWrappingImplementation._wrap$ctor.prototype = SVGViewElementWrappingImplementation.prototype;
SVGViewElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for UIEventWrappingImplementation **************
$inherits(UIEventWrappingImplementation, EventWrappingImplementation);
function UIEventWrappingImplementation() {}
UIEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
UIEventWrappingImplementation._wrap$ctor.prototype = UIEventWrappingImplementation.prototype;
UIEventWrappingImplementation.prototype.get$keyCode = function() {
  return this._ptr.get$keyCode();
}
// ********** Code for SVGZoomEventWrappingImplementation **************
$inherits(SVGZoomEventWrappingImplementation, UIEventWrappingImplementation);
function SVGZoomEventWrappingImplementation() {}
SVGZoomEventWrappingImplementation._wrap$ctor = function(ptr) {
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGZoomEventWrappingImplementation._wrap$ctor.prototype = SVGZoomEventWrappingImplementation.prototype;
// ********** Code for ScriptElementWrappingImplementation **************
$inherits(ScriptElementWrappingImplementation, ElementWrappingImplementation);
function ScriptElementWrappingImplementation() {}
ScriptElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ScriptElementWrappingImplementation._wrap$ctor.prototype = ScriptElementWrappingImplementation.prototype;
ScriptElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
ScriptElementWrappingImplementation.prototype.get$src = function() {
  return this._ptr.get$src();
}
ScriptElementWrappingImplementation.prototype.set$src = function(value) {
  this._ptr.set$src(value);
}
// ********** Code for SelectElementWrappingImplementation **************
$inherits(SelectElementWrappingImplementation, ElementWrappingImplementation);
function SelectElementWrappingImplementation() {}
SelectElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SelectElementWrappingImplementation._wrap$ctor.prototype = SelectElementWrappingImplementation.prototype;
SelectElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SelectElementWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
SelectElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
SelectElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
SelectElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
SelectElementWrappingImplementation.prototype.add = function(element, before) {
  this._ptr.add$2(LevelDom.unwrap(element), LevelDom.unwrap(before));
  return;
}
SelectElementWrappingImplementation.prototype.item = function(index) {
  return LevelDom.wrapNode(this._ptr.item$1(index));
}
SelectElementWrappingImplementation.prototype.add$2 = SelectElementWrappingImplementation.prototype.add;
SelectElementWrappingImplementation.prototype.item$1 = SelectElementWrappingImplementation.prototype.item;
// ********** Code for SourceElementWrappingImplementation **************
$inherits(SourceElementWrappingImplementation, ElementWrappingImplementation);
function SourceElementWrappingImplementation() {}
SourceElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SourceElementWrappingImplementation._wrap$ctor.prototype = SourceElementWrappingImplementation.prototype;
SourceElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SourceElementWrappingImplementation.prototype.get$src = function() {
  return this._ptr.get$src();
}
SourceElementWrappingImplementation.prototype.set$src = function(value) {
  this._ptr.set$src(value);
}
// ********** Code for SpanElementWrappingImplementation **************
$inherits(SpanElementWrappingImplementation, ElementWrappingImplementation);
function SpanElementWrappingImplementation() {}
SpanElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SpanElementWrappingImplementation._wrap$ctor.prototype = SpanElementWrappingImplementation.prototype;
SpanElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for SpeechInputEventWrappingImplementation **************
$inherits(SpeechInputEventWrappingImplementation, EventWrappingImplementation);
function SpeechInputEventWrappingImplementation() {}
SpeechInputEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
SpeechInputEventWrappingImplementation._wrap$ctor.prototype = SpeechInputEventWrappingImplementation.prototype;
// ********** Code for StyleElementWrappingImplementation **************
$inherits(StyleElementWrappingImplementation, ElementWrappingImplementation);
function StyleElementWrappingImplementation() {}
StyleElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
StyleElementWrappingImplementation._wrap$ctor.prototype = StyleElementWrappingImplementation.prototype;
StyleElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for TableCaptionElementWrappingImplementation **************
$inherits(TableCaptionElementWrappingImplementation, ElementWrappingImplementation);
function TableCaptionElementWrappingImplementation() {}
TableCaptionElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableCaptionElementWrappingImplementation._wrap$ctor.prototype = TableCaptionElementWrappingImplementation.prototype;
TableCaptionElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for TableCellElementWrappingImplementation **************
$inherits(TableCellElementWrappingImplementation, ElementWrappingImplementation);
function TableCellElementWrappingImplementation() {}
TableCellElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableCellElementWrappingImplementation._wrap$ctor.prototype = TableCellElementWrappingImplementation.prototype;
TableCellElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
TableCellElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
TableCellElementWrappingImplementation.prototype.get$width = function() {
  return this._ptr.get$width();
}
// ********** Code for TableColElementWrappingImplementation **************
$inherits(TableColElementWrappingImplementation, ElementWrappingImplementation);
function TableColElementWrappingImplementation() {}
TableColElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableColElementWrappingImplementation._wrap$ctor.prototype = TableColElementWrappingImplementation.prototype;
TableColElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
TableColElementWrappingImplementation.prototype.get$width = function() {
  return this._ptr.get$width();
}
// ********** Code for TableElementWrappingImplementation **************
$inherits(TableElementWrappingImplementation, ElementWrappingImplementation);
function TableElementWrappingImplementation() {}
TableElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableElementWrappingImplementation._wrap$ctor.prototype = TableElementWrappingImplementation.prototype;
TableElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
TableElementWrappingImplementation.prototype.get$width = function() {
  return this._ptr.get$width();
}
// ********** Code for TableRowElementWrappingImplementation **************
$inherits(TableRowElementWrappingImplementation, ElementWrappingImplementation);
function TableRowElementWrappingImplementation() {}
TableRowElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableRowElementWrappingImplementation._wrap$ctor.prototype = TableRowElementWrappingImplementation.prototype;
TableRowElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for TableSectionElementWrappingImplementation **************
$inherits(TableSectionElementWrappingImplementation, ElementWrappingImplementation);
function TableSectionElementWrappingImplementation() {}
TableSectionElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableSectionElementWrappingImplementation._wrap$ctor.prototype = TableSectionElementWrappingImplementation.prototype;
TableSectionElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for TextAreaElementWrappingImplementation **************
$inherits(TextAreaElementWrappingImplementation, ElementWrappingImplementation);
function TextAreaElementWrappingImplementation() {}
TextAreaElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TextAreaElementWrappingImplementation._wrap$ctor.prototype = TextAreaElementWrappingImplementation.prototype;
TextAreaElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
TextAreaElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
TextAreaElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
TextAreaElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for TitleElementWrappingImplementation **************
$inherits(TitleElementWrappingImplementation, ElementWrappingImplementation);
function TitleElementWrappingImplementation() {}
TitleElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TitleElementWrappingImplementation._wrap$ctor.prototype = TitleElementWrappingImplementation.prototype;
TitleElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for TrackElementWrappingImplementation **************
$inherits(TrackElementWrappingImplementation, ElementWrappingImplementation);
function TrackElementWrappingImplementation() {}
TrackElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TrackElementWrappingImplementation._wrap$ctor.prototype = TrackElementWrappingImplementation.prototype;
TrackElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
TrackElementWrappingImplementation.prototype.get$src = function() {
  return this._ptr.get$src();
}
TrackElementWrappingImplementation.prototype.set$src = function(value) {
  this._ptr.set$src(value);
}
// ********** Code for UListElementWrappingImplementation **************
$inherits(UListElementWrappingImplementation, ElementWrappingImplementation);
function UListElementWrappingImplementation() {}
UListElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
UListElementWrappingImplementation._wrap$ctor.prototype = UListElementWrappingImplementation.prototype;
UListElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for UnknownElementWrappingImplementation **************
$inherits(UnknownElementWrappingImplementation, ElementWrappingImplementation);
function UnknownElementWrappingImplementation() {}
UnknownElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
UnknownElementWrappingImplementation._wrap$ctor.prototype = UnknownElementWrappingImplementation.prototype;
UnknownElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for VideoElementWrappingImplementation **************
$inherits(VideoElementWrappingImplementation, MediaElementWrappingImplementation);
function VideoElementWrappingImplementation() {}
VideoElementWrappingImplementation._wrap$ctor = function(ptr) {
  MediaElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
VideoElementWrappingImplementation._wrap$ctor.prototype = VideoElementWrappingImplementation.prototype;
VideoElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
VideoElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
VideoElementWrappingImplementation.prototype.get$width = function() {
  return this._ptr.get$width();
}
// ********** Code for WebGLContextEventWrappingImplementation **************
$inherits(WebGLContextEventWrappingImplementation, EventWrappingImplementation);
function WebGLContextEventWrappingImplementation() {}
WebGLContextEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
WebGLContextEventWrappingImplementation._wrap$ctor.prototype = WebGLContextEventWrappingImplementation.prototype;
// ********** Code for WebGLRenderingContextWrappingImplementation **************
$inherits(WebGLRenderingContextWrappingImplementation, CanvasRenderingContextWrappingImplementation);
function WebGLRenderingContextWrappingImplementation() {}
WebGLRenderingContextWrappingImplementation._wrap$ctor = function(ptr) {
  CanvasRenderingContextWrappingImplementation._wrap$ctor.call(this, ptr);
}
WebGLRenderingContextWrappingImplementation._wrap$ctor.prototype = WebGLRenderingContextWrappingImplementation.prototype;
WebGLRenderingContextWrappingImplementation.prototype.clear = function(mask) {
  this._ptr.clear$1(mask);
  return;
}
WebGLRenderingContextWrappingImplementation.prototype.get$clear = function() {
  return this.clear.bind(this);
}
WebGLRenderingContextWrappingImplementation.prototype.clear$1 = WebGLRenderingContextWrappingImplementation.prototype.clear;
// ********** Code for LevelDom **************
function LevelDom() {}
LevelDom.wrapCSSStyleDeclaration = function(raw) {
  return raw == null ? null : raw.get$dartObjectLocalStorage() != null ? raw.get$dartObjectLocalStorage() : new CSSStyleDeclarationWrappingImplementation._wrap$ctor(raw);
}
LevelDom.wrapCanvasRenderingContext = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "CanvasRenderingContext":

      return new CanvasRenderingContextWrappingImplementation._wrap$ctor(raw);

    case "CanvasRenderingContext2D":

      return new CanvasRenderingContext2DWrappingImplementation._wrap$ctor(raw);

    case "WebGLRenderingContext":

      return new WebGLRenderingContextWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapDocument = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "HTMLDocument":

      return new DocumentWrappingImplementation._wrap$ctor(raw, raw.get$documentElement());

    case "SVGDocument":

      return new SVGDocumentWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapElement = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "HTMLAnchorElement":

      return new AnchorElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLAreaElement":

      return new AreaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLAudioElement":

      return new AudioElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBRElement":

      return new BRElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBaseElement":

      return new BaseElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBodyElement":

      return new BodyElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLButtonElement":

      return new ButtonElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLCanvasElement":

      return new CanvasElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDListElement":

      return new DListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDataListElement":

      return new DataListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDetailsElement":

      return new DetailsElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDivElement":

      return new DivElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLElement":

      return new ElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLEmbedElement":

      return new EmbedElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFieldSetElement":

      return new FieldSetElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFontElement":

      return new FontElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFormElement":

      return new FormElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHRElement":

      return new HRElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHeadElement":

      return new HeadElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHeadingElement":

      return new HeadingElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHtmlElement":

      return new DocumentWrappingImplementation._wrap$ctor(raw.get$parentNode(), raw);

    case "HTMLIFrameElement":

      return new IFrameElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLImageElement":

      return new ImageElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLInputElement":

      return new InputElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLKeygenElement":

      return new KeygenElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLIElement":

      return new LIElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLabelElement":

      return new LabelElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLegendElement":

      return new LegendElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLinkElement":

      return new LinkElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMapElement":

      return new MapElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMarqueeElement":

      return new MarqueeElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMediaElement":

      return new MediaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMenuElement":

      return new MenuElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMetaElement":

      return new MetaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMeterElement":

      return new MeterElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLModElement":

      return new ModElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOListElement":

      return new OListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLObjectElement":

      return new ObjectElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOptGroupElement":

      return new OptGroupElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOptionElement":

      return new OptionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOutputElement":

      return new OutputElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLParagraphElement":

      return new ParagraphElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLParamElement":

      return new ParamElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLPreElement":

      return new PreElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLProgressElement":

      return new ProgressElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLQuoteElement":

      return new QuoteElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAElement":

      return new SVGAElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphDefElement":

      return new SVGAltGlyphDefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphElement":

      return new SVGAltGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphItemElement":

      return new SVGAltGlyphItemElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateColorElement":

      return new SVGAnimateColorElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateElement":

      return new SVGAnimateElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateMotionElement":

      return new SVGAnimateMotionElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateTransformElement":

      return new SVGAnimateTransformElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimationElement":

      return new SVGAnimationElementWrappingImplementation._wrap$ctor(raw);

    case "SVGCircleElement":

      return new SVGCircleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGClipPathElement":

      return new SVGClipPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGComponentTransferFunctionElement":

      return new SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor(raw);

    case "SVGCursorElement":

      return new SVGCursorElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDefsElement":

      return new SVGDefsElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDescElement":

      return new SVGDescElementWrappingImplementation._wrap$ctor(raw);

    case "SVGElement":

      return new SVGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGEllipseElement":

      return new SVGEllipseElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEBlendElement":

      return new SVGFEBlendElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEColorMatrixElement":

      return new SVGFEColorMatrixElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEComponentTransferElement":

      return new SVGFEComponentTransferElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEConvolveMatrixElement":

      return new SVGFEConvolveMatrixElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDiffuseLightingElement":

      return new SVGFEDiffuseLightingElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDisplacementMapElement":

      return new SVGFEDisplacementMapElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDistantLightElement":

      return new SVGFEDistantLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDropShadowElement":

      return new SVGFEDropShadowElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFloodElement":

      return new SVGFEFloodElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncAElement":

      return new SVGFEFuncAElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncBElement":

      return new SVGFEFuncBElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncGElement":

      return new SVGFEFuncGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncRElement":

      return new SVGFEFuncRElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEGaussianBlurElement":

      return new SVGFEGaussianBlurElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEImageElement":

      return new SVGFEImageElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEMergeElement":

      return new SVGFEMergeElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEMergeNodeElement":

      return new SVGFEMergeNodeElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEOffsetElement":

      return new SVGFEOffsetElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEPointLightElement":

      return new SVGFEPointLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFESpecularLightingElement":

      return new SVGFESpecularLightingElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFESpotLightElement":

      return new SVGFESpotLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFETileElement":

      return new SVGFETileElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFETurbulenceElement":

      return new SVGFETurbulenceElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFilterElement":

      return new SVGFilterElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontElement":

      return new SVGFontElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceElement":

      return new SVGFontFaceElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceFormatElement":

      return new SVGFontFaceFormatElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceNameElement":

      return new SVGFontFaceNameElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceSrcElement":

      return new SVGFontFaceSrcElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceUriElement":

      return new SVGFontFaceUriElementWrappingImplementation._wrap$ctor(raw);

    case "SVGForeignObjectElement":

      return new SVGForeignObjectElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGElement":

      return new SVGGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGlyphElement":

      return new SVGGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGlyphRefElement":

      return new SVGGlyphRefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGradientElement":

      return new SVGGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGHKernElement":

      return new SVGHKernElementWrappingImplementation._wrap$ctor(raw);

    case "SVGImageElement":

      return new SVGImageElementWrappingImplementation._wrap$ctor(raw);

    case "SVGLineElement":

      return new SVGLineElementWrappingImplementation._wrap$ctor(raw);

    case "SVGLinearGradientElement":

      return new SVGLinearGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMPathElement":

      return new SVGMPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMarkerElement":

      return new SVGMarkerElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMaskElement":

      return new SVGMaskElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMetadataElement":

      return new SVGMetadataElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMissingGlyphElement":

      return new SVGMissingGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPathElement":

      return new SVGPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPatternElement":

      return new SVGPatternElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPolygonElement":

      return new SVGPolygonElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPolylineElement":

      return new SVGPolylineElementWrappingImplementation._wrap$ctor(raw);

    case "SVGRadialGradientElement":

      return new SVGRadialGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGRectElement":

      return new SVGRectElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSVGElement":

      return new SVGSVGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGScriptElement":

      return new SVGScriptElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSetElement":

      return new SVGSetElementWrappingImplementation._wrap$ctor(raw);

    case "SVGStopElement":

      return new SVGStopElementWrappingImplementation._wrap$ctor(raw);

    case "SVGStyleElement":

      return new SVGStyleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSwitchElement":

      return new SVGSwitchElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSymbolElement":

      return new SVGSymbolElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTRefElement":

      return new SVGTRefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTSpanElement":

      return new SVGTSpanElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextContentElement":

      return new SVGTextContentElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextElement":

      return new SVGTextElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextPathElement":

      return new SVGTextPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextPositioningElement":

      return new SVGTextPositioningElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTitleElement":

      return new SVGTitleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGUseElement":

      return new SVGUseElementWrappingImplementation._wrap$ctor(raw);

    case "SVGVKernElement":

      return new SVGVKernElementWrappingImplementation._wrap$ctor(raw);

    case "SVGViewElement":

      return new SVGViewElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLScriptElement":

      return new ScriptElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSelectElement":

      return new SelectElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSourceElement":

      return new SourceElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSpanElement":

      return new SpanElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLStyleElement":

      return new StyleElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableCaptionElement":

      return new TableCaptionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableCellElement":

      return new TableCellElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableColElement":

      return new TableColElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableElement":

      return new TableElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableRowElement":

      return new TableRowElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableSectionElement":

      return new TableSectionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTextAreaElement":

      return new TextAreaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTitleElement":

      return new TitleElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTrackElement":

      return new TrackElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLUListElement":

      return new UListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLUnknownElement":

      return new UnknownElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLVideoElement":

      return new VideoElementWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapEvent = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "WebKitAnimationEvent":

      return new AnimationEventWrappingImplementation._wrap$ctor(raw);

    case "AudioProcessingEvent":

      return new AudioProcessingEventWrappingImplementation._wrap$ctor(raw);

    case "BeforeLoadEvent":

      return new BeforeLoadEventWrappingImplementation._wrap$ctor(raw);

    case "CloseEvent":

      return new CloseEventWrappingImplementation._wrap$ctor(raw);

    case "CompositionEvent":

      return new CompositionEventWrappingImplementation._wrap$ctor(raw);

    case "CustomEvent":

      return new CustomEventWrappingImplementation._wrap$ctor(raw);

    case "DeviceMotionEvent":

      return new DeviceMotionEventWrappingImplementation._wrap$ctor(raw);

    case "DeviceOrientationEvent":

      return new DeviceOrientationEventWrappingImplementation._wrap$ctor(raw);

    case "ErrorEvent":

      return new ErrorEventWrappingImplementation._wrap$ctor(raw);

    case "Event":

      return new EventWrappingImplementation._wrap$ctor(raw);

    case "HashChangeEvent":

      return new HashChangeEventWrappingImplementation._wrap$ctor(raw);

    case "IDBVersionChangeEvent":

      return new IDBVersionChangeEventWrappingImplementation._wrap$ctor(raw);

    case "KeyboardEvent":

      return new KeyboardEventWrappingImplementation._wrap$ctor(raw);

    case "MessageEvent":

      return new MessageEventWrappingImplementation._wrap$ctor(raw);

    case "MouseEvent":

      return new MouseEventWrappingImplementation._wrap$ctor(raw);

    case "MutationEvent":

      return new MutationEventWrappingImplementation._wrap$ctor(raw);

    case "OfflineAudioCompletionEvent":

      return new OfflineAudioCompletionEventWrappingImplementation._wrap$ctor(raw);

    case "OverflowEvent":

      return new OverflowEventWrappingImplementation._wrap$ctor(raw);

    case "PageTransitionEvent":

      return new PageTransitionEventWrappingImplementation._wrap$ctor(raw);

    case "PopStateEvent":

      return new PopStateEventWrappingImplementation._wrap$ctor(raw);

    case "ProgressEvent":

      return new ProgressEventWrappingImplementation._wrap$ctor(raw);

    case "SVGZoomEvent":

      return new SVGZoomEventWrappingImplementation._wrap$ctor(raw);

    case "SpeechInputEvent":

      return new SpeechInputEventWrappingImplementation._wrap$ctor(raw);

    case "StorageEvent":

      return new StorageEventWrappingImplementation._wrap$ctor(raw);

    case "TextEvent":

      return new TextEventWrappingImplementation._wrap$ctor(raw);

    case "TouchEvent":

      return new TouchEventWrappingImplementation._wrap$ctor(raw);

    case "WebKitTransitionEvent":

      return new TransitionEventWrappingImplementation._wrap$ctor(raw);

    case "UIEvent":

      return new UIEventWrappingImplementation._wrap$ctor(raw);

    case "WebGLContextEvent":

      return new WebGLContextEventWrappingImplementation._wrap$ctor(raw);

    case "WheelEvent":

      return new WheelEventWrappingImplementation._wrap$ctor(raw);

    case "XMLHttpRequestProgressEvent":

      return new XMLHttpRequestProgressEventWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapNode = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "HTMLAnchorElement":

      return new AnchorElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLAreaElement":

      return new AreaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLAudioElement":

      return new AudioElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBRElement":

      return new BRElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBaseElement":

      return new BaseElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBodyElement":

      return new BodyElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLButtonElement":

      return new ButtonElementWrappingImplementation._wrap$ctor(raw);

    case "CDATASection":

      return new CDATASectionWrappingImplementation._wrap$ctor(raw);

    case "HTMLCanvasElement":

      return new CanvasElementWrappingImplementation._wrap$ctor(raw);

    case "CharacterData":

      return new CharacterDataWrappingImplementation._wrap$ctor(raw);

    case "Comment":

      return new CommentWrappingImplementation._wrap$ctor(raw);

    case "HTMLDListElement":

      return new DListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDataListElement":

      return new DataListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDetailsElement":

      return new DetailsElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDivElement":

      return new DivElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDocument":

      return new DocumentWrappingImplementation._wrap$ctor(raw, raw.get$documentElement());

    case "DocumentFragment":

      return new DocumentFragmentWrappingImplementation._wrap$ctor(raw);

    case "HTMLElement":

      return new ElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLEmbedElement":

      return new EmbedElementWrappingImplementation._wrap$ctor(raw);

    case "Entity":

      return new EntityWrappingImplementation._wrap$ctor(raw);

    case "EntityReference":

      return new EntityReferenceWrappingImplementation._wrap$ctor(raw);

    case "HTMLFieldSetElement":

      return new FieldSetElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFontElement":

      return new FontElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFormElement":

      return new FormElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHRElement":

      return new HRElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHeadElement":

      return new HeadElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHeadingElement":

      return new HeadingElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHtmlElement":

      return new DocumentWrappingImplementation._wrap$ctor(raw.get$parentNode(), raw);

    case "HTMLIFrameElement":

      return new IFrameElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLImageElement":

      return new ImageElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLInputElement":

      return new InputElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLKeygenElement":

      return new KeygenElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLIElement":

      return new LIElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLabelElement":

      return new LabelElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLegendElement":

      return new LegendElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLinkElement":

      return new LinkElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMapElement":

      return new MapElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMarqueeElement":

      return new MarqueeElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMediaElement":

      return new MediaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMenuElement":

      return new MenuElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMetaElement":

      return new MetaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMeterElement":

      return new MeterElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLModElement":

      return new ModElementWrappingImplementation._wrap$ctor(raw);

    case "Node":

      return new NodeWrappingImplementation._wrap$ctor(raw);

    case "Notation":

      return new NotationWrappingImplementation._wrap$ctor(raw);

    case "HTMLOListElement":

      return new OListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLObjectElement":

      return new ObjectElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOptGroupElement":

      return new OptGroupElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOptionElement":

      return new OptionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOutputElement":

      return new OutputElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLParagraphElement":

      return new ParagraphElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLParamElement":

      return new ParamElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLPreElement":

      return new PreElementWrappingImplementation._wrap$ctor(raw);

    case "ProcessingInstruction":

      return new ProcessingInstructionWrappingImplementation._wrap$ctor(raw);

    case "HTMLProgressElement":

      return new ProgressElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLQuoteElement":

      return new QuoteElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAElement":

      return new SVGAElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphDefElement":

      return new SVGAltGlyphDefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphElement":

      return new SVGAltGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphItemElement":

      return new SVGAltGlyphItemElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateColorElement":

      return new SVGAnimateColorElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateElement":

      return new SVGAnimateElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateMotionElement":

      return new SVGAnimateMotionElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateTransformElement":

      return new SVGAnimateTransformElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimationElement":

      return new SVGAnimationElementWrappingImplementation._wrap$ctor(raw);

    case "SVGCircleElement":

      return new SVGCircleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGClipPathElement":

      return new SVGClipPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGComponentTransferFunctionElement":

      return new SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor(raw);

    case "SVGCursorElement":

      return new SVGCursorElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDefsElement":

      return new SVGDefsElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDescElement":

      return new SVGDescElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDocument":

      return new SVGDocumentWrappingImplementation._wrap$ctor(raw);

    case "SVGElement":

      return new SVGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGEllipseElement":

      return new SVGEllipseElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEBlendElement":

      return new SVGFEBlendElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEColorMatrixElement":

      return new SVGFEColorMatrixElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEComponentTransferElement":

      return new SVGFEComponentTransferElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEConvolveMatrixElement":

      return new SVGFEConvolveMatrixElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDiffuseLightingElement":

      return new SVGFEDiffuseLightingElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDisplacementMapElement":

      return new SVGFEDisplacementMapElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDistantLightElement":

      return new SVGFEDistantLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDropShadowElement":

      return new SVGFEDropShadowElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFloodElement":

      return new SVGFEFloodElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncAElement":

      return new SVGFEFuncAElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncBElement":

      return new SVGFEFuncBElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncGElement":

      return new SVGFEFuncGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncRElement":

      return new SVGFEFuncRElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEGaussianBlurElement":

      return new SVGFEGaussianBlurElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEImageElement":

      return new SVGFEImageElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEMergeElement":

      return new SVGFEMergeElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEMergeNodeElement":

      return new SVGFEMergeNodeElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEOffsetElement":

      return new SVGFEOffsetElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEPointLightElement":

      return new SVGFEPointLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFESpecularLightingElement":

      return new SVGFESpecularLightingElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFESpotLightElement":

      return new SVGFESpotLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFETileElement":

      return new SVGFETileElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFETurbulenceElement":

      return new SVGFETurbulenceElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFilterElement":

      return new SVGFilterElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontElement":

      return new SVGFontElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceElement":

      return new SVGFontFaceElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceFormatElement":

      return new SVGFontFaceFormatElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceNameElement":

      return new SVGFontFaceNameElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceSrcElement":

      return new SVGFontFaceSrcElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceUriElement":

      return new SVGFontFaceUriElementWrappingImplementation._wrap$ctor(raw);

    case "SVGForeignObjectElement":

      return new SVGForeignObjectElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGElement":

      return new SVGGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGlyphElement":

      return new SVGGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGlyphRefElement":

      return new SVGGlyphRefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGradientElement":

      return new SVGGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGHKernElement":

      return new SVGHKernElementWrappingImplementation._wrap$ctor(raw);

    case "SVGImageElement":

      return new SVGImageElementWrappingImplementation._wrap$ctor(raw);

    case "SVGLineElement":

      return new SVGLineElementWrappingImplementation._wrap$ctor(raw);

    case "SVGLinearGradientElement":

      return new SVGLinearGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMPathElement":

      return new SVGMPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMarkerElement":

      return new SVGMarkerElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMaskElement":

      return new SVGMaskElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMetadataElement":

      return new SVGMetadataElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMissingGlyphElement":

      return new SVGMissingGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPathElement":

      return new SVGPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPatternElement":

      return new SVGPatternElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPolygonElement":

      return new SVGPolygonElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPolylineElement":

      return new SVGPolylineElementWrappingImplementation._wrap$ctor(raw);

    case "SVGRadialGradientElement":

      return new SVGRadialGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGRectElement":

      return new SVGRectElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSVGElement":

      return new SVGSVGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGScriptElement":

      return new SVGScriptElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSetElement":

      return new SVGSetElementWrappingImplementation._wrap$ctor(raw);

    case "SVGStopElement":

      return new SVGStopElementWrappingImplementation._wrap$ctor(raw);

    case "SVGStyleElement":

      return new SVGStyleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSwitchElement":

      return new SVGSwitchElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSymbolElement":

      return new SVGSymbolElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTRefElement":

      return new SVGTRefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTSpanElement":

      return new SVGTSpanElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextContentElement":

      return new SVGTextContentElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextElement":

      return new SVGTextElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextPathElement":

      return new SVGTextPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextPositioningElement":

      return new SVGTextPositioningElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTitleElement":

      return new SVGTitleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGUseElement":

      return new SVGUseElementWrappingImplementation._wrap$ctor(raw);

    case "SVGVKernElement":

      return new SVGVKernElementWrappingImplementation._wrap$ctor(raw);

    case "SVGViewElement":

      return new SVGViewElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLScriptElement":

      return new ScriptElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSelectElement":

      return new SelectElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSourceElement":

      return new SourceElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSpanElement":

      return new SpanElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLStyleElement":

      return new StyleElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableCaptionElement":

      return new TableCaptionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableCellElement":

      return new TableCellElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableColElement":

      return new TableColElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableElement":

      return new TableElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableRowElement":

      return new TableRowElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableSectionElement":

      return new TableSectionElementWrappingImplementation._wrap$ctor(raw);

    case "Text":

      return new TextWrappingImplementation._wrap$ctor(raw);

    case "HTMLTextAreaElement":

      return new TextAreaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTitleElement":

      return new TitleElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTrackElement":

      return new TrackElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLUListElement":

      return new UListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLUnknownElement":

      return new UnknownElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLVideoElement":

      return new VideoElementWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapSVGAnimatedLength = function(raw) {
  return raw == null ? null : raw.get$dartObjectLocalStorage() != null ? raw.get$dartObjectLocalStorage() : new SVGAnimatedLengthWrappingImplementation._wrap$ctor(raw);
}
LevelDom.wrapSVGAnimatedString = function(raw) {
  return raw == null ? null : raw.get$dartObjectLocalStorage() != null ? raw.get$dartObjectLocalStorage() : new SVGAnimatedStringWrappingImplementation._wrap$ctor(raw);
}
LevelDom.wrapSVGLength = function(raw) {
  return raw == null ? null : raw.get$dartObjectLocalStorage() != null ? raw.get$dartObjectLocalStorage() : new SVGLengthWrappingImplementation._wrap$ctor(raw);
}
LevelDom.wrapWindow = function(raw) {
  return raw == null ? null : raw.get$dartObjectLocalStorage() != null ? raw.get$dartObjectLocalStorage() : new WindowWrappingImplementation._wrap$ctor(raw);
}
LevelDom.unwrapMaybePrimitive = function(raw) {
  return (raw == null || (typeof(raw) == 'string') || (typeof(raw) == 'number') || (typeof(raw) == 'boolean')) ? raw : raw.get$_ptr();
}
LevelDom.unwrap = function(raw) {
  return raw == null ? null : raw.get$_ptr();
}
LevelDom.initialize = function() {
  $globals.secretWindow = LevelDom.wrapWindow(get$window());
  $globals.secretDocument = LevelDom.wrapDocument(get$document());
}
// ********** Code for AnimationEventWrappingImplementation **************
$inherits(AnimationEventWrappingImplementation, EventWrappingImplementation);
function AnimationEventWrappingImplementation() {}
AnimationEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
AnimationEventWrappingImplementation._wrap$ctor.prototype = AnimationEventWrappingImplementation.prototype;
// ********** Code for BeforeLoadEventWrappingImplementation **************
$inherits(BeforeLoadEventWrappingImplementation, EventWrappingImplementation);
function BeforeLoadEventWrappingImplementation() {}
BeforeLoadEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
BeforeLoadEventWrappingImplementation._wrap$ctor.prototype = BeforeLoadEventWrappingImplementation.prototype;
// ********** Code for EventsImplementation **************
function EventsImplementation() {}
EventsImplementation._wrap$ctor = function(_ptr) {
  this._ptr = _ptr;
  this._listenerMap = new HashMapImplementation();
}
EventsImplementation._wrap$ctor.prototype = EventsImplementation.prototype;
EventsImplementation.prototype.get$_ptr = function() { return this._ptr; };
EventsImplementation.prototype.set$_ptr = function(value) { return this._ptr = value; };
EventsImplementation.prototype.$index = function(type) {
  return this._get(type.toLowerCase());
}
EventsImplementation.prototype._get = function(type) {
  var $this = this; // closure support
  return this._listenerMap.putIfAbsent$2(type, (function () {
    return new EventListenerListImplementation($this._ptr, type);
  })
  );
}
// ********** Code for ElementEventsImplementation **************
$inherits(ElementEventsImplementation, EventsImplementation);
function ElementEventsImplementation() {}
ElementEventsImplementation._wrap$ctor = function(_ptr) {
  EventsImplementation._wrap$ctor.call(this, _ptr);
}
ElementEventsImplementation._wrap$ctor.prototype = ElementEventsImplementation.prototype;
ElementEventsImplementation.prototype.get$change = function() {
  return this._get("change");
}
ElementEventsImplementation.prototype.get$click = function() {
  return this._get("click");
}
ElementEventsImplementation.prototype.get$load = function() {
  return this._get("load");
}
ElementEventsImplementation.prototype.click$0 = function() {
  return this.get$click().call$0();
};
// ********** Code for BodyElementEventsImplementation **************
$inherits(BodyElementEventsImplementation, ElementEventsImplementation);
function BodyElementEventsImplementation() {}
BodyElementEventsImplementation._wrap$ctor = function(_ptr) {
  ElementEventsImplementation._wrap$ctor.call(this, _ptr);
}
BodyElementEventsImplementation._wrap$ctor.prototype = BodyElementEventsImplementation.prototype;
// ********** Code for BodyElementWrappingImplementation **************
$inherits(BodyElementWrappingImplementation, ElementWrappingImplementation);
function BodyElementWrappingImplementation() {}
BodyElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
BodyElementWrappingImplementation._wrap$ctor.prototype = BodyElementWrappingImplementation.prototype;
BodyElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
BodyElementWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new BodyElementEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for CloseEventWrappingImplementation **************
$inherits(CloseEventWrappingImplementation, EventWrappingImplementation);
function CloseEventWrappingImplementation() {}
CloseEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
CloseEventWrappingImplementation._wrap$ctor.prototype = CloseEventWrappingImplementation.prototype;
// ********** Code for CompositionEventWrappingImplementation **************
$inherits(CompositionEventWrappingImplementation, UIEventWrappingImplementation);
function CompositionEventWrappingImplementation() {}
CompositionEventWrappingImplementation._wrap$ctor = function(ptr) {
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
CompositionEventWrappingImplementation._wrap$ctor.prototype = CompositionEventWrappingImplementation.prototype;
// ********** Code for _CssClassSet **************
function _CssClassSet(_element) {
  this._htmlimpl_element = _element;
}
_CssClassSet.prototype.toString = function() {
  return this._formatSet(this._read());
}
_CssClassSet.prototype.iterator = function() {
  return this._read().iterator$0();
}
_CssClassSet.prototype.forEach = function(f) {
  this._read().forEach(f);
}
_CssClassSet.prototype.get$length = function() {
  return this._read().get$length();
}
_CssClassSet.prototype.add = function(value) {
  this._modify((function (s) {
    return s.add$1(value);
  })
  );
}
_CssClassSet.prototype.addAll = function(collection) {
  this._modify((function (s) {
    return s.addAll$1(collection);
  })
  );
}
_CssClassSet.prototype.clear = function() {
  this._modify((function (s) {
    return s.clear$0();
  })
  );
}
_CssClassSet.prototype.get$clear = function() {
  return this.clear.bind(this);
}
_CssClassSet.prototype._modify = function(f) {
  var s = this._read();
  f(s);
  this._write(s);
}
_CssClassSet.prototype._read = function() {
  var s = new HashSetImplementation();
  var $$list = this._className().split(" ");
  for (var $$i = 0;$$i < $$list.get$length(); $$i++) {
    var name = $$list.$index($$i);
    var trimmed = name.trim();
    if (!trimmed.isEmpty()) {
      s.add(trimmed);
    }
  }
  return s;
}
_CssClassSet.prototype._className = function() {
  return this._htmlimpl_element.get$className();
}
_CssClassSet.prototype._write = function(s) {
  this._htmlimpl_element.set$className(this._formatSet(s));
}
_CssClassSet.prototype._formatSet = function(s) {
  var list = ListFactory.ListFactory$from$factory(s);
  return Strings.join(list, " ");
}
_CssClassSet.prototype.add$1 = _CssClassSet.prototype.add;
_CssClassSet.prototype.addAll$1 = _CssClassSet.prototype.addAll;
_CssClassSet.prototype.clear$0 = _CssClassSet.prototype.clear;
_CssClassSet.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
_CssClassSet.prototype.iterator$0 = _CssClassSet.prototype.iterator;
_CssClassSet.prototype.toString$0 = _CssClassSet.prototype.toString;
// ********** Code for CSSStyleDeclarationWrappingImplementation **************
$inherits(CSSStyleDeclarationWrappingImplementation, DOMWrapperBase);
function CSSStyleDeclarationWrappingImplementation() {}
CSSStyleDeclarationWrappingImplementation._wrap$ctor = function(ptr) {
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
CSSStyleDeclarationWrappingImplementation._wrap$ctor.prototype = CSSStyleDeclarationWrappingImplementation.prototype;
CSSStyleDeclarationWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
CSSStyleDeclarationWrappingImplementation.prototype.getPropertyValue = function(propertyName) {
  return this._ptr.getPropertyValue$1(propertyName);
}
CSSStyleDeclarationWrappingImplementation.prototype.item = function(index) {
  return this._ptr.item$1(index);
}
CSSStyleDeclarationWrappingImplementation.prototype.setProperty = function(propertyName, value, priority) {
  this._ptr.setProperty$3(propertyName, ("" + value), priority);
}
CSSStyleDeclarationWrappingImplementation.prototype.get$typeName = function() {
  return "CSSStyleDeclaration";
}
CSSStyleDeclarationWrappingImplementation.prototype.get$clear = function() {
  return this.getPropertyValue("clear");
}
CSSStyleDeclarationWrappingImplementation.prototype.get$clip = function() {
  return this.getPropertyValue("clip");
}
CSSStyleDeclarationWrappingImplementation.prototype.set$display = function(value) {
  this.setProperty("display", value, "");
}
CSSStyleDeclarationWrappingImplementation.prototype.get$height = function() {
  return this.getPropertyValue("height");
}
CSSStyleDeclarationWrappingImplementation.prototype.set$left = function(value) {
  this.setProperty("left", value, "");
}
CSSStyleDeclarationWrappingImplementation.prototype.set$margin = function(value) {
  this.setProperty("margin", value, "");
}
CSSStyleDeclarationWrappingImplementation.prototype.set$opacity = function(value) {
  this.setProperty("opacity", value, "");
}
CSSStyleDeclarationWrappingImplementation.prototype.get$src = function() {
  return this.getPropertyValue("src");
}
CSSStyleDeclarationWrappingImplementation.prototype.set$src = function(value) {
  this.setProperty("src", value, "");
}
CSSStyleDeclarationWrappingImplementation.prototype.get$width = function() {
  return this.getPropertyValue("width");
}
CSSStyleDeclarationWrappingImplementation.prototype.clear$0 = function() {
  return this.get$clear().call$0();
};
CSSStyleDeclarationWrappingImplementation.prototype.clear$1 = function($0) {
  return this.get$clear().call$1($0);
};
CSSStyleDeclarationWrappingImplementation.prototype.clip$0 = function() {
  return this.get$clip().call$0();
};
CSSStyleDeclarationWrappingImplementation.prototype.getPropertyValue$1 = CSSStyleDeclarationWrappingImplementation.prototype.getPropertyValue;
CSSStyleDeclarationWrappingImplementation.prototype.item$1 = CSSStyleDeclarationWrappingImplementation.prototype.item;
CSSStyleDeclarationWrappingImplementation.prototype.setProperty$3 = CSSStyleDeclarationWrappingImplementation.prototype.setProperty;
// ********** Code for CustomEventWrappingImplementation **************
$inherits(CustomEventWrappingImplementation, EventWrappingImplementation);
function CustomEventWrappingImplementation() {}
CustomEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
CustomEventWrappingImplementation._wrap$ctor.prototype = CustomEventWrappingImplementation.prototype;
// ********** Code for DeviceMotionEventWrappingImplementation **************
$inherits(DeviceMotionEventWrappingImplementation, EventWrappingImplementation);
function DeviceMotionEventWrappingImplementation() {}
DeviceMotionEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
DeviceMotionEventWrappingImplementation._wrap$ctor.prototype = DeviceMotionEventWrappingImplementation.prototype;
// ********** Code for DeviceOrientationEventWrappingImplementation **************
$inherits(DeviceOrientationEventWrappingImplementation, EventWrappingImplementation);
function DeviceOrientationEventWrappingImplementation() {}
DeviceOrientationEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
DeviceOrientationEventWrappingImplementation._wrap$ctor.prototype = DeviceOrientationEventWrappingImplementation.prototype;
// ********** Code for FilteredElementList **************
function FilteredElementList(node) {
  this._node = node;
  this._childNodes = node.get$nodes();
}
FilteredElementList.prototype.get$_filtered = function() {
  return ListFactory.ListFactory$from$factory(this._childNodes.filter((function (n) {
    return !!(n && n.is$html_html_Element());
  })
  ));
}
FilteredElementList.prototype.get$first = function() {
  var $$list = this._childNodes;
  for (var $$i = $$list.iterator(); $$i.hasNext(); ) {
    var node = $$i.next$0();
    if (!!(node && node.is$html_html_Element())) {
      return node;
    }
  }
  return null;
}
FilteredElementList.prototype.forEach = function(f) {
  this.get$_filtered().forEach(f);
}
FilteredElementList.prototype.$setindex = function(index, value) {
  this.$index(index).replaceWith(value);
}
FilteredElementList.prototype.add = function(value) {
  this._childNodes.add$1(value);
}
FilteredElementList.prototype.get$add = function() {
  return this.add.bind(this);
}
FilteredElementList.prototype.addAll = function(collection) {
  collection.forEach(this.get$add());
}
FilteredElementList.prototype.removeRange = function(start, length) {
  this.get$_filtered().getRange$2(start, length).forEach$1((function (el) {
    return el.remove$0();
  })
  );
}
FilteredElementList.prototype.clear = function() {
  this._childNodes.clear();
}
FilteredElementList.prototype.get$clear = function() {
  return this.clear.bind(this);
}
FilteredElementList.prototype.get$length = function() {
  return this.get$_filtered().get$length();
}
FilteredElementList.prototype.$index = function(index) {
  return this.get$_filtered().$index(index);
}
FilteredElementList.prototype.iterator = function() {
  return this.get$_filtered().iterator$0();
}
FilteredElementList.prototype.getRange = function(start, length) {
  return this.get$_filtered().getRange$2(start, length);
}
FilteredElementList.prototype.add$1 = FilteredElementList.prototype.add;
FilteredElementList.prototype.addAll$1 = FilteredElementList.prototype.addAll;
FilteredElementList.prototype.clear$0 = FilteredElementList.prototype.clear;
FilteredElementList.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
FilteredElementList.prototype.getRange$2 = FilteredElementList.prototype.getRange;
FilteredElementList.prototype.iterator$0 = FilteredElementList.prototype.iterator;
// ********** Code for EmptyStyleDeclaration **************
$inherits(EmptyStyleDeclaration, CSSStyleDeclarationWrappingImplementation);
function EmptyStyleDeclaration() {
  CSSStyleDeclarationWrappingImplementation._wrap$ctor.call(this, get$document().createElement("div").style);
}
EmptyStyleDeclaration.prototype.setProperty = function(propertyName, value, priority) {
  $throw(new UnsupportedOperationException("Can't modify a frozen style declaration."));
}
EmptyStyleDeclaration.prototype.setProperty$3 = EmptyStyleDeclaration.prototype.setProperty;
// ********** Code for DocumentFragmentWrappingImplementation **************
$inherits(DocumentFragmentWrappingImplementation, NodeWrappingImplementation);
function DocumentFragmentWrappingImplementation() {}
DocumentFragmentWrappingImplementation._wrap$ctor = function(ptr) {
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
DocumentFragmentWrappingImplementation._wrap$ctor.prototype = DocumentFragmentWrappingImplementation.prototype;
DocumentFragmentWrappingImplementation.prototype.is$html_html_Element = function(){return true};
DocumentFragmentWrappingImplementation.prototype.get$elements = function() {
  if (this._elements == null) {
    this._elements = new FilteredElementList(this);
  }
  return this._elements;
}
DocumentFragmentWrappingImplementation.prototype.set$innerHTML = function(value) {
  this.get$nodes().clear();
  var e = ElementWrappingImplementation.ElementWrappingImplementation$tag$factory("div");
  e.set$innerHTML(value);
  var nodes = ListFactory.ListFactory$from$factory(e.get$nodes());
  this.get$nodes().addAll(nodes);
}
DocumentFragmentWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new ElementEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
DocumentFragmentWrappingImplementation.prototype.set$hidden = function(value) {
  $throw(new UnsupportedOperationException("Hidden can't be set for document fragments."));
}
DocumentFragmentWrappingImplementation.prototype.get$firstElementChild = function() {
  return this.get$elements().get$first().call$0();
}
DocumentFragmentWrappingImplementation.prototype.get$attributes = function() {
  return const$0005;
}
DocumentFragmentWrappingImplementation.prototype.get$classes = function() {
  return new HashSetImplementation();
}
DocumentFragmentWrappingImplementation.prototype.get$style = function() {
  return new EmptyStyleDeclaration();
}
// ********** Code for DocumentEventsImplementation **************
$inherits(DocumentEventsImplementation, ElementEventsImplementation);
function DocumentEventsImplementation() {}
DocumentEventsImplementation._wrap$ctor = function(_ptr) {
  ElementEventsImplementation._wrap$ctor.call(this, _ptr);
}
DocumentEventsImplementation._wrap$ctor.prototype = DocumentEventsImplementation.prototype;
// ********** Code for DocumentWrappingImplementation **************
$inherits(DocumentWrappingImplementation, ElementWrappingImplementation);
function DocumentWrappingImplementation() {}
DocumentWrappingImplementation._wrap$ctor = function(_documentPtr, ptr) {
  this._documentPtr = _documentPtr;
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
  this._documentPtr.get$dynamic().set$dartObjectLocalStorage(this);
}
DocumentWrappingImplementation._wrap$ctor.prototype = DocumentWrappingImplementation.prototype;
DocumentWrappingImplementation.prototype.is$html_html_Element = function(){return true};
DocumentWrappingImplementation.prototype.get$window = function() {
  return LevelDom.wrapWindow(this._documentPtr.get$defaultView());
}
DocumentWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new DocumentEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for _ChildrenElementList **************
function _ChildrenElementList() {}
_ChildrenElementList._wrap$ctor = function(element) {
  this._element = element;
  this._childElements = element.get$children();
}
_ChildrenElementList._wrap$ctor.prototype = _ChildrenElementList.prototype;
_ChildrenElementList.prototype._toList = function() {
  var output = new Array(this._childElements.get$length());
  for (var i = (0), len = this._childElements.get$length();
   i < len; i++) {
    output.$setindex(i, LevelDom.wrapElement(this._childElements.$index(i)));
  }
  return output;
}
_ChildrenElementList.prototype.get$first = function() {
  return LevelDom.wrapElement(this._element.get$firstElementChild());
}
_ChildrenElementList.prototype.forEach = function(f) {
  var $$list = this._childElements;
  for (var $$i = $$list.iterator$0(); $$i.hasNext$0(); ) {
    var element = $$i.next$0();
    f(LevelDom.wrapElement(element));
  }
}
_ChildrenElementList.prototype.get$length = function() {
  return this._childElements.get$length();
}
_ChildrenElementList.prototype.$index = function(index) {
  return LevelDom.wrapElement(this._childElements.$index(index));
}
_ChildrenElementList.prototype.$setindex = function(index, value) {
  this._element.replaceChild$2(LevelDom.unwrap(value), this._childElements.item$1(index));
}
_ChildrenElementList.prototype.add = function(value) {
  this._element.appendChild$1(LevelDom.unwrap(value));
  return value;
}
_ChildrenElementList.prototype.iterator = function() {
  return this._toList().iterator$0();
}
_ChildrenElementList.prototype.addAll = function(collection) {
  for (var $$i = collection.iterator$0(); $$i.hasNext$0(); ) {
    var element = $$i.next$0();
    this._element.appendChild$1(LevelDom.unwrap(element));
  }
}
_ChildrenElementList.prototype.removeRange = function(start, length) {
  $throw(const$0008);
}
_ChildrenElementList.prototype.getRange = function(start, length) {
  $throw(const$0008);
}
_ChildrenElementList.prototype.clear = function() {
  this._element.set$textContent("");
}
_ChildrenElementList.prototype.get$clear = function() {
  return this.clear.bind(this);
}
_ChildrenElementList.prototype.add$1 = _ChildrenElementList.prototype.add;
_ChildrenElementList.prototype.addAll$1 = _ChildrenElementList.prototype.addAll;
_ChildrenElementList.prototype.clear$0 = _ChildrenElementList.prototype.clear;
_ChildrenElementList.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
_ChildrenElementList.prototype.getRange$2 = _ChildrenElementList.prototype.getRange;
_ChildrenElementList.prototype.iterator$0 = _ChildrenElementList.prototype.iterator;
// ********** Code for FrozenElementList **************
function FrozenElementList() {}
FrozenElementList._wrap$ctor = function(_ptr) {
  this._ptr = _ptr;
}
FrozenElementList._wrap$ctor.prototype = FrozenElementList.prototype;
FrozenElementList.prototype.get$_ptr = function() { return this._ptr; };
FrozenElementList.prototype.get$first = function() {
  return this.$index((0));
}
FrozenElementList.prototype.forEach = function(f) {
  var length = this._ptr.get$length();
  for (var i = (0);
   i < length; i = $add(i, (1))) {
    f(LevelDom.wrapElement(this._ptr.$index(i)));
  }
}
FrozenElementList.prototype.get$length = function() {
  return this._ptr.get$length();
}
FrozenElementList.prototype.$index = function(index) {
  return LevelDom.wrapElement(this._ptr.$index(index));
}
FrozenElementList.prototype.$setindex = function(index, value) {
  $throw(const$0001);
}
FrozenElementList.prototype.add = function(value) {
  $throw(const$0001);
}
FrozenElementList.prototype.iterator = function() {
  return new FrozenElementListIterator(this);
}
FrozenElementList.prototype.addAll = function(collection) {
  $throw(const$0001);
}
FrozenElementList.prototype.removeRange = function(start, length) {
  $throw(const$0008);
}
FrozenElementList.prototype.getRange = function(start, length) {
  $throw(const$0008);
}
FrozenElementList.prototype.clear = function() {
  $throw("Not impl yet. todo(jacobr)");
}
FrozenElementList.prototype.get$clear = function() {
  return this.clear.bind(this);
}
FrozenElementList.prototype.add$1 = FrozenElementList.prototype.add;
FrozenElementList.prototype.addAll$1 = FrozenElementList.prototype.addAll;
FrozenElementList.prototype.clear$0 = FrozenElementList.prototype.clear;
FrozenElementList.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
FrozenElementList.prototype.getRange$2 = FrozenElementList.prototype.getRange;
FrozenElementList.prototype.iterator$0 = FrozenElementList.prototype.iterator;
// ********** Code for FrozenElementListIterator **************
function FrozenElementListIterator(_list) {
  this._list = _list;
  this._htmlimpl_index = (0);
}
FrozenElementListIterator.prototype.next = function() {
  if (!this.hasNext()) {
    $throw(const$0002);
  }
  return this._list.$index(this._htmlimpl_index++);
}
FrozenElementListIterator.prototype.hasNext = function() {
  return this._htmlimpl_index < this._list.get$length();
}
FrozenElementListIterator.prototype.hasNext$0 = FrozenElementListIterator.prototype.hasNext;
FrozenElementListIterator.prototype.next$0 = FrozenElementListIterator.prototype.next;
// ********** Code for ElementAttributeMap **************
function ElementAttributeMap() {}
ElementAttributeMap._wrap$ctor = function(_element) {
  this._element = _element;
}
ElementAttributeMap._wrap$ctor.prototype = ElementAttributeMap.prototype;
ElementAttributeMap.prototype.containsKey = function(key) {
  return this._element.hasAttribute$1(key);
}
ElementAttributeMap.prototype.$index = function(key) {
  return this._element.getAttribute$1(key);
}
ElementAttributeMap.prototype.$setindex = function(key, value) {
  this._element.setAttribute$2(key, value);
}
ElementAttributeMap.prototype.putIfAbsent = function(key, ifAbsent) {
  if (!this.containsKey(key)) {
    this.$setindex(key, ifAbsent());
  }
}
ElementAttributeMap.prototype.clear = function() {
  var attributes = this._element.get$attributes();
  for (var i = attributes.get$length() - (1);
   i >= (0); i--) {
    this._element.removeAttribute$1(attributes.item$1(i).get$name());
  }
}
ElementAttributeMap.prototype.get$clear = function() {
  return this.clear.bind(this);
}
ElementAttributeMap.prototype.forEach = function(f) {
  var attributes = this._element.get$attributes();
  for (var i = (0), len = attributes.get$length();
   i < len; i++) {
    var item = attributes.item$1(i);
    f(item.get$name(), item.get$value());
  }
}
ElementAttributeMap.prototype.get$length = function() {
  return this._element.get$attributes().get$length();
}
ElementAttributeMap.prototype.clear$0 = ElementAttributeMap.prototype.clear;
ElementAttributeMap.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$2($0));
};
ElementAttributeMap.prototype.putIfAbsent$2 = function($0, $1) {
  return this.putIfAbsent($0, to$call$0($1));
};
// ********** Code for ErrorEventWrappingImplementation **************
$inherits(ErrorEventWrappingImplementation, EventWrappingImplementation);
function ErrorEventWrappingImplementation() {}
ErrorEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
ErrorEventWrappingImplementation._wrap$ctor.prototype = ErrorEventWrappingImplementation.prototype;
// ********** Code for _EventListenerWrapper **************
function _EventListenerWrapper(raw, wrapped, useCapture) {
  this.raw = raw;
  this.wrapped = wrapped;
  this.useCapture = useCapture;
}
// ********** Code for EventListenerListImplementation **************
function EventListenerListImplementation(_ptr, _type) {
  this._ptr = _ptr;
  this._type = _type;
  this._wrappers = new Array();
}
EventListenerListImplementation.prototype.get$_ptr = function() { return this._ptr; };
EventListenerListImplementation.prototype.add = function(listener, useCapture) {
  this._add(listener, useCapture);
  return this;
}
EventListenerListImplementation.prototype._add = function(listener, useCapture) {
  this._ptr.addEventListener$3(this._type, this._findOrAddWrapper(listener, useCapture), useCapture);
}
EventListenerListImplementation.prototype._findOrAddWrapper = function(listener, useCapture) {
  if (this._wrappers == null) {
    this._wrappers = [];
  }
  else {
    var $$list = this._wrappers;
    for (var $$i = 0;$$i < $$list.get$length(); $$i++) {
      var wrapper = $$list.$index($$i);
      if (wrapper.raw == listener && $eq(wrapper.useCapture, useCapture)) {
        return wrapper.wrapped;
      }
    }
  }
  var wrapped = (function (e) {
    listener(LevelDom.wrapEvent(e));
  })
  ;
  this._wrappers.add$1(new _EventListenerWrapper(listener, wrapped, useCapture));
  return wrapped;
}
EventListenerListImplementation.prototype.add$1 = function($0) {
  return this.add(to$call$1($0), false);
};
EventListenerListImplementation.prototype.add$2 = function($0, $1) {
  return this.add(to$call$1($0), $1);
};
// ********** Code for HashChangeEventWrappingImplementation **************
$inherits(HashChangeEventWrappingImplementation, EventWrappingImplementation);
function HashChangeEventWrappingImplementation() {}
HashChangeEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
HashChangeEventWrappingImplementation._wrap$ctor.prototype = HashChangeEventWrappingImplementation.prototype;
// ********** Code for KeyboardEventWrappingImplementation **************
$inherits(KeyboardEventWrappingImplementation, UIEventWrappingImplementation);
function KeyboardEventWrappingImplementation() {}
KeyboardEventWrappingImplementation._wrap$ctor = function(ptr) {
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
KeyboardEventWrappingImplementation._wrap$ctor.prototype = KeyboardEventWrappingImplementation.prototype;
// ********** Code for MessageEventWrappingImplementation **************
$inherits(MessageEventWrappingImplementation, EventWrappingImplementation);
function MessageEventWrappingImplementation() {}
MessageEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
MessageEventWrappingImplementation._wrap$ctor.prototype = MessageEventWrappingImplementation.prototype;
// ********** Code for MouseEventWrappingImplementation **************
$inherits(MouseEventWrappingImplementation, UIEventWrappingImplementation);
function MouseEventWrappingImplementation() {}
MouseEventWrappingImplementation._wrap$ctor = function(ptr) {
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
MouseEventWrappingImplementation._wrap$ctor.prototype = MouseEventWrappingImplementation.prototype;
// ********** Code for MutationEventWrappingImplementation **************
$inherits(MutationEventWrappingImplementation, EventWrappingImplementation);
function MutationEventWrappingImplementation() {}
MutationEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
MutationEventWrappingImplementation._wrap$ctor.prototype = MutationEventWrappingImplementation.prototype;
// ********** Code for _ChildrenNodeList **************
function _ChildrenNodeList() {}
_ChildrenNodeList._wrap$ctor = function(node) {
  this._node = node;
  this._childNodes = node.get$childNodes();
}
_ChildrenNodeList._wrap$ctor.prototype = _ChildrenNodeList.prototype;
_ChildrenNodeList.prototype._toList = function() {
  var output = new Array(this._childNodes.get$length());
  for (var i = (0), len = this._childNodes.get$length();
   i < len; i++) {
    output.$setindex(i, LevelDom.wrapNode(this._childNodes.$index(i)));
  }
  return output;
}
_ChildrenNodeList.prototype.get$first = function() {
  return LevelDom.wrapNode(this._node.get$firstChild());
}
_ChildrenNodeList.prototype.forEach = function(f) {
  return this._toList().forEach(f);
}
_ChildrenNodeList.prototype.filter = function(f) {
  var output = new Array();
  this.forEach((function (element) {
    if (f(element)) {
      output.add$1(element);
    }
  })
  );
  return output;
}
_ChildrenNodeList.prototype.get$length = function() {
  return this._childNodes.get$length();
}
_ChildrenNodeList.prototype.$index = function(index) {
  return LevelDom.wrapNode(this._childNodes.$index(index));
}
_ChildrenNodeList.prototype.$setindex = function(index, value) {
  this._node.replaceChild$2(LevelDom.unwrap(value), this._childNodes.$index(index));
}
_ChildrenNodeList.prototype.add = function(value) {
  this._node.appendChild$1(LevelDom.unwrap(value));
  return value;
}
_ChildrenNodeList.prototype.iterator = function() {
  return this._toList().iterator$0();
}
_ChildrenNodeList.prototype.addAll = function(collection) {
  for (var $$i = collection.iterator$0(); $$i.hasNext$0(); ) {
    var node = $$i.next$0();
    this._node.appendChild$1(LevelDom.unwrap(node));
  }
}
_ChildrenNodeList.prototype.removeRange = function(start, length) {
  if (start < (0)) {
    $throw(new IndexOutOfRangeException(start));
  }
  else if (length < (0)) {
    $throw(new IllegalArgumentException(("negative length " + length)));
  }
  else if (start + length > this.get$length()) {
    $throw(new IndexOutOfRangeException(Math.min(this.get$length(), start)));
  }
  for (var i = (0);
   i < length; i = $add(i, (1))) {
    this.$index(start).remove();
  }
}
_ChildrenNodeList.prototype.getRange = function(start, length) {
  if (start < (0)) {
    $throw(new IndexOutOfRangeException(start));
  }
  else if (length < (0)) {
    $throw(new IllegalArgumentException(("negative length " + length)));
  }
  else if (start + length > this.get$length()) {
    $throw(new IndexOutOfRangeException(Math.min(this.get$length(), start)));
  }
  var nodes = [];
  for (var i = (0);
   i < length; i = $add(i, (1))) {
    nodes.add$1(this.$index(start + i));
  }
  return nodes;
}
_ChildrenNodeList.prototype.clear = function() {
  this._node.set$textContent("");
}
_ChildrenNodeList.prototype.get$clear = function() {
  return this.clear.bind(this);
}
_ChildrenNodeList.prototype.add$1 = _ChildrenNodeList.prototype.add;
_ChildrenNodeList.prototype.addAll$1 = _ChildrenNodeList.prototype.addAll;
_ChildrenNodeList.prototype.clear$0 = _ChildrenNodeList.prototype.clear;
_ChildrenNodeList.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
_ChildrenNodeList.prototype.getRange$2 = _ChildrenNodeList.prototype.getRange;
_ChildrenNodeList.prototype.iterator$0 = _ChildrenNodeList.prototype.iterator;
// ********** Code for ObjectElementWrappingImplementation **************
$inherits(ObjectElementWrappingImplementation, ElementWrappingImplementation);
function ObjectElementWrappingImplementation() {}
ObjectElementWrappingImplementation._wrap$ctor = function(ptr) {
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ObjectElementWrappingImplementation._wrap$ctor.prototype = ObjectElementWrappingImplementation.prototype;
ObjectElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
ObjectElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
ObjectElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
ObjectElementWrappingImplementation.prototype.get$width = function() {
  return this._ptr.get$width();
}
// ********** Code for OverflowEventWrappingImplementation **************
$inherits(OverflowEventWrappingImplementation, EventWrappingImplementation);
function OverflowEventWrappingImplementation() {}
OverflowEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
OverflowEventWrappingImplementation._wrap$ctor.prototype = OverflowEventWrappingImplementation.prototype;
// ********** Code for PageTransitionEventWrappingImplementation **************
$inherits(PageTransitionEventWrappingImplementation, EventWrappingImplementation);
function PageTransitionEventWrappingImplementation() {}
PageTransitionEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
PageTransitionEventWrappingImplementation._wrap$ctor.prototype = PageTransitionEventWrappingImplementation.prototype;
// ********** Code for PopStateEventWrappingImplementation **************
$inherits(PopStateEventWrappingImplementation, EventWrappingImplementation);
function PopStateEventWrappingImplementation() {}
PopStateEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
PopStateEventWrappingImplementation._wrap$ctor.prototype = PopStateEventWrappingImplementation.prototype;
// ********** Code for ProgressEventWrappingImplementation **************
$inherits(ProgressEventWrappingImplementation, EventWrappingImplementation);
function ProgressEventWrappingImplementation() {}
ProgressEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
ProgressEventWrappingImplementation._wrap$ctor.prototype = ProgressEventWrappingImplementation.prototype;
// ********** Code for StorageEventWrappingImplementation **************
$inherits(StorageEventWrappingImplementation, EventWrappingImplementation);
function StorageEventWrappingImplementation() {}
StorageEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
StorageEventWrappingImplementation._wrap$ctor.prototype = StorageEventWrappingImplementation.prototype;
// ********** Code for SVGDocumentWrappingImplementation **************
$inherits(SVGDocumentWrappingImplementation, DocumentWrappingImplementation);
function SVGDocumentWrappingImplementation() {}
SVGDocumentWrappingImplementation._wrap$ctor = function(ptr) {
  DocumentWrappingImplementation._wrap$ctor.call(this, ptr, ptr.rootElement);
}
SVGDocumentWrappingImplementation._wrap$ctor.prototype = SVGDocumentWrappingImplementation.prototype;
SVGDocumentWrappingImplementation.prototype.is$html_html_Element = function(){return true};
// ********** Code for _SVGClassSet **************
$inherits(_SVGClassSet, _CssClassSet);
function _SVGClassSet(element) {
  _CssClassSet.call(this, element);
}
_SVGClassSet.prototype._className = function() {
  return this._htmlimpl_element.get$className().get$baseVal();
}
_SVGClassSet.prototype._write = function(s) {
  this._htmlimpl_element.get$className().set$baseVal(this._formatSet(s));
}
// ********** Code for SVGSVGElementWrappingImplementation **************
$inherits(SVGSVGElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGSVGElementWrappingImplementation() {}
SVGSVGElementWrappingImplementation._wrap$ctor = function(ptr) {
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGSVGElementWrappingImplementation._wrap$ctor.prototype = SVGSVGElementWrappingImplementation.prototype;
SVGSVGElementWrappingImplementation.prototype.is$html_html_Element = function(){return true};
SVGSVGElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGSVGElementWrappingImplementation.prototype.get$width = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$width());
}
SVGSVGElementWrappingImplementation.prototype.get$className = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$className());
}
SVGSVGElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for TextEventWrappingImplementation **************
$inherits(TextEventWrappingImplementation, UIEventWrappingImplementation);
function TextEventWrappingImplementation() {}
TextEventWrappingImplementation._wrap$ctor = function(ptr) {
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
TextEventWrappingImplementation._wrap$ctor.prototype = TextEventWrappingImplementation.prototype;
// ********** Code for TouchEventWrappingImplementation **************
$inherits(TouchEventWrappingImplementation, UIEventWrappingImplementation);
function TouchEventWrappingImplementation() {}
TouchEventWrappingImplementation._wrap$ctor = function(ptr) {
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
TouchEventWrappingImplementation._wrap$ctor.prototype = TouchEventWrappingImplementation.prototype;
// ********** Code for TransitionEventWrappingImplementation **************
$inherits(TransitionEventWrappingImplementation, EventWrappingImplementation);
function TransitionEventWrappingImplementation() {}
TransitionEventWrappingImplementation._wrap$ctor = function(ptr) {
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
TransitionEventWrappingImplementation._wrap$ctor.prototype = TransitionEventWrappingImplementation.prototype;
// ********** Code for WheelEventWrappingImplementation **************
$inherits(WheelEventWrappingImplementation, UIEventWrappingImplementation);
function WheelEventWrappingImplementation() {}
WheelEventWrappingImplementation._wrap$ctor = function(ptr) {
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
WheelEventWrappingImplementation._wrap$ctor.prototype = WheelEventWrappingImplementation.prototype;
// ********** Code for WindowEventsImplementation **************
$inherits(WindowEventsImplementation, EventsImplementation);
function WindowEventsImplementation() {}
WindowEventsImplementation._wrap$ctor = function(_ptr) {
  EventsImplementation._wrap$ctor.call(this, _ptr);
}
WindowEventsImplementation._wrap$ctor.prototype = WindowEventsImplementation.prototype;
WindowEventsImplementation.prototype.get$click = function() {
  return this._get("click");
}
WindowEventsImplementation.prototype.get$keyDown = function() {
  return this._get("keydown");
}
WindowEventsImplementation.prototype.click$0 = function() {
  return this.get$click().call$0();
};
// ********** Code for WindowWrappingImplementation **************
$inherits(WindowWrappingImplementation, EventTargetWrappingImplementation);
function WindowWrappingImplementation() {}
WindowWrappingImplementation._wrap$ctor = function(ptr) {
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
WindowWrappingImplementation._wrap$ctor.prototype = WindowWrappingImplementation.prototype;
WindowWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
WindowWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
WindowWrappingImplementation.prototype.moveTo = function(x, y) {
  this._ptr.moveTo$2(x, y);
}
WindowWrappingImplementation.prototype.setTimeout = function(handler, timeout) {
  return this._ptr.setTimeout$2(handler, timeout);
}
WindowWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new WindowEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
WindowWrappingImplementation.prototype.moveTo$2 = WindowWrappingImplementation.prototype.moveTo;
WindowWrappingImplementation.prototype.setTimeout$2 = function($0, $1) {
  return this.setTimeout(to$call$0($0), $1);
};
// ********** Code for XMLHttpRequestProgressEventWrappingImplementation **************
$inherits(XMLHttpRequestProgressEventWrappingImplementation, ProgressEventWrappingImplementation);
function XMLHttpRequestProgressEventWrappingImplementation() {}
XMLHttpRequestProgressEventWrappingImplementation._wrap$ctor = function(ptr) {
  ProgressEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
XMLHttpRequestProgressEventWrappingImplementation._wrap$ctor.prototype = XMLHttpRequestProgressEventWrappingImplementation.prototype;
// ********** Code for top level **************
var _pendingRequests;
var _pendingMeasurementFrameCallbacks;
//  ********** Library html **************
// ********** Code for top level **************
var secretWindow;
var secretDocument;
function html_get$window() {
  if ($globals.secretWindow == null) {
    LevelDom.initialize();
  }
  return $globals.secretWindow;
}
function html_get$document() {
  if ($globals.secretWindow == null) {
    LevelDom.initialize();
  }
  return $globals.secretDocument;
}
//  ********** Library coverflow **************
// ********** Code for coverflow **************
function coverflow() {
  this.radius = (20);
  this.side = (250);
  this.long_side = (700);
  this.offset = (6);
  this.display_offset = (6);
  this.flipping = false;
  this.currPoped = false;
  this.imagesLoaded = (0);
  this.queue = new Array();
}
coverflow.prototype.createCanvasElement = function(img) {
  var $this = this; // closure support
  var canvas = ElementWrappingImplementation.ElementWrappingImplementation$tag$factory("canvas");
  canvas.get$attributes().$setindex("width", this.side);
  canvas.get$attributes().$setindex("height", this.side);
  var _height = img.get$naturalHeight();
  var _width = img.get$naturalWidth();
  var w = false;
  if (_height > _width) {
    w = true;
  }
  var sx, sy, sw, sh, _side;
  if (w) {
    _side = _width;
    sx = (0);
    sy = _height / (2) - _side / (2);
  }
  else {
    _side = _height;
    sx = _width / (2) - _side / (2);
    sy = (0);
  }
  sw = _side;
  sh = _side;
  var cx = canvas.getContext("2d");
  cx.beginPath$0();
  cx.moveTo$2(this.radius, (0));
  cx.lineTo$2(canvas.get$width() - this.radius, (0));
  cx.quadraticCurveTo$4(canvas.get$width(), (0), canvas.get$width(), this.radius);
  cx.lineTo$2(canvas.get$width(), canvas.get$height() - this.radius);
  cx.quadraticCurveTo$4(canvas.get$width(), canvas.get$height(), canvas.get$width() - this.radius, canvas.get$height());
  cx.lineTo$2(this.radius, canvas.get$height());
  cx.quadraticCurveTo$4((0), canvas.get$height(), (0), canvas.get$height() - this.radius);
  cx.lineTo$2((0), this.radius);
  cx.quadraticCurveTo$4((0), (0), this.radius, (0));
  cx.clip$0();
  cx.drawImage$9(img, sx, sy, sw, sh, (0), (0), this.side, this.side);
  canvas.get$on().get$click().add((function (event) {
    if (!$this.currPoped) {
      $this.currPoped = true;
      $this.popup(img);
    }
    else {
      $this.popdown();
    }
  })
  , false);
  return canvas;
}
coverflow.prototype.popup = function(img) {
  var $this = this; // closure support
  var _height = img.get$naturalHeight();
  var _width = img.get$naturalWidth();
  var w = false;
  if (_height > _width) {
    w = true;
  }
  var sx, sy, sw, sh;
  if (w) {
    sh = this.long_side;
    sw = (this.long_side / _height * _width);
  }
  else {
    sh = (this.long_side / _width * _height);
    sw = this.long_side;
  }
  var _img = ElementWrappingImplementation.ElementWrappingImplementation$html$factory("<img/>");
  _img.get$attributes().$setindex("src", img.get$src());
  _img.get$attributes().$setindex("width", sw);
  _img.get$attributes().$setindex("height", sh);
  _img.get$attributes().$setindex("id", "zoom");
  _img.get$style().set$margin((((this.long_side / (2)) - sh) / (2)).toString() + "px " + (((985) - sw) / (2)).toString() + "px");
  _img.get$style().set$opacity("0");
  _img.get$on().get$click().add$1((function (event) {
    $this.popdown();
  })
  );
  html_get$document().query("#zoom_container").get$nodes().add$1(_img);
  html_get$document().query("#zoom_container").set$hidden(false);
  html_get$document().get$window().setTimeout((function () {
    _img.get$style().set$opacity((1));
  })
  , (10));
}
coverflow.prototype.popdown = function() {
  var $this = this; // closure support
  var $0;
  try {
    if (!!(($0 = html_get$document().query("#zoom")) && $0.is$html_html_Element())) {
      html_get$document().query("#zoom").get$style().set$opacity((0));
    }
    html_get$document().get$window().setTimeout((function () {
      var $0;
      if (!!(($0 = html_get$document().query("#zoom")) && $0.is$html_html_Element())) {
        html_get$document().query("#zoom").remove();
        html_get$document().query("#zoom_container").set$hidden(true);
        $this.currPoped = false;
      }
    })
    , (500));
  } catch (ex) {
    ex = _toDartException(ex);
    dart_core_print(("popdown exception " + ex));
  }
}
coverflow.prototype.slide = function(diff) {
  var _offset = $add(this.offset, diff);
  var li = html_get$document().queryAll("#coverflow li");
  if (_offset > (6) || _offset < (li.get$length() - (7)) * (-1)) {
    return false;
  }
  this.move(diff * (-1));
  this.offset = _offset;
  var input = html_get$document().query("#range");
  input.set$valueAsNumber(_offset * (-1));
  if (!this.flipping) {
    this.flip();
  }
}
coverflow.prototype.move = function(diff) {
  this.popdown();
  var abs = diff < (0) ? diff * (-1) : diff;
  var vector = (1);
  if (diff > (0)) {
    vector = (-1);
  }
  for (var i = (0);
   i < abs; i = $add(i, (1))) {
    var flow = _map(["vector", vector, "speed", (0.03)]);
    this.queue.add$1(flow);
  }
  return true;
}
coverflow.prototype.flip = function() {
  var $this = this; // closure support
  var flow = this.queue.$index((0));
  if (flow == null) {
    this.flipping = false;
    return;
  }
  this.queue.removeRange((0), (1));
  this.flipping = true;
  var _offset = $add(this.display_offset, flow.$index("vector"));
  var speed = (0.05);
  if (this.queue.get$length() < (4)) {
    speed = (0.1);
  }
  if (this.queue.get$length() < (2)) {
    speed = (0.2);
  }
  var canvas = html_get$document().query("#coverflow li");
  var el = html_get$document().queryAll("#coverflow li");
  var index = (0);
  for (var $$i = el.iterator(); $$i.hasNext(); ) {
    var e = $$i.next$0();
    var order = $add(index, _offset);
    if (order <= (0)) {
      e.get$attributes().$setindex("class", "img coverflow0");
    }
    else if (order > (11)) {
      e.get$attributes().$setindex("class", "img coverflow12");
    }
    else {
      e.get$attributes().$setindex("class", "img coverflow" + (order).toString$0());
    }
    index = $add(index, (1));
  }
  this.display_offset = _offset;
  html_get$document().get$window().setTimeout((function () {
    $this.flip();
  })
  , speed * (1000) + (30));
}
coverflow.prototype.init = function() {
  var $this = this; // closure support
  var index = (0);
  var $$list = html_get$document().queryAll("#dummy img");
  for (var $$i = $$list.iterator(); $$i.hasNext(); ) {
    var i = $$i.next$0();
    var canvas = this.createCanvasElement(i);
    var li = ElementWrappingImplementation.ElementWrappingImplementation$html$factory("<li class=\"img\"/>");
    var order = $add(index, (6));
    if (order <= (11)) {
      li.get$classes().add$1("coverflow" + order);
    }
    else {
      li.get$classes().add$1("coverflow12");
    }
    li.get$nodes().add$1(canvas);
    html_get$document().query("#coverflow").get$nodes().add$1(li);
    index = $add(index, (1));
  }
  html_get$document().query("#left").get$on().get$click().add$2((function (event) {
    $this.slide((1));
  })
  , false);
  html_get$document().query("#right").get$on().get$click().add$2((function (event) {
    $this.slide((-1));
  })
  , false);
  var input = html_get$document().query("#range");
  input.get$on().get$change().add((function (event) {
    var range = input.get$value();
    $this.move(Math.parseInt(range) + $this.offset);
    $this.offset = range * (-1);
    if (!$this.flipping) {
      $this.flip();
    }
  })
  , false);
  html_get$window().get$on().get$keyDown().add((function (event) {
    if (event.get$keyCode() == (27)) {
      $this.popdown();
    }
    if (event.get$keyCode() == (39)) {
      $this.slide((-1));
    }
    if (event.get$keyCode() == (37)) {
      $this.slide((1));
    }
  })
  , false);
  html_get$document().query("#zoom_container").get$style().set$left("0px");
  html_get$document().query("#zoom_container").get$style().set$display("block");
}
coverflow.prototype.loadImages = function() {
  var $this = this; // closure support
  var dummy = html_get$document().query("#dummy");
  for (var i = (1);
   i <= (20); i++) {
    var img = ElementWrappingImplementation.ElementWrappingImplementation$tag$factory("img");
    img.get$on().get$load().add((function (event) {
      $this.imagesLoaded++;
      if ($this.imagesLoaded == (20)) {
        html_get$document().get$window().setTimeout((function () {
          $this.init();
        })
        , (100));
      }
    })
    , false);
    img.set$src(("./images/" + i + ".jpg"));
    dummy.get$nodes().add$1(img);
  }
}
coverflow.prototype.run = function() {
  this.loadImages();
}
// ********** Code for top level **************
function main() {
  new coverflow().run();
}
// ********** Generic Type Inheritance **************
/** Implements extends for generic types. */
function $inheritsMembers(child, parent) {
  child = child.prototype;
  parent = parent.prototype;
  Object.getOwnPropertyNames(parent).forEach(function(name) {
    if (typeof(child[name]) == 'undefined') child[name] = parent[name];
  });
}
$inheritsMembers(_DoubleLinkedQueueEntrySentinel_E, DoubleLinkedQueueEntry_E);
$inheritsMembers(_DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V, DoubleLinkedQueueEntry_KeyValuePair_K$V);
// 328 dynamic types.
// 501 types
// 41 !leaf
(function(){
  var v0/*CSSValueList*/ = 'CSSValueList|WebKitCSSFilterValue|WebKitCSSTransformValue';
  var v1/*HTMLInputElement*/ = 'HTMLInputElement|HTMLIsIndexElement';
  var v2/*HTMLMediaElement*/ = 'HTMLMediaElement|HTMLAudioElement|HTMLVideoElement';
  var v3/*HTMLElement*/ = [v1/*HTMLInputElement*/,v2/*HTMLMediaElement*/,'HTMLElement|HTMLAnchorElement|HTMLAppletElement|HTMLAreaElement|HTMLBRElement|HTMLBaseElement|HTMLBaseFontElement|HTMLBodyElement|HTMLButtonElement|HTMLCanvasElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFormElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLSelectElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTextAreaElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement'].join('|');
  var v4/*SVGGradientElement*/ = 'SVGGradientElement|SVGLinearGradientElement|SVGRadialGradientElement';
  var v5/*SVGTextContentElement*/ = 'SVGTextContentElement|SVGTextPathElement|SVGTextPositioningElement|SVGAltGlyphElement|SVGTRefElement|SVGTSpanElement|SVGTextElement';
  var v6/*UIEvent*/ = 'UIEvent|CompositionEvent|KeyboardEvent|MouseEvent|SVGZoomEvent|TextEvent|TouchEvent|WheelEvent';
  var v7/*CharacterData*/ = 'CharacterData|Comment|Text|CDATASection';
  var v8/*Document*/ = 'Document|HTMLDocument|SVGDocument';
  var v9/*Element*/ = [v3/*HTMLElement*/,v4/*SVGGradientElement*/,v5/*SVGTextContentElement*/,'Element|SVGElement|SVGAElement|SVGAltGlyphDefElement|SVGAltGlyphItemElement|SVGAnimationElement|SVGAnimateColorElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGSetElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGCursorElement|SVGDefsElement|SVGDescElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGFontElement|SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement|SVGForeignObjectElement|SVGGElement|SVGGlyphElement|SVGGlyphRefElement|SVGHKernElement|SVGImageElement|SVGLineElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGMissingGlyphElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTitleElement|SVGUseElement|SVGVKernElement|SVGViewElement'].join('|');
  var table = [
    // [dynamic-dispatch-tag, tags of classes implementing dynamic-dispatch-tag]
    ['AbstractWorker', 'AbstractWorker|SharedWorker|Worker'],
    ['ArrayBufferView', 'ArrayBufferView|DataView|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array'],
    ['AudioNode', 'AudioNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioSourceNode|AudioBufferSourceNode|MediaElementAudioSourceNode|BiquadFilterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|HighPass2FilterNode|JavaScriptAudioNode|LowPass2FilterNode|RealtimeAnalyserNode|WaveShaperNode'],
    ['AudioParam', 'AudioParam|AudioGain'],
    ['Blob', 'Blob|File'],
    ['CSSRule', 'CSSRule|CSSCharsetRule|CSSFontFaceRule|CSSImportRule|CSSMediaRule|CSSPageRule|CSSStyleRule|CSSUnknownRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule'],
    ['CSSValueList', v0/*CSSValueList*/],
    ['CSSValue', [v0/*CSSValueList*/,'CSSValue|CSSPrimitiveValue|SVGColor|SVGPaint'].join('|')],
    ['CanvasRenderingContext', 'CanvasRenderingContext|CanvasRenderingContext2D|WebGLRenderingContext'],
    ['CharacterData', v7/*CharacterData*/],
    ['DOMTokenList', 'DOMTokenList|DOMSettableTokenList'],
    ['DOMWindow', 'DOMWindow|Window'],
    ['Document', v8/*Document*/],
    ['HTMLInputElement', v1/*HTMLInputElement*/],
    ['HTMLMediaElement', v2/*HTMLMediaElement*/],
    ['HTMLElement', v3/*HTMLElement*/],
    ['SVGGradientElement', v4/*SVGGradientElement*/],
    ['SVGTextContentElement', v5/*SVGTextContentElement*/],
    ['Element', v9/*Element*/],
    ['Entry', 'Entry|DirectoryEntry|FileEntry'],
    ['EntrySync', 'EntrySync|DirectoryEntrySync|FileEntrySync'],
    ['UIEvent', v6/*UIEvent*/],
    ['Event', [v6/*UIEvent*/,'Event|AudioProcessingEvent|BeforeLoadEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|HashChangeEvent|IDBVersionChangeEvent|MessageEvent|MutationEvent|OfflineAudioCompletionEvent|OverflowEvent|PageTransitionEvent|PopStateEvent|ProgressEvent|XMLHttpRequestProgressEvent|SpeechInputEvent|StorageEvent|TrackEvent|WebGLContextEvent|WebKitAnimationEvent|WebKitTransitionEvent'].join('|')],
    ['HTMLCollection', 'HTMLCollection|HTMLOptionsCollection|HTMLPropertiesCollection'],
    ['IDBCursor', 'IDBCursor|IDBCursorWithValue'],
    ['IDBRequest', 'IDBRequest|IDBVersionChangeRequest'],
    ['Node', [v7/*CharacterData*/,v8/*Document*/,v9/*Element*/,'Node|Attr|DocumentFragment|DocumentType|Entity|EntityReference|Notation|ProcessingInstruction'].join('|')],
    ['SVGLocatable', 'SVGLocatable|SVGTransformable'],
    ['SVGPathSeg', 'SVGPathSeg|SVGPathSegArcAbs|SVGPathSegArcRel|SVGPathSegClosePath|SVGPathSegCurvetoCubicAbs|SVGPathSegCurvetoCubicRel|SVGPathSegCurvetoCubicSmoothAbs|SVGPathSegCurvetoCubicSmoothRel|SVGPathSegCurvetoQuadraticAbs|SVGPathSegCurvetoQuadraticRel|SVGPathSegCurvetoQuadraticSmoothAbs|SVGPathSegCurvetoQuadraticSmoothRel|SVGPathSegLinetoAbs|SVGPathSegLinetoHorizontalAbs|SVGPathSegLinetoHorizontalRel|SVGPathSegLinetoRel|SVGPathSegLinetoVerticalAbs|SVGPathSegLinetoVerticalRel|SVGPathSegMovetoAbs|SVGPathSegMovetoRel'],
    ['SVGStylable', 'SVGStylable|SVGFilterPrimitiveStandardAttributes'],
    ['SVGZoomAndPan', 'SVGZoomAndPan|SVGViewSpec'],
    ['StyleSheet', 'StyleSheet|CSSStyleSheet'],
    ['WorkerContext', 'WorkerContext|DedicatedWorkerContext|SharedWorkercontext'],
  ];
  $dynamicSetMetadata(table);
})();
//  ********** Globals **************
function $static_init(){
}
var const$0000 = Object.create(_DeletedKeySentinel.prototype, {});
var const$0001 = Object.create(UnsupportedOperationException.prototype, {_message: {"value": "", writeable: false}, });
var const$0002 = Object.create(NoMoreElementsException.prototype, {});
var const$0003 = Object.create(EmptyQueueException.prototype, {});
var const$0004 = Object.create(IllegalAccessException.prototype, {});
var const$0005 = _constMap([]);
var const$0006 = new JSSyntaxRegExp("<(\\w+)");
var const$0007 = _constMap(["body", "html", "head", "html", "caption", "table", "td", "tr", "tbody", "table", "colgroup", "table", "col", "colgroup", "tr", "tbody", "tbody", "table", "tfoot", "table", "thead", "table", "track", "audio"]);
var const$0008 = Object.create(NotImplementedException.prototype, {});
var $globals = {};
$static_init();
main();
