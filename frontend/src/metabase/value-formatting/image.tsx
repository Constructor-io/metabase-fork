import type { ColumnSettings } from "metabase-types/api";

import { getUrlProtocol } from "./url";

// Keep in sync with IMAGE_HEIGHT in metabase/data-grid/constants, which sizes
// table rows to fit these images. Module boundaries forbid importing it here.
const IMAGE_HEIGHT = 150;

export function formatImage(
  value: string,
  { jsx, rich, view_as = "auto" }: ColumnSettings = {},
) {
  const url = String(value);
  const protocol = getUrlProtocol(url);
  const acceptedProtocol = protocol === "http:" || protocol === "https:";
  if (jsx && rich && view_as === "image" && acceptedProtocol) {
    return <img src={url} style={{ height: IMAGE_HEIGHT }} />;
  } else {
    return url;
  }
}
