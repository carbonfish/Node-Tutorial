# imooc

im[C[C[m[3~[3~[3~[C[C[C[[C[C[C[C[C[C[C[Csda

## Getting Started
### On the server
Install the module with: `npm install imooc`

```javascript
var imooc = require('imooc');
imooc.awesome(); // "awesome"
```

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/vagrant/imooc/master/dist/imooc.min.js
[max]: https://raw.github.com/vagrant/imooc/master/dist/imooc.js

In your web page:

```html
<script src="dist/imooc.min.js"></script>
<script>
awesome(); // "awesome"
</script>
```

In your code, you can attach imooc's methods to any object.

```html
<script>
var exports = Bocoup.utils;
</script>
<script src="dist/imooc.min.js"></script>
<script>
Bocoup.utils.awesome(); // "awesome"
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014   
Licensed under the MIT license.
