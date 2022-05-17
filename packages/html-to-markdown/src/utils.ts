import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
import remarkStringify from 'remark-stringify';
import slug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeIgnore from 'rehype-ignore';
import rehypeFormat from 'rehype-format';
import remarkGfm from 'remark-gfm';
import rehypeVideo from 'rehype-video';

type Options = {};

export function htmlToMarkdown(htmlStr: string = '', options: Options = {}) {
  const {} = options;
  const file = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeRemark)
    .use(slug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeIgnore)
    .use(remarkGfm)
    .use(rehypeVideo)
    .use(rehypeFormat)
    // .use(remarkPlugins || [])
    // .use(rehypePlugins || [])
    .use(remarkStringify)
    .processSync(htmlStr);
  return String(file);
}
