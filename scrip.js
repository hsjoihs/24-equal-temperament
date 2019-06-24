/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/keymap.js":
/*!***********************!*\
  !*** ./app/keymap.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

  const KEYMAP = {
    90: [60, "Z"], // Z: C4
    83: [61, "S"], // S: C#4
    88: [62, "X"], // X: D4
    68: [63, "D"], // D: D#4
    67: [64, "C"], // C: E4
    86: [65, "V"], // V: F4
    71: [66, "G"], // G: F#4
    66: [67, "B"], // B: G4
    72: [68, "H"], // H: G#4
    78: [69, "N"], // N: A4
    74: [70, "J"], // J: A#4
    77: [71, "M"], // M: B4
    188: [72, ""], // ,: C5
    76: [73, ""], // L: C#5
    190: [74, ""], // .: D5
    187: [75, ""], // ;: D#5
    191: [76, ""], // /: E5
    226: [77, ""], // \\: F5
  
    81: ["60.5", "Q"], // Q: C‡4
    50: ["61.5", "2"], // 2: C#‡4
    87: ["62.5", "W"], // W: D‡4
    51: ["63.5", "3"], // 3: D#‡4
    69: ["64.5", "E"], // E: E‡4
    82: ["65.5", "R"], // R: F‡4
    53: ["66.5", "5"], // 5: F#‡4
    84: ["67.5", "T"], // T: G‡4
    54: ["68.5", "6"], // 6: G#‡4
    89: ["69.5", "Y"], // Y: A‡4
    55: ["70.5", "7"], // 7: A#‡4
    85: ["71.5", "U"], // U: B‡4
    73: ["72.5", "I"], // I: C‡5
    57: ["73.5", "9"], // 9: C#‡5
    79: ["74.5", "O"], // O: D‡5
    48: ["75.5", "0"], // 0: D#‡5
    80: ["76.5", "P"], // P: E‡5
    192: ["77.5", "@"], // @: F‡5
    222: ["78.5", "^"], // ^: F#‡5
    219: ["79.5", "["], // [: G‡5
  };
  module.exports = KEYMAP;
  
/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Synthesizer = __webpack_require__(/*! ./synthesizer */ \"./app/synthesizer.js\");\r\nconst UI = __webpack_require__(/*! ./ui */ \"./app/ui.js\");\r\nconst settings = __webpack_require__(/*! ./settings.json */ \"./app/settings.json\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", e => {\r\n\tlet synth = new Synthesizer();\r\n\tlet ui = new UI(document.getElementById(\"canvas\"), synth);\r\n\tui.begin();\r\n\tui.reset = () => {\r\n\t\tsynth.allNoteOff();\r\n\t\tdocument.getElementById(\"cover\").style.display = \"block\";\r\n\t\tlocation.reload();\r\n\t};\r\n});\r\n\n\n//# sourceURL=webpack:///./app/main.js?");

/***/ }),

/***/ "./app/settings.json":
/*!***************************!*\
  !*** ./app/settings.json ***!
  \***************************/
/*! exports provided: oscType, fltFreq, fltRes, fltTrack, ampLevel, ampAttackTime, ampA1Time, ampA1Level, ampA2Time, ampA2Level, ampReleaseTime, masterVolume, default */
/***/ (function(module) {

eval("module.exports = {\"oscType\":{\"default\":\"sawtooth\"},\"fltFreq\":{\"default\":6000,\"min\":100,\"max\":20000},\"fltRes\":{\"default\":8,\"min\":0.5,\"max\":20},\"fltTrack\":{\"default\":0.5},\"ampLevel\":{\"max\":1},\"ampAttackTime\":{\"max\":2},\"ampA1Time\":{\"default\":0.05},\"ampA1Level\":{\"default\":1},\"ampA2Time\":{\"default\":0.2},\"ampA2Level\":{\"default\":0.7},\"ampReleaseTime\":{\"default\":0.1,\"max\":1},\"masterVolume\":{\"default\":0.2,\"min\":0,\"max\":0.5}};\n\n//# sourceURL=webpack:///./app/settings.json?");

/***/ }),

