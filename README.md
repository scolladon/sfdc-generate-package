# sfdc-generate-package

generate package.xml from source

## Getting Started

Works in Windows and Unix like systems.

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
    -a, --api-version            salesforce API version [40.0]
    -o, --output                 salesforce package.xml directory path [.]
```

### Module

```
  var sgp = require('sfdc-generate-package');

  sgp({
    'src':'', // salesforce src directory path : ./src
    'apiVersion':'40.0', // salesforce API verion : 40.0
    'output':'', // salesforce src directory path : ./src
    'indent':'  ' // the number of space for the xml indentation (optionnal attibute)
  }, console.log);
```

### Module

Add CLI parameters to build package.xml for only certain types

## Built With

* [commander](https://github.com/tj/commander.js/) - The complete solution for node.js command-line interfaces, inspired by Ruby's commander.
* [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - XML to JavaScript object converter.
* [directory-tree](https://github.com/mihneadb/node-directory-tree) - Creates a JavaScript object representing a directory tree..
* [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - Ever had the urge to parse XML? And wanted to access the data in some sane, easy way? Don't want to compile a C parser, for whatever reason? Then xml2js is what you're looking for!

## Versioning

[SemVer](http://semver.org/) is used for versioning.

## Authors

* **Sebastien Colladon** - *Initial work* - [scolladon](https://github.com/scolladon)
* **Baptiste Bieber** - *Add functionalities* - [baptistebieber](https://github.com/baptistebieber)
* **Julien COLIN** - *Add metadata* - [colin-julien](https://github.com/colin-julien)
* **Ariel Siler** - *Add auto generated metadata.js file from Metadata API using [this project](https://github.com/ArielS1/sfdc-generate-package-metadata-generator)* - [ArielS1](https://github.com/ArielS1)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
