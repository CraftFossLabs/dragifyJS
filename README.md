<h1 align="center">dragifyjs</h1><br><br>
<p align="center">
<a href="https://www.npmjs.com/package/dragifyjs"><img src="https://img.shields.io/npm/v/dragifyjs.svg?sanitize=true" alt="Version"></a>
<a href="https://www.npmjs.com/package/dragifyjs"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs"></a>
</p>

![dragifyjs](https://res.cloudinary.com/dhumqtbfb/image/upload/v1737644597/dragify_kdomgh.webp)
**dragifyJS** is a free and open-source web builder framework that simplifies the creation of HTML templates for websites, newsletters, or mobile apps. It was designed primarily for use within [CMS] platforms, accelerating the creation of dynamic templates.

### Key Features:

- Build and customize **HTML templates** quickly.
- Seamlessly integrates with **CMS** platforms.
- Flexible and powerful for sites and newsletters.

To better understand its functionality, refer to the example image below.

### Template System Overview

A typical **template system**, often used in applications like CMS platforms, consists of three main components:

1. **Structure** (HTML): Defines the layout and elements of the template.
2. **Style** (CSS): Determines the appearance of the elements.
3. **Variables**: Replaced dynamically with content on the server side and rendered on the client side.

---

## Installation

### Using CDNs

- **UNPKG** (always resolves to the latest version):
  - JavaScript: `https://unpkg.com/dragifyjs`
  - CSS: `https://unpkg.com/dragifyjs/dist/css/dragify.min.css`
- **CDNJS** (replace `X.X.X` with the desired version):
  - JavaScript: `https://cdnjs.cloudflare.com/ajax/libs/dragifyjs/X.X.X/dragify.min.js`
  - CSS: `https://cdnjs.cloudflare.com/ajax/libs/dragifyjs/X.X.X/css/dragify.min.css`

### Using NPM

```bash
npm i dragifyjs
```

### Using Git

```bash
git clone https://github.com/dragifyJS/dragifyjs.git
```

---

## Quick Start Guide

### Basic Example

Include the required **CSS** and **JavaScript** files in your project:

```html
<link rel="stylesheet" href="path/to/dragify.min.css" />
<script src="path/to/dragify.min.js"></script>
```

Add the following code to initialize the **dragifyJS editor**:

```html
<div id="dragify"></div>

<script type="text/javascript">
  var editor = dragifyjs.init({
    container: '#dragify',
    components: '<div class="txt-red">Hello world!</div>',
    style: '.txt-red { color: red; }',
  });
</script>
```

### Configuration Options

- `container`: (Required) The target DOM element or selector for the editor.
- `components`: (Optional) Default HTML content added to the editor.
- `style`: (Optional) Default CSS styles for the content.

---

## Development

To contribute to dragifyJS, follow the [Contributing Guide](https://github.com/dragifyJS/dragifyjs/blob/master/CONTRIBUTING.md).

---

## Documentation

- **Getting Started**: Detailed documentation is available here: [Documentation]
- **API Reference**: Explore the API here: [API-Reference]

---

## Feedback & Contributions

We welcome contributions to improve dragifyJS. For issues or feature requests, please check the [GitHub repository](https://github.com/dragifyJS/dragifyjs).
