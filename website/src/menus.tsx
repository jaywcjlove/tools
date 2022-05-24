import { useTranslation } from 'react-i18next';

export function useMenus() {
  const { t } = useTranslation();
  return [
    {
      href: '/',
      label: t('menu./.label'),
    },
    {
      href: '/url-encode',
      label: t('menu./url-encode.label'),
    },
    {
      href: '/json-format',
      label: t('menu./json-format.label'),
    },
    {
      href: '/text-case',
      label: t('menu./text-case.label'),
    },
    {
      href: '/image-to-base64',
      label: t('menu./image-to-base64.label'),
    },
    {
      href: '/hash',
      label: t('menu./hash.label'),
    },
    {
      href: '/generate-password',
      label: t('menu./generate-password.label'),
    },
    {
      href: '/html-to-markdown',
      label: t('menu./html-to-markdown.label'),
    },
    {
      href: '/markdown-to-html',
      label: t('menu./markdown-to-html.label'),
    },
    {
      href: '/html-escape',
      label: t('menu./html-escape.label'),
    },
    {
      href: '/base64-encoder',
      label: t('menu./base64-encoder.label'),
    },
    {
      href: '/qrcode-generator',
      label: t('menu./qrcode-generator.label'),
    },
    {
      href: '/chinese-pinyin-conversion',
      label: t('menu./chinese-pinyin-conversion.label'),
    },
    {
      href: '/generate-github-badges',
      label: t('menu./generate-github-badges.label'),
    },
    {
      href: '/toml-to-json',
      label: t('menu./toml-to-json.label'),
    },
    {
      href: '/css-easing-animation',
      label: t('menu./css-easing-animation.label'),
    },
    {
      href: '/simple-markdown-editor',
      label: t('menu./simple-markdown-editor.label'),
    },
    {
      href: '/jwt-decoder',
      label: t('menu./jwt-decoder.label'),
    },
    {
      href: '/json-yaml',
      label: t('menu./json-yaml.label'),
    },
    {
      href: '/json-xml',
      label: t('menu./json-xml.label'),
    },
    {
      href: '/pdf-to-img',
      label: t('menu./pdf-to-img.label'),
    },
    {
      divider: true,
    },
    {
      href: 'https://badgen.net/',
      'open-source': 'https://github.com/badgen/badgen.net',
      about: t('menu.Badgen.about'),
      label: t('menu.Badgen.label'),
    },
    {
      href: 'https://codesandbox.io',
      'open-source': 'https://github.com/codesandbox/codesandbox-client',
      about: t('menu.CodeSandbox.about'),
      label: t('menu.CodeSandbox.label'),
    },
    {
      href: 'https://codeimg.io/',
      about: t('menu.Codeimg.about'),
      label: t('menu.Codeimg.label'),
    },
    {
      href: 'https://chalk.ist/',
      'open-source': 'https://github.com/Idered/chalk.ist',
      about: t('menu.Chalkist.about'),
      label: t('menu.Chalkist.label'),
    },
    {
      href: 'https://codepen.io',
      about: t('menu.CodePen.about'),
      label: t('menu.CodePen.label'),
    },
    {
      href: 'https://excalidraw.com/',
      'open-source': 'https://github.com/excalidraw/excalidraw',
      about: t('menu.Excalidraw.about'),
      label: t('menu.Excalidraw.label'),
    },
    {
      href: 'https://buttons.github.io',
      'open-source': 'https://github.com/ntkme/github-buttons',
      about: t('menu.GithubButtons.about'),
      label: t('menu.GithubButtons.label'),
    },
    {
      href: 'https://ihateregex.io/',
      'open-source': 'https://github.com/aykutkardas/regexlearn.com',
      about: t('menu.iHateRegex.about'),
      label: t('menu.iHateRegex.label'),
    },
    {
      href: 'https://jsfiddle.net',
      about: t('menu.JSFiddle.about'),
      label: t('menu.JSFiddle.label'),
    },
    {
      href: 'https://jsbin.com',
      about: t('menu.JSBin.about'),
      label: t('menu.JSBin.label'),
    },
    {
      href: 'https://jshint.com',
      about: t('menu.JSHint.about'),
      label: t('menu.JSHint.label'),
    },
    {
      href: 'https://uiwjs.github.io/json-viewer/',
      about: t('menu.JSONViewer.about'),
      label: t('menu.JSONViewer.label'),
    },
    {
      href: 'https://uiwjs.github.io/keycode-info/',
      about: t('menu.KeycodeInfo.about'),
      label: t('menu.KeycodeInfo.label'),
    },
    {
      href: 'https://regexlearn.com/',
      'open-source': 'https://github.com/aykutkardas/regexlearn.com',
      about: t('menu.LearnRegEx.about'),
      label: t('menu.LearnRegEx.label'),
    },
    {
      href: 'https://jaywcjlove.github.io/logo/',
      about: t('menu.LogoAsset.about'),
      label: t('menu.LogoAsset.label'),
    },
    {
      href: 'https://npmview.vercel.app',
      'open-source': 'https://github.com/pd4d10/npmview',
      about: t('menu.NPMView.about'),
      label: t('menu.NPMView.label'),
    },
    {
      href: 'https://uiwjs.github.io/npm-unpkg/',
      about: t('menu.NPMUnpkg.about'),
      label: t('menu.NPMUnpkg.label'),
    },
    {
      href: 'https://jaywcjlove.github.io/nginx-editor/',
      about: t('menu.NginxEditor.about'),
      label: t('menu.NginxEditor.label'),
    },
    {
      href: 'https://www.pixelartcss.com/',
      'open-source': 'https://github.com/jvalen/pixel-art-react',
      about: t('menu.PixelArttoCSS.about'),
      label: t('menu.PixelArttoCSS.label'),
    },
    {
      href: 'https://playcode.io',
      about: t('menu.PlayCode.about'),
      label: t('menu.PlayCode.label'),
    },
    {
      href: 'https://app.quicktype.io',
      'open-source': 'https://github.com/quicktype/quicktype',
      about: t('menu.Quicktype.about'),
      label: t('menu.Quicktype.label'),
    },
    {
      href: 'https://jaywcjlove.github.io/regexp-example/',
      about: t('menu.RegexpExample.about'),
      label: t('menu.RegexpExample.label'),
    },
    {
      href: 'https://jex.im/regulex/',
      'open-source': 'https://github.com/CJex/regulex',
      about: t('menu.Regulex.about'),
      label: t('menu.Regulex.label'),
    },
    {
      href: 'https://regex101.com/',
      'open-source': 'https://github.com/firasdib/Regex101',
      about: t('menu.Regex101.about'),
      label: t('menu.Regex101.label'),
    },
    {
      href: 'https://uiwjs.github.io/react-run-web/',
      about: t('menu.RunWeb.about'),
      label: t('menu.RunWeb.label'),
    },
    {
      href: 'https://rubular.com/',
      about: t('menu.Rubular.about'),
      label: t('menu.Rubular.label'),
    },
    {
      href: 'http://regexr.com/',
      'open-source': 'https://github.com/gskinner/regexr',
      about: t('menu.RegExr.about'),
      label: t('menu.RegExr.label'),
    },
    {
      href: 'https://regex-vis.com/',
      'open-source': 'https://github.com/Bowen7/regex-vis',
      about: t('menu.RegexVis.about'),
      label: t('menu.RegexVis.label'),
    },
    {
      href: 'https://pengfeiw.github.io/minicode/react-paint',
      'open-source': 'https://github.com/pengfeiw/react-paint',
      about: t('menu.ReactPaint.about'),
      label: t('menu.ReactPaint.label'),
    },
    {
      href: 'https://runkit.com',
      about: t('menu.RunKit.about'),
      label: t('menu.RunKit.label'),
    },
    {
      href: 'https://ray.so/',
      about: t('menu.Rayso.about'),
      label: t('menu.Rayso.label'),
    },
    {
      href: 'https://unpkg.com/svgedit@7.1.3/dist/editor/index.html',
      'open-source': 'https://github.com/SVG-Edit/svgedit',
      about: t('menu.SVGEdit.about'),
      label: t('menu.SVGEdit.label'),
    },
    {
      href: 'https://yqnn.github.io/svg-path-editor/',
      about: t('menu.SVGPathEditor.about'),
      label: t('menu.SVGPathEditor.label'),
    },
    {
      href: 'https://shields.io/',
      'open-source': 'https://github.com/badges/shields',
      about: t('menu.Shields.about'),
      label: t('menu.Shields.label'),
    },
    {
      href: 'https://stackblitz.com',
      about: t('menu.StackBlitz.about'),
      label: t('menu.StackBlitz.label'),
    },
    {
      href: 'https://skillicons.dev/',
      'open-source': 'https://github.com/tandpfun/skill-icons',
      about: t('menu.SkillIcons.about'),
      label: t('menu.SkillIcons.label'),
    },
    {
      href: 'https://starchart.cc/',
      about: t('menu.StarChart.about'),
      label: t('menu.StarChart.label'),
    },
    {
      href: 'https://uiwjs.github.io/ui-color/',
      about: t('menu.UIColor.about'),
      label: t('menu.UIColor.label'),
    },
    {
      href: 'https://easings.net',
      about: t('menu.easings.about'),
      label: t('menu.easings.label'),
    },
    {
      href: 'https://jspaint.app',
      'open-source': 'https://github.com/1j01/jspaint',
      about: t('menu.jspaint.about'),
      label: t('menu.jspaint.label'),
    },
  ];
}
