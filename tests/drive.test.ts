import { describe, expect, it } from 'vitest';
import { getDriveId, getPreviewUrl, getThumbnailUrl } from '../src/lib/drive';

const FILE_LINK = 'https://drive.google.com/file/d/1AbCdEfGh_IjKlMnOpQrStUvWxYz01234/view?usp=sharing';
const ID = '1AbCdEfGh_IjKlMnOpQrStUvWxYz01234';

describe('getDriveId', () => {
  it('extrae el id de un enlace /file/d/<id>/view', () => {
    expect(getDriveId(FILE_LINK)).toBe(ID);
  });

  it('ignora el hash y los query params tras el id', () => {
    expect(getDriveId(`https://drive.google.com/file/d/${ID}/view#t=10`)).toBe(ID);
  });

  it('devuelve null si el enlace no es de Drive', () => {
    expect(getDriveId('https://example.com/foto.webp')).toBeNull();
    expect(getDriveId('/registro-uci.webp')).toBeNull();
  });
});

describe('getPreviewUrl', () => {
  it('construye el endpoint /preview de Drive', () => {
    expect(getPreviewUrl(FILE_LINK)).toBe(`https://drive.google.com/file/d/${ID}/preview`);
  });

  it('devuelve null cuando no hay id', () => {
    expect(getPreviewUrl('https://example.com/x')).toBeNull();
  });
});

describe('getThumbnailUrl', () => {
  it('construye el endpoint /thumbnail con tamaño', () => {
    expect(getThumbnailUrl(FILE_LINK)).toBe(
      `https://drive.google.com/thumbnail?id=${ID}&sz=w800`,
    );
  });

  it('devuelve null cuando no hay id', () => {
    expect(getThumbnailUrl('https://example.com/x')).toBeNull();
  });
});
