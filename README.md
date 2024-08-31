# Nitro Image Process Server

Example of a simple image server using Nitro [IPX](https://github.com/unjs/ipx).

## Start the server

```bash
nitro dev
```

## Features

IPX enhancement, supports extracting high-definition original images of network images according to rules before
proceeding to the next step

## Usage

### 1 - some image url

`http://localhost:3000/enlarge,f_jpg,s_800x800/https://s.alicdn.com/@sc04/kf/H11924dfc8c5343a190912df9a1e305aci.jpg`
<img src="http://localhost:3000/enlarge,f_jpg,s_800x800/https://s.alicdn.com/@sc04/kf/H11924dfc8c5343a190912df9a1e305aci.jpg" />

### 2 - some svg url

`http://localhost:3000/enlarge,f_png,s_800x800/https://s.alicdn.com/@img/imgextra/i2/O1CN01Zsnn5f28yyAQPbYyz_!!6000000008002-55-tps-70-70.svg`
<img src="http://localhost:3000/enlarge,f_png,s_800x800/https://s.alicdn.com/@img/imgextra/i2/O1CN01Zsnn5f28yyAQPbYyz_!!6000000008002-55-tps-70-70.svg" />

## Modifiers

| Property       | Docs                                                            | Example                                                                                         | Comments                                                                                                                                                          |
|----------------|:----------------------------------------------------------------|:------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| width / w      | [Docs](https://sharp.pixelplumbing.com/api-resize#resize)       | [/width_200/bliss.jpg](http://localhost:3000/width_200/bliss.jpg)                               |
| height / h     | [Docs](https://sharp.pixelplumbing.com/api-resize#resize)       | [/height_200/bliss.jpg](http://localhost:3000/height_200/bliss.jpg)                             |
| resize / s     | [Docs](https://sharp.pixelplumbing.com/api-resize#resize)       | [/s_200x200/bliss.jpg](http://localhost:3000/s_200x200/bliss.jpg)                               |
| kernel         | [Docs](https://sharp.pixelplumbing.com/api-resize#resize)       | [/s_200x200,kernel_nearest/bliss.jpg](http://localhost:3000/s_200x200,kernel_nearest/bliss.jpg) | Supported kernel: `nearest`, `cubic`, `mitchell`, `lanczos2` and `lanczos3` (default).                                                                            |
| fit            | [Docs](https://sharp.pixelplumbing.com/api-resize#resize)       | [/s_200x200,fit_outside/bliss.jpg](http://localhost:3000/s_200x200,fit_outside/bliss.jpg)       | Sets `fit` option for `resize`.                                                                                                                                   |
| position / pos | [Docs](https://sharp.pixelplumbing.com/api-resize#resize)       | [/s_200x200,pos_top/bliss.jpg](http://localhost:3000/s_200x200,pos_top/bliss.jpg)               | Sets `position` option for `resize`.                                                                                                                              |
| trim           | [Docs](https://sharp.pixelplumbing.com/api-resize#trim)         | [/trim_100/bliss.jpg](http://localhost:3000/trim_100/bliss.jpg)                                 |
| extend         | [Docs](https://sharp.pixelplumbing.com/api-resize#extend)       | `/extend_{top}_{right}_{bottom}_{left}/bliss.jpg`                                               | Extend / pad / extrude one or more edges of the image with either the provided background colour or pixels derived from the image.                                |
| background / b | \_                                                              | [/r_45,b_00ff00/bliss.jpg](http://localhost:3000/r_45,b_00ff00/bliss.jpg)                       |
| extract        | [Docs](https://sharp.pixelplumbing.com/api-resize#extract)      | `/extract_{left}_{top}_{width}_{height}/bliss.jpg`                                              | Extract/crop a region of the image.                                                                                                                               |
| format / f     | [Docs](https://sharp.pixelplumbing.com/api-output#toformat)     | [/format_webp/bliss.jpg](http://localhost:3000/format_webp/bliss.jpg)                           | Supported format: `jpg`, `jpeg`, `png`, `webp`, `avif`, `gif`, `heif`, `tiff` and `auto` (experimental only with middleware)                                      |
| quality / q    | \_                                                              | [/quality_50/bliss.jpg](http://localhost:3000/quality_50/bliss.jpg)                             | Accepted values: 0 to 100                                                                                                                                         |
| rotate         | [Docs](https://sharp.pixelplumbing.com/api-operation#rotate)    | [/rotate_45/bliss.jpg](http://localhost:3000/rotate_45/bliss.jpg)                               |
| enlarge        | \_                                                              | [/enlarge,s_2000x2000/bliss.jpg](http://localhost:3000/enlarge,s_2000x2000/bliss.jpg)           | Allow the image to be upscaled. By default the returned image will never be larger than the source in any dimension, while preserving the requested aspect ratio. |
| flip           | [Docs](https://sharp.pixelplumbing.com/api-operation#flip)      | [/flip/bliss.jpg](http://localhost:3000/flip/bliss.jpg)                                         |
| flop           | [Docs](https://sharp.pixelplumbing.com/api-operation#flop)      | [/flop/bliss.jpg](http://localhost:3000/flop/bliss.jpg)                                         |
| sharpen        | [Docs](https://sharp.pixelplumbing.com/api-operation#sharpen)   | [/sharpen_30/bliss.jpg](http://localhost:3000/sharpen_30/bliss.jpg)                             |
| median         | [Docs](https://sharp.pixelplumbing.com/api-operation#median)    | [/median_10/bliss.jpg](http://localhost:3000/median_10/bliss.jpg)                               |
| blur           | [Docs](https://sharp.pixelplumbing.com/api-operation#blur)      | [/blur_5/bliss.jpg](http://localhost:3000/blur_5/bliss.jpg)                                     |
| gamma          | [Docs](https://sharp.pixelplumbing.com/api-operation#gamma)     | [/gamma_3/bliss.jpg](http://localhost:3000/gamma_3/bliss.jpg)                                   |
| negate         | [Docs](https://sharp.pixelplumbing.com/api-operation#negate)    | [/negate/bliss.jpg](http://localhost:3000/negate/bliss.jpg)                                     |
| normalize      | [Docs](https://sharp.pixelplumbing.com/api-operation#normalize) | [/normalize/bliss.jpg](http://localhost:3000/normalize/bliss.jpg)                               |
| threshold      | [Docs](https://sharp.pixelplumbing.com/api-operation#threshold) | [/threshold_10/bliss.jpg](http://localhost:3000/threshold_10/bliss.jpg)                         |
| tint           | [Docs](https://sharp.pixelplumbing.com/api-colour#tint)         | [/tint_1098123/bliss.jpg](http://localhost:3000/tint_1098123/bliss.jpg)                         |
| grayscale      | [Docs](https://sharp.pixelplumbing.com/api-colour#grayscale)    | [/grayscale/bliss.jpg](http://localhost:3000/grayscale/bliss.jpg)                               |
| animated       | -                                                               | [/animated/giphy.gif](http://localhost:3000/animated/giphy.gif)                                 | Experimental                                                                                                                                                      |
