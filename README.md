# VS Slug

Use the [slugify](https://github.com/sindresorhus/slugify) package.

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

### 0.0.1

- Initial release
