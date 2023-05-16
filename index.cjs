#! /usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js"(exports, module2) {
    "use strict";
    var ESC = "\x1B";
    var CSI = `${ESC}[`;
    var beep = "\x07";
    var cursor = {
      to(x2, y2) {
        if (!y2)
          return `${CSI}${x2 + 1}G`;
        return `${CSI}${y2 + 1};${x2 + 1}H`;
      },
      move(x2, y2) {
        let ret = "";
        if (x2 < 0)
          ret += `${CSI}${-x2}D`;
        else if (x2 > 0)
          ret += `${CSI}${x2}C`;
        if (y2 < 0)
          ret += `${CSI}${-y2}A`;
        else if (y2 > 0)
          ret += `${CSI}${y2}B`;
        return ret;
      },
      up: (count = 1) => `${CSI}${count}A`,
      down: (count = 1) => `${CSI}${count}B`,
      forward: (count = 1) => `${CSI}${count}C`,
      backward: (count = 1) => `${CSI}${count}D`,
      nextLine: (count = 1) => `${CSI}E`.repeat(count),
      prevLine: (count = 1) => `${CSI}F`.repeat(count),
      left: `${CSI}G`,
      hide: `${CSI}?25l`,
      show: `${CSI}?25h`,
      save: `${ESC}7`,
      restore: `${ESC}8`
    };
    var scroll = {
      up: (count = 1) => `${CSI}S`.repeat(count),
      down: (count = 1) => `${CSI}T`.repeat(count)
    };
    var erase = {
      screen: `${CSI}2J`,
      up: (count = 1) => `${CSI}1J`.repeat(count),
      down: (count = 1) => `${CSI}J`.repeat(count),
      line: `${CSI}2K`,
      lineEnd: `${CSI}K`,
      lineStart: `${CSI}1K`,
      lines(count) {
        let clear = "";
        for (let i = 0; i < count; i++)
          clear += this.line + (i < count - 1 ? cursor.up() : "");
        if (count)
          clear += cursor.left;
        return clear;
      }
    };
    module2.exports = { cursor, scroll, erase, beep };
  }
});

// node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.js"(exports, module2) {
    var tty2 = require("tty");
    var isColorSupported = !("NO_COLOR" in process.env || process.argv.includes("--no-color")) && ("FORCE_COLOR" in process.env || process.argv.includes("--color") || process.platform === "win32" || tty2.isatty(1) && process.env.TERM !== "dumb" || "CI" in process.env);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input;
      let index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let start = string.substring(0, index) + replace;
      let end = string.substring(index + close.length);
      let nextIndex = end.indexOf(close);
      return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
    };
    var createColors = (enabled = isColorSupported) => ({
      isColorSupported: enabled,
      reset: enabled ? (s) => `\x1B[0m${s}\x1B[0m` : String,
      bold: enabled ? formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m") : String,
      dim: enabled ? formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m") : String,
      italic: enabled ? formatter("\x1B[3m", "\x1B[23m") : String,
      underline: enabled ? formatter("\x1B[4m", "\x1B[24m") : String,
      inverse: enabled ? formatter("\x1B[7m", "\x1B[27m") : String,
      hidden: enabled ? formatter("\x1B[8m", "\x1B[28m") : String,
      strikethrough: enabled ? formatter("\x1B[9m", "\x1B[29m") : String,
      black: enabled ? formatter("\x1B[30m", "\x1B[39m") : String,
      red: enabled ? formatter("\x1B[31m", "\x1B[39m") : String,
      green: enabled ? formatter("\x1B[32m", "\x1B[39m") : String,
      yellow: enabled ? formatter("\x1B[33m", "\x1B[39m") : String,
      blue: enabled ? formatter("\x1B[34m", "\x1B[39m") : String,
      magenta: enabled ? formatter("\x1B[35m", "\x1B[39m") : String,
      cyan: enabled ? formatter("\x1B[36m", "\x1B[39m") : String,
      white: enabled ? formatter("\x1B[37m", "\x1B[39m") : String,
      gray: enabled ? formatter("\x1B[90m", "\x1B[39m") : String,
      bgBlack: enabled ? formatter("\x1B[40m", "\x1B[49m") : String,
      bgRed: enabled ? formatter("\x1B[41m", "\x1B[49m") : String,
      bgGreen: enabled ? formatter("\x1B[42m", "\x1B[49m") : String,
      bgYellow: enabled ? formatter("\x1B[43m", "\x1B[49m") : String,
      bgBlue: enabled ? formatter("\x1B[44m", "\x1B[49m") : String,
      bgMagenta: enabled ? formatter("\x1B[45m", "\x1B[49m") : String,
      bgCyan: enabled ? formatter("\x1B[46m", "\x1B[49m") : String,
      bgWhite: enabled ? formatter("\x1B[47m", "\x1B[49m") : String
    });
    module2.exports = createColors();
    module2.exports.createColors = createColors;
  }
});

// node_modules/.pnpm/@clack+core@0.1.3/node_modules/@clack/core/dist/index.mjs
function k(i, s) {
  if (i === s)
    return;
  const t2 = i.split(`
`), e2 = s.split(`
`), r = [];
  for (let h = 0; h < Math.max(t2.length, e2.length); h++)
    t2[h] !== e2[h] && r.push(h);
  return r;
}
function c(i, s) {
  i.isTTY && i.setRawMode(s);
}
var import_node_tty, import_node_process, import_node_readline, import_sisteransi, import_picocolors, v, y, n, C, x, L;
var init_dist = __esm({
  "node_modules/.pnpm/@clack+core@0.1.3/node_modules/@clack/core/dist/index.mjs"() {
    import_node_tty = require("node:tty");
    import_node_process = require("node:process");
    import_node_readline = __toESM(require("node:readline"), 1);
    import_sisteransi = __toESM(require_src(), 1);
    import_picocolors = __toESM(require_picocolors(), 1);
    v = Symbol("clack:cancel");
    y = /* @__PURE__ */ new Set(["up", "down", "left", "right", "space", "enter"]);
    n = class {
      constructor({ render: s, input: t2 = import_node_process.stdin, output: e2 = import_node_process.stdout, ...r }, h = true) {
        this._track = false, this._cursor = 0, this.state = "initial", this.error = "", this.subscribers = /* @__PURE__ */ new Map(), this._prevFrame = "", this.opts = r, this.onKeypress = this.onKeypress.bind(this), this.close = this.close.bind(this), this.render = this.render.bind(this), this._render = s.bind(this), this._track = h, this.input = t2, this.output = e2;
      }
      prompt() {
        const s = new import_node_tty.WriteStream(0);
        return s._write = (t2, e2, r) => {
          this._track && (this.value = this.rl.line.replace(/\t/g, ""), this._cursor = this.rl.cursor, this.emit("value", this.value)), r();
        }, this.input.pipe(s), this.rl = import_node_readline.default.createInterface({ input: this.input, output: s, tabSize: 2, prompt: "", escapeCodeTimeout: 50 }), import_node_readline.default.emitKeypressEvents(this.input, this.rl), this.rl.prompt(), this.opts.initialValue !== void 0 && this._track && this.rl.write(this.opts.initialValue), this.input.on("keypress", this.onKeypress), c(this.input, true), this.render(), new Promise((t2, e2) => {
          this.once("submit", () => {
            this.output.write(import_sisteransi.cursor.show), c(this.input, false), t2(this.value);
          }), this.once("cancel", () => {
            this.output.write(import_sisteransi.cursor.show), c(this.input, false), t2(v);
          });
        });
      }
      on(s, t2) {
        const e2 = this.subscribers.get(s) ?? [];
        e2.push({ cb: t2 }), this.subscribers.set(s, e2);
      }
      once(s, t2) {
        const e2 = this.subscribers.get(s) ?? [];
        e2.push({ cb: t2, once: true }), this.subscribers.set(s, e2);
      }
      emit(s, ...t2) {
        const e2 = this.subscribers.get(s) ?? [], r = [];
        for (const h of e2)
          h.cb(...t2), h.once && r.push(() => e2.splice(e2.indexOf(h), 1));
        for (const h of r)
          h();
      }
      unsubscribe() {
        this.subscribers.clear();
      }
      onKeypress(s, t2) {
        if (this.state === "error" && (this.state = "active"), t2?.name && y.has(t2.name) && this.emit("cursor", t2.name), s && (s.toLowerCase() === "y" || s.toLowerCase() === "n") && this.emit("confirm", s.toLowerCase() === "y"), t2?.name === "return") {
          if ("placeholder" in this.opts && !this.value && (this.value = this.opts.placeholder), this.opts.validate) {
            const e2 = this.opts.validate(this.value);
            e2 && (this.error = e2, this.state = "error", this.rl.write(this.value));
          }
          this.state !== "error" && (this.state = "submit");
        }
        s === "" && (this.state = "cancel"), (this.state === "submit" || this.state === "cancel") && this.emit("finalize"), this.render(), (this.state === "submit" || this.state === "cancel") && this.close();
      }
      close() {
        this.input.removeListener("keypress", this.onKeypress), this.output.write(`
`), c(this.input, false), this.rl.close(), this.emit(`${this.state}`, this.value), this.unsubscribe();
      }
      restoreCursor() {
        const s = this._prevFrame.split(`
`).length - 1;
        this.output.write(import_sisteransi.cursor.move(-999, s * -1));
      }
      render() {
        const s = this._render(this) ?? "";
        if (s !== this._prevFrame) {
          if (this.state === "initial")
            this.output.write(import_sisteransi.cursor.hide);
          else {
            const t2 = k(this._prevFrame, s);
            if (this.restoreCursor(), t2 && t2?.length === 1) {
              const e2 = t2[0];
              this.output.write(import_sisteransi.cursor.move(0, e2)), this.output.write(import_sisteransi.erase.lines(1));
              const r = s.split(`
`);
              this.output.write(r[e2]), this._prevFrame = s, this.output.write(import_sisteransi.cursor.move(0, r.length - e2 - 1));
              return;
            } else if (t2 && t2?.length > 1) {
              const e2 = t2[0];
              this.output.write(import_sisteransi.cursor.move(0, e2)), this.output.write(import_sisteransi.erase.down());
              const h = s.split(`
`).slice(e2);
              this.output.write(h.join(`
`)), this._prevFrame = s;
              return;
            }
            this.output.write(import_sisteransi.erase.down());
          }
          this.output.write(s), this.state === "initial" && (this.state = "active"), this._prevFrame = s;
        }
      }
    };
    C = class extends n {
      constructor(s) {
        super(s), this.valueWithCursor = "", this.on("finalize", () => {
          this.valueWithCursor = this.value;
        }), this.on("value", () => {
          if (this.cursor >= this.value.length)
            this.valueWithCursor = `${this.value}${import_picocolors.default.inverse(import_picocolors.default.hidden("_"))}`;
          else {
            const t2 = this.value.slice(0, this.cursor), e2 = this.value.slice(this.cursor);
            this.valueWithCursor = `${t2}${import_picocolors.default.inverse(e2[0])}${e2.slice(1)}`;
          }
        });
      }
      get cursor() {
        return this._cursor;
      }
    };
    x = class extends n {
      constructor(s) {
        super(s, false), this.cursor = 0, this.options = s.options, this.cursor = this.options.findIndex(({ value: t2 }) => t2 === s.initialValue), this.cursor === -1 && (this.cursor = 0), this.changeValue(), this.on("cursor", (t2) => {
          switch (t2) {
            case "left":
            case "up":
              this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
              break;
            case "down":
            case "right":
              this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
              break;
          }
          this.changeValue();
        });
      }
      get _value() {
        return this.options[this.cursor];
      }
      changeValue() {
        this.value = this._value.value;
      }
    };
    L = class extends n {
      get cursor() {
        return this.value ? 0 : 1;
      }
      get _value() {
        return this.cursor === 0;
      }
      constructor(s) {
        super(s, false), this.value = !!s.initialValue, this.on("value", () => {
          this.value = this._value;
        }), this.on("confirm", (t2) => {
          this.output.write(import_sisteransi.cursor.move(0, -1)), this.value = t2, this.state = "submit", this.close();
        }), this.on("cursor", () => {
          this.value = !this.value;
        });
      }
    };
  }
});

