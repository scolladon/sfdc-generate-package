# sfdc-generate-package

generate package.xml from source

## Getting Started

Works in Unix like system.
Windows is not tested.

### Installing

```
npm install -g sfdc-generate-package
```

or

```
yarn globally add sfdc-generate-package
```

## Usage

### Command Line

```
$ sgp -h

  Usage: sgp [options]

  generate package.xml from source

  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -s, --src                    salesforce src directory path [./src]
```

### Module

```
  var sgp = require('sfdc-generate-package');

  sgp({
    'src':'' // salesforce src directory path : ./src
  }, console.log);
```


## Built With

* [commander](https://github.com/tj/commander.js/) - The complete solution for node.js command-line interfaces, inspired by Ruby's commander.
* [extendify](https://github.com/bigShai/extendify) - Deep extend with customizable behavior.
* [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - XML to JavaScript object converter.

## Versioning

[SemVer](http://semver.org/) is used for versioning.

## Authors

* **Sebastien Colladon** - *Initial work* - [scolladon](https://github.com/scolladon)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
