## Table of content
- [@dothp](#dothpreloaders)
- [Features](#features)
- [Installation](#installation)
- [Sample Component Usage](#sample-component-usage)
- [Common Props and Customization Sample](#common-props-and-customization-sample)
- [Component Categories and Props Detail](#component-categories-and-props-detail)
    - [Bar Loaders](#barloaders)
    - [Dot Loaders](#dotloaders)
    - [Spinner Loaders](#spinner)
    - [Text Loaders](#textloaders)
    - [Shape Loaders](#shapeloaders)
    - [Motion Path Loaders](#motionpathloaders)
    - [Skeleton Loaders](#skeletonloaders)
    - [Fun Loaders](#funloaders)

- [Advance Example](#advanced-example)
- [Ending Statement](#ending-statement)

# @dothp/reloaders

![Banner](./banner.jpg)



# @dothp/reloaders

![Banner](./banner.jpg)


`@dothp/reloaders` is a lightweight and highly customizable collection of React loading components. Designed with performance in mind, it leverages pure CSS animations to provide a smooth and efficient loading experience for your applications. Whether you need a simple spinner or a complex text animation, this library offers a wide range of options to keep your users engaged while content loads.

## Features

-   🎨 **8 Categories of Loaders**: Explore a diverse range of loading animations including bars, dots, spinners, text effects, shapes, motion paths, skeletons, and fun, unique loaders.
-   ⚡ **Optimized Performance**: All animations are powered by CSS, ensuring minimal JavaScript overhead and smooth performance even on less powerful devices.
-   🛠 **Fully Customizable**: Control every aspect of your loaders with intuitive props for size, color, animation speed, and more.
-   📦 **Tree-shakable**: Import only the components you need, leading to smaller bundle sizes and faster load times for your application.
-   🎭 **Accessible**: Components include ARIA labels to ensure a better experience for users relying on assistive technologies.

## Installation

You can install `@dothp/reloaders` using npm:

```bash
npm install @dothp/reloaders
```

## Sample Component Usage

Here's a quick example of how to use some of the components in your React application:

```jsx
import React from 'react';
import { SimpleSpinner, ThreeBouncingDots, TypewriterLoader } from '@dothp/reloaders';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '40px' }}>
      <h1>My Awesome App</h1>
      
      {/* Simple Spinner */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <SimpleSpinner size="60px" color="#6366f1" glowEffect={true} />
        <p>Loading data...</p>
      </div>

    </div>   
  );
}

export default App;
```

## Common Props and Customization Sample

Most components in `@dothp/reloaders` share a set of common props that allow for easy customization.

| Prop        | Type            | Default      | Description                                     |
| :---------- | :-------------- | :----------- | :---------------------------------------------- |
| `size`      | `string` / `number` | `"64px"`     | Defines the overall size (width/height) of the loader. Can be a CSS string (e.g., "50px", "2em") or a number (interpreted as pixels). |
| `color`     | `string`        | `"#3498db"`  | Primary color of the loader. Accepts any valid CSS color value (hex, rgba, named colors). |
| `speed`     | `string`        | `"normal"`   | Controls the animation speed. Options: `"slow"`, `"normal"`, `"fast"`. |
| `className` | `string`        | `""`         | Adds custom CSS class names to the loader's root element. |
| `style`     | `object`        | `{}`         | Applies inline CSS styles to the loader's root element. |

**Customization Example:**

```jsx
import { PulsingBarsLoader } from '@dothp/reloaders/BarLoaders';

function CustomLoader() {
  return (
    <PulsingBarsLoader 
      size="80px" 
      color="#e74c3c" // Custom red color
      speed="fast"   // Faster animation
      className="my-custom-bar-loader" // Add a custom class for external styling
      style={{ border: '2px solid #f39c12', padding: '5px' }} // Inline styles
    />
  );
}
```

## Component Categories and Props Detail

`@dothp/reloaders` organizes its components into 8 distinct categories, each with its own set of specialized loaders and props.

| Category             | Import Path                 | Description                                    |
| :------------------- | :-------------------------- | :--------------------------------------------- |
| **Bar Loaders** | `@dothp/reloaders/BarLoaders` | Horizontal or vertical bar-based animations.   |
| **Cube Loaders** | `@dothp/reloaders/CubeLoaders` | 3D cube and geometric shape animations.        |
| **Dot Loaders** | `@dothp/reloaders/DotLoaders` | Loaders composed of animating dots.            |
| **Fun Loaders** | `@dothp/reloaders/FunLoaders` | Playful and unique character/object animations.|
| **Motion Path Loaders** | `@dothp/reloaders/MotionPathLoaders` | Elements moving along defined SVG paths.       |
| **Shape Loaders** | `@dothp/reloaders/ShapeLoaders` | Morphing and animating geometric shapes.       |
| **Skeleton Loaders** | `@dothp/reloaders/SkeletonLoaders` | Placeholder content for progressive loading.   |
| **Spinners** | `@dothp/reloaders/Spinner`  | Classic rotating and circular animations.      |
| **Text Loaders** | `@dothp/reloaders/TextLoaders` | Text-based animations like typing and fading.  |

-----
 
### Detailed Props by Category

#### `BarLoaders`

| Component Name        | Prop Name        | Type           | Default      | Description                                     |
| :-------------------- | :--------------- | :------------- | :----------- | :---------------------------------------------- |
| `PulsingBarsLoader`   | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Bars pulse in and out.                          |
| `RisingBarsLoader`    | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Bars rise and fall sequentially.                |
| `SlidingGradientBars` | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Bars with a sliding gradient effect.            |
| `MovingCenterBars`    | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Bars move from/to the center.                   |
| `AlternatingBarsLoader` | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Bars alternate in height.                       |
| `VerticalWaveBars`    | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Bars create a vertical wave motion.             |
| `SizeMorphingBars`    | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Bars morph in size.                             |
| `SequentialBarsLoader` | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Bars animate in a sequential order.             |
| `CrossPatternBars`    | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Bars form a crossing pattern.                   |
| `HorizontalStripesLoader` | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Horizontal stripes animate.                     |
| `BasicProgressBar`    | `width`, `height`, `color`, `speed`, `className`, `style`, `rounded`, `gradient`, `glow` | `string`, `string`, `string`, `string`, `string`, `object`, `boolean`, `boolean`, `boolean` | `"100%"`, `"64px"`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `true`, `true`, `true` | Basic progress bar with customization.          |
| `StripedLoaderBar`    | `width`, `height`, `color`, `className`, `style`, `rounded` | `string`, `string`, `string`, `string`, `object`, `boolean` | `"100%"`, `"64px"`, `(Common)`, `(Common)`, `(Common)`, `true` | Striped progress bar with 3D effect.            |
| `IndeterminateProgressBar` | `width`, `height`, `color`, `className`, `style`, `rounded` | `string`, `string`, `string`, `string`, `object`, `boolean` | `"100%"`, `"64px"`, `(Common)`, `(Common)`, `(Common)`, `true` | Indeterminate progress bar with shimmer.        |
| `DualBarLoader`       | `width`, `height`, `color`, `className`, `style`, `rounded` | `string`, `string`, `string`, `string`, `object`, `boolean` | `"100%"`, `"64px"`, `(Common)`, `(Common)`, `(Common)`, `true` | Two bars with synchronized wave motion.         |
| `GrowingBarLoader`    | `height`, `barWidth`, `color`, `className`, `style`, `barCount`, `gap`, `rounded` | `string`, `string`, `string`, `string`, `object`, `number`, `string`, `boolean` | `"64px"`, `"6px"`, `(Common)`, `(Common)`, `(Common)`, `5`, `"3px"`, `true` | Bars grow with elastic animation.               |
| `WaveformBar`         | `height`, `barWidth`, `color`, `className`, `style`, `barCount`, `gap`, `rounded` | `string`, `string`, `string`, `string`, `object`, `number`, `string`, `boolean` | `"64px"`, `"4px"`, `(Common)`, `(Common)`, `(Common)`, `8`, `"2px"`, `true` | Realistic audio visualization waveform.         |
| `MorphingBarLoader`   | `width`, `height`, `color`, `className`, `style`, `rounded` | `string`, `string`, `string`, `string`, `object`, `boolean` | `"100%"`, `"64px"`, `(Common)`, `(Common)`, `(Common)`, `true` | Bar morphs in shape and position.               |
| `ParticleTrailLoader` | `width`, `height`, `color`, `className`, `style`, `rounded`, `particleCount` | `string`, `string`, `string`, `string`, `object`, `boolean`, `number` | `"100%"`, `"64px"`, `(Common)`, `(Common)`, `(Common)`, `true`, `3` | Particles create a trailing effect.             |

#### `CubeLoaders`

| Component Name        | Prop Name        | Type           | Default      | Description                                     |
| :-------------------- | :--------------- | :------------- | :----------- | :---------------------------------------------- |
| `CubeLoader`          | `size`, `secondaryColor`, `accentColor`, `className`, `style`, `speed` | (Common), `string`, `string` | (Common), `"#666"`, `"#aaa"` | Basic 3D cube loader.                           |
| `CubeGlowLoader`      | `size`, `color`, `secondaryColor`, `accentColor`, `className`, `style`, `speed` | (Common), `string`, `string`, `string` | (Common), `(Common)`, `"#666"`, `"#aaa"` | Cube loader with a glowing effect.              |
| `ShrinkingCubeLoader` | `size`, `secondaryColor`, `accentColor`, `className`, `style`, `speed` | (Common), `string`, `string` | (Common), `"#666"`, `"#aaa"` | Cube shrinks and expands.                       |
| `DualCubeLoaderHorizontal` | `size`, `color`, `secondaryColor`, `accentColor`, `className`, `style`, `speed` | (Common), `string`, `string`, `string` | (Common), `(Common)`, `"#666"`, `"#aaa"` | Two cubes move horizontally.                    |
| `DualCubeLoaderVertical` | `size`, `color`, `secondaryColor`, `accentColor`, `className`, `style`, `speed` | (Common), `string`, `string`, `string` | (Common), `(Common)`, `"#666"`, `"#aaa"` | Two cubes move vertically.                      |
| `MovingCubeLoader`    | `size`, `color`, `secondaryColor`, `accentColor`, `className`, `style`, `speed` | (Common), `string`, `string`, `string` | (Common), `(Common)`, `"#666"`, `"#aaa"` | A single cube moves in a square path.           |

#### `DotLoaders`

| Component Name        | Prop Name        | Type           | Default      | Description                                     |
| :-------------------- | :--------------- | :------------- | :----------- | :---------------------------------------------- |
| `ThreeBouncingDots`   | `size`, `color`, `className`, `style`, `gap` | `string`, `string`, `string`, `object`, `string` | `"16px"`, `(Common)`, `(Common)`, `(Common)`, `"6px"` | Three dots bounce up and down.                  |
| `DotsFading`          | `size`, `color`, `className`, `style`, `dotCount`, `gap` | `string`, `string`, `string`, `object`, `number`, `string` | `"14px"`, `(Common)`, `(Common)`, `(Common)`, `5`, `"4px"` | Dots fade in and out sequentially.              |
| `DotWave`             | `size`, `color`, `className`, `style`, `dotCount`, `gap` | `string`, `string`, `string`, `object`, `number`, `string` | `"16px"`, `(Common)`, `(Common)`, `(Common)`, `5`, `"4px"` | Dots create a wave effect.                      |
| `DotCircleLoader`     | `size`, `color`, `className`, `style`, `dotCount`, `dotSize` | (Common), `string`, `string`, `object`, `number`, `string` | (Common), `(Common)`, `(Common)`, `(Common)`, `8`, `"12px"` | Dots orbit in a circle.                         |
| `PulseDots`           | `size`, `color`, `className`, `style`, `dotCount`, `gap` | `string`, `string`, `string`, `object`, `number`, `string` | `"16px"`, `(Common)`, `(Common)`, `(Common)`, `3`, `"8px"` | Dots pulse with a breathing effect.             |
| `DotDrop`             | `size`, `color`, `className`, `style`, `dotCount`, `gap` | `string`, `string`, `string`, `object`, `number`, `string` | `"12px"`, `(Common)`, `(Common)`, `(Common)`, `4`, `"8px"` | Dots drop and disappear.                        |
| `TypingDots`          | `size`, `color`, `className`, `style`, `dotCount`, `gap` | `string`, `string`, `string`, `object`, `number`, `string` | `"10px"`, `(Common)`, `(Common)`, `(Common)`, `3`, `"3px"` | Realistic typing animation with dots.           |
| `SequentialDotReveal` | `size`, `color`, `className`, `style`, `dotCount`, `gap` | `string`, `string`, `string`, `object`, `number`, `string` | `"16px"`, `(Common)`, `(Common)`, `(Common)`, `4`, `"6px"` | Dots reveal sequentially with a cascade effect. |
| `OrbitDots`           | `size`, `color`, `className`, `style`, `dotSize`, `orbitCount` | (Common), `string`, `string`, `object`, `string`, `number` | (Common), `(Common)`, `(Common)`, `(Common)`, `"8px"`, `3` | Dots orbit around a central point.              |

#### `FunLoaders`

| Component Name        | Prop Name        | Type           | Default      | Description                                     |
| :-------------------- | :--------------- | :------------- | :----------- | :---------------------------------------------- |
| `HeartBeatAnimation`  | `size`, `color`, `className`, `style`, `duration` | `string`, `string`, `string`, `object`, `string` | `"50px"`, `"#e74c3c"`, `(Common)`, `(Common)`, `"1.2s"` | A heart icon with a beating pulse.              |
| `CoffeeCupSteam`      | `size`, `color`, `steamColor`, `className`, `style`, `duration` | `string`, `string`, `string`, `string`, `object`, `string` | `"80px"`, `"#6d4c41"`, `"#e0e0e0"`, `(Common)`, `(Common)`, `"2s"` | A coffee cup with rising steam.                 |
| `LoadingCat`          | `size`, `color`, `className`, `style`, `duration` | `string`, `string`, `string`, `object`, `string` | `"80px"`, `"#34495e"`, `(Common)`, `(Common)`, `"2s"` | An animated cat walking.                        |
| `LoaderRobot`         | `size`, `color`, `className`, `style`, `duration` | `string`, `string`, `string`, `object`, `string` | `(Common)`, `"#34495e"`, `(Common)`, `(Common)`, `"1.8s"` | An animated robot loader.                       |
| `InfinitySpinner`     | `size`, `color`, `className`, `style`, `duration` | `number`, `string`, `string`, `object`, `string` | `64`, `"#9b59b6"`, `(Common)`, `(Common)`, `"2s"` | An infinity symbol with a spinning effect.      |
| `YinYangLoader`       | `size`, `color1`, `color2`, `className`, `style`, `duration` | (Common), `string`, `string`, `string`, `object`, `string` | (Common), `"#2c3e50"`, `"#ecf0f1"`, `(Common)`, `(Common)`, `"2s"` | A Yin-Yang symbol with rotation and pulse.      |

#### `MotionPathLoaders`

| Component Name        | Prop Name        | Type           | Default      | Description                                     |
| :-------------------- | :--------------- | :------------- | :----------- | :---------------------------------------------- |
| `BallPathLoader`      | `size`, `color`, `backgroundColor`, `className`, `style`, `duration`, `easing`, `ballSize`, `pathVisible`, `pathColor`, `shadow`, `glow`, `opacity`, `direction` | (Common), `string`, `string`, `string`, `object`, `number`, `string`, `number`, `boolean`, `string`, `boolean`, `boolean`, `number`, `string` | (Common), `(Common)`, `"transparent"`, `(Common)`, `(Common)`, `1.5`, `"cubic-bezier(0.4, 0, 0.6, 1)"`, `10`, `true`, `"rgba(0, 0, 0, 0.1)"`, `false`, `false`, `1`, `"clockwise"` | A ball follows a defined path.                  |
| `SnakeLineLoader`     | `size`, `color`, `backgroundColor`, `className`, `style`, `duration`, `easing`, `strokeWidth`, `opacity`, `glow`, `segments`, `shape` | (Common), `string`, `string`, `string`, `object`, `number`, `string`, `number`, `number`, `boolean`, `number`, `string` | (Common), `(Common)`, `"transparent"`, `(Common)`, `(Common)`, `1.5`, `"cubic-bezier(0.4, 0, 0.6, 1)"`, `4`, `1`, `false`, `3`, `"circle"` | A line animates like a snake.                   |
| `CircleStrokeLoader`  | `size`, `color`, `backgroundColor`, `className`, `style`, `duration`, `easing`, `strokeWidth`, `opacity`, `glow`, `gradient`, `trackColor`, `lineCap`, `progress` | (Common), `string`, `string`, `string`, `object`, `number`, `string`, `number`, `number`, `boolean`, `boolean`, `string`, `string`, `number` | (Common), `(Common)`, `"transparent"`, `(Common)`, `(Common)`, `1.5`, `"cubic-bezier(0.4, 0, 0.6, 1)"`, `4`, `1`, `false`, `false`, `"rgba(0, 0, 0, 0.08)"`, `"round"`, `null` | A circle with an animating stroke.              |
| `ZigzagPathLoader`    | `size`, `color`, `backgroundColor`, `className`, `style`, `duration`, `easing`, `dotSize`, `pathVisible`, `pathColor`, `shadow`, `glow`, `opacity`, `pattern` | (Common), `string`, `string`, `string`, `object`, `number`, `string`, `number`, `boolean`, `string`, `boolean`, `boolean`, `number`, `string` | (Common), `(Common)`, `"transparent"`, `(Common)`, `(Common)`, `1.5`, `"cubic-bezier(0.4, 0, 0.6, 1)"`, `12`, `true`, `"rgba(0, 0, 0, 0.1)"`, `false`, `false`, `1`, `"zigzag"` | A dot moves along a zigzag path.                |
| `LissajousCurveLoader` | `size`, `color`, `backgroundColor`, `className`, `style`, `duration`, `easing`, `dotSize`, `dotCount`, `shadow`, `glow`, `opacity`, `trail` | (Common), `string`, `string`, `string`, `object`, `number`, `string`, `number`, `number`, `boolean`, `boolean`, `number`, `boolean` | (Common), `(Common)`, `"transparent"`, `(Common)`, `(Common)`, `1.5`, `"cubic-bezier(0.4, 0, 0.6, 1)"`, `8`, `3`, `false`, `false`, `1`, `false` | Dots animate along a Lissajous curve.           |
| `SVGStrokeDashAnimation` | `size`, `color`, `backgroundColor`, `className`, `style`, `duration`, `easing`, `strokeWidth`, `opacity`, `glow`, `pathType` | (Common), `string`, `string`, `string`, `object`, `number`, `string`, `number`, `number`, `boolean`, `string` | (Common), `(Common)`, `"transparent"`, `(Common)`, `(Common)`, `1.5`, `"cubic-bezier(0.4, 0, 0.6, 1)"`, `4`, `1`, `false`, `"wave"` | An SVG path with a dashing animation.           |

#### `ShapeLoaders`

| Component Name        | Prop Name        | Type           | Default      | Description                                     |
| :-------------------- | :--------------- | :------------- | :----------- | :---------------------------------------------- |
| `MorphingShapeLoader` | `size`, `color`, `secondaryColor`, `accentColor`, `className`, `style`, `speed` | (Common), `string`, `string`, `string` | (Common), `(Common)`, `"#514b82"`, `"#ffa516"` | A shape morphs between different forms.         |
| `RotatingDiamondLoader` | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | A diamond shape rotates.                        |
| `CornerSquaresLoader` | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Squares animate from the corners.               |
| `RotatingBarsLoader`  | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Bars rotate and change position.                |
| `SkewedSquaresLoader` | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Squares with a skewed animation.                |
| `PulsingDotsLoader`   | `size`, `color`, `className`, `style`, `speed` | (Common)       | (Common)     | Dots pulse from a central point.                |
| `HexagonSpinnerLoader` | `size`, `color`, `className`, `style` | (Common)       | (Common)     | A hexagon shape spins.                          |
| `RainbowSpinner`      | `bgcolor`, `size`, `className`, `style`, `speed` | `string`, (Common), `string`, `object`, `string` | `(Common)`, `(Common)`, `(Common)`, `(Common)`, `(Common)` | A spinner with a rainbow gradient border.       |
| `ColorFillDots`       | `size`, `color`, `secondColor`, `className`, `style`, `dotCount`, `gap`, `speed` | (Common), `string`, `string`, `string`, `object`, `number`, `string`, `string` | (Common), `(Common)`, `"#ff6b9d"`, `(Common)`, `(Common)`, `3`, `"8px"`, `(Common)` | Dots fill with color and bounce.                |
| `ShapeMorphing`       | `size`, `color`, `secondColor`, `className`, `style`, `speed` | (Common), `string`, `string` | (Common), `(Common)`, `"#ff6b9d"` | A shape smoothly morphs between forms with color shifts. |
| `GeometricShapes`     | `size`, `color`, `className`, `secondColor`, `style`, `speed`, `shapeCount` | (Common), `string`, `string`, `string`, `object`, `string`, `number` | (Common), `(Common)`, `(Common)`, `"#ff6b9d"`, `(Common)`, `(Common)`, `3` | Multiple geometric shapes animate and orbit.    |
| `HexagonLoader`       | `size`, `color`, `secondColor`, `className`, `style`, `speed` | (Common), `string`, `string` | (Common), `(Common)`, `"#fff"` | A hexagon loader with a neon glow effect.       |
| `TriangleBounce`      | `size`, `color`, `className`, `style`, `speed`, `triangleCount`, `gap` | (Common), `string`, `string`, `object`, `string`, `number`, `string` | (Common), `(Common)`, `(Common)`, `(Common)`, `(Common)`, `3`, `"10px"` | Triangles bounce with an elastic effect.        |
| `PolygonRotation`     | `size`, `color`, `className`, `style`, `speed`, `sides` | (Common), `string`, `string`, `object`, `string`, `number` | (Common), `(Common)`, `(Common)`, `(Common)`, `(Common)`, `4` | A polygon rotates with morphing sides.          |

#### `SkeletonLoaders`

| Component Name        | Prop Name        | Type           | Default      | Description                                     |
| :-------------------- | :--------------- | :------------- | :----------- | :---------------------------------------------- |
| `SkeletonBar`         | `width`, `height`, `color`, `highlightColor`, `shimmerColor`, `rounded`, `animation`, `speed`, `shimmerDirection`, `className`, `style` | `string`, `string`, `string`, `string`, `string`, `boolean`/`string`, `string`, `string`, `string`, `string`, `object` | `(Required)`, `(Required)`, `"#1b64adff"`, `"#bb3232ff"`, `"rgba(164, 60, 60, 0.8)"`, `true`, `"shimmer"`, `"normal"`, `"to right"`, `(Common)`, `(Common)` | A rectangular skeleton placeholder.             |
| `CircleSkeleton`      | `size`, `color`, `highlightColor`, `shimmerColor`, `animation`, `speed`, `shimmerDirection`, `className`, `style` | `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `object` | `(Required)`, `"#1b64adff"`, `"#bb3232ff"`, `"rgba(164, 60, 60, 0.8)"`, `"shimmer"`, `"normal"`, `"to right"`, `(Common)`, `(Common)` | A circular skeleton placeholder.                |

#### `Spinner`

| Component Name        | Prop Name        | Type           | Default      | Description                                     |
| :-------------------- | :--------------- | :------------- | :----------- | :---------------------------------------------- |
| `SimpleSpinner`       | `size`, `color`, `className`, `style`, `speed`, `thickness`, `glowEffect` | (Common), `string`, `string`, `object`, `string`, `number`, `boolean` | (Common), `(Common)`, `(Common)`, `(Common)`, `(Common)`, `6`, `false` | A basic spinning circle.                        |
| `DualRingSpinner`     | `size`, `color`, `className`, `style`, `speed`, `pulseEffect` | (Common), `string`, `string`, `object`, `string`, `boolean` | (Common), `(Common)`, `(Common)`, `(Common)`, `(Common)`, `true` | Two rings spinning with a pulsing effect.       |
| `PulseSpinner`        | `size`, `color`, `className`, `style`, `speed`, `waves` | (Common), `string`, `string`, `object`, `string`, `number` | (Common), `(Common)`, `(Common)`, `(Common)`, `(Common)`, `3` | A pulsing circle with ripple waves.             |
| `RippleSpinner`       | `size`, `color`, `className`, `style`, `speed`, `gradientEffect` | (Common), `string`, `string`, `object`, `string`, `boolean` | (Common), `(Common)`, `(Common)`, `(Common)`, `(Common)`, `true` | Expanding ripple rings.                         |
| `OrbitSpinner`        | `size`, `centerSize`, `color`, `dotColor`, `speed`, `glow`, `className`, `style` | (Common), `string`, `string`, `string`, `string`, `boolean`, `string`, `object` | (Common), `"30%"`, `(Common)`, `"#666"`, `(Common)`, `true`, `(Common)`, `(Common)` | A dot orbiting a central point.                 |
| `SolarSpinner`        | `size`, `color`, `className`, `style`, `speed`, `dotColor`, `planetSizes` | (Common), `string`, `string`, `object`, `string`, `string`, `number[]` | (Common), `(Common)`, `(Common)`, `(Common)`, `(Common)`, `"#666"`, `[0.8, 1, 0.6, 1.2]` | A solar system-like animation with orbiting planets. |
| `DashedRingLoader`    | `size`, `color`, `className`, `style`, `speed`, `dashSize`, `glowIntensity` | (Common), `string`, `string`, `object`, `string`, `number`, `number` | (Common), `(Common)`, `(Common)`, `(Common)`, `(Common)`, `8`, `0.3` | A dashed ring with dynamic dash animation.      |
| `SVGRotateLoader`     | `size`, `color`, `className`, `style`, `speed`, `morphEffect` | (Common), `string`, `string`, `object`, `string`, `boolean` | (Common), `(Common)`, `(Common)`, `(Common)`, `(Common)`, `true` | An SVG shape that rotates and morphs.           |
| `DNAHelixLoader`      | `size`, `color`, `className`, `style`, `speed`, `secondaryColor` | (Common), `string`, `string`, `object`, `string`, `string` | (Common), `(Common)`, `(Common)`, `(Common)`, `(Common)`, `"#e74c3c"` | A DNA helix-like spinning animation.            |

#### `TextLoaders`

| Component Name        | Prop Name        | Type           | Default      | Description                                     |
| :-------------------- | :--------------- | :------------- | :----------- | :---------------------------------------------- |
| `TypingDotsLoader`    | `text`, `color`, `size`, `className`, `style`, `speed` | `string`, `string`, `string`, `string`, `object`, `string` | `"Loading"`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `(Common)` | Text followed by animated typing dots.          |
| `TypewriterLoader`    | `text`, `color`, `size`, `className`, `style`, `speed`, `loop`, `cursorChar`, `cursorBlinkSpeed` | `string`, `string`, `string`, `string`, `object`, `string`, `boolean`, `string`, `string` | `"Loading"`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `true`, `"|"`, `"0.7s"` | Text appears with a typewriter effect.          |
| `TextFadeLoader`      | `text`, `color`, `size`, `className`, `style`, `speed`, `glowEffect`, `fadeScale` | `string`, `string`, `string`, `string`, `object`, `string`, `boolean`, `number` | `"Loading"`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `false`, `1.05` | Text fades in and out.                          |
| `TextPulseLoader`     | `text`, `color`, `size`, `className`, `style`, `speed`, `pulseScale`, `pulseOpacity` | `string`, `string`, `string`, `string`, `object`, `string`, `number`, `number` | `"Loading"`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `1.1`, `0.8` | Text pulses in size and opacity.                |
| `TextWaveLoader`      | `text`, `color`, `size`, `className`, `style`, `speed`, `waveHeight`, `characterDelayMultiplier` | `string`, `string`, `string`, `string`, `object`, `string`, `string`, `number` | `"Loading"`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `"0.2em"`, `0.1` | Characters in text move in a wave.              |
| `GlitchTextLoader`    | `text`, `color`, `size`, `className`, `style`, `speed`, `intensity`, `flickerSpeed` | `string`, `string`, `string`, `string`, `object`, `string`, `string`, `string` | `"Loading"`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `"3px"`, `"0.05s"` | Text with a dynamic glitch effect.              |
| `ScrambledLettersLoader` | `text`, `color`, `size`, `className`, `style`, `speed`, `scrambleCharacters`, `revealInterval` | `string`, `string`, `string`, `string`, `object`, `string`, `string`, `number` | `"Loading"`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `"!@#$%^&*()-_+=[]{};:',.<>/?`, `100` | Letters scramble and then reveal.               |
| `ColorCycleTextLoader` | `text`, `size`, `className`, `style`, `speed`, `colors` | `string`, `string`, `string`, `object`, `string`, `string[]` | `"Loading"`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `["#e74c3c", ...]` | Text cycles through a list of colors.           |
| `BlinkingTextLoader`  | `text`, `color`, `size`, `className`, `style`, `speed`, `flicker` | `string`, `string`, `string`, `string`, `object`, `string`, `boolean` | `"Loading"`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `false` | Text blinks on and off.                         |
| `TextTrailLoader`     | `text`, `size`, `color`, `trailColor`, `className`, `style`, `speed` | `string`, `string`, `string`, `string`, `string`, `object`, `string` | `"Loading"`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `(Common)` | Characters leave a fading trail.                |
| `TypingRevealLoader`  | `text`, `size`, `color`, `speed`, `className`, `style` | `string`, `string`, `string`, `string`, `string`, `object` | `"Loading"`, `(Common)`, `(Common)`, `"fast"`, `(Common)`, `(Common)` | Text reveals character by character.            |
| `FlipTextLoader`      | `text`, `color`, `size`, `className`, `style`, `speed` | `string`, `string`, `string`, `string`, `object`, `string` | `"Loading"`, `(Common)`, `(Common)`, `(Common)`, `(Common)`, `(Common)` | Characters flip to reveal the text.             |

-----

## Advanced Example

This example demonstrates combining multiple loaders and applying more intricate styling and props for a complex loading state.

```jsx
import React from 'react';
import { OrbitSpinner } from '@dothp/reloaders/Spinner';
import { MorphingBarLoader } from '@dothp/reloaders/BarLoaders';
import { GlitchTextLoader } from '@dothp/reloaders/TextLoaders';

function AdvancedDashboardLoader() {
  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        backgroundColor: '#1a1a2e', 
        color: '#e0e0e0',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <GlitchTextLoader 
        text="SYSTEM LOADING" 
        size="48px" 
        color="#00f2fe" 
        intensity="5px" 
        flickerSpeed="0.08s"
        style={{ marginBottom: '30px', textShadow: '0 0 15px #00f2fe80' }}
      />

      <OrbitSpinner 
        size="120px"
        color="#ff6b6b"
        dotColor="#f1c40f"
        speed="slow"
        glow={true}
        style={{ marginBottom: '40px' }}
      />

      <MorphingBarLoader
        width="300px"
        height="12px"
        color="#2ecc71"
        rounded={true}
        style={{ marginBottom: '20px', border: '1px solid #2ecc7140' }}
      />

      <p style={{ fontSize: '18px', opacity: 0.8 }}>Please wait while we initialize the cosmos...</p>
    </div>
  );
}

export default AdvancedDashboardLoader;
```

-----

## Ending Statement

We hope `@dothp/reloaders` helps you create beautiful and performant loading experiences for your React applications. We've poured our passion into crafting these components, focusing on customization, performance, and accessibility.

With ❤️ from `dothp`

```
```