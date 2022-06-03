import {
  optimize,
  OptimizeOptions,
  OptimizedSvg,
  OptimizedError,
  Plugin,
  CustomPlugin,
  Js2SvgOptions,
} from 'svgo/dist/svgo.browser';

export type Settings = OptimizeOptions &
  Js2SvgOptions & {
    /**
     * Precision of floating point numbers. Will be passed to each plugin that suppors this param.
     * 0 almost always breaks images when used on `cleanupNumericValues`.
     */
    floatPrecision?: number | undefined;
  };

export type Dimensions = { width: number; height: number };
type CreateDimensionsExtractor = () => [Dimensions, Plugin];

const createDimensionsExtractor: CreateDimensionsExtractor = () => {
  const dimensions: Dimensions = { width: 0, height: 0 };
  const plugin: CustomPlugin<any> = {
    // @ts-ignore
    type: 'visitor',
    name: 'extract-dimensions',
    fn: () => {
      return {
        element: {
          // Node, parentNode
          enter: ({ name, attributes }, { type }) => {
            if (name === 'svg' && type === 'root') {
              if (attributes.width !== undefined && attributes.height !== undefined) {
                dimensions.width = Number.parseFloat(attributes.width);
                dimensions.height = Number.parseFloat(attributes.height);
              } else if (attributes.viewBox !== undefined) {
                const viewBox = attributes.viewBox.split(/,\s*|\s+/);
                dimensions.width = Number.parseFloat(viewBox[2]);
                dimensions.height = Number.parseFloat(viewBox[3]);
              }
            }
          },
        },
      };
    },
  };
  return [dimensions, plugin];
};

export function compress(svgInput: string, settings: Settings) {
  const plugins: Plugin[] = [];

  (settings.plugins || []).forEach((item) => {
    if (item === 'cleanupNumericValues') {
      const floatPrecision = Number(settings.floatPrecision);
      plugins.push({
        name: 'cleanupNumericValues',
        params: {
          floatPrecision: floatPrecision === 0 ? 1 : floatPrecision,
        },
      });
    } else {
      plugins.push(item);
    }
  });

  const [dimensions, extractDimensionsPlugin] = createDimensionsExtractor();
  const { data, modernError } = optimize(svgInput, {
    multipass: settings.multipass,
    floatPrecision: settings.floatPrecision,
    plugins: [...plugins, extractDimensionsPlugin],
    js2svg: {
      indent: 2,
      pretty: settings.pretty,
    },
  }) as OptimizedSvg;
  return { data, dimensions, error: modernError ? (modernError as any).message : '' };
}
