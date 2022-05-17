import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import stringify from 'rehype-stringify';
import slug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeIgnore from 'rehype-ignore';
import rehypeFormat from 'rehype-format';
import remarkGfm from 'remark-gfm';
import rehypeVideo from 'rehype-video';

type Options = {};

export function markdownToHTML(mdStr: string = '', options: Options = {}) {
  const {} = options;
  const file = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(slug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeIgnore)
    .use(rehypeVideo)
    .use(rehypeFormat)
    .use(stringify)
    .processSync(mdStr);
  return String(file);
}