/***/ "./app/synthesizer.js":
/*!****************************!*\
  !*** ./app/synthesizer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

  const TUNING_FREQ = 261.63;
  const POLY_NUM = 16
  const settings = __webpack_require__( "./app/settings.json");
  
  class Synthesizer {
    constructor(ctx = new AudioContext()) {
      this.ctx = ctx;
      this.param = getDefaultParam();
      this.osc = [];
      this.amp = [];
      this.flt = [];
      this.moduleStates = [];
      this.ampAnalyser = ctx.createAnalyser();
      this.ampAnalyser.fftSize = 1024;
      this.ampAnalyser.smoothingTimeConstant = 0;
      this.fltAnalyser = ctx.createAnalyser();
      this.fltAnalyser.fftSize = 1024;
      this.fltAnalyser.smoothingTimeConstant = 0;
      this.masterGain = ctx.createGain();
      this.dummyOsc = ctx.createOscillator();
      this.dummyOsc.setPeriodicWave(ctx.createPeriodicWave(new Float32Array([0]), new Float32Array([0])));
      this.dummyOsc.start();
      this.dummyOsc.connect(this.ampAnalyser);
  
      this.masterGain.connect(ctx.destination);
      this.masterGain.gain.value = this.param.masterVolume;
  
      for (let i = 0; i < POLY_NUM; i++) {
        this.osc[i] = ctx.createOscillator();
        this.osc[i].type = this.param.oscType;
        this.amp[i] = ctx.createGain();
        this.amp[i].gain.value = 0;
        this.flt[i] = ctx.createBiquadFilter();
        this.flt[i].type = "lowpass";
        this.flt[i].Q.value = this.param.fltRes;
        this.flt[i].frequency.value = this.param.fltFreq;
  
        this.osc[i].connect(this.amp[i]);
        this.amp[i].connect(this.flt[i]);
        this.amp[i].connect(this.ampAnalyser);
        this.dummyOsc.connect(this.flt[i]);
        this.flt[i].connect(this.masterGain);
        this.flt[i].connect(this.fltAnalyser);
        this.osc[i].start();
        this.moduleStates[i] = {state: 0, note: -1};
      }
    }
  
    noteOn(note) {
      if (this.ctx.state == "suspended") {
        this.ctx.resume().then(() => {
          this.noteOn(note);
        });
        return;
      }
  
      let moduleId = -1;
      this.updateModuleStates();
      for (let i = 0; i < POLY_NUM; i++) {
        if (this.moduleStates[i].state == 1 && this.moduleStates[i].note == note) {
          return;
        }
      }
      for (let i = 0; i < POLY_NUM; i++) {
        if (!this.moduleStates[i].state) {
          moduleId = i;
          break;
        }
      }
      if (moduleId == -1) {
        let earliestTime;
        for (let i = 0; i < POLY_NUM; i++) {
          if (this.moduleStates[i].state == 2 && (moduleId == -1 || this.moduleStates[i].time < earliestTime)) {
            earliestTime = this.moduleStates[i].time;
            moduleId = i;
          }
        }
      }
      if (moduleId == -1) {
        let earliestTime;
        for (let i = 0; i < POLY_NUM; i++) {
          if (moduleId == -1 || this.moduleStates[i].time < earliestTime) {
            earliestTime = this.moduleStates[i].time;
            moduleId = i;
          }
        }
      }
  
      let ampSchedule = [
        {value: 0, time: 0, jump:true},
        {value: this.param.ampA1Level, time: this.param.ampA1Time},
        {value: this.param.ampA2Level, time: this.param.ampA2Time}
      ];
      setAudioParam(this.ctx, this.flt[moduleId].frequency, this.param.fltFreq + this.param.fltTrack * noteToFreq(note));
      scheduleAudioParam(this.ctx, this.amp[moduleId].gain, ampSchedule);
      //ampのgainが0だとparamの変更が反映されないことがある問題の回避
      setAudioParam(this.ctx, this.osc[moduleId].frequency, noteToFreq(note));
      setTimeout(() => {
        setAudioParam(this.ctx, this.osc[moduleId].frequency, noteToFreq(note));
      }, 0);		
      this.moduleStates[moduleId] = {
        state: 1,
        note,
        ampSchedule,
        time: this.ctx.currentTime
      };
    }
  
    noteOff(note) {
      for (let i = 0; i < POLY_NUM; i++) {
        if (this.moduleStates[i].state == 1 && this.moduleStates[i].note == note) {
          if (this.param.ampReleaseTime > 0) {
            let ampSchedule = [{value: 0, time: this.param.ampReleaseTime}];
            scheduleAudioParam(this.ctx, this.amp[i].gain, ampSchedule);
            this.moduleStates[i].state = 2;
            this.moduleStates[i].ampSchedule = ampSchedule
            this.moduleStates[i].time = this.ctx.currentTime;
          } else {
            this.moduleStates[i].state = 0;
            setAudioParam(this.ctx, this.amp[i].gain, 0);
          }
          break;
        }
      };
    }
  
    allNoteOff() {
      for (let i = 0; i < POLY_NUM; i++) {
        setAudioParam(this.ctx, this.amp[i].gain, 0);
        this.moduleStates[i].state = 0;
      }
    }
  
    updateModuleStates() {
      let time = this.ctx.currentTime;
      this.moduleStates.forEach(module => {
        if (module.state == 2) {
          if (module.ampSchedule[module.ampSchedule.length - 1].time < time - module.time) {
            module.state = 0;
          }
        }
      });
    }
  
    setParam(param) {
      let prevParam = this.param;
      this.param = Object.assign({}, this.param, param);
  
      this.updateModuleStates();
      for (let i = 0; i < POLY_NUM; i++) {
        if (prevParam.oscType != this.param.oscType) {
          this.osc[i].type = this.param.oscType;
        }
        if (prevParam.fltRes != this.param.fltRes) {
          setAudioParam(this.ctx, this.flt[i].Q, this.param.fltRes);
        }
        if (this.moduleStates[i].state) {
          if (prevParam.fltFreq != this.param.fltFreq || prevParam.fltTrack != this.param.fltTrack) {
            setAudioParam(this.ctx, this.flt[i].frequency, this.param.fltFreq + this.param.fltTrack * noteToFreq(this.moduleStates[i].note));
          }
        }
      }
      if (prevParam.masterVolume != this.param.masterVolume) {
        setAudioParam(this.ctx, this.masterGain.gain, this.param.masterVolume);
      }
    }
  }
  
  function noteToFreq(note) {
    return TUNING_FREQ * Math.pow(2, (note - 60) / 12);
  }
  
  function setAudioParam(audioContext, audioParam, value) {
    audioParam.cancelScheduledValues(audioContext.currentTime);
    audioParam.setValueAtTime(value, audioContext.currentTime);
  }
  
  function scheduleAudioParam(audioContext, audioParam, schedule) {
    let time = audioContext.currentTime;
    audioParam.cancelScheduledValues(time);
    audioParam.setValueAtTime(audioParam.value, time);
    schedule.forEach(key => {
      if (key.jump) {
        audioParam.setValueAtTime(key.value, time + key.time);
      } else {
        audioParam.linearRampToValueAtTime(key.value, time + key.time);
      }
    });
  }
  
  function getDefaultParam() {
    let param = {};
    for (let key in settings) {
      if (settings.hasOwnProperty(key)) {
        if (settings[key].hasOwnProperty("default")) {
          param[key] = settings[key].default;
        }
      }
    }
    return param;
  }
  module.exports = Synthesizer;
  

/***/ }),

