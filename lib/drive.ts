export function getDriveImageUrl(link: string): string | null {
  const match = link.match(/\/file\/d\/([^/?#]+)/);
  if (match) return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  if (link.includes("drive.google.com") && link.includes("/uc?")) return link;
  return link;
}