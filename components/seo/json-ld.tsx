import type { ReactElement } from "react";

type JsonLdProps = {
  id?: string;
  data: object | object[];
};

export function JsonLd({ id, data }: JsonLdProps): ReactElement {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