// node_modules/.pnpm/@clack+prompts@0.2.2/node_modules/@clack/prompts/dist/index.mjs
var import_picocolors2, import_sisteransi2, $, n2, u2, b, C2, B;
var init_dist2 = __esm({
  "node_modules/.pnpm/@clack+prompts@0.2.2/node_modules/@clack/prompts/dist/index.mjs"() {
    init_dist();
    init_dist();
    import_picocolors2 = __toESM(require_picocolors(), 1);
    import_sisteransi2 = __toESM(require_src(), 1);
    $ = (r) => {
      switch (r) {
        case "initial":
        case "active":
          return import_picocolors2.default.cyan("\u25CF");
        case "cancel":
          return import_picocolors2.default.red("\u25A0");
        case "error":
          return import_picocolors2.default.yellow("\u25B2");
        case "submit":
          return import_picocolors2.default.green("\u25CB");
      }
    };
    n2 = "\u2502";
    u2 = "\u2514";
    b = (r) => new C({ validate: r.validate, placeholder: r.placeholder, initialValue: r.initialValue, render() {
      const a = `${import_picocolors2.default.gray(n2)}
${$(this.state)}  ${r.message}
`, i = r.placeholder ? import_picocolors2.default.inverse(r.placeholder[0]) + import_picocolors2.default.dim(r.placeholder.slice(1)) : import_picocolors2.default.inverse(import_picocolors2.default.hidden("_")), s = this.value ? this.valueWithCursor : i;
      switch (this.state) {
        case "error":
          return `${a.trim()}
${import_picocolors2.default.yellow(n2)}  ${s}
${import_picocolors2.default.yellow(u2)}  ${import_picocolors2.default.yellow(this.error)}
`;
        case "submit":
          return `${a}${import_picocolors2.default.gray(n2)}  ${import_picocolors2.default.dim(this.value)}`;
        case "cancel":
          return `${a}${import_picocolors2.default.gray(n2)}  ${import_picocolors2.default.strikethrough(import_picocolors2.default.dim(this.value))}${this.value.trim() ? `
` + import_picocolors2.default.gray(n2) : ""}`;
        default:
          return `${a}${import_picocolors2.default.cyan(n2)}  ${s}
${import_picocolors2.default.cyan(u2)}
`;
      }
    } }).prompt();
    C2 = (r) => {
      const a = r.active ?? "Yes", i = r.inactive ?? "No";
      return new L({ active: a, inactive: i, initialValue: r.initialValue ?? true, render() {
        const s = `${import_picocolors2.default.gray(n2)}
${$(this.state)}  ${r.message}
`, t2 = this.value ? a : i;
        switch (this.state) {
          case "submit":
            return `${s}${import_picocolors2.default.gray(n2)}  ${import_picocolors2.default.dim(t2)}`;
          case "cancel":
            return `${s}${import_picocolors2.default.gray(n2)}  ${import_picocolors2.default.strikethrough(import_picocolors2.default.dim(t2))}
${import_picocolors2.default.gray(n2)}`;
          default:
            return `${s}${import_picocolors2.default.cyan(n2)}  ${this.value ? `${import_picocolors2.default.green("\u25CF")} ${a}` : `${import_picocolors2.default.dim("\u25CB")} ${import_picocolors2.default.dim(a)}`} ${import_picocolors2.default.dim("/")} ${this.value ? `${import_picocolors2.default.dim("\u25CB")} ${import_picocolors2.default.dim(i)}` : `${import_picocolors2.default.green("\u25CF")} ${i}`}
${import_picocolors2.default.cyan(u2)}
`;
        }
      } }).prompt();
    };
    B = (r) => {
      const a = (i, s) => {
        const t2 = i.label ?? i.value;
        return s === "active" ? `${import_picocolors2.default.green("\u25CF")} ${t2} ${i.hint ? import_picocolors2.default.dim(`(${i.hint})`) : ""}` : s === "selected" ? `${import_picocolors2.default.dim(t2)}` : s === "cancelled" ? `${import_picocolors2.default.strikethrough(import_picocolors2.default.dim(t2))}` : `${import_picocolors2.default.dim("\u25CB")} ${import_picocolors2.default.dim(t2)}`;
      };
      return new x({ options: r.options, initialValue: r.initialValue, render() {
        const i = `${import_picocolors2.default.gray(n2)}
${$(this.state)}  ${r.message}
`;
        switch (this.state) {
          case "submit":
            return `${i}${import_picocolors2.default.gray(n2)}  ${a(this.options[this.cursor], "selected")}`;
          case "cancel":
            return `${i}${import_picocolors2.default.gray(n2)}  ${a(this.options[this.cursor], "cancelled")}
${import_picocolors2.default.gray(n2)}`;
          default:
            return `${i}${import_picocolors2.default.cyan(n2)}  ${this.options.map((s, t2) => a(s, t2 === this.cursor ? "active" : "inactive")).join(`
${import_picocolors2.default.cyan(n2)}  `)}
${import_picocolors2.default.cyan(u2)}
`;
        }
      } }).prompt();
    };
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var init_typeof = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/typeof.js"() {
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance2, Constructor) {
  if (!(instance2 instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var init_classCallCheck = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"() {
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var init_toPrimitive = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/toPrimitive.js"() {
    init_typeof();
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
var init_toPropertyKey = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"() {
    init_typeof();
    init_toPrimitive();
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var init_createClass = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/createClass.js"() {
    init_toPropertyKey();
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
var init_assertThisInitialized = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"() {
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o2, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p2) {
    o3.__proto__ = p2;
    return o3;
  };
  return _setPrototypeOf(o2, p);
}
var init_setPrototypeOf = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js"() {
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
var init_inherits = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/inherits.js"() {
    init_setPrototypeOf();
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
var init_possibleConstructorReturn = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"() {
    init_typeof();
    init_assertThisInitialized();
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
var init_getPrototypeOf = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"() {
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var init_defineProperty = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/defineProperty.js"() {
    init_toPropertyKey();
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var init_arrayWithHoles = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"() {
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
var init_iterableToArray = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/iterableToArray.js"() {
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var init_arrayLikeToArray = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"() {
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n3 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n3 === "Object" && o2.constructor)
    n3 = o2.constructor.name;
  if (n3 === "Map" || n3 === "Set")
    return Array.from(o2);
  if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
    return _arrayLikeToArray(o2, minLen);
}
var init_unsupportedIterableToArray = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"() {
    init_arrayLikeToArray();
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var init_nonIterableRest = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js"() {
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/toArray.js
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
var init_toArray = __esm({
  "node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/toArray.js"() {
    init_arrayWithHoles();
    init_iterableToArray();
    init_unsupportedIterableToArray();
    init_nonIterableRest();
  }
});

// node_modules/.pnpm/i18next@22.4.9/node_modules/i18next/dist/esm/i18next.js
function ownKeys$6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$6(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function defer() {
  var res;
  var rej;
  var promise = new Promise(function(resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null)
    return "";
  return "" + object;
}
function copy(a, s, t2) {
  a.forEach(function(m2) {
    if (s[m2])
      t2[m2] = s[m2];
  });
}
function getLastOfPath(object, path, Empty) {
  function cleanKey(key2) {
    return key2 && key2.indexOf("###") > -1 ? key2.replace(/###/g, ".") : key2;
  }
  function canNotTraverseDeeper() {
    return !object || typeof object === "string";
  }
  var stack = typeof path !== "string" ? [].concat(path) : path.split(".");
  while (stack.length > 1) {
    if (canNotTraverseDeeper())
      return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty)
      object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }
  if (canNotTraverseDeeper())
    return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}
function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object), obj = _getLastOfPath.obj, k2 = _getLastOfPath.k;
  obj[k2] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object), obj = _getLastOfPath2.obj, k2 = _getLastOfPath2.k;
  obj[k2] = obj[k2] || [];
  if (concat)
    obj[k2] = obj[k2].concat(newValue);
  if (!concat)
    obj[k2].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path), obj = _getLastOfPath3.obj, k2 = _getLastOfPath3.k;
  if (!obj)
    return void 0;
  return obj[k2];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
          if (overwrite)
            target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function escape(data) {
  if (typeof data === "string") {
    return data.replace(/[&<>"'\/]/g, function(s) {
      return _entityMap[s];
    });
  }
  return data;
}
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  var possibleChars = chars.filter(function(c2) {
    return nsSeparator.indexOf(c2) < 0 && keySeparator.indexOf(c2) < 0;
  });
  if (possibleChars.length === 0)
    return true;
  var r = new RegExp("(".concat(possibleChars.map(function(c2) {
    return c2 === "?" ? "\\?" : c2;
  }).join("|"), ")"));
  var matched = !r.test(key);
  if (!matched) {
    var ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
}
function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$5(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$3() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function deepFind(obj, path) {
  var keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!obj)
    return void 0;
  if (obj[path])
    return obj[path];
  var paths = path.split(keySeparator);
  var current = obj;
  for (var i = 0; i < paths.length; ++i) {
    if (!current)
      return void 0;
    if (typeof current[paths[i]] === "string" && i + 1 < paths.length) {
      return void 0;
    }
    if (current[paths[i]] === void 0) {
      var j = 2;
      var p = paths.slice(i, i + j).join(keySeparator);
      var mix = current[p];
      while (mix === void 0 && paths.length > i + j) {
        j++;
        p = paths.slice(i, i + j).join(keySeparator);
        mix = current[p];
      }
      if (mix === void 0)
        return void 0;
      if (mix === null)
        return null;
      if (path.endsWith(p)) {
        if (typeof mix === "string")
          return mix;
        if (p && typeof mix[p] === "string")
          return mix[p];
      }
      var joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath)
        return deepFind(mix, joinedPath, keySeparator);
      return void 0;
    }
    current = current[paths[i]];
  }
  return current;
}
function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$4(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function createRules() {
  var rules = {};
  sets.forEach(function(set) {
    set.lngs.forEach(function(l2) {
      rules[l2] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}
function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$3(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function parseFormatStr(formatStr) {
  var formatName = formatStr.toLowerCase().trim();
  var formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    var p = formatStr.split("(");
    formatName = p[0].toLowerCase().trim();
    var optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency)
        formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range)
        formatOptions.range = optStr.trim();
    } else {
      var opts = optStr.split(";");
      opts.forEach(function(opt) {
        if (!opt)
          return;
        var _opt$split = opt.split(":"), _opt$split2 = _toArray(_opt$split), key = _opt$split2[0], rest = _opt$split2.slice(1);
        var val = rest.join(":").trim().replace(/^'+|'+$/g, "");
        if (!formatOptions[key.trim()])
          formatOptions[key.trim()] = val;
        if (val === "false")
          formatOptions[key.trim()] = false;
        if (val === "true")
          formatOptions[key.trim()] = true;
        if (!isNaN(val))
          formatOptions[key.trim()] = parseInt(val, 10);
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
}
function createCachedFormatter(fn) {
  var cache = {};
  return function invokeFormatter(val, lng, options) {
    var key = lng + JSON.stringify(options);
    var formatter = cache[key];
    if (!formatter) {
      formatter = fn(lng, options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function removePending(q, name) {
  if (q.pending[name] !== void 0) {
    delete q.pending[name];
    q.pendingCount--;
  }
}
function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: "all",
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: "fallback",
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle2(args) {
      var ret = {};
      if (_typeof(args[1]) === "object")
        ret = args[1];
      if (typeof args[1] === "string")
        ret.defaultValue = args[1];
      if (typeof args[2] === "string")
        ret.tDescription = args[2];
      if (_typeof(args[2]) === "object" || _typeof(args[3]) === "object") {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function(key) {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === "string")
    options.ns = [options.ns];
  if (typeof options.fallbackLng === "string")
    options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === "string")
    options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  return options;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function noop() {
}
function bindMemberFunctions(inst) {
  var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(function(mem) {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}
var consoleLogger, Logger, baseLogger, EventEmitter, _entityMap, isIE10, chars, ResourceStore, postProcessor, checkedLoadedFor, Translator, LanguageUtil, sets, _rulesPluralsTypes, deprecatedJsonVersions, suffixesOrder, PluralResolver, Interpolator, Formatter, Connector, I18n, instance, createInstance, dir, init, loadResources, reloadResources, use, changeLanguage, getFixedT, t, exists, setDefaultNamespace, hasLoadedNamespace, loadNamespaces, loadLanguages;
var init_i18next = __esm({
  "node_modules/.pnpm/i18next@22.4.9/node_modules/i18next/dist/esm/i18next.js"() {
    init_typeof();
    init_classCallCheck();
    init_createClass();
    init_assertThisInitialized();
    init_inherits();
    init_possibleConstructorReturn();
    init_getPrototypeOf();
    init_defineProperty();
    init_toArray();
    consoleLogger = {
      type: "logger",
      log: function log(args) {
        this.output("log", args);
      },
      warn: function warn(args) {
        this.output("warn", args);
      },
      error: function error(args) {
        this.output("error", args);
      },
      output: function output(type, args) {
        if (console && console[type])
          console[type].apply(console, args);
      }
    };
    Logger = function() {
      function Logger2(concreteLogger) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck(this, Logger2);
        this.init(concreteLogger, options);
      }
      _createClass(Logger2, [{
        key: "init",
        value: function init2(concreteLogger) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.prefix = options.prefix || "i18next:";
          this.logger = concreteLogger || consoleLogger;
          this.options = options;
          this.debug = options.debug;
        }
      }, {
        key: "setDebug",
        value: function setDebug(bool) {
          this.debug = bool;
        }
      }, {
        key: "log",
        value: function log2() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return this.forward(args, "log", "", true);
        }
      }, {
        key: "warn",
        value: function warn2() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return this.forward(args, "warn", "", true);
        }
      }, {
        key: "error",
        value: function error2() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          return this.forward(args, "error", "");
        }
      }, {
        key: "deprecate",
        value: function deprecate() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
        }
      }, {
        key: "forward",
        value: function forward(args, lvl, prefix, debugOnly) {
          if (debugOnly && !this.debug)
            return null;
          if (typeof args[0] === "string")
            args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
          return this.logger[lvl](args);
        }
      }, {
        key: "create",
        value: function create(moduleName) {
          return new Logger2(this.logger, _objectSpread$6(_objectSpread$6({}, {
            prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
          }), this.options));
        }
      }, {
        key: "clone",
        value: function clone(options) {
          options = options || this.options;
          options.prefix = options.prefix || this.prefix;
          return new Logger2(this.logger, options);
        }
      }]);
      return Logger2;
    }();
    baseLogger = new Logger();
    EventEmitter = function() {
      function EventEmitter2() {
        _classCallCheck(this, EventEmitter2);
        this.observers = {};
      }
      _createClass(EventEmitter2, [{
        key: "on",
        value: function on(events, listener) {
          var _this = this;
          events.split(" ").forEach(function(event) {
            _this.observers[event] = _this.observers[event] || [];
            _this.observers[event].push(listener);
          });
          return this;
        }
      }, {
        key: "off",
        value: function off(event, listener) {
          if (!this.observers[event])
            return;
          if (!listener) {
            delete this.observers[event];
            return;
          }
          this.observers[event] = this.observers[event].filter(function(l2) {
            return l2 !== listener;
          });
        }
      }, {
        key: "emit",
        value: function emit(event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (this.observers[event]) {
            var cloned = [].concat(this.observers[event]);
            cloned.forEach(function(observer) {
              observer.apply(void 0, args);
            });
          }
          if (this.observers["*"]) {
            var _cloned = [].concat(this.observers["*"]);
            _cloned.forEach(function(observer) {
              observer.apply(observer, [event].concat(args));
            });
          }
        }
      }]);
      return EventEmitter2;
    }();
    _entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;"
    };
    isIE10 = typeof window !== "undefined" && window.navigator && typeof window.navigator.userAgentData === "undefined" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;
    chars = [" ", ",", "?", "!", ";"];
    ResourceStore = function(_EventEmitter) {
      _inherits(ResourceStore2, _EventEmitter);
      var _super = _createSuper$3(ResourceStore2);
      function ResourceStore2(data) {
        var _this;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
          ns: ["translation"],
          defaultNS: "translation"
        };
        _classCallCheck(this, ResourceStore2);
        _this = _super.call(this);
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized(_this));
        }
        _this.data = data || {};
        _this.options = options;
        if (_this.options.keySeparator === void 0) {
          _this.options.keySeparator = ".";
        }
        if (_this.options.ignoreJSONStructure === void 0) {
          _this.options.ignoreJSONStructure = true;
        }
        return _this;
      }
      _createClass(ResourceStore2, [{
        key: "addNamespaces",
        value: function addNamespaces(ns) {
          if (this.options.ns.indexOf(ns) < 0) {
            this.options.ns.push(ns);
          }
        }
      }, {
        key: "removeNamespaces",
        value: function removeNamespaces(ns) {
          var index = this.options.ns.indexOf(ns);
          if (index > -1) {
            this.options.ns.splice(index, 1);
          }
        }
      }, {
        key: "getResource",
        value: function getResource(lng, ns, key) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
          var ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
          var path = [lng, ns];
          if (key && typeof key !== "string")
            path = path.concat(key);
          if (key && typeof key === "string")
            path = path.concat(keySeparator ? key.split(keySeparator) : key);
          if (lng.indexOf(".") > -1) {
            path = lng.split(".");
          }
          var result = getPath(this.data, path);
          if (result || !ignoreJSONStructure || typeof key !== "string")
            return result;
          return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
        }
      }, {
        key: "addResource",
        value: function addResource(lng, ns, key, value) {
          var options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: false
          };
          var keySeparator = this.options.keySeparator;
          if (keySeparator === void 0)
            keySeparator = ".";
          var path = [lng, ns];
          if (key)
            path = path.concat(keySeparator ? key.split(keySeparator) : key);
          if (lng.indexOf(".") > -1) {
            path = lng.split(".");
            value = ns;
            ns = path[1];
          }
          this.addNamespaces(ns);
          setPath(this.data, path, value);
          if (!options.silent)
            this.emit("added", lng, ns, key, value);
        }
      }, {
        key: "addResources",
        value: function addResources(lng, ns, resources) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: false
          };
          for (var m2 in resources) {
            if (typeof resources[m2] === "string" || Object.prototype.toString.apply(resources[m2]) === "[object Array]")
              this.addResource(lng, ns, m2, resources[m2], {
                silent: true
              });
          }
          if (!options.silent)
            this.emit("added", lng, ns, resources);
        }
      }, {
        key: "addResourceBundle",
        value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
          var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
            silent: false
          };
          var path = [lng, ns];
          if (lng.indexOf(".") > -1) {
            path = lng.split(".");
            deep = resources;
            resources = ns;
            ns = path[1];
          }
          this.addNamespaces(ns);
          var pack = getPath(this.data, path) || {};
          if (deep) {
            deepExtend(pack, resources, overwrite);
          } else {
            pack = _objectSpread$5(_objectSpread$5({}, pack), resources);
          }
          setPath(this.data, path, pack);
          if (!options.silent)
            this.emit("added", lng, ns, resources);
        }
      }, {
        key: "removeResourceBundle",
        value: function removeResourceBundle(lng, ns) {
          if (this.hasResourceBundle(lng, ns)) {
            delete this.data[lng][ns];
          }
          this.removeNamespaces(ns);
          this.emit("removed", lng, ns);
        }
      }, {
        key: "hasResourceBundle",
        value: function hasResourceBundle(lng, ns) {
          return this.getResource(lng, ns) !== void 0;
        }
      }, {
        key: "getResourceBundle",
        value: function getResourceBundle(lng, ns) {
          if (!ns)
            ns = this.options.defaultNS;
          if (this.options.compatibilityAPI === "v1")
            return _objectSpread$5(_objectSpread$5({}, {}), this.getResource(lng, ns));
          return this.getResource(lng, ns);
        }
      }, {
        key: "getDataByLanguage",
        value: function getDataByLanguage(lng) {
          return this.data[lng];
        }
      }, {
        key: "hasLanguageSomeTranslations",
        value: function hasLanguageSomeTranslations(lng) {
          var data = this.getDataByLanguage(lng);
          var n3 = data && Object.keys(data) || [];
          return !!n3.find(function(v2) {
            return data[v2] && Object.keys(data[v2]).length > 0;
          });
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return this.data;
        }
      }]);
      return ResourceStore2;
    }(EventEmitter);
    postProcessor = {
      processors: {},
      addPostProcessor: function addPostProcessor(module2) {
        this.processors[module2.name] = module2;
      },
      handle: function handle(processors, value, key, options, translator) {
        var _this = this;
        processors.forEach(function(processor) {
          if (_this.processors[processor])
            value = _this.processors[processor].process(value, key, options, translator);
        });
        return value;
      }
    };
    checkedLoadedFor = {};
    Translator = function(_EventEmitter) {
      _inherits(Translator2, _EventEmitter);
      var _super = _createSuper$2(Translator2);
      function Translator2(services) {
        var _this;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck(this, Translator2);
        _this = _super.call(this);
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized(_this));
        }
        copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, _assertThisInitialized(_this));
        _this.options = options;
        if (_this.options.keySeparator === void 0) {
          _this.options.keySeparator = ".";
        }
        _this.logger = baseLogger.create("translator");
        return _this;
      }
      _createClass(Translator2, [{
        key: "changeLanguage",
        value: function changeLanguage2(lng) {
          if (lng)
            this.language = lng;
        }
      }, {
        key: "exists",
        value: function exists2(key) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
          };
          if (key === void 0 || key === null) {
            return false;
          }
          var resolved = this.resolve(key, options);
          return resolved && resolved.res !== void 0;
        }
      }, {
        key: "extractFromKey",
        value: function extractFromKey(key, options) {
          var nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
          if (nsSeparator === void 0)
            nsSeparator = ":";
          var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
          var namespaces = options.ns || this.options.defaultNS || [];
          var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
          var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
          if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
            var m2 = key.match(this.interpolator.nestingRegexp);
            if (m2 && m2.length > 0) {
              return {
                key,
                namespaces
              };
            }
            var parts = key.split(nsSeparator);
            if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
              namespaces = parts.shift();
            key = parts.join(keySeparator);
          }
          if (typeof namespaces === "string")
            namespaces = [namespaces];
          return {
            key,
            namespaces
          };
        }
      }, {
        key: "translate",
        value: function translate(keys, options, lastKey) {
          var _this2 = this;
          if (_typeof(options) !== "object" && this.options.overloadTranslationOptionHandler) {
            options = this.options.overloadTranslationOptionHandler(arguments);
          }
          if (!options)
            options = {};
          if (keys === void 0 || keys === null)
            return "";
          if (!Array.isArray(keys))
            keys = [String(keys)];
          var returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
          var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
          var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options), key = _this$extractFromKey.key, namespaces = _this$extractFromKey.namespaces;
          var namespace = namespaces[namespaces.length - 1];
          var lng = options.lng || this.language;
          var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (lng && lng.toLowerCase() === "cimode") {
            if (appendNamespaceToCIMode) {
              var nsSeparator = options.nsSeparator || this.options.nsSeparator;
              if (returnDetails) {
                resolved.res = "".concat(namespace).concat(nsSeparator).concat(key);
                return resolved;
              }
              return "".concat(namespace).concat(nsSeparator).concat(key);
            }
            if (returnDetails) {
              resolved.res = key;
              return resolved;
            }
            return key;
          }
          var resolved = this.resolve(keys, options);
          var res = resolved && resolved.res;
          var resUsedKey = resolved && resolved.usedKey || key;
          var resExactUsedKey = resolved && resolved.exactUsedKey || key;
          var resType = Object.prototype.toString.apply(res);
          var noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
          var joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
          var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
          var handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
          if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && resType === "[object Array]")) {
            if (!options.returnObjects && !this.options.returnObjects) {
              if (!this.options.returnedObjectHandler) {
                this.logger.warn("accessing an object - but returnObjects options is not enabled!");
              }
              var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$4(_objectSpread$4({}, options), {}, {
                ns: namespaces
              })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
              if (returnDetails) {
                resolved.res = r;
                return resolved;
              }
              return r;
            }
            if (keySeparator) {
              var resTypeIsArray = resType === "[object Array]";
              var copy2 = resTypeIsArray ? [] : {};
              var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
              for (var m2 in res) {
                if (Object.prototype.hasOwnProperty.call(res, m2)) {
                  var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m2);
                  copy2[m2] = this.translate(deepKey, _objectSpread$4(_objectSpread$4({}, options), {
                    joinArrays: false,
                    ns: namespaces
                  }));
                  if (copy2[m2] === deepKey)
                    copy2[m2] = res[m2];
                }
              }
              res = copy2;
            }
          } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && resType === "[object Array]") {
            res = res.join(joinArrays);
            if (res)
              res = this.extendTranslation(res, keys, options, lastKey);
          } else {
            var usedDefault = false;
            var usedKey = false;
            var needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
            var hasDefaultValue = Translator2.hasDefaultValue(options);
            var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
            var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;
            if (!this.isValidLookup(res) && hasDefaultValue) {
              usedDefault = true;
              res = defaultValue;
            }
            if (!this.isValidLookup(res)) {
              usedKey = true;
              res = key;
            }
            var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
            var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
            var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
            if (usedKey || usedDefault || updateMissing) {
              this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
              if (keySeparator) {
                var fk = this.resolve(key, _objectSpread$4(_objectSpread$4({}, options), {}, {
                  keySeparator: false
                }));
                if (fk && fk.res)
                  this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
              }
              var lngs = [];
              var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
              if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
                for (var i = 0; i < fallbackLngs.length; i++) {
                  lngs.push(fallbackLngs[i]);
                }
              } else if (this.options.saveMissingTo === "all") {
                lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
              } else {
                lngs.push(options.lng || this.language);
              }
              var send = function send2(l2, k2, specificDefaultValue) {
                var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
                if (_this2.options.missingKeyHandler) {
                  _this2.options.missingKeyHandler(l2, namespace, k2, defaultForMissing, updateMissing, options);
                } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
                  _this2.backendConnector.saveMissing(l2, namespace, k2, defaultForMissing, updateMissing, options);
                }
                _this2.emit("missingKey", l2, namespace, k2, res);
              };
              if (this.options.saveMissing) {
                if (this.options.saveMissingPlurals && needsPluralHandling) {
                  lngs.forEach(function(language) {
                    _this2.pluralResolver.getSuffixes(language, options).forEach(function(suffix) {
                      send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                    });
                  });
                } else {
                  send(lngs, key, defaultValue);
                }
              }
            }
            res = this.extendTranslation(res, keys, options, resolved, lastKey);
            if (usedKey && res === key && this.options.appendNamespaceToMissingKey)
              res = "".concat(namespace, ":").concat(key);
            if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
              if (this.options.compatibilityAPI !== "v1") {
                res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : void 0);
              } else {
                res = this.options.parseMissingKeyHandler(res);
              }
            }
          }
          if (returnDetails) {
            resolved.res = res;
            return resolved;
          }
          return res;
        }
      }, {
        key: "extendTranslation",
        value: function extendTranslation(res, key, options, resolved, lastKey) {
          var _this3 = this;
          if (this.i18nFormat && this.i18nFormat.parse) {
            res = this.i18nFormat.parse(res, _objectSpread$4(_objectSpread$4({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
              resolved
            });
          } else if (!options.skipInterpolation) {
            if (options.interpolation)
              this.interpolator.init(_objectSpread$4(_objectSpread$4({}, options), {
                interpolation: _objectSpread$4(_objectSpread$4({}, this.options.interpolation), options.interpolation)
              }));
            var skipOnVariables = typeof res === "string" && (options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            var nestBef;
            if (skipOnVariables) {
              var nb = res.match(this.interpolator.nestingRegexp);
              nestBef = nb && nb.length;
            }
            var data = options.replace && typeof options.replace !== "string" ? options.replace : options;
            if (this.options.interpolation.defaultVariables)
              data = _objectSpread$4(_objectSpread$4({}, this.options.interpolation.defaultVariables), data);
            res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
            if (skipOnVariables) {
              var na = res.match(this.interpolator.nestingRegexp);
              var nestAft = na && na.length;
              if (nestBef < nestAft)
                options.nest = false;
            }
            if (options.nest !== false)
              res = this.interpolator.nest(res, function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                if (lastKey && lastKey[0] === args[0] && !options.context) {
                  _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
                  return null;
                }
                return _this3.translate.apply(_this3, args.concat([key]));
              }, options);
            if (options.interpolation)
              this.interpolator.reset();
          }
          var postProcess = options.postProcess || this.options.postProcess;
          var postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
          if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
            res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$4({
              i18nResolved: resolved
            }, options) : options, this);
          }
          return res;
        }
      }, {
        key: "resolve",
        value: function resolve(keys) {
          var _this4 = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var found;
          var usedKey;
          var exactUsedKey;
          var usedLng;
          var usedNS;
          if (typeof keys === "string")
            keys = [keys];
          keys.forEach(function(k2) {
            if (_this4.isValidLookup(found))
              return;
            var extracted = _this4.extractFromKey(k2, options);
            var key = extracted.key;
            usedKey = key;
            var namespaces = extracted.namespaces;
            if (_this4.options.fallbackNS)
              namespaces = namespaces.concat(_this4.options.fallbackNS);
            var needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
            var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();
            var needsContextHandling = options.context !== void 0 && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
            var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
            namespaces.forEach(function(ns) {
              if (_this4.isValidLookup(found))
                return;
              usedNS = ns;
              if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
                checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
                _this4.logger.warn('key "'.concat(usedKey, '" for languages "').concat(codes.join(", "), `" won't get resolved as namespace "`).concat(usedNS, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
              }
              codes.forEach(function(code) {
                if (_this4.isValidLookup(found))
                  return;
                usedLng = code;
                var finalKeys = [key];
                if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
                  _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
                } else {
                  var pluralSuffix;
                  if (needsPluralHandling)
                    pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
                  var zeroSuffix = "".concat(_this4.options.pluralSeparator, "zero");
                  if (needsPluralHandling) {
                    finalKeys.push(key + pluralSuffix);
                    if (needsZeroSuffixLookup) {
                      finalKeys.push(key + zeroSuffix);
                    }
                  }
                  if (needsContextHandling) {
                    var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                    finalKeys.push(contextKey);
                    if (needsPluralHandling) {
                      finalKeys.push(contextKey + pluralSuffix);
                      if (needsZeroSuffixLookup) {
                        finalKeys.push(contextKey + zeroSuffix);
                      }
                    }
                  }
                }
                var possibleKey;
                while (possibleKey = finalKeys.pop()) {
                  if (!_this4.isValidLookup(found)) {
                    exactUsedKey = possibleKey;
                    found = _this4.getResource(code, ns, possibleKey, options);
                  }
                }
              });
            });
          });
          return {
            res: found,
            usedKey,
            exactUsedKey,
            usedLng,
            usedNS
          };
        }
      }, {
        key: "isValidLookup",
        value: function isValidLookup(res) {
          return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
        }
      }, {
        key: "getResource",
        value: function getResource(code, ns, key) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (this.i18nFormat && this.i18nFormat.getResource)
            return this.i18nFormat.getResource(code, ns, key, options);
          return this.resourceStore.getResource(code, ns, key, options);
        }
      }], [{
        key: "hasDefaultValue",
        value: function hasDefaultValue(options) {
          var prefix = "defaultValue";
          for (var option in options) {
            if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
              return true;
            }
          }
          return false;
        }
      }]);
      return Translator2;
    }(EventEmitter);
    LanguageUtil = function() {
      function LanguageUtil2(options) {
        _classCallCheck(this, LanguageUtil2);
        this.options = options;
        this.supportedLngs = this.options.supportedLngs || false;
        this.logger = baseLogger.create("languageUtils");
      }
      _createClass(LanguageUtil2, [{
        key: "getScriptPartFromCode",
        value: function getScriptPartFromCode(code) {
          if (!code || code.indexOf("-") < 0)
            return null;
          var p = code.split("-");
          if (p.length === 2)
            return null;
          p.pop();
          if (p[p.length - 1].toLowerCase() === "x")
            return null;
          return this.formatLanguageCode(p.join("-"));
        }
      }, {
        key: "getLanguagePartFromCode",
        value: function getLanguagePartFromCode(code) {
          if (!code || code.indexOf("-") < 0)
            return code;
          var p = code.split("-");
          return this.formatLanguageCode(p[0]);
        }
      }, {
        key: "formatLanguageCode",
        value: function formatLanguageCode(code) {
          if (typeof code === "string" && code.indexOf("-") > -1) {
            var specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            var p = code.split("-");
            if (this.options.lowerCaseLng) {
              p = p.map(function(part) {
                return part.toLowerCase();
              });
            } else if (p.length === 2) {
              p[0] = p[0].toLowerCase();
              p[1] = p[1].toUpperCase();
              if (specialCases.indexOf(p[1].toLowerCase()) > -1)
                p[1] = capitalize(p[1].toLowerCase());
            } else if (p.length === 3) {
              p[0] = p[0].toLowerCase();
              if (p[1].length === 2)
                p[1] = p[1].toUpperCase();
              if (p[0] !== "sgn" && p[2].length === 2)
                p[2] = p[2].toUpperCase();
              if (specialCases.indexOf(p[1].toLowerCase()) > -1)
                p[1] = capitalize(p[1].toLowerCase());
              if (specialCases.indexOf(p[2].toLowerCase()) > -1)
                p[2] = capitalize(p[2].toLowerCase());
            }
            return p.join("-");
          }
          return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
        }
      }, {
        key: "isSupportedCode",
        value: function isSupportedCode(code) {
          if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
            code = this.getLanguagePartFromCode(code);
          }
          return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
        }
      }, {
        key: "getBestMatchFromCodes",
        value: function getBestMatchFromCodes(codes) {
          var _this = this;
          if (!codes)
            return null;
          var found;
          codes.forEach(function(code) {
            if (found)
              return;
            var cleanedLng = _this.formatLanguageCode(code);
            if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng))
              found = cleanedLng;
          });
          if (!found && this.options.supportedLngs) {
            codes.forEach(function(code) {
              if (found)
                return;
              var lngOnly = _this.getLanguagePartFromCode(code);
              if (_this.isSupportedCode(lngOnly))
                return found = lngOnly;
              found = _this.options.supportedLngs.find(function(supportedLng) {
                if (supportedLng.indexOf(lngOnly) === 0)
                  return supportedLng;
              });
            });
          }
          if (!found)
            found = this.getFallbackCodes(this.options.fallbackLng)[0];
          return found;
        }
      }, {
        key: "getFallbackCodes",
        value: function getFallbackCodes(fallbacks, code) {
          if (!fallbacks)
            return [];
          if (typeof fallbacks === "function")
            fallbacks = fallbacks(code);
          if (typeof fallbacks === "string")
            fallbacks = [fallbacks];
          if (Object.prototype.toString.apply(fallbacks) === "[object Array]")
            return fallbacks;
          if (!code)
            return fallbacks["default"] || [];
          var found = fallbacks[code];
          if (!found)
            found = fallbacks[this.getScriptPartFromCode(code)];
          if (!found)
            found = fallbacks[this.formatLanguageCode(code)];
          if (!found)
            found = fallbacks[this.getLanguagePartFromCode(code)];
          if (!found)
            found = fallbacks["default"];
          return found || [];
        }
      }, {
        key: "toResolveHierarchy",
        value: function toResolveHierarchy(code, fallbackCode) {
          var _this2 = this;
          var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
          var codes = [];
          var addCode = function addCode2(c2) {
            if (!c2)
              return;
            if (_this2.isSupportedCode(c2)) {
              codes.push(c2);
            } else {
              _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c2));
            }
          };
          if (typeof code === "string" && code.indexOf("-") > -1) {
            if (this.options.load !== "languageOnly")
              addCode(this.formatLanguageCode(code));
            if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
              addCode(this.getScriptPartFromCode(code));
            if (this.options.load !== "currentOnly")
              addCode(this.getLanguagePartFromCode(code));
          } else if (typeof code === "string") {
            addCode(this.formatLanguageCode(code));
          }
          fallbackCodes.forEach(function(fc) {
            if (codes.indexOf(fc) < 0)
              addCode(_this2.formatLanguageCode(fc));
          });
          return codes;
        }
      }]);
      return LanguageUtil2;
    }();
    sets = [{
      lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
      nr: [1, 2],
      fc: 1
    }, {
      lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
      nr: [1, 2],
      fc: 2
    }, {
      lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
      nr: [1],
      fc: 3
    }, {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4
    }, {
      lngs: ["ar"],
      nr: [0, 1, 2, 3, 11, 100],
      fc: 5
    }, {
      lngs: ["cs", "sk"],
      nr: [1, 2, 5],
      fc: 6
    }, {
      lngs: ["csb", "pl"],
      nr: [1, 2, 5],
      fc: 7
    }, {
      lngs: ["cy"],
      nr: [1, 2, 3, 8],
      fc: 8
    }, {
      lngs: ["fr"],
      nr: [1, 2],
      fc: 9
    }, {
      lngs: ["ga"],
      nr: [1, 2, 3, 7, 11],
      fc: 10
    }, {
      lngs: ["gd"],
      nr: [1, 2, 3, 20],
      fc: 11
    }, {
      lngs: ["is"],
      nr: [1, 2],
      fc: 12
    }, {
      lngs: ["jv"],
      nr: [0, 1],
      fc: 13
    }, {
      lngs: ["kw"],
      nr: [1, 2, 3, 4],
      fc: 14
    }, {
      lngs: ["lt"],
      nr: [1, 2, 10],
      fc: 15
    }, {
      lngs: ["lv"],
      nr: [1, 2, 0],
      fc: 16
    }, {
      lngs: ["mk"],
      nr: [1, 2],
      fc: 17
    }, {
      lngs: ["mnk"],
      nr: [0, 1, 2],
      fc: 18
    }, {
      lngs: ["mt"],
      nr: [1, 2, 11, 20],
      fc: 19
    }, {
      lngs: ["or"],
      nr: [2, 1],
      fc: 2
    }, {
      lngs: ["ro"],
      nr: [1, 2, 20],
      fc: 20
    }, {
      lngs: ["sl"],
      nr: [5, 1, 2, 3],
      fc: 21
    }, {
      lngs: ["he", "iw"],
      nr: [1, 2, 20, 21],
      fc: 22
    }];
    _rulesPluralsTypes = {
      1: function _2(n3) {
        return Number(n3 > 1);
      },
      2: function _3(n3) {
        return Number(n3 != 1);
      },
      3: function _4(n3) {
        return 0;
      },
      4: function _5(n3) {
        return Number(n3 % 10 == 1 && n3 % 100 != 11 ? 0 : n3 % 10 >= 2 && n3 % 10 <= 4 && (n3 % 100 < 10 || n3 % 100 >= 20) ? 1 : 2);
      },
      5: function _6(n3) {
        return Number(n3 == 0 ? 0 : n3 == 1 ? 1 : n3 == 2 ? 2 : n3 % 100 >= 3 && n3 % 100 <= 10 ? 3 : n3 % 100 >= 11 ? 4 : 5);
      },
      6: function _7(n3) {
        return Number(n3 == 1 ? 0 : n3 >= 2 && n3 <= 4 ? 1 : 2);
      },
      7: function _8(n3) {
        return Number(n3 == 1 ? 0 : n3 % 10 >= 2 && n3 % 10 <= 4 && (n3 % 100 < 10 || n3 % 100 >= 20) ? 1 : 2);
      },
      8: function _9(n3) {
        return Number(n3 == 1 ? 0 : n3 == 2 ? 1 : n3 != 8 && n3 != 11 ? 2 : 3);
      },
      9: function _10(n3) {
        return Number(n3 >= 2);
      },
      10: function _11(n3) {
        return Number(n3 == 1 ? 0 : n3 == 2 ? 1 : n3 < 7 ? 2 : n3 < 11 ? 3 : 4);
      },
      11: function _12(n3) {
        return Number(n3 == 1 || n3 == 11 ? 0 : n3 == 2 || n3 == 12 ? 1 : n3 > 2 && n3 < 20 ? 2 : 3);
      },
      12: function _13(n3) {
        return Number(n3 % 10 != 1 || n3 % 100 == 11);
      },
      13: function _14(n3) {
        return Number(n3 !== 0);
      },
      14: function _15(n3) {
        return Number(n3 == 1 ? 0 : n3 == 2 ? 1 : n3 == 3 ? 2 : 3);
      },
      15: function _16(n3) {
        return Number(n3 % 10 == 1 && n3 % 100 != 11 ? 0 : n3 % 10 >= 2 && (n3 % 100 < 10 || n3 % 100 >= 20) ? 1 : 2);
      },
      16: function _17(n3) {
        return Number(n3 % 10 == 1 && n3 % 100 != 11 ? 0 : n3 !== 0 ? 1 : 2);
      },
      17: function _18(n3) {
        return Number(n3 == 1 || n3 % 10 == 1 && n3 % 100 != 11 ? 0 : 1);
      },
      18: function _19(n3) {
        return Number(n3 == 0 ? 0 : n3 == 1 ? 1 : 2);
      },
      19: function _20(n3) {
        return Number(n3 == 1 ? 0 : n3 == 0 || n3 % 100 > 1 && n3 % 100 < 11 ? 1 : n3 % 100 > 10 && n3 % 100 < 20 ? 2 : 3);
      },
      20: function _21(n3) {
        return Number(n3 == 1 ? 0 : n3 == 0 || n3 % 100 > 0 && n3 % 100 < 20 ? 1 : 2);
      },
      21: function _22(n3) {
        return Number(n3 % 100 == 1 ? 1 : n3 % 100 == 2 ? 2 : n3 % 100 == 3 || n3 % 100 == 4 ? 3 : 0);
      },
      22: function _23(n3) {
        return Number(n3 == 1 ? 0 : n3 == 2 ? 1 : (n3 < 0 || n3 > 10) && n3 % 10 == 0 ? 2 : 3);
      }
    };
    deprecatedJsonVersions = ["v1", "v2", "v3"];
    suffixesOrder = {
      zero: 0,
      one: 1,
      two: 2,
      few: 3,
      many: 4,
      other: 5
    };
    PluralResolver = function() {
      function PluralResolver2(languageUtils) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck(this, PluralResolver2);
        this.languageUtils = languageUtils;
        this.options = options;
        this.logger = baseLogger.create("pluralResolver");
        if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl === "undefined" || !Intl.PluralRules)) {
          this.options.compatibilityJSON = "v3";
          this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
        }
        this.rules = createRules();
      }
      _createClass(PluralResolver2, [{
        key: "addRule",
        value: function addRule(lng, obj) {
          this.rules[lng] = obj;
        }
      }, {
        key: "getRule",
        value: function getRule(code) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (this.shouldUseIntlApi()) {
            try {
              return new Intl.PluralRules(code, {
                type: options.ordinal ? "ordinal" : "cardinal"
              });
            } catch (_unused) {
              return;
            }
          }
          return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
        }
      }, {
        key: "needsPlural",
        value: function needsPlural(code) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var rule = this.getRule(code, options);
          if (this.shouldUseIntlApi()) {
            return rule && rule.resolvedOptions().pluralCategories.length > 1;
          }
          return rule && rule.numbers.length > 1;
        }
      }, {
        key: "getPluralFormsOfKey",
        value: function getPluralFormsOfKey(code, key) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return this.getSuffixes(code, options).map(function(suffix) {
            return "".concat(key).concat(suffix);
          });
        }
      }, {
        key: "getSuffixes",
        value: function getSuffixes(code) {
          var _this = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var rule = this.getRule(code, options);
          if (!rule) {
            return [];
          }
          if (this.shouldUseIntlApi()) {
            return rule.resolvedOptions().pluralCategories.sort(function(pluralCategory1, pluralCategory2) {
              return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
            }).map(function(pluralCategory) {
              return "".concat(_this.options.prepend).concat(pluralCategory);
            });
          }
          return rule.numbers.map(function(number) {
            return _this.getSuffix(code, number, options);
          });
        }
      }, {
        key: "getSuffix",
        value: function getSuffix(code, count) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var rule = this.getRule(code, options);
          if (rule) {
            if (this.shouldUseIntlApi()) {
              return "".concat(this.options.prepend).concat(rule.select(count));
            }
            return this.getSuffixRetroCompatible(rule, count);
          }
          this.logger.warn("no plural rule found for: ".concat(code));
          return "";
        }
      }, {
        key: "getSuffixRetroCompatible",
        value: function getSuffixRetroCompatible(rule, count) {
          var _this2 = this;
          var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
          var suffix = rule.numbers[idx];
          if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
            if (suffix === 2) {
              suffix = "plural";
            } else if (suffix === 1) {
              suffix = "";
            }
          }
          var returnSuffix = function returnSuffix2() {
            return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
          };
          if (this.options.compatibilityJSON === "v1") {
            if (suffix === 1)
              return "";
            if (typeof suffix === "number")
              return "_plural_".concat(suffix.toString());
            return returnSuffix();
          } else if (this.options.compatibilityJSON === "v2") {
            return returnSuffix();
          } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
            return returnSuffix();
          }
          return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
        }
      }, {
        key: "shouldUseIntlApi",
        value: function shouldUseIntlApi() {
          return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
        }
      }]);
      return PluralResolver2;
    }();
    Interpolator = function() {
      function Interpolator2() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _classCallCheck(this, Interpolator2);
        this.logger = baseLogger.create("interpolator");
        this.options = options;
        this.format = options.interpolation && options.interpolation.format || function(value) {
          return value;
        };
        this.init(options);
      }
      _createClass(Interpolator2, [{
        key: "init",
        value: function init2() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (!options.interpolation)
            options.interpolation = {
              escapeValue: true
            };
          var iOpts = options.interpolation;
          this.escape = iOpts.escape !== void 0 ? iOpts.escape : escape;
          this.escapeValue = iOpts.escapeValue !== void 0 ? iOpts.escapeValue : true;
          this.useRawValueToEscape = iOpts.useRawValueToEscape !== void 0 ? iOpts.useRawValueToEscape : false;
          this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || "{{";
          this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || "}}";
          this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
          this.unescapePrefix = iOpts.unescapeSuffix ? "" : iOpts.unescapePrefix || "-";
          this.unescapeSuffix = this.unescapePrefix ? "" : iOpts.unescapeSuffix || "";
          this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape("$t(");
          this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(")");
          this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ",";
          this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1e3;
          this.alwaysFormat = iOpts.alwaysFormat !== void 0 ? iOpts.alwaysFormat : false;
          this.resetRegExp();
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.options)
            this.init(this.options);
        }
      }, {
        key: "resetRegExp",
        value: function resetRegExp() {
          var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
          this.regexp = new RegExp(regexpStr, "g");
          var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
          this.regexpUnescape = new RegExp(regexpUnescapeStr, "g");
          var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
          this.nestingRegexp = new RegExp(nestingRegexpStr, "g");
        }
      }, {
        key: "interpolate",
        value: function interpolate(str, data, lng, options) {
          var _this = this;
          var match;
          var value;
          var replaces;
          var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
          function regexSafe(val) {
            return val.replace(/\$/g, "$$$$");
          }
          var handleFormat = function handleFormat2(key) {
            if (key.indexOf(_this.formatSeparator) < 0) {
              var path = getPathWithDefaults(data, defaultData, key);
              return _this.alwaysFormat ? _this.format(path, void 0, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
                interpolationkey: key
              })) : path;
            }
            var p = key.split(_this.formatSeparator);
            var k2 = p.shift().trim();
            var f3 = p.join(_this.formatSeparator).trim();
            return _this.format(getPathWithDefaults(data, defaultData, k2), f3, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
              interpolationkey: k2
            }));
          };
          this.resetRegExp();
          var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
          var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
          var todos = [{
            regex: this.regexpUnescape,
            safeValue: function safeValue(val) {
              return regexSafe(val);
            }
          }, {
            regex: this.regexp,
            safeValue: function safeValue(val) {
              return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
            }
          }];
          todos.forEach(function(todo) {
            replaces = 0;
            while (match = todo.regex.exec(str)) {
              var matchedVar = match[1].trim();
              value = handleFormat(matchedVar);
              if (value === void 0) {
                if (typeof missingInterpolationHandler === "function") {
                  var temp = missingInterpolationHandler(str, match, options);
                  value = typeof temp === "string" ? temp : "";
                } else if (options && options.hasOwnProperty(matchedVar)) {
                  value = "";
                } else if (skipOnVariables) {
                  value = match[0];
                  continue;
                } else {
                  _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));
                  value = "";
                }
              } else if (typeof value !== "string" && !_this.useRawValueToEscape) {
                value = makeString(value);
              }
              var safeValue = todo.safeValue(value);
              str = str.replace(match[0], safeValue);
              if (skipOnVariables) {
                todo.regex.lastIndex += value.length;
                todo.regex.lastIndex -= match[0].length;
              } else {
                todo.regex.lastIndex = 0;
              }
              replaces++;
              if (replaces >= _this.maxReplaces) {
                break;
              }
            }
          });
          return str;
        }
      }, {
        key: "nest",
        value: function nest(str, fc) {
          var _this2 = this;
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var match;
          var value;
          var clonedOptions;
          function handleHasOptions(key, inheritedOptions) {
            var sep = this.nestingOptionsSeparator;
            if (key.indexOf(sep) < 0)
              return key;
            var c2 = key.split(new RegExp("".concat(sep, "[ ]*{")));
            var optionsString = "{".concat(c2[1]);
            key = c2[0];
            optionsString = this.interpolate(optionsString, clonedOptions);
            var matchedSingleQuotes = optionsString.match(/'/g);
            var matchedDoubleQuotes = optionsString.match(/"/g);
            if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
              optionsString = optionsString.replace(/'/g, '"');
            }
            try {
              clonedOptions = JSON.parse(optionsString);
              if (inheritedOptions)
                clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
            } catch (e2) {
              this.logger.warn("failed parsing options string in nesting for key ".concat(key), e2);
              return "".concat(key).concat(sep).concat(optionsString);
            }
            delete clonedOptions.defaultValue;
            return key;
          }
          while (match = this.nestingRegexp.exec(str)) {
            var formatters = [];
            clonedOptions = _objectSpread$3({}, options);
            clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== "string" ? clonedOptions.replace : clonedOptions;
            clonedOptions.applyPostProcessor = false;
            delete clonedOptions.defaultValue;
            var doReduce = false;
            if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
              var r = match[1].split(this.formatSeparator).map(function(elem) {
                return elem.trim();
              });
              match[1] = r.shift();
              formatters = r;
              doReduce = true;
            }
            value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
            if (value && match[0] === str && typeof value !== "string")
              return value;
            if (typeof value !== "string")
              value = makeString(value);
            if (!value) {
              this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
              value = "";
            }
            if (doReduce) {
              value = formatters.reduce(function(v2, f3) {
                return _this2.format(v2, f3, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
                  interpolationkey: match[1].trim()
                }));
              }, value.trim());
            }
            str = str.replace(match[0], value);
            this.regexp.lastIndex = 0;
          }
          return str;
        }
      }]);
      return Interpolator2;
    }();
    Formatter = function() {
      function Formatter2() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _classCallCheck(this, Formatter2);
        this.logger = baseLogger.create("formatter");
        this.options = options;
        this.formats = {
          number: createCachedFormatter(function(lng, options2) {
            var formatter = new Intl.NumberFormat(lng, options2);
            return function(val) {
              return formatter.format(val);
            };
          }),
          currency: createCachedFormatter(function(lng, options2) {
            var formatter = new Intl.NumberFormat(lng, _objectSpread$2(_objectSpread$2({}, options2), {}, {
              style: "currency"
            }));
            return function(val) {
              return formatter.format(val);
            };
          }),
          datetime: createCachedFormatter(function(lng, options2) {
            var formatter = new Intl.DateTimeFormat(lng, _objectSpread$2({}, options2));
            return function(val) {
              return formatter.format(val);
            };
          }),
          relativetime: createCachedFormatter(function(lng, options2) {
            var formatter = new Intl.RelativeTimeFormat(lng, _objectSpread$2({}, options2));
            return function(val) {
              return formatter.format(val, options2.range || "day");
            };
          }),
          list: createCachedFormatter(function(lng, options2) {
            var formatter = new Intl.ListFormat(lng, _objectSpread$2({}, options2));
            return function(val) {
              return formatter.format(val);
            };
          })
        };
        this.init(options);
      }
      _createClass(Formatter2, [{
        key: "init",
        value: function init2(services) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
          };
          var iOpts = options.interpolation;
          this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
        }
      }, {
        key: "add",
        value: function add(name, fc) {
          this.formats[name.toLowerCase().trim()] = fc;
        }
      }, {
        key: "addCached",
        value: function addCached(name, fc) {
          this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
        }
      }, {
        key: "format",
        value: function format(value, _format, lng, options) {
          var _this = this;
          var formats = _format.split(this.formatSeparator);
          var result = formats.reduce(function(mem, f3) {
            var _parseFormatStr = parseFormatStr(f3), formatName = _parseFormatStr.formatName, formatOptions = _parseFormatStr.formatOptions;
            if (_this.formats[formatName]) {
              var formatted = mem;
              try {
                var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
                var l2 = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
                formatted = _this.formats[formatName](mem, l2, _objectSpread$2(_objectSpread$2(_objectSpread$2({}, formatOptions), options), valOptions));
              } catch (error2) {
                _this.logger.warn(error2);
              }
              return formatted;
            } else {
              _this.logger.warn("there was no format function for ".concat(formatName));
            }
            return mem;
          }, value);
          return result;
        }
      }]);
      return Formatter2;
    }();
    Connector = function(_EventEmitter) {
      _inherits(Connector2, _EventEmitter);
      var _super = _createSuper$1(Connector2);
      function Connector2(backend, store, services) {
        var _this;
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        _classCallCheck(this, Connector2);
        _this = _super.call(this);
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized(_this));
        }
        _this.backend = backend;
        _this.store = store;
        _this.services = services;
        _this.languageUtils = services.languageUtils;
        _this.options = options;
        _this.logger = baseLogger.create("backendConnector");
        _this.waitingReads = [];
        _this.maxParallelReads = options.maxParallelReads || 10;
        _this.readingCalls = 0;
        _this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
        _this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
        _this.state = {};
        _this.queue = [];
        if (_this.backend && _this.backend.init) {
          _this.backend.init(services, options.backend, options);
        }
        return _this;
      }
      _createClass(Connector2, [{
        key: "queueLoad",
        value: function queueLoad(languages, namespaces, options, callback) {
          var _this2 = this;
          var toLoad = {};
          var pending = {};
          var toLoadLanguages = {};
          var toLoadNamespaces = {};
          languages.forEach(function(lng) {
            var hasAllNamespaces = true;
            namespaces.forEach(function(ns) {
              var name = "".concat(lng, "|").concat(ns);
              if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
                _this2.state[name] = 2;
              } else if (_this2.state[name] < 0)
                ;
              else if (_this2.state[name] === 1) {
                if (pending[name] === void 0)
                  pending[name] = true;
              } else {
                _this2.state[name] = 1;
                hasAllNamespaces = false;
                if (pending[name] === void 0)
                  pending[name] = true;
                if (toLoad[name] === void 0)
                  toLoad[name] = true;
                if (toLoadNamespaces[ns] === void 0)
                  toLoadNamespaces[ns] = true;
              }
            });
            if (!hasAllNamespaces)
              toLoadLanguages[lng] = true;
          });
          if (Object.keys(toLoad).length || Object.keys(pending).length) {
            this.queue.push({
              pending,
              pendingCount: Object.keys(pending).length,
              loaded: {},
              errors: [],
              callback
            });
          }
          return {
            toLoad: Object.keys(toLoad),
            pending: Object.keys(pending),
            toLoadLanguages: Object.keys(toLoadLanguages),
            toLoadNamespaces: Object.keys(toLoadNamespaces)
          };
        }
      }, {
        key: "loaded",
        value: function loaded(name, err, data) {
          var s = name.split("|");
          var lng = s[0];
          var ns = s[1];
          if (err)
            this.emit("failedLoading", lng, ns, err);
          if (data) {
            this.store.addResourceBundle(lng, ns, data);
          }
          this.state[name] = err ? -1 : 2;
          var loaded2 = {};
          this.queue.forEach(function(q) {
            pushPath(q.loaded, [lng], ns);
            removePending(q, name);
            if (err)
              q.errors.push(err);
            if (q.pendingCount === 0 && !q.done) {
              Object.keys(q.loaded).forEach(function(l2) {
                if (!loaded2[l2])
                  loaded2[l2] = {};
                var loadedKeys = q.loaded[l2];
                if (loadedKeys.length) {
                  loadedKeys.forEach(function(ns2) {
                    if (loaded2[l2][ns2] === void 0)
                      loaded2[l2][ns2] = true;
                  });
                }
              });
              q.done = true;
              if (q.errors.length) {
                q.callback(q.errors);
              } else {
                q.callback();
              }
            }
          });
          this.emit("loaded", loaded2);
          this.queue = this.queue.filter(function(q) {
            return !q.done;
          });
        }
      }, {
        key: "read",
        value: function read(lng, ns, fcName) {
          var _this3 = this;
          var tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
          var wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
          var callback = arguments.length > 5 ? arguments[5] : void 0;
          if (!lng.length)
            return callback(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng,
              ns,
              fcName,
              tried,
              wait,
              callback
            });
            return;
          }
          this.readingCalls++;
          var resolver = function resolver2(err, data) {
            _this3.readingCalls--;
            if (_this3.waitingReads.length > 0) {
              var next = _this3.waitingReads.shift();
              _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
            }
            if (err && data && tried < _this3.maxRetries) {
              setTimeout(function() {
                _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
              }, wait);
              return;
            }
            callback(err, data);
          };
          var fc = this.backend[fcName].bind(this.backend);
          if (fc.length === 2) {
            try {
              var r = fc(lng, ns);
              if (r && typeof r.then === "function") {
                r.then(function(data) {
                  return resolver(null, data);
                })["catch"](resolver);
              } else {
                resolver(null, r);
              }
            } catch (err) {
              resolver(err);
            }
            return;
          }
          return fc(lng, ns, resolver);
        }
      }, {
        key: "prepareLoading",
        value: function prepareLoading(languages, namespaces) {
          var _this4 = this;
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var callback = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend) {
            this.logger.warn("No backend was added via i18next.use. Will not load resources.");
            return callback && callback();
          }
          if (typeof languages === "string")
            languages = this.languageUtils.toResolveHierarchy(languages);
          if (typeof namespaces === "string")
            namespaces = [namespaces];
          var toLoad = this.queueLoad(languages, namespaces, options, callback);
          if (!toLoad.toLoad.length) {
            if (!toLoad.pending.length)
              callback();
            return null;
          }
          toLoad.toLoad.forEach(function(name) {
            _this4.loadOne(name);
          });
        }
      }, {
        key: "load",
        value: function load(languages, namespaces, callback) {
          this.prepareLoading(languages, namespaces, {}, callback);
        }
      }, {
        key: "reload",
        value: function reload(languages, namespaces, callback) {
          this.prepareLoading(languages, namespaces, {
            reload: true
          }, callback);
        }
      }, {
        key: "loadOne",
        value: function loadOne(name) {
          var _this5 = this;
          var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
          var s = name.split("|");
          var lng = s[0];
          var ns = s[1];
          this.read(lng, ns, "read", void 0, void 0, function(err, data) {
            if (err)
              _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data)
              _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
            _this5.loaded(name, err, data);
          });
        }
      }, {
        key: "saveMissing",
        value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
          var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
          var clb = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : function() {
          };
          if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
            this.logger.warn('did not save key "'.concat(key, '" as the namespace "').concat(namespace, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return;
          }
          if (key === void 0 || key === null || key === "")
            return;
          if (this.backend && this.backend.create) {
            var opts = _objectSpread$1(_objectSpread$1({}, options), {}, {
              isUpdate
            });
            var fc = this.backend.create.bind(this.backend);
            if (fc.length < 6) {
              try {
                var r;
                if (fc.length === 5) {
                  r = fc(languages, namespace, key, fallbackValue, opts);
                } else {
                  r = fc(languages, namespace, key, fallbackValue);
                }
                if (r && typeof r.then === "function") {
                  r.then(function(data) {
                    return clb(null, data);
                  })["catch"](clb);
                } else {
                  clb(null, r);
                }
              } catch (err) {
                clb(err);
              }
            } else {
              fc(languages, namespace, key, fallbackValue, clb, opts);
            }
          }
          if (!languages || !languages[0])
            return;
          this.store.addResource(languages[0], namespace, key, fallbackValue);
        }
      }]);
      return Connector2;
    }(EventEmitter);
    I18n = function(_EventEmitter) {
      _inherits(I18n2, _EventEmitter);
      var _super = _createSuper(I18n2);
      function I18n2() {
        var _this;
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var callback = arguments.length > 1 ? arguments[1] : void 0;
        _classCallCheck(this, I18n2);
        _this = _super.call(this);
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized(_this));
        }
        _this.options = transformOptions(options);
        _this.services = {};
        _this.logger = baseLogger;
        _this.modules = {
          external: []
        };
        bindMemberFunctions(_assertThisInitialized(_this));
        if (callback && !_this.isInitialized && !options.isClone) {
          if (!_this.options.initImmediate) {
            _this.init(options, callback);
            return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
          }
          setTimeout(function() {
            _this.init(options, callback);
          }, 0);
        }
        return _this;
      }
      _createClass(I18n2, [{
        key: "init",
        value: function init2() {
          var _this2 = this;
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var callback = arguments.length > 1 ? arguments[1] : void 0;
          if (typeof options === "function") {
            callback = options;
            options = {};
          }
          if (!options.defaultNS && options.defaultNS !== false && options.ns) {
            if (typeof options.ns === "string") {
              options.defaultNS = options.ns;
            } else if (options.ns.indexOf("translation") < 0) {
              options.defaultNS = options.ns[0];
            }
          }
          var defOpts = get();
          this.options = _objectSpread(_objectSpread(_objectSpread({}, defOpts), this.options), transformOptions(options));
          if (this.options.compatibilityAPI !== "v1") {
            this.options.interpolation = _objectSpread(_objectSpread({}, defOpts.interpolation), this.options.interpolation);
          }
          if (options.keySeparator !== void 0) {
            this.options.userDefinedKeySeparator = options.keySeparator;
          }
          if (options.nsSeparator !== void 0) {
            this.options.userDefinedNsSeparator = options.nsSeparator;
          }
          function createClassOnDemand(ClassOrObject) {
            if (!ClassOrObject)
              return null;
            if (typeof ClassOrObject === "function")
              return new ClassOrObject();
            return ClassOrObject;
          }
          if (!this.options.isClone) {
            if (this.modules.logger) {
              baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
            } else {
              baseLogger.init(null, this.options);
            }
            var formatter;
            if (this.modules.formatter) {
              formatter = this.modules.formatter;
            } else if (typeof Intl !== "undefined") {
              formatter = Formatter;
            }
            var lu = new LanguageUtil(this.options);
            this.store = new ResourceStore(this.options.resources, this.options);
            var s = this.services;
            s.logger = baseLogger;
            s.resourceStore = this.store;
            s.languageUtils = lu;
            s.pluralResolver = new PluralResolver(lu, {
              prepend: this.options.pluralSeparator,
              compatibilityJSON: this.options.compatibilityJSON,
              simplifyPluralSuffix: this.options.simplifyPluralSuffix
            });
            if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
              s.formatter = createClassOnDemand(formatter);
              s.formatter.init(s, this.options);
              this.options.interpolation.format = s.formatter.format.bind(s.formatter);
            }
            s.interpolator = new Interpolator(this.options);
            s.utils = {
              hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            };
            s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
            s.backendConnector.on("*", function(event) {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              _this2.emit.apply(_this2, [event].concat(args));
            });
            if (this.modules.languageDetector) {
              s.languageDetector = createClassOnDemand(this.modules.languageDetector);
              if (s.languageDetector.init)
                s.languageDetector.init(s, this.options.detection, this.options);
            }
            if (this.modules.i18nFormat) {
              s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
              if (s.i18nFormat.init)
                s.i18nFormat.init(this);
            }
            this.translator = new Translator(this.services, this.options);
            this.translator.on("*", function(event) {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              _this2.emit.apply(_this2, [event].concat(args));
            });
            this.modules.external.forEach(function(m2) {
              if (m2.init)
                m2.init(_this2);
            });
          }
          this.format = this.options.interpolation.format;
          if (!callback)
            callback = noop;
          if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            if (codes.length > 0 && codes[0] !== "dev")
              this.options.lng = codes[0];
          }
          if (!this.services.languageDetector && !this.options.lng) {
            this.logger.warn("init: no languageDetector is used and no lng is defined");
          }
          var storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
          storeApi.forEach(function(fcName) {
            _this2[fcName] = function() {
              var _this2$store;
              return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
            };
          });
          var storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
          storeApiChained.forEach(function(fcName) {
            _this2[fcName] = function() {
              var _this2$store2;
              (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
              return _this2;
            };
          });
          var deferred = defer();
          var load = function load2() {
            var finish = function finish2(err, t2) {
              if (_this2.isInitialized && !_this2.initializedStoreOnce)
                _this2.logger.warn("init: i18next is already initialized. You should call init just once!");
              _this2.isInitialized = true;
              if (!_this2.options.isClone)
                _this2.logger.log("initialized", _this2.options);
              _this2.emit("initialized", _this2.options);
              deferred.resolve(t2);
              callback(err, t2);
            };
            if (_this2.languages && _this2.options.compatibilityAPI !== "v1" && !_this2.isInitialized)
              return finish(null, _this2.t.bind(_this2));
            _this2.changeLanguage(_this2.options.lng, finish);
          };
          if (this.options.resources || !this.options.initImmediate) {
            load();
          } else {
            setTimeout(load, 0);
          }
          return deferred;
        }
      }, {
        key: "loadResources",
        value: function loadResources2(language) {
          var _this3 = this;
          var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
          var usedCallback = callback;
          var usedLng = typeof language === "string" ? language : this.language;
          if (typeof language === "function")
            usedCallback = language;
          if (!this.options.resources || this.options.partialBundledLanguages) {
            if (usedLng && usedLng.toLowerCase() === "cimode")
              return usedCallback();
            var toLoad = [];
            var append = function append2(lng) {
              if (!lng)
                return;
              var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
              lngs.forEach(function(l2) {
                if (toLoad.indexOf(l2) < 0)
                  toLoad.push(l2);
              });
            };
            if (!usedLng) {
              var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
              fallbacks.forEach(function(l2) {
                return append(l2);
              });
            } else {
              append(usedLng);
            }
            if (this.options.preload) {
              this.options.preload.forEach(function(l2) {
                return append(l2);
              });
            }
            this.services.backendConnector.load(toLoad, this.options.ns, function(e2) {
              if (!e2 && !_this3.resolvedLanguage && _this3.language)
                _this3.setResolvedLanguage(_this3.language);
              usedCallback(e2);
            });
          } else {
            usedCallback(null);
          }
        }
      }, {
        key: "reloadResources",
        value: function reloadResources2(lngs, ns, callback) {
          var deferred = defer();
          if (!lngs)
            lngs = this.languages;
          if (!ns)
            ns = this.options.ns;
          if (!callback)
            callback = noop;
          this.services.backendConnector.reload(lngs, ns, function(err) {
            deferred.resolve();
            callback(err);
          });
          return deferred;
        }
      }, {
        key: "use",
        value: function use2(module2) {
          if (!module2)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
          if (!module2.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
          if (module2.type === "backend") {
            this.modules.backend = module2;
          }
          if (module2.type === "logger" || module2.log && module2.warn && module2.error) {
            this.modules.logger = module2;
          }
          if (module2.type === "languageDetector") {
            this.modules.languageDetector = module2;
          }
          if (module2.type === "i18nFormat") {
            this.modules.i18nFormat = module2;
          }
          if (module2.type === "postProcessor") {
            postProcessor.addPostProcessor(module2);
          }
          if (module2.type === "formatter") {
            this.modules.formatter = module2;
          }
          if (module2.type === "3rdParty") {
            this.modules.external.push(module2);
          }
          return this;
        }
      }, {
        key: "setResolvedLanguage",
        value: function setResolvedLanguage(l2) {
          if (!l2 || !this.languages)
            return;
          if (["cimode", "dev"].indexOf(l2) > -1)
            return;
          for (var li = 0; li < this.languages.length; li++) {
            var lngInLngs = this.languages[li];
            if (["cimode", "dev"].indexOf(lngInLngs) > -1)
              continue;
            if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
              this.resolvedLanguage = lngInLngs;
              break;
            }
          }
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage2(lng, callback) {
          var _this4 = this;
          this.isLanguageChangingTo = lng;
          var deferred = defer();
          this.emit("languageChanging", lng);
          var setLngProps = function setLngProps2(l2) {
            _this4.language = l2;
            _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l2);
            _this4.resolvedLanguage = void 0;
            _this4.setResolvedLanguage(l2);
          };
          var done = function done2(err, l2) {
            if (l2) {
              setLngProps(l2);
              _this4.translator.changeLanguage(l2);
              _this4.isLanguageChangingTo = void 0;
              _this4.emit("languageChanged", l2);
              _this4.logger.log("languageChanged", l2);
            } else {
              _this4.isLanguageChangingTo = void 0;
            }
            deferred.resolve(function() {
              return _this4.t.apply(_this4, arguments);
            });
            if (callback)
              callback(err, function() {
                return _this4.t.apply(_this4, arguments);
              });
          };
          var setLng = function setLng2(lngs) {
            if (!lng && !lngs && _this4.services.languageDetector)
              lngs = [];
            var l2 = typeof lngs === "string" ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
            if (l2) {
              if (!_this4.language) {
                setLngProps(l2);
              }
              if (!_this4.translator.language)
                _this4.translator.changeLanguage(l2);
              if (_this4.services.languageDetector && _this4.services.languageDetector.cacheUserLanguage)
                _this4.services.languageDetector.cacheUserLanguage(l2);
            }
            _this4.loadResources(l2, function(err) {
              done(err, l2);
            });
          };
          if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
            setLng(this.services.languageDetector.detect());
          } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
            if (this.services.languageDetector.detect.length === 0) {
              this.services.languageDetector.detect().then(setLng);
            } else {
              this.services.languageDetector.detect(setLng);
            }
          } else {
            setLng(lng);
          }
          return deferred;
        }
      }, {
        key: "getFixedT",
        value: function getFixedT2(lng, ns, keyPrefix) {
          var _this5 = this;
          var fixedT = function fixedT2(key, opts) {
            var options;
            if (_typeof(opts) !== "object") {
              for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                rest[_key3 - 2] = arguments[_key3];
              }
              options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
            } else {
              options = _objectSpread({}, opts);
            }
            options.lng = options.lng || fixedT2.lng;
            options.lngs = options.lngs || fixedT2.lngs;
            options.ns = options.ns || fixedT2.ns;
            options.keyPrefix = options.keyPrefix || keyPrefix || fixedT2.keyPrefix;
            var keySeparator = _this5.options.keySeparator || ".";
            var resultKey;
            if (options.keyPrefix && Array.isArray(key)) {
              resultKey = key.map(function(k2) {
                return "".concat(options.keyPrefix).concat(keySeparator).concat(k2);
              });
            } else {
              resultKey = options.keyPrefix ? "".concat(options.keyPrefix).concat(keySeparator).concat(key) : key;
            }
            return _this5.t(resultKey, options);
          };
          if (typeof lng === "string") {
            fixedT.lng = lng;
          } else {
            fixedT.lngs = lng;
          }
          fixedT.ns = ns;
          fixedT.keyPrefix = keyPrefix;
          return fixedT;
        }
      }, {
        key: "t",
        value: function t2() {
          var _this$translator;
          return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
        }
      }, {
        key: "exists",
        value: function exists2() {
          var _this$translator2;
          return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
        }
      }, {
        key: "setDefaultNamespace",
        value: function setDefaultNamespace2(ns) {
          this.options.defaultNS = ns;
        }
      }, {
        key: "hasLoadedNamespace",
        value: function hasLoadedNamespace2(ns) {
          var _this6 = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (!this.isInitialized) {
            this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
            return false;
          }
          if (!this.languages || !this.languages.length) {
            this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
            return false;
          }
          var lng = this.resolvedLanguage || this.languages[0];
          var fallbackLng = this.options ? this.options.fallbackLng : false;
          var lastLng = this.languages[this.languages.length - 1];
          if (lng.toLowerCase() === "cimode")
            return true;
          var loadNotPending = function loadNotPending2(l2, n3) {
            var loadState = _this6.services.backendConnector.state["".concat(l2, "|").concat(n3)];
            return loadState === -1 || loadState === 2;
          };
          if (options.precheck) {
            var preResult = options.precheck(this, loadNotPending);
            if (preResult !== void 0)
              return preResult;
          }
          if (this.hasResourceBundle(lng, ns))
            return true;
          if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
            return true;
          if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
            return true;
          return false;
        }
      }, {
        key: "loadNamespaces",
        value: function loadNamespaces2(ns, callback) {
          var _this7 = this;
          var deferred = defer();
          if (!this.options.ns) {
            callback && callback();
            return Promise.resolve();
          }
          if (typeof ns === "string")
            ns = [ns];
          ns.forEach(function(n3) {
            if (_this7.options.ns.indexOf(n3) < 0)
              _this7.options.ns.push(n3);
          });
          this.loadResources(function(err) {
            deferred.resolve();
            if (callback)
              callback(err);
          });
          return deferred;
        }
      }, {
        key: "loadLanguages",
        value: function loadLanguages2(lngs, callback) {
          var deferred = defer();
          if (typeof lngs === "string")
            lngs = [lngs];
          var preloaded = this.options.preload || [];
          var newLngs = lngs.filter(function(lng) {
            return preloaded.indexOf(lng) < 0;
          });
          if (!newLngs.length) {
            if (callback)
              callback();
            return Promise.resolve();
          }
          this.options.preload = preloaded.concat(newLngs);
          this.loadResources(function(err) {
            deferred.resolve();
            if (callback)
              callback(err);
          });
          return deferred;
        }
      }, {
        key: "dir",
        value: function dir2(lng) {
          if (!lng)
            lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
          if (!lng)
            return "rtl";
          var rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
          var languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
          return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
        }
      }, {
        key: "cloneInstance",
        value: function cloneInstance() {
          var _this8 = this;
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
          var mergedOptions = _objectSpread(_objectSpread(_objectSpread({}, this.options), options), {
            isClone: true
          });
          var clone = new I18n2(mergedOptions);
          if (options.debug !== void 0 || options.prefix !== void 0) {
            clone.logger = clone.logger.clone(options);
          }
          var membersToCopy = ["store", "services", "language"];
          membersToCopy.forEach(function(m2) {
            clone[m2] = _this8[m2];
          });
          clone.services = _objectSpread({}, this.services);
          clone.services.utils = {
            hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
          };
          clone.translator = new Translator(clone.services, clone.options);
          clone.translator.on("*", function(event) {
            for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              args[_key4 - 1] = arguments[_key4];
            }
            clone.emit.apply(clone, [event].concat(args));
          });
          clone.init(mergedOptions, callback);
          clone.translator.options = clone.options;
          clone.translator.backendConnector.services.utils = {
            hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
          };
          return clone;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
          };
        }
      }]);
      return I18n2;
    }(EventEmitter);
    _defineProperty(I18n, "createInstance", function() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : void 0;
      return new I18n(options, callback);
    });
    instance = I18n.createInstance();
    instance.createInstance = I18n.createInstance;
    createInstance = instance.createInstance;
    dir = instance.dir;
    init = instance.init;
    loadResources = instance.loadResources;
    reloadResources = instance.reloadResources;
    use = instance.use;
    changeLanguage = instance.changeLanguage;
    getFixedT = instance.getFixedT;
    t = instance.t;
    exists = instance.exists;
    setDefaultNamespace = instance.setDefaultNamespace;
    hasLoadedNamespace = instance.hasLoadedNamespace;
    loadNamespaces = instance.loadNamespaces;
    loadLanguages = instance.loadLanguages;
  }
});

// committer.config.ts
var committer_config_exports = {};
__export(committer_config_exports, {
  default: () => committer_config_default
});
var config, committer_config_default;
var init_committer_config = __esm({
  "committer.config.ts"() {
    "use strict";
    init_i18next();
    init_dist2();
    config = {
      commitTypes: [
        {
          value: "feat",
          label: instance.t("feat").valueOf()
        },
        {
          value: "fix",
          label: instance.t("fix").valueOf()
        },
        {
          value: "perf",
          label: instance.t("perf").valueOf()
        },
        {
          value: "style",
          label: instance.t("style").valueOf()
        },
        {
          value: "test",
          label: instance.t("test").valueOf()
        },
        {
          value: "revert",
          label: instance.t("revert").valueOf()
        },
        {
          value: "refactor",
          label: instance.t("refactor").valueOf()
        },
        {
          value: "docs",
          label: instance.t("docs").valueOf()
        },
        {
          value: "build",
          label: instance.t("build").valueOf()
        },
        {
          value: "ci",
          label: instance.t("ci").valueOf()
        }
      ],
      steps: {
        feat: [
          "scope",
          "description",
          "body",
          "footer",
          "breaking_change"
        ],
        fix: [
          "scope",
          "description",
          "body",
          "footer",
          "breaking_change"
        ],
        perf: [
          "scope",
          "description",
          "body",
          "footer",
          "breaking_change"
        ],
        style: [
          "scope",
          "description",
          "body",
          "footer",
          "breaking_change"
        ],
        test: [
          "scope",
          "description",
          "body",
          "footer"
        ],
        revert: [
          "scope",
          "description",
          "body",
          "footer",
          "breaking_change"
        ],
        refactor: [
          "scope",
          "description",
          "body",
          "footer"
        ],
        docs: [
          "scope",
          "description",
          "body",
          "footer"
        ],
        build: [
          "scope",
          "description",
          "body",
          "footer",
          "breaking_change"
        ],
        ci: [
          "scope",
          "description",
          "body",
          "footer",
          "breaking_change"
        ]
      },
      handlers: {
        scope: (accumulator) => __async(void 0, null, function* () {
          const choice = yield b({ message: instance.t("common.scope") });
          return accumulator.concat(choice ? `(${String(choice)}):` : ":");
        }),
        description: (accumulator) => __async(void 0, null, function* () {
          const choice = yield b({ message: instance.t("common.description") });
          return accumulator.concat(choice ? ` ${String(choice)}"` : '"');
        }),
        body: (accumulator) => __async(void 0, null, function* () {
          const choice = yield b({ message: instance.t("common.body") });
          return accumulator.concat(choice ? ` -m "${String(choice)}"` : "");
        }),
        footer: (accumulator) => __async(void 0, null, function* () {
          const choice = yield b({ message: instance.t("common.footer") });
          return accumulator.concat(choice ? ` -m "${String(choice)}"` : "");
        }),
        breaking_change: (accumulator) => __async(void 0, null, function* () {
          let changes = [];
          const choice = yield b({
            message: instance.t("common.ask_for_breaking_changes")
          });
          if (choice) {
            changes.push(` -m "BREAKING CHANGE: ${String(choice)}"`);
            const breakingChangeBody = yield b({
              message: instance.t("common.ask_for_breaking_changes_body").valueOf()
            });
            if (breakingChangeBody) {
              changes.push(` -m "${String(breakingChangeBody)}"`);
            }
          }
          return accumulator.concat(changes.join(""));
        })
      }
    };
    committer_config_default = config;
  }
});

