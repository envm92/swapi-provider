[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)


# Project Name

SWAPI Provider Web Component

## Installation

```
    npm i swapi-provider
```

## Usage

```
   <swapi-provider id="provider" resourse="vehicles" id-resourse="5"></swapi-provider>
```

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="swapi-provider/main.js">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<swapi-provider id="provider" resourse="vehicles" id-resourse="5"></swapi-provider>
```

This is a web component that provide the api response in a web component format

### Attributes

|Name  	|Type  	|Example| Note  |
|---	|---	|---	|---	|
|resourse|String| films, people, planets, species, starships, vehicles   	|   Only accepts this list	|
|id-resourse|Number | 1 , 2 | Don't use with schema|
|schema | Boolean|   	| Don't use with id-resourse|
|format-wookiee | Boolean|   	| |
|search | String| "tat"  with planets resourse to find Tatooine| |


### Events

* swapi-response
* swapi-error

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

Hey! I love StarWars and I'm learning to code web components and share with the world!


### Original documentation
Original documentation of [Star Wars API](https://swapi.dev/) by [Paul Hallet](http://phalt.co/)

at [https://swapi.co/documentation](https://swapi.co/documentation)

Star Wars and all associated names are copyright Lucasfilm ltd.


## Credits

*   Erika Valdes 

## License

[MIT Licensed](LICENSE)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)