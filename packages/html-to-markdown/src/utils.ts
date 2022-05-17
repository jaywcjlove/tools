import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
import remarkStringify from 'remark-stringify';
import remarkGfm from 'remark-gfm';
import slug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeIgnore from 'rehype-ignore';
import rehypeRaw from 'rehype-raw';
import rehypeFormat from 'rehype-format';
import rehypePrism from 'rehype-prism-plus';
import rehypeVideo from 'rehype-video';

type Options = {};

export function htmlToMarkdown(htmlStr: string = '', options: Options = {}) {
  const {} = options;
  const file = unified()
    .use(rehypeParse, { fragment: true })
    .use(slug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeIgnore)
    .use(rehypeVideo)
    .use(rehypeFormat)
    .use(rehypeRaw)
    .use(rehypePrism)
    .use(rehypeRemark)
    .use(remarkGfm)
    // .use(remarkPlugins || [])
    // .use(rehypePlugins || [])
    .use(remarkStringify)
    .processSync(htmlStr);
  return String(file);
}
