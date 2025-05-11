import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import * as Preview from "@/app/components/preview";
import { ReactNode } from "react";
import { Card, Cards } from "fumadocs-ui/components/card";
import { getPageTreePeers } from "fumadocs-core/server";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { createGenerator } from "fumadocs-typescript";

function PreviewRenderer({ preview }: { preview: string }): ReactNode {
  if (preview && preview in Preview) {
    const Comp = Preview[preview as keyof typeof Preview];
    return <Comp />;
  }

  return null;
}

const generator = createGenerator();

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const preview = page.data.preview;
  const MDXContent = page.data.body;
  const path = `content/docs/${page.file.path}`;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        {preview ? <PreviewRenderer preview={preview} /> : null}
        {page.data.index ? <DocsCategory url={page.url} /> : null}

        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
            AutoTypeTable: (props) => (
              <AutoTypeTable generator={generator} {...props} />
            ),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

function DocsCategory({ url }: { url: string }) {
  return (
    <Cards>
      {getPageTreePeers(source.pageTree, url).map((peer) => (
        <Card key={peer.url} title={peer.name} href={peer.url}>
          {peer.description}
        </Card>
      ))}
    </Cards>
  );
}
export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
