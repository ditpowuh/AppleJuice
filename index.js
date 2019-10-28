module.exports = {
  post: function(text) {
    try {
      console.log(text);
    }
    catch(err) {
      return err;
    }
  },
  delay: function(milliseconds) {
    try {
      var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
          break;
        }
      }
    }
    catch(err) {
      return err;
    }
  },
  length: function (input) {
    try {
      if (!input) {
        throw "AppleJuiceError: Input(s) needed (requires one)"; 
      }
      return input.length;
    }
    catch(err) {
      return err;
    }
  },
  popup: function(text) {
    try {
      alert(text);
    }
    catch(err) {
      return err;
    }
  },
  round: function(input) {
    try {
      return Math.round(input);
    }
    catch(err) {
      return err;
    }
  },
  type: function(input) {
    try {
      return typeof input;
    }
    catch(err) {
      return err;
    }
  },
  var: function(input1, input2) {
    try {
      if (!input1 || !input2) {
        throw "AppleJuiceError: Input(s) needed (requires two)";
      }
      if (typeof input1 != "string") {
        throw "AppleJuiceError: First input incorrect type (string)";
      }
      if (typeof input2 == "number" || typeof input2 == "boolean" || typeof input2 == "object") {
        eval(input1 + " = " + input2 + ";");
      }
      else if (typeof input2 == "string") {
        eval(input1 + " = \"" + input2 + "\";");
      }
    }
    catch(err) {
      return err;
    }
  },
  run: function(input) {
    try {
      if (!input) {
        throw "AppleJuiceError: Input(s) needed (requires one)";
      }
      eval(input);
    }
    catch(err) {
      return err;
    }
  }
};