/***/ "./app/ui.js":
/*!*******************!*\
  !*** ./app/ui.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

  const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;
  const settings = __webpack_require__(/*! ./settings.json */ "./app/settings.json");
  const keymap = __webpack_require__(/*! ./keymap */ "./app/keymap.js");
  const FONTSIZE = 20;
  
  class Control extends EventEmitter {
    constructor(view, x, y, w, h) {
      super();
      this.view = view;
      this.ctx = view.ctx;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.mouseCapture = this;
      view.addControl(this);
    }
  
    draw() {
    }
  
    begin() {
    }
  
    containsPoint(x, y) {
      return this.x <= x && this.y <= y && x < this.x + this.w && y < this.y + this.h;
    }
  }
  
  class DraggableControl extends Control {
    constructor(...args) {
      super(...args);
      this.range = null;
      this.dragging = false;
      this.on("mousedown", this._mousedown);
      this.on("mousemove", this._mousemove);
      this.on("mouseup", this._mouseup);
    }
  
    _mousedown(mouseX, mouseY) {
      this.dragging = true;
      this.dragOffsetX = mouseX - this.x;
      this.dragOffsetY = mouseY - this.y;
    }
  
    _mousemove(mouseX, mouseY) {
      if (this.dragging) {
        this.x = mouseX - this.dragOffsetX;
        this.y = mouseY - this.dragOffsetY;
        if (this.range) {
          if (this.x < this.range.x) this.x = this.range.x;
          if (this.y < this.range.y) this.y = this.range.y;
          if (this.x > this.range.x + this.range.w) this.x = this.range.x + this.range.w;
          if (this.y > this.range.y + this.range.h) this.y = this.range.y + this.range.h;
        }
        this.emit("drag");
      }
    }
  
    _mouseup(mouseX, mouseY) {
      if (this.dragging) {
        this._mousemove(mouseX, mouseY);
        this.dragging = false;
      }
    }
  }
  
  class Button extends Control {
    constructor(...args) {
      super(...args);
      this.on("mousedown", () => {this.active = true;});
      this.on("mouseup", () => {this.active = false;});
      this.on("mouseenter", () => {this.hover = true;});
      this.on("mouseleave", () => {this.hover = false;});
    }
  
    draw() {
      let ctx = this.ctx;
      ctx.fillStyle = !this.hover ? "#fff" : this.active ? "#8f0" : "#ffa";
      ctx.fillRect(this.x, this.y, this.w , this.h );
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.strokeRect(this.x + 0.5, this.y + 0.5, this.w - 1, this.h - 1);
      this.emit("draw");
    }
  }
  
  class RadioButton extends Button {
    constructor(...args) {
      super(...args);
      this.selected = false;
      this.group = [];
      this.on("click", () => {
        this.group.forEach(button => {
          if (button == this) {
            button.selected = true;
          } else {
            button.selected = false;
          }
        });
      });
    }
  
    draw() {
      let ctx = this.ctx;
      ctx.fillStyle = !this.hover ? "#fff" : this.active ? "#8f0" : "#ffa";
      ctx.fillRect(this.x, this.y, this.w , this.h );
      ctx.strokeStyle = this.selected ? "blue" : "black";
      ctx.lineWidth = this.selected ? 2 : 1;
      ctx.strokeRect(this.x + 0.5, this.y + 0.5, this.w - 1, this.h - 1);
      this.emit("draw");
    }
  }
  RadioButton.makeGroup = function(group) {
    group.forEach(button => {button.group = group});
  }
  
  class Knob extends DraggableControl {
    constructor(view, range, paramX, paramY, radius) {
      super(view, 0, 0, 0, 0);
      this.radius = radius;
      this.range = range;
      this.x = paramX ? mapValue(paramX.default, paramX.min, paramX.max, range.x, range.x + range.w) : range.x;
      this.y = paramY ? mapValue(paramY.default, paramY.max, paramY.min, range.y, range.y + range.h) : range.y;
  
      this.on("mousedown", () => {this.active = true;});
      this.on("mouseup", () => {this.active = false;});
      this.on("mouseenter", () => {this.hover = true;});
      this.on("mouseleave", () => {this.hover = false;});
      this.on("drag", () => {
        this.emit("change",
          paramX ? mapValue(this.x, range.x, range.x + range.w, paramX.min, paramX.max) : null,
          paramY ? mapValue(this.y, range.y, range.y + range.h, paramY.max, paramY.min) : null
        );
      });
    }
  
    draw() {
      let ctx = this.ctx;
      ctx.strokeStyle = "black";
      ctx.fillStyle = this.active ? "#8f0" : this.hover ? "#ffa" : "#fff";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius - 3, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.stroke();
      this.emit("draw");
    }
  
    containsPoint(x, y) {
      return (x - this.x) * (x - this.x) + (y - this.y) * (y - this.y) <= this.radius * this.radius;
    }
  }
  
  class View {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.w = canvas.width;
      this.h = canvas.height;
      this.dragging = false;
      this.dragControl = null;
      this.dragX = -1;
      this.dragY = -1;
      this.hoverControl = null;
      this.controls = [];
      this.ctx.font = `${FONTSIZE}px sans-serif`;
    }
  
    begin() {
      this.canvas.addEventListener("mousedown", this.mousedown.bind(this));
      this.canvas.ownerDocument.addEventListener("mousemove", this.mousemove.bind(this));
      this.canvas.addEventListener("mouseleave", this.mouseleave.bind(this));
      this.canvas.ownerDocument.addEventListener("mouseup", this.mouseup.bind(this));
      this.controls.forEach(control => control.begin());
      setInterval(() => {
        this.draw();
      }, 30);
    }
  
    draw() {
      this.ctx.clearRect(0, 0, this.w, this.h);
      this.controls.forEach(control => control.draw());
    }
  
    mousedown(e) {
      if (e.button == 0) { // left
        let rect = this.canvas.getBoundingClientRect();
        let mouseX = e.clientX - rect.left;
        let mouseY = e.clientY - rect.top;
        let target = this.getControlOnPoint(mouseX, mouseY);
        this.dragging = true;
        this.dragX = mouseX;
        this.dragY = mouseY;
        this.dragControl = target ? target.mouseCapture : null;
        if (target) target.emit("mousedown", mouseX, mouseY);
      }
    }
  
    mousemove(e) {
      let rect = this.canvas.getBoundingClientRect();
      let mouseX = e.clientX - rect.left;
      let mouseY = e.clientY - rect.top;
      let target = this.getControlOnPoint(mouseX, mouseY);
      let capture = target ? target.mouseCapture : null;
      if (!this.dragging || (this.dragControl && capture == this.dragControl && this.hoverControl)) {
        if (target !== this.hoverControl) {
          if (this.hoverControl) this.hoverControl.emit("mouseleave");
          if (target) {
            target.emit("mouseenter");
            target.emit("mousemove", mouseX, mouseY);
          }
          this.hoverControl = target;
        }
        if (target) target.emit("mousemove", mouseX, mouseY);
      } else {
        if (this.dragControl) {
          if (this.hoverControl) {
            this.hoverControl.emit("mouseleave");
            this.hoverControl = null;
            this.dragControl.emit("mousemove", mouseX, mouseY);
          } else if (capture == this.dragControl) {
            target.emit("mouseenter");
            target.emit("mousemove", mouseX, mouseY);
            this.hoverControl = target;
          } else {
            this.dragControl.emit("mousemove", mouseX, mouseY);
          }
        }
      }
    }
  
    mouseleave(e) {
      if (!this.dragging) {
        if (this.hoverControl) this.hoverControl.emit("mouseleave");
        this.hoverControl = null;
      }
    }
  
    mouseup(e) {
      if (e.button == 0) { // left
        let rect = this.canvas.getBoundingClientRect();
        let mouseX = e.clientX - rect.left;
        let mouseY = e.clientY - rect.top;
        let target = this.getControlOnPoint(mouseX, mouseY);
        let capture = target ? target.mouseCapture : null;
        if (this.dragging) {
          this.dragging = false;
          if (this.dragControl) {
            if (capture == this.dragControl) {
              target.emit("mouseup", mouseX, mouseY);
              target.emit("click");
              return;
            } else {
              this.dragControl.emit("mouseup", mouseX, mouseY);
            }
          }
          if (target) {
            target.emit("mouseenter");
            target.emit("mousemove", mouseX, mouseY);
          }
        }
      }
    }
  
    getControlOnPoint(x, y) {
      for (let i = this.controls.length - 1; i >= 0; i--) {
        if (this.controls[i].containsPoint(x, y)) {
          return this.controls[i];
        }
      }
      return null;
    }
  
    addControl(control) {
      this.controls.push(control);
    }
  }
  
  class VerticalLine extends Control {
    constructor(...args) {
      super(...args);
      this.w = 0;
    }
  
    draw() {
      let ctx = this.ctx;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";
      ctx.beginPath()
      ctx.moveTo(this.x + 0.5, this.y + 0.5);
      ctx.lineTo(this.x + 0.5, this.y + this. h - 0.5);
      ctx.stroke();
    }
  
    containsPoint() {
      return false;
    }
  }
  
  class HorizontalLine extends Control {
    constructor(...args) {
      super(...args);
      this.h = 0;
    }
  
    draw() {
      let ctx = this.ctx;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";
      ctx.beginPath()
      ctx.moveTo(this.x + 0.5, this.y + 0.5);
      ctx.lineTo(this.x + this.w - 0.5, this.y + 0.5);
      ctx.stroke();
    }
  
    containsPoint() {
      return false;
    }
  }
  
  class Label extends Control {
    constructor(view, x, y, text) {
      let w = view.ctx.measureText(text);
      let h = FONTSIZE;
      super(view, x, y, w, h, text);
      this.text = text;
    }
  
    draw() {
      let ctx = this.ctx;
      ctx.fillStyle = "black";
      ctx.fillText(this.text, this.x, this.y);
    }
  
    containsPoint() {
      return false;
    }
  }
  
  ////////////////////////////////////////////////////////////////////////////////
  
  class WaveSynthUI extends View {
    constructor(canvas, synth) {
      super(canvas);
      this.synth = synth;
  
      this.resetButton = new Button(this, 415, 5, 100, 30);
      this.resetButton.on("draw", function() {
        this.ctx.fillStyle = "black";
        this.ctx.fillText("リセット", 425, 25);
      });
      this.resetButton.on("click", () => {
        this.reset();
      });
  
      new Label(this, 10, 30, "Oscillator (基本となる音)");
  
      this.oscSin = new RadioButton(this, 10, 40, 50, 30);
      this.oscSin.on("click", () => {synth.setParam({oscType: "sine"});});
      this.oscSin.on("draw", drawSin);
  
      this.oscTri = new RadioButton(this, 10, 80, 50, 30);
      this.oscTri.on("click", () => {synth.setParam({oscType: "triangle"});});
      this.oscTri.on("draw", drawTri);
  
      this.oscSqr = new RadioButton(this, 10, 120, 50, 30);
      this.oscSqr.on("click", () => {synth.setParam({oscType: "square"});});
      this.oscSqr.on("draw", drawSqr);
  
      this.oscSaw = new RadioButton(this, 10, 160, 50, 30);
      this.oscSaw.on("click", () => {synth.setParam({oscType: "sawtooth"});});
      this.oscSaw.on("draw", drawSaw);
      this.oscSaw.selected = true;
  
      RadioButton.makeGroup([this.oscSin, this.oscTri, this.oscSqr, this.oscSaw]);
  
      new WaveForm(this, 70, 40, 440, 150, synth.ampAnalyser);
  
      new HorizontalLine(this, 0, 200, this.w, 0);
      new Label(this, 10, 220, "Amplifier (音量の変化)");
  
      this.envPad = new EnvelopePad(this, 10, 230, 500, 150);
      this.envPad.on("change", (param) => {synth.setParam(param);});
  
      new HorizontalLine(this, 0, 390, this.w, 0);
      new Label(this, 10, 410, "Filter (音色を調整する)");
  
      this.fltPad = new FltPad(this, 10, 420, 500, 150, synth.ampAnalyser, synth.fltAnalyser, synth.ctx.sampleRate);
      this.fltPad.on("change", (freq, res) => {synth.setParam({fltFreq: freq, fltRes: res});});
  
      new HorizontalLine(this, 0, 580, this.w, 0);
      new Label(this, 10, 600, "キーボード");
  
      this.keyboad = new Keyboad(this, 10, 610, 390, 150);
      this.keyboad.on("noteon", note => {synth.noteOn(note);});
      this.keyboad.on("noteoff", note => {synth.noteOff(note);});
  
      this.masterVolume = new VolumeSlider(this, 460, 610, 0, 150);
      this.masterVolume.on("change", volume => {synth.setParam({masterVolume: volume})});
      new Label(this, 410, 600, "全体の音量");
    }
  }
  
  function drawSin() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y + this.h * 0.5);
    this.ctx.quadraticCurveTo(this.x + this.w * 0.15, this.y + this.h * 0.2, this.x + this.w * 0.25, this.y + this.h * 0.2);
    this.ctx.quadraticCurveTo(this.x + this.w * 0.35, this.y + this.h * 0.2, this.x + this.w * 0.5, this.y + this.h * 0.5);
    this.ctx.quadraticCurveTo(this.x + this.w * 0.65, this.y + this.h * 0.8, this.x + this.w * 0.75, this.y + this.h * 0.8);
    this.ctx.quadraticCurveTo(this.x + this.w * 0.85, this.y + this.h * 0.8, this.x + this.w, this.y + this.h * 0.5);
    this.ctx.stroke();
  }
  function drawTri() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y + this.h * 0.5);
    this.ctx.lineTo(this.x + this.w * 0.25, this.y + this.h * 0.2);
    this.ctx.lineTo(this.x + this.w * 0.75, this.y + this.h * 0.8);
    this.ctx.lineTo(this.x + this.w, this. y + this.h * 0.5);
    this.ctx.stroke();
  }
  function drawSqr() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y + this.h * 0.8);
    this.ctx.lineTo(this.x + this.w * 0.25, this.y + this.h * 0.8);
    this.ctx.lineTo(this.x + this.w * 0.25, this.y + this.h * 0.2);
    this.ctx.lineTo(this.x + this.w * 0.75, this.y + this.h * 0.2);
    this.ctx.lineTo(this.x + this.w * 0.75, this.y + this.h * 0.8);
    this.ctx.lineTo(this.x + this.w, this. y + this.h * 0.8);
    this.ctx.stroke();
  }
  function drawSaw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y + this.h * 0.5);
    this.ctx.lineTo(this.x + this.w * 0.5, this.y + this.h * 0.2);
    this.ctx.lineTo(this.x + this.w * 0.5, this.y + this.h * 0.8);
    this.ctx.lineTo(this.x + this.w, this. y + this.h * 0.5);
    this.ctx.stroke();
  }
  
  class FltPad extends Control {
    constructor(view, x, y, w, h, ampAnalyser, fltAnalyser, sampleRate) {
      super(view, x, y, w, h);
      this.knob = new Knob(
        this.view,
        {x: this.x, y: this.y, w: this.w, h: this.h},
        {
          default: Math.log(settings.fltFreq.default),
          min: Math.log(settings.fltFreq.min),
          max: Math.log(settings.fltFreq.max)
        },
        settings.fltRes,
        10
      );
      this.knob.on("change", (logFreq, res) => {
        this.freq = Math.exp(logFreq);
        this.res = res
        this.emit("change", this.freq, this.res);
      });
      this.ampAnalyser = ampAnalyser;
      this.fltAnalyser = fltAnalyser;
      this.sampleRate = sampleRate;
      this.freq = settings.fltFreq.default;
      this.res = settings.fltRes.default;
    }
  
    draw() {
      let ctx = this.ctx;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";
      ctx.strokeRect(this.x + 0.5, this.y + 0.5, this.w - 1, this.h -1);
  
      let dataCount = this.ampAnalyser.frequencyBinCount
      let data = new Float32Array(dataCount);
      this.ampAnalyser.getFloatFrequencyData(data);
      this.ctx.beginPath();
      for (let i = 0; i < dataCount; i++) {
        let x = mapValue(Math.log(i * this.sampleRate / dataCount / 2),
          Math.log(settings.fltFreq.min), Math.log(settings.fltFreq.max), this.x, this.x + this.w);
        let y = mapValue(data[i], this.ampAnalyser.minDecibels, this.ampAnalyser.maxDecibels / 2,
          this.y + this.h, this.y);
        if (x < this.x || this.x + this.w < x) {
          continue;
        }
        if (y > this.y + this.h) {
          y = this.y + this.h;
        }
        this.ctx.lineTo(x, y);
      }
      this.ctx.strokeStyle = "#f66";
      this.ctx.lineWidth = 1;
      this.ctx.lineJoin = "bevel";
      this.ctx.stroke();
      this.ctx.strokeRect(this.x + 0.5, this.y + 0.5, this.w - 1, this.h - 1);
  
      dataCount = this.fltAnalyser.frequencyBinCount
      data = new Float32Array(dataCount);
      this.fltAnalyser.getFloatFrequencyData(data);
      this.ctx.beginPath();
      for (let i = 0; i < dataCount; i++) {
        let x = mapValue(Math.log(i * this.sampleRate / dataCount / 2),
          Math.log(settings.fltFreq.min), Math.log(settings.fltFreq.max), this.x, this.x + this.w);
        let y = mapValue(data[i], this.fltAnalyser.minDecibels, this.fltAnalyser.maxDecibels / 2,
          this.y + this.h, this.y);
        if (x < this.x || this.x + this.w < x) {
          continue;
        }
        if (y > this.y + this.h) {
          y = this.y + this.h;
        }
        this.ctx.lineTo(x, y);
      }
      this.ctx.strokeStyle = "black";
      this.ctx.lineWidth = 1.5;
      this.ctx.lineJoin = "bevel";
      this.ctx.stroke();
      this.ctx.lineWidth = 1;
      this.ctx.lineJoin = "miter";
      this.ctx.strokeRect(this.x + 0.5, this.y + 0.5, this.w - 1, this.h - 1);
  
      let w0 = 2 * Math.PI * this.freq / this.sampleRate;
      let cos = Math.cos(w0);
      let sin = Math.sin(w0);
      let alpha = sin / (2 * this.res);
      this.ctx.beginPath();
      for (let x = 0; x < this.w; x++) {
        let freq = Math.exp(mapValue(x, 0, this.w,
          Math.log(settings.fltFreq.min), Math.log(settings.fltFreq.max)));
        let zr = Math.cos(freq / this.sampleRate * Math.PI * 2);
        let zi = Math.sin(freq / this.sampleRate * Math.PI * 2);
        let zrM = Math.cos(-freq / this.sampleRate * Math.PI * 2);
        let ziM = Math.sin(-freq / this.sampleRate * Math.PI * 2);
        let zrM2 = Math.cos(-freq / this.sampleRate * Math.PI * 4);
        let ziM2 = Math.sin(-freq / this.sampleRate * Math.PI * 4);
        let Ar = (1 + alpha) - (2 * cos) * zrM + (1 - alpha) * zrM2;
        let Ai = - (2 * cos) * ziM + (1 - alpha) * ziM2;
        let Br = (1 - cos) / 2 + (1 - cos) * zrM + (1 - cos) / 2 * zrM2;
        let Bi = (1 - cos) * ziM + (1 - cos) / 2 * ziM2;
        let level = Math.sqrt((Ar * Ar + Ai * Ai) / (Br * Br + Bi * Bi));
        let y = mapValue(Math.log10(level), -2, 4, 0, this.h);
        if (y > this.h) {
          y = this.h;
        }
        this.ctx.lineTo(this.x + x, this.y + y);
      }
      this.ctx.strokeStyle = "blue";
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
    }
  
    containsPoint() {
      return false;
    }
  }
  
  class EnvelopePad extends Control {
    constructor(...args) {
      super(...args);
      this.splitX = mapValue(settings.ampAttackTime.max, 0, (settings.ampAttackTime.max + settings.ampReleaseTime.max), 0, this.w);
      this.a1Time = settings.ampA1Time.default;
      this.a1Level = settings.ampA1Level.default;
      this.a2Time = settings.ampA2Time.default;
      this.a2Level = settings.ampA2Level.default;
      this.releaseTime = settings.ampReleaseTime.default;
      this.a1 = new Knob(
        this.view,
        {x: this.x, y: this.y, w: this.splitX, h: this.h},
        {default: this.a1Time, min: 0, max: settings.ampAttackTime.max},
        {default: this.a1Level, min: 0, max: settings.ampLevel.max},
        10
      );
      this.a1.on("change", (time, level) => {
        this.a1Time = time;
        this.a1Level = level;
        this.change();
      });
      this.a2 = new Knob(
        this.view,
        {x: this.x, y: this.y, w: this.splitX, h: this.h},
        {default: this.a2Time, min: 0, max: settings.ampAttackTime.max},
        {default: this.a2Level, min: 0, max: settings.ampLevel.max},
        10
      );
      this.a2.on("change", (time, level) => {
        this.a2Time = time;
        this.a2Level = level;
        this.change();
      });
      this.relese = new Knob(
        this.view,
        {x: this.x + this.splitX, y: this.y + this.h, w: this.w - this.splitX, h: 0},
        {default: this.releaseTime, min: 0, max: settings.ampReleaseTime.max},
        null,
        10
      );
      this.relese.on("change", (time, _) => {
        this.releaseTime = time;
        this.change();
      });
    }
  
    draw() {
      let ctx = this.ctx;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";
      ctx.strokeRect(this.x + 0.5, this.y + 0.5, this.w - 1, this.h -1);
      ctx.beginPath();
      ctx.moveTo(this.x + this.splitX, this.y);
      ctx.lineTo(this.x + this.splitX, this.y + this.h);
      ctx.strokeStyle = "#666";
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y + this.h);
      if (this.isCross()) {
        ctx.lineTo(this.a2.x, this.a2.y);
        ctx.lineTo(this.a1.x, this.a1.y);
        ctx.lineTo(this.x + this.splitX, this.a1.y);
      } else {
        ctx.lineTo(this.a1.x, this.a1.y);
        ctx.lineTo(this.a2.x, this.a2.y);
        ctx.lineTo(this.x + this.splitX, this.a2.y);
      }
      ctx.lineTo(this.relese.x, this.relese.y);
      ctx.strokeStyle = "blue";
      ctx.stroke();
    }
  
    isCross() {
      return this.a2Time < this.a1Time;
    }
  
    change() {
      if (this.isCross()) {
        this.emit("change", {
          ampA1Time: this.a2Time, ampA1Level: this.a2Level,
          ampA2Time: this.a1Time, ampA2Level: this.a1Level,
          ampReleaseTime: this.releaseTime
        });
      } else {
        this.emit("change", {
          ampA1Time: this.a1Time, ampA1Level: this.a1Level,
          ampA2Time: this.a2Time, ampA2Level: this.a2Level,
          ampReleaseTime: this.releaseTime
        });
      }
    }
  
    containsPoint() {
      return false;
    }
  }
  
  class WaveForm extends Control {
    constructor(view, x, y, w, h, analyser) {
      super(view, x, y, w, h);
      this.analyser = analyser;
    }
  
    draw() {
      let data = new Float32Array(this.analyser.fftSize);
      this.analyser.getFloatTimeDomainData(data);
      this.ctx.beginPath();
      for (let i = 0; i < this.analyser.fftSize; i++) {
        let x = mapValue(i, 0, this.analyser.fftSize, this.x, this.x + this.w);
        let y = mapValue(data[i], -3, 3, this.y + this.h, this.y);
        this.ctx.lineTo(x, y);
      }
      this.ctx.strokeStyle = "black";
      this.ctx.lineWidth = 1.5;
      this.ctx.lineJoin = "bevel";
      this.ctx.stroke();
      this.ctx.lineWidth = 1;
      this.ctx.lineJoin = "miter";
      this.ctx.strokeRect(this.x + 0.5, this.y + 0.5, this.w - 1, this.h - 1);
    }
  
    containsPoint() {
      return false;
    }
  }
  
  class KeyButton extends Button {
    constructor(view, x, y, w, h, note, black) {
      super(view, x, y, w, h);
      this.note = note;
      this.black = black;
    }
  
    draw() {
      let ctx = this.ctx;
      let isActive = this.view.synth.moduleStates.some(m => m.state == 1 && m.note == this.note);
      if (this.black) {
        ctx.fillStyle = isActive ? "#a00" : this.hover ? "#660" : "#000";
      } else {
        ctx.fillStyle = isActive ? "#f00" : this.hover ? "#ffa" : "#fff";
      }
      ctx.fillRect(this.x, this.y, this.w , this.h );
      
      
      ctx.fillStyle = "#888";
      let text = ["ド", "デ", "ネ", "ゲ", "レ", "ル", 
      "リ", "ム", "ミ", "メ", "ファ", "ヴァ", 
      "フィ", "ショ", "ソ", "ゴ", "ゾ", "マ", 
      "ラ", "ワ", "セ", "ゼ", "シ", "ス"][(this.note * 2) % 24];
      ctx.font = 'bold ' + (text.length == 2 ? '9' : '12') +'px "Unknown Font", sans-serif';
      ctx.textAlign = 'center'
      ctx.fillText(text, this.x + this.w * 0.5, this.y + this.h * 0.85);
      ctx.textAlign = 'start'
      
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.strokeRect(this.x + 0.5, this.y + 0.5, this.w - 1, this.h - 1);
      this.emit("draw");
    }
  }
  
  const blackKeys = [true, true, false, true, true, true];
  const toneRange = 15;
  class Keyboad extends Control {
    constructor(...args) {
      super(...args);
      this.dragging = false;
      this.selfEventEmitting = false;
      let keyW = this.w / toneRange;
      let note = 60;
      for (let i = 0; i < toneRange; i++) {
        let key = new KeyButton(this.view, this.x + keyW * i, this.y + this.h * 0.45, keyW, this.h * 0.35, note, false);
        let key2 = new KeyButton(this.view, this.x + keyW * (i + 0.5), this.y, keyW, this.h * 0.35, note + 0.5, false);
        key.mouseCapture = this;
        key2.mouseCapture = this;
        key.on("mousedown", this.mousedown.bind(this, key));
        key.on("mouseup", this.mouseup.bind(this, key));
        key.on("mouseenter", this.mouseenter.bind(this, key));
        key.on("mouseleave", this.mouseleave.bind(this, key));
        key2.on("mousedown", this.mousedown.bind(this, key2));
        key2.on("mouseup", this.mouseup.bind(this, key2));
        key2.on("mouseenter", this.mouseenter.bind(this, key2));
        key2.on("mouseleave", this.mouseleave.bind(this, key2));
        note++;
        if (blackKeys[i % 7]) {
          note++;
        }
      }
      note = 61;
      for (let i = 0; i < toneRange - 1; i++) {
        if (blackKeys[i % 7]) {
          let key = new KeyButton(this.view, this.x + keyW * (i + 0.7), this.y + this.h * 0.45, keyW * 0.6, this.h * 0.35 / 2, note, true);
          let key2 = new KeyButton(this.view, this.x + keyW * (i + 1.2), this.y , keyW * 0.6, this.h * 0.35 / 2, note + 0.5, true);
          key.mouseCapture = this;
          key2.mouseCapture = this;
          key.on("mousedown", this.mousedown.bind(this, key));
          key.on("mouseup", this.mouseup.bind(this, key));
          key.on("mouseenter", this.mouseenter.bind(this, key));
          key.on("mouseleave", this.mouseleave.bind(this, key));
          key2.on("mousedown", this.mousedown.bind(this, key2));
          key2.on("mouseup", this.mouseup.bind(this, key2));
          key2.on("mouseenter", this.mouseenter.bind(this, key2));
          key2.on("mouseleave", this.mouseleave.bind(this, key2));
          note++;
        }
        note++;
      }
      this.on("mouseup", this.mouseup.bind(this, null));
  
      navigator.requestMIDIAccess().then(midiAccess => {
        for (let input of midiAccess.inputs.values()) {
          input.onmidimessage = this.onmidimessage.bind(this);
        }
      }, e => {
        console.log(e);
      })
    }
  
    begin() {
      document.addEventListener("keydown", (e) => {
        if (e.repeat) {
          return;
        }
        if (keymap.hasOwnProperty(e.keyCode)) {
          this.emit("noteon", keymap[e.keyCode][0]);
        }
      });
      document.addEventListener("keyup", (e) => {
        if (keymap.hasOwnProperty(e.keyCode)) {
          this.emit("noteoff", keymap[e.keyCode][0]);
        }
      });
    }
  
    mousedown(target) {
      if (!this.selfEventEmitting) {
        this.dragging = true;
      }
      this.emit("noteon", target.note);
    }
  
    mouseup(target) {
      if (!this.selfEventEmitting) {
        this.dragging = false;
      }
      if (target) {
        this.emit("noteoff", target.note);
      }
    }
  
    mouseenter(target) {
      if (this.dragging) {
        this.selfEventEmitting = true;
        target.emit("mousedown");
        this.selfEventEmitting = false;
      }
    }
  
    mouseleave(target) {
      if (this.dragging) {
        this.selfEventEmitting = true;
        target.emit("mouseup");
        this.selfEventEmitting = false;
      }
    }
  
    onmidimessage(e) {
      let midiCommand = e.data[0] & 0xf0;
      if (midiCommand == 0x90 && e.data[2] != 0) {
        this.emit("noteon", e.data[1]);
      } else if (midiCommand == 0x80 || (midiCommand == 0x90 && e.data[2] == 0)) {
        this.emit("noteoff", e.data[1]);
      }
    }
  
    containsPoint() {
      return false;
    }
  }
  
  class VolumeSlider extends Control {
    constructor(...args) {
      super(...args);
      this.w = 0;
      this.knob = new Knob(
        this.view,
        {x: this.x, y: this.y, w: this.w, h: this.h},
        null,
        settings.masterVolume,
        10
      );
      this.knob.on("change", (_, masterVolume) => {this.emit("change", masterVolume);});
    }
  
    draw() {
      let ctx = this.ctx;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";
      ctx.beginPath()
      ctx.moveTo(this.x + 0.5, this.y + 0.5);
      ctx.lineTo(this.x + 0.5, this.y + this. h - 0.5);
      ctx.stroke();
    }
  
    containsPoint() {
      return false;
    }
  }
  
  function mapValue(value, srcMin, srcMax, dstMin, dstMax) {
    return (value - srcMin) / (srcMax - srcMin) * (dstMax - dstMin) + dstMin;
  }
  
  module.exports = WaveSynthUI;

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction $getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return $getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = $getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  var args = [];\n  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    ReflectApply(this.listener, this.target, args);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\n\n//# sourceURL=webpack:///./node_modules/events/events.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./app/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\s\\program\\web\\lanerme-keyboard\\app\\main.js */\"./app/main.js\");\n\n\n//# sourceURL=webpack:///multi_./app/main.js?");

/***/ })

/******/ });