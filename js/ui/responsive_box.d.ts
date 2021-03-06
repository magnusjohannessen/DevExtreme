import DataSource, {
    DataSourceOptions
} from '../data/data_source';

import CollectionWidget, {
    CollectionWidgetItem,
    CollectionWidgetOptions
} from './collection/ui.collection_widget.base';

export interface dxResponsiveBoxOptions extends CollectionWidgetOptions<dxResponsiveBox> {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    cols?: Array<{
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @type number | Enums.Mode
      * @default 0
      */
      baseSize?: number | 'auto',
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @default 1
      */
      ratio?: number,
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @default undefined
      */
      screen?: string,
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @default 1
      */
      shrink?: number
    }>;
    /**
     * @docid
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataSource?: string | Array<string | dxResponsiveBoxItem | any> | DataSource | DataSourceOptions;
    /**
     * @docid
     * @type_function_return number|string
     * @default '100%'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    height?: number | string | (() => number | string);
    /**
     * @docid
     * @fires dxResponsiveBoxOptions.onOptionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<string | dxResponsiveBoxItem | any>;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    rows?: Array<{
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @type number | Enums.Mode
      * @default 0
      */
      baseSize?: number | 'auto',
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @default 1
      */
      ratio?: number,
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @default undefined
      */
      screen?: string,
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @default 1
      */
      shrink?: number
    }>;
    /**
     * @docid
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    screenByWidth?: Function;
    /**
     * @docid
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    singleColumnScreen?: string;
    /**
     * @docid
     * @type_function_return number|string
     * @default '100%'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    width?: number | string | (() => number | string);
}
/**
 * @docid
 * @inherits CollectionWidget
 * @module ui/responsive_box
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxResponsiveBox extends CollectionWidget {
    constructor(element: Element, options?: dxResponsiveBoxOptions)
    constructor(element: JQuery, options?: dxResponsiveBoxOptions)
}

/**
* @docid
* @inherits CollectionWidgetItem
* @type object
*/
export interface dxResponsiveBoxItem extends CollectionWidgetItem {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    location?: {
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      */
      col?: number,
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @default undefined
      */
      colspan?: number,
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      */
      row?: number,
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @default undefined
      */
      rowspan?: number,
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @default undefined
      */
      screen?: string
    } | Array<{ col?: number, colspan?: number, row?: number, rowspan?: number, screen?: string }>;
}

declare global {
interface JQuery {
    dxResponsiveBox(): JQuery;
    dxResponsiveBox(options: "instance"): dxResponsiveBox;
    dxResponsiveBox(options: string): any;
    dxResponsiveBox(options: string, ...params: any[]): any;
    dxResponsiveBox(options: dxResponsiveBoxOptions): JQuery;
}
}
export type Options = dxResponsiveBoxOptions;

/** @deprecated use Options instead */
export type IOptions = dxResponsiveBoxOptions;
