import type {
  ComponentPropsWithoutRef,
  AnchorHTMLAttributes,
  ImgHTMLAttributes,
} from "react";
import type { TypeTable } from "fumadocs-ui/components/type-table";
import type { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import type { Banner } from "fumadocs-ui/components/banner";
import type { File, Folder } from "fumadocs-ui/components/files";
import type { GithubInfo } from "fumadocs-ui/components/github-info";
import type { ImageZoom } from "fumadocs-ui/components/image-zoom";
import type { InlineTOC } from "fumadocs-ui/components/inline-toc";
import type { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import type { Tab, Tabs } from "fumadocs-ui/components/tabs";

export type TypeTableProps = ComponentPropsWithoutRef<typeof TypeTable>;

export type TypeTableObjectTypeProps = ComponentPropsWithoutRef<
  typeof TypeTable
>["type"][string];

export type AccordionsProps = Omit<
  ComponentPropsWithoutRef<typeof Accordions>,
  keyof ComponentPropsWithoutRef<"div"> | "value" | "onValueChange"
>;

export type AccordionProps = Omit<
  ComponentPropsWithoutRef<typeof Accordion>,
  keyof ComponentPropsWithoutRef<"div">
>;

export type BannerProps = { id?: string } & Omit<
  ComponentPropsWithoutRef<typeof Banner>,
  keyof ComponentPropsWithoutRef<"div">
>;

export type FileProps = Omit<
  ComponentPropsWithoutRef<typeof File>,
  keyof ComponentPropsWithoutRef<"div">
> & { className?: string };

export type FolderProps = Omit<
  ComponentPropsWithoutRef<typeof Folder>,
  keyof ComponentPropsWithoutRef<"div">
>;

export type GithubInfoProps = Omit<
  ComponentPropsWithoutRef<typeof GithubInfo>,
  | keyof ComponentPropsWithoutRef<"div">
  | keyof AnchorHTMLAttributes<HTMLAnchorElement>
>;

export type ImageZoomProps = Omit<
  ComponentPropsWithoutRef<typeof ImageZoom>,
  | keyof ComponentPropsWithoutRef<"div">
  | keyof ImgHTMLAttributes<HTMLImageElement>
>;

export type InlineTocProps = Omit<
  ComponentPropsWithoutRef<typeof InlineTOC>,
  keyof ComponentPropsWithoutRef<"div">
>;

export type rootToggleProps = Omit<
  ComponentPropsWithoutRef<typeof RootToggle>,
  keyof ComponentPropsWithoutRef<"div">
>;

export type tabsProps = Omit<
  ComponentPropsWithoutRef<typeof Tabs>,
  keyof ComponentPropsWithoutRef<"div">
>;

export type tabProps = Omit<
  ComponentPropsWithoutRef<typeof Tab>,
  keyof ComponentPropsWithoutRef<"div">
>;
