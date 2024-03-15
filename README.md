# slidev-addon-qrcode

QR-Code component for [sli.dev](https://sli.dev/)

![example](https://raw.githubusercontent.com/kravetsone/slidev-addon-qrcode/main/example-export/001.png)

```md
---
layout: center
addons:
    - slidev-addon-qrcode
---

<div class="flex flex-col items-center">

# slidev-addon-qrcode

<QRCode
    :width="300"
    :height="300"
    type="svg"
    data="https://sli.dev"
    :margin="10"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded', color: 'purple' }"
    image="/logo.svg"
/>

</div>
```

## Installation

```bash
npm i slidev-addon-qrcode
```

### Usage

-   Define this addon in `frontmatter`

```yaml
addons:
    - slidev-addon-qrcode
```

-   or in `package.json`

```json
 "slidev": {
    "addons": [
      "slidev-addon-qrcode"
    ]
  },
```

## Components

### QRCode

```vue
<QRCode
    :width="300"
    :height="300"
    type="svg"
    data="https://sli.dev"
    :margin="10"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded', color: 'purple' }"
    image="/logo.svg"
/>
```

> Find more about options in [qr-code-styling repo](https://github.com/kozakdenys/qr-code-styling/tree/master?tab=readme-ov-file#qrcodestyling-instance)

## Thanks

-   [qr-code-styling](https://github.com/kozakdenys/qr-code-styling) - this addon use it under the hood
