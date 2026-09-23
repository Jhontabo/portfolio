export function getDriveImageUrl(link: string): string | null {
  const match = link.match(/\/file\/d\/([^/?#]+)/);
  if (match) return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800`;
  if (link.includes("drive.google.com") && link.includes("/uc?")) return link;
  return link;
}