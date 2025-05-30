# Component Integration with Payload Block System

This document explains how to integrate our custom React components into **Payload CMS**'s admin panel for dynamic page building, and how to manage component props directly from the panel.

## Preparation

There are already many ready-to-use components in the `packages\ui\src\components` folder. When developing a new component, following a few steps will help you easily integrate it into the Payload system.

---

## Step 1: Create the Component

First, define the component with its props:

```tsx
// open path : `packages\ui\src\components`
// create a folder with the name of component \ImageComponent
// we usually create following files for;
// - (ComponentName).tsx           for out main component file
// - types.ts                      for common type exports for component
// - index.ts                      for export * from './ComponentName'
// - (ComponentName).stories.tsx   for storybook

type ImageProp = {
  alt: string
  src: string
}

export const ImageComponent: FC<ImageProp> = (props) => {
  // component implementation
}
```

> The `alt` and `src` props should be editable from the admin panel.

---

## Step 2: Create the Block Config File

To allow Payload to manage the component from the admin panel, we need to convert it into a block by creating a config file:

```ts
// create a new folder and a config file inside of `packages\config-payload\src\blocks`

export const ImageBlock: Block = {
  slug: 'imageBlock', // slug for the admin panel
  interfaceName: 'ImageComponent', // usually the export name of the component
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'src',
      type: 'text',
    },
  ],
}
```

---

## Step 3: Register with Payload

To make the component and its block config available to Payload, you need to register them in the following file:

```ts
// open the file: packages\ui\src\blocks\common\container-block-list.ts and modify it.

export const blockConfigs: Block[] = [
  MediaBlock,
  FormBlock,
  // newly added block
  ImageBlock,
]

export const blockComponentMap = {
  container: Container,
  section: Section,
  form: FormBlockComponent,
  media: MediaBlockComponent,
  // newly added component
  imageBlock: ImageComponent,
}
```

Now the component will be available in the admin panel with editable props.

## Example: Container Block

If your component needs to include other blocks, check the example in `packages\config-payload\src\blocks\{Container|Section}`.

---

By following these steps, you can easily integrate new components into the Payload admin panel and allow content editors to manage them without developer intervention.
