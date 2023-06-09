# robots.txt - a language grammar for highlight.js

![version](https://badgen.net/npm/v/highlightjs-riscv) ![license](https://badgen.net/badge/license/MIT/blue)
![install size](https://badgen.net/packagephobia/install/highlightjs-riscv) ![minified size](https://badgen.net/bundlephobia/min/highlightjs-riscv)

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/riscv.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-riscv@0.1/dist/riscv.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsRobotsTxt = require('highlightjs-riscv');

hljs.registerLanguage("riscv", hljsRiscV);
hljs.highlightAll();
```


## License

Highlight.js is released under the MIT License. See [LICENSE][1] file
for details.

### RISC-V Author

Rodolfo Azevedo <rodolfo.azevedo@gmail.com>

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about RISC-V: <https://riscv.org/>

[1]: https://github.com/highlightjs/highlightjs-riscv/blob/master/LICENSE
