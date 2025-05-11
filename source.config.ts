import {
  defineDocs,
  defineConfig,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import {
  rehypeCodeDefaultOptions,
  remarkAdmonition,
} from "fumadocs-core/mdx-plugins";
import { remarkInstall } from "fumadocs-docgen";
import {
  transformerNotationFocus,
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationErrorLevel,
} from "@shikijs/transformers";
import { z } from "zod";
export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      preview: z.string().optional(),
      index: z.boolean().default(false),
    }),
  },
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      lazy: true,
      experimentalJSEngine: true,
      langs: ["ts", "js", "html", "tsx", "mdx"],
      inline: "tailing-curly-colon",
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerNotationFocus(),
        transformerNotationErrorLevel(),
        transformerMetaHighlight(),
        transformerMetaWordHighlight(),
      ],
    },
    remarkPlugins: [remarkAdmonition, remarkInstall],
  },
});
