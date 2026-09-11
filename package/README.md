# Nibicons

Small, clean stroke icons for React. Nibicons provides 43 lightweight SVG icons
with a consistent 24 by 24 viewBox and configurable sizing and stroke width.

## Features

- React components with zero runtime dependencies beyond React
- Customizable `size`, `strokeWidth`, and standard SVG props
- `currentColor` support so icons inherit the surrounding text color
- Tree-shakeable named exports

## Install

```bash
npm install nibicons
```

## Usage

```jsx
import { Home, Search } from "nibicons";

function Navigation() {
  return (
    <nav>
      <Home size={20} />
      <Search size={20} strokeWidth={1.5} />
    </nav>
  );
}
```

## Props

Every icon accepts:

- `size`: width and height in pixels. Defaults to `24`.
- `strokeWidth`: SVG stroke width. Defaults to `1.75`.
- Standard SVG props such as `className`, `style`, `aria-label`, and `title`.

Icons are decorative by default with `aria-hidden="true"`. Add an
`aria-label` when an icon communicates meaning that is not already provided by
nearby text:

```jsx
<Search aria-label="Search" />
```

## Available icons

`Home`, `Menu`, `ArrowRight`, `ArrowLeft`, `ChevronDown`, `MapPin`, `Grid`,
`List`, `Search`, `Settings`, `Eye`, `Plus`, `Minus`, `Check`, `X`, `Edit`,
`Trash`, `Link`, `Lock`, `Unlock`, `File`, `Folder`, `Download`, `Upload`,
`Calendar`, `Clock`, `User`, `Mail`, `Bell`, `Phone`, `Share`, `Wifi`, `Camera`,
`Image`, `Heart`, `Star`, `Bookmark`, `Tag`, `ShoppingCart`, `CreditCard`,
`Sun`, `Moon`, and `Cloud`.

## Updating

To upgrade an existing project to the latest release:

```bash
npm install nibicons@latest
```

## Adding icons

For contributors maintaining this package:

1. Add the SVG markup and named export in `src/index.js`.
2. Update the icon count and list in this README.
3. Run `npm version minor` for a new icon release.
4. Check the package with `npm pack --dry-run`.
5. Publish it with `npm publish`.

The website has its own icon data in `../data/icons.js`, which should be updated
with the same icon so the website and npm package stay in sync.

## License

MIT
