# [VS Slug](https://marketplace.visualstudio.com/items?itemName=neptunedesign.vs-slug)

Use the [slugify](https://github.com/sindresorhus/slugify) package.

## Screenshot

![Demo](https://raw.githubusercontent.com/NeptuneDesign/vs-slug/master/images/screenshot.gif)

## Features

Takes a simple text and slug it into a URL compatible string.

## Extension Settings

Open `Preferences` -> `Settings`

```json
"vs-slug.customReplacements": [["&", " and "]], // Slug custom replacements - Default value : [["&", " and "]]
"vs-slug.decamelize": true, // Slug decamelize - Default value : true
"vs-slug.lowercase": true, // Slug lowercase - Default value : true
"vs-slug.separator": "-", // Slug separator - Default value : "-"
```

## Release Notes

### 1.0.1

- Update of security dependencies

### 1.0.0

- Update of security dependencies

### 0.0.2

- Update of the README.md file

### 0.0.1

- Initial release
