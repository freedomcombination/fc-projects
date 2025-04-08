# Component Integration with Payload Block System

This document explains how to integrate our custom React components into **Payload CMS**'s admin panel for dynamic page building, and how to manage component props directly from the panel.

## Preparation

There are already many ready-to-use components in the `components` folder. When developing a new component, following a few steps will help you easily integrate it into the Payload system.

---

## Step 1: Create the Component

First, define the component with its props:

```tsx
// components/ImageComponent.tsx

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
// suggested path: blocks/Image/config.ts

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
// open the file: blocks/common/non-container-block-list.ts and modify it.

export const NonContainerBlockConfigs: Block[] = [
  MediaBlock,
  FormBlock,
  // newly added block
  ImageBlock,
]

export const NonContainerBlockComponentMap = {
  formBlock: FormBlockComponent,
  mediaBlock: MediaBlockComponent,
  // newly added component
  imageBlock: ImageComponent,
}
```

Now the component will be available in the admin panel with editable props.

---

## Extra Info: What are Container and Non-Container Blocks?

- **Non-container block**: Does not render other blocks inside itself. Example: `ImageComponent`.
- **Container block**: Accepts `Block[]` as a prop, allowing nested blocks. Example: `Container` component.

> For container blocks, similar registration is required in `container-block-list.ts`.

This separation prevents infinite nested block structures.

---

## Example: Container Block

If your component needs to include other blocks, check the example in `blocks/Container`.

---

By following these steps, you can easily integrate new components into the Payload admin panel and allow content editors to manage them without developer intervention.
