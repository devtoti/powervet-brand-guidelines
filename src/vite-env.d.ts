/// <reference types="vite/client" />

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "react-responsive-masonry" {
  import type { ComponentType, ReactNode } from "react";

  interface MasonryProps {
    gutter?: string;
    children?: ReactNode;
  }

  interface ResponsiveMasonryProps {
    columnsCountBreakPoints?: Record<number, number>;
    children?: ReactNode;
  }

  const Masonry: ComponentType<MasonryProps>;
  export const ResponsiveMasonry: ComponentType<ResponsiveMasonryProps>;
  export default Masonry;
}