// index.ts
init_dist2();
init_i18next();

// lang.config.ts
init_i18next();
function initI18Next() {
  let locale = Intl.DateTimeFormat().resolvedOptions().locale;
  const lng = !locale.includes("it") ? "en" : "it";
  return instance.init({
    lng,
    debug: false,
    resources: {
      en: {
        translation: {
          choose_commit: "Choose your commit type:",
          feat: "feat: A new feature",
          fix: "fix: A bug fix",
          perf: "perf: A code change that improves performance",
          style: "style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
          test: "test: Adding missing tests or correcting existing tests",
          revert: "revert: Reverting to a previous commit",
          refactor: "refactor: A code change that neither fixes a bug nor adds a feature",
          docs: "docs: Documentation only changes",
          build: "build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
          ci: "ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
          common: {
            description: "Write a succint description of the change:",
            body: "Write the motivation for the change and contrast this with previous behavior:",
            footer: "Write the reference to the issue and any breaking change:",
            scope: "Write the scope for your commit:",
            ask_for_commit: "Do you want me to perform the commit?",
            paste: "Paste this line to commit:",
            ask_for_breaking_changes: "Write one breaking change:",
            ask_for_breaking_changes_body: "Write breaking change's description:"
          }
        }
      },
      it: {
        translation: {
          choose_commit: "Scegli il tipo di commit:",
          feat: "feat: Una nuova feature",
          fix: "fix: Una risoluzione di un bug",
          perf: "perf: Un cambiamento di codice che migliora le performances",
          style: "style: Cambiamenti che non incidono sul significato del codice (white-space, formatting, missing semi-colons, etc)",
          test: "test: Aggiunta o correzione di test",
          revert: "revert: Revert a un commit precedente",
          refactor: "refactor: Un cambiamento del codice che non risolve un bug n\xE9 introduce una nuova feature",
          docs: "docs: Cambiamenti sulla documentazione",
          build: "build: Cambiamenti che riguardano il sistema di build o le dipendenze (es: gulp, broccoli, npm)",
          ci: "ci: Cambiamenti a scripts o file per la CI (es.: Travis, Circle, BrowserStack, SauceLabs)",
          common: {
            description: "Scrivi una breve descrizione del cambiamento:",
            body: "Scrivi il motivo per cui hai cambiato il codice e il comportamento del sistema prima e dopo di esso:",
            footer: "Scrivi il riferimento alla issue e/o le breaking changes introdotte:",
            scope: "Scrivi il contesto del commit: (opzionale)",
            ask_for_commit: "Eseguo io il commit?",
            paste: "Incolla questo comando per eseguire il commit:",
            ask_for_breaking_changes: "Scrivi una breaking change:",
            ask_for_breaking_changes_body: "Scrivi la descrizione di questa breaking change"
          }
        }
      }
    }
  });
}

