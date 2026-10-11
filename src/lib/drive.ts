export function getDriveId(link: string): string | null {
  return link.match(/\/file\/d\/([^/?#]+)/)?.[1] ?? null;
}

export function getPreviewUrl(link: string): string | null {
  const id = getDriveId(link);
  return id ? `https://drive.google.com/file/d/${id}/preview` : null;
}

export function getThumbnailUrl(link: string): string | null {
  const id = getDriveId(link);
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w800` : null;
}

export function getDriveImageUrl(link: string): string {
  const id = getDriveId(link);
  // thumbnail con sz grande: mismo archivo, sin el endpoint uc?export=view (deprecado),
  // w1600 da margen retina para el modal de 1200px sin reescalar hacia arriba.
  if (id) return `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
  return link;
}
