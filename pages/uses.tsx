import Head from "next/head";
import { Card } from "../components/Card";
import Section from "../components/Section";
import SimpleLayout from "../components/SimpleLayout";
import { usesIntro, usesStubs } from "../utils/siteData";

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-10">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Aditya Giri</title>
        <meta name="description" content="Setup and tools used by Aditya Giri." />
      </Head>

      <SimpleLayout
        title="Uses, setup, and tools."
        intro={usesIntro}
      >
        <div className="space-y-20">
          {usesStubs.map((section) => (
            <ToolsSection key={section.title} title={section.title}>
              {section.items.map((item) => (
                <Tool key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </Tool>
              ))}
            </ToolsSection>
          ))}
        </div>
      </SimpleLayout>
    </>
  );
}
