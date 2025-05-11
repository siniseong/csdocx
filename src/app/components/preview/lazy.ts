"use client";
import dynamic from "next/dynamic";

export const Accordion = dynamic(() =>
  import("fumadocs-ui/components/accordion").then((res) => res.Accordion)
);

export const Accordions = dynamic(() =>
  import("fumadocs-ui/components/accordion").then((res) => res.Accordions)
);

export const TypeTable = dynamic(() =>
  import("fumadocs-ui/components/type-table").then((res) => res.TypeTable)
);

export const Banner = dynamic(() =>
  import("fumadocs-ui/components/banner").then((res) => res.Banner)
);

export const File = dynamic(() =>
  import("fumadocs-ui/components/files").then((res) => res.File)
);
export const Files = dynamic(() =>
  import("fumadocs-ui/components/files").then((res) => res.Files)
);
export const Folder = dynamic(() =>
  import("fumadocs-ui/components/files").then((res) => res.Folder)
);

export const ImageZoom = dynamic(() =>
  import("fumadocs-ui/components/image-zoom").then((res) => res.ImageZoom)
);

export const InlineTOC = dynamic(() =>
  import("fumadocs-ui/components/inline-toc").then((res) => res.InlineTOC)
);

export const RootToggle = dynamic(() =>
  import("fumadocs-ui/components/layout/root-toggle").then(
    (res) => res.RootToggle
  )
);

export const Steps = dynamic(() =>
  import("fumadocs-ui/components/steps").then((res) => res.Steps)
);
export const Step = dynamic(() =>
  import("fumadocs-ui/components/steps").then((res) => res.Step)
);

export const Tabs = dynamic(() =>
  import("fumadocs-ui/components/tabs").then((res) => res.Tabs)
);
export const Tab = dynamic(() =>
  import("fumadocs-ui/components/tabs").then((res) => res.Tab)
);
