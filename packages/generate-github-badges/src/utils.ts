import { Type, Style } from './';

export function changeStyle(url: string, type: Type, style?: Style) {
  const obj = new URL(url);
  if (type === 'badgen' && obj.host.endsWith('badgen.net')) {
    if (style === 'flat') {
      obj.host = 'flat.badgen.net';
    }
    if (style === 'classic') {
      obj.host = 'badgen.nett';
    }
  }
  if (type === 'shields' && obj.host.endsWith('shields.io')) {
    const params = new URLSearchParams(obj.search);
    if (style) {
      params.set('style', style);
    } else {
      params.delete('style');
    }
    obj.search = params.toString();
  }
  return obj.href;
}