// node_modules/.pnpm/chalk@5.2.0/node_modules/chalk/source/vendor/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
var styles = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
var modifierNames = Object.keys(styles.modifier);
var foregroundColorNames = Object.keys(styles.color);
var backgroundColorNames = Object.keys(styles.bgColor);
var colorNames = [...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red, green, blue) {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          /* eslint-disable no-bitwise */
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ansiStyles = assembleStyles();
var ansi_styles_default = ansiStyles;

// node_modules/.pnpm/chalk@5.2.0/node_modules/chalk/source/vendor/supports-color/index.js
var import_node_process2 = __toESM(require("node:process"), 1);
var import_node_os = __toESM(require("node:os"), 1);
var import_node_tty2 = __toESM(require("node:tty"), 1);
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : import_node_process2.default.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
var { env } = import_node_process2.default;
var flagForceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
  flagForceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
  flagForceColor = 1;
}
function envForceColor() {
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      return 1;
    }
    if (env.FORCE_COLOR === "false") {
      return 0;
    }
    return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
  }
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== void 0) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor === 0) {
    return 0;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env && "AGENT_NAME" in env) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === void 0) {
    return 0;
  }
  const min = forceColor || 0;
  if (env.TERM === "dumb") {
    return min;
  }
  if (import_node_process2.default.platform === "win32") {
    const osRelease = import_node_os.default.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if ("GITHUB_ACTIONS" in env) {
      return 3;
    }
    if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === "truecolor") {
    return 3;
  }
  if (env.TERM === "xterm-kitty") {
    return 3;
  }
  if ("TERM_PROGRAM" in env) {
    const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app": {
        return version >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  return min;
}
function createSupportsColor(stream, options = {}) {
  const level = _supportsColor(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options
  });
  return translateLevel(level);
}
var supportsColor = {
  stdout: createSupportsColor({ isTTY: import_node_tty2.default.isatty(1) }),
  stderr: createSupportsColor({ isTTY: import_node_tty2.default.isatty(2) })
};
var supports_color_default = supportsColor;

// node_modules/.pnpm/chalk@5.2.0/node_modules/chalk/source/utilities.js
function stringReplaceAll(string, substring, replacer) {
  let index = string.indexOf(substring);
  if (index === -1) {
    return string;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string.slice(endIndex, index) + substring + replacer;
    endIndex = index + substringLength;
    index = string.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string[index - 1] === "\r";
    returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
    endIndex = index + 1;
    index = string.indexOf("\n", endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}

// node_modules/.pnpm/chalk@5.2.0/node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
var GENERATOR = Symbol("GENERATOR");
var STYLER = Symbol("STYLER");
var IS_EMPTY = Symbol("IS_EMPTY");
var levelMapping = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
];
var styles2 = /* @__PURE__ */ Object.create(null);
var applyOptions = (object, options = {}) => {
  if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
    throw new Error("The `level` option should be an integer from 0 to 3");
  }
  const colorLevel = stdoutColor ? stdoutColor.level : 0;
  object.level = options.level === void 0 ? colorLevel : options.level;
};
var chalkFactory = (options) => {
  const chalk2 = (...strings) => strings.join(" ");
  applyOptions(chalk2, options);
  Object.setPrototypeOf(chalk2, createChalk.prototype);
  return chalk2;
};
function createChalk(options) {
  return chalkFactory(options);
}
Object.setPrototypeOf(createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries(ansi_styles_default)) {
  styles2[styleName] = {
    get() {
      const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
      Object.defineProperty(this, styleName, { value: builder });
      return builder;
    }
  };
}
styles2.visible = {
  get() {
    const builder = createBuilder(this, this[STYLER], true);
    Object.defineProperty(this, "visible", { value: builder });
    return builder;
  }
};
var getModelAnsi = (model, level, type, ...arguments_) => {
  if (model === "rgb") {
    if (level === "ansi16m") {
      return ansi_styles_default[type].ansi16m(...arguments_);
    }
    if (level === "ansi256") {
      return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
    }
    return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
  }
  if (model === "hex") {
    return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
  }
  return ansi_styles_default[type][model](...arguments_);
};
var usedModels = ["rgb", "hex", "ansi256"];
for (const model of usedModels) {
  styles2[model] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
  const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
  styles2[bgModel] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
}
var proto = Object.defineProperties(() => {
}, {
  ...styles2,
  level: {
    enumerable: true,
    get() {
      return this[GENERATOR].level;
    },
    set(level) {
      this[GENERATOR].level = level;
    }
  }
});
var createStyler = (open, close, parent) => {
  let openAll;
  let closeAll;
  if (parent === void 0) {
    openAll = open;
    closeAll = close;
  } else {
    openAll = parent.openAll + open;
    closeAll = close + parent.closeAll;
  }
  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  };
};
var createBuilder = (self, _styler, _isEmpty) => {
  const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
  Object.setPrototypeOf(builder, proto);
  builder[GENERATOR] = self;
  builder[STYLER] = _styler;
  builder[IS_EMPTY] = _isEmpty;
  return builder;
};
var applyStyle = (self, string) => {
  if (self.level <= 0 || !string) {
    return self[IS_EMPTY] ? "" : string;
  }
  let styler = self[STYLER];
  if (styler === void 0) {
    return string;
  }
  const { openAll, closeAll } = styler;
  if (string.includes("\x1B")) {
    while (styler !== void 0) {
      string = stringReplaceAll(string, styler.close, styler.open);
      styler = styler.parent;
    }
  }
  const lfIndex = string.indexOf("\n");
  if (lfIndex !== -1) {
    string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
  }
  return openAll + string + closeAll;
};
Object.defineProperties(createChalk.prototype, styles2);
var chalk = createChalk();
var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
var source_default = chalk;

// index.ts
var import_child_process = require("child_process");
function talk() {
  return __async(this, null, function* () {
    yield initI18Next();
    const config2 = (yield Promise.resolve().then(() => (init_committer_config(), committer_config_exports))).default;
    const commitOption = yield B({
      message: instance.t("choose_commit").valueOf(),
      options: config2.commitTypes
    });
    const option = String(commitOption);
    const steps = config2.steps[option];
    let command = `git commit -m "${String(option)}`;
    for (const step of steps) {
      command = yield config2.handlers[step](command);
    }
    const commitPreview = command.split('"').filter((c2) => !c2.includes("-m")).join("\n\n");
    console.log("> Commit message preview:\n");
    console.log(source_default.green(commitPreview));
    const choice = yield C2({
      message: instance.t("common.ask_for_commit")
    });
    if (choice) {
      (0, import_child_process.execSync)(command);
    }
  });
}
talk();
