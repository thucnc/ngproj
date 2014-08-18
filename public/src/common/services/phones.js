angular.module('ngBoilerplate.phones',[
    'Parse'
])
.factory('Phones', function(Parse) {
  /*jshint -W116 */
  /*jshint -W055 */
  var  __hasProp = {}.hasOwnProperty,
       __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
  var Phone, _ref;
    
  return Phone = (function(_super) {
    __extends(Phone, _super);
    /*jshint -W004 */
    function Phone() {
      _ref = Phone.__super__.constructor.apply(this, arguments);
      return _ref;
    }
    Phone.configure('phones', 'name', 'snippet', 'image');
    return Phone;
  })(Parse.Model);
})
;