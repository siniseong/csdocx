import * as icons from "lucide-react";
import type { MDXComponents } from "mdx/types";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { GithubInfo } from "fumadocs-ui/components/github-info";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { Banner } from "fumadocs-ui/components/banner";
import { createGenerator } from "fumadocs-typescript";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    img: (props) => <ImageZoom {...props} />,
    Tab,
    Tabs,
    Step,
    Steps,
    File,
    Files,
    Folder,
    Banner,
    TypeTable,
    Accordion,
    Accordions,
    GithubInfo,
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    ...components,
  };
}
