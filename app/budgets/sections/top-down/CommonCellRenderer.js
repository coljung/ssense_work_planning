import Handsontable from 'handsontable';
import {
    borderBottom,
    currencyFormat,
    emptyCell,
    gridColors,
    numericFormat,
    percentageFormat,
 } from '../../components/TableHelpers';

export default function cellValueRenderer(instance, td, row, col, prop, value, cellProperties) {
    // styling border for each metric
    const rowSpan = this.props.viewData.info.row_span;
    borderBottom(row, rowSpan, td);

    const colName = prop.split('.');
    const metricInformation = this.props.viewData.data[row][colName[0]];

    if (metricInformation) {
        if (metricInformation.isReadOnly !== undefined) {
            instance.setCellMeta(row, col, 'readOnly', metricInformation.isReadOnly);
        }

        const rowInformation = this.props.viewData.data[row].info;
        const rowYear = rowInformation.year.toString().slice(2, 4);
        const budgetYear = this.props.viewData.info.year.slice(2, 4);
        if (budgetYear === rowYear) {
            gridColors(rowInformation.plan, td);
        }
    }

    if (metricInformation && metricInformation.dataType !== undefined) {
        if ((metricInformation.dataType === 'currency'
                || metricInformation.dataType === 'percentage'
                || metricInformation.dataType === 'number')
            && isNaN(parseInt(value, 10))) {
            return emptyCell(instance, td, row, col);
        }

        switch (metricInformation.dataType) {
            case 'currency': {
                const decimals = location.query && location.query.decimals === 'yes';
                instance.setCellMeta(row, col, 'numericFormat', currencyFormat(decimals));
                // eslint-disable-next-line prefer-rest-params
                Handsontable.renderers.NumericRenderer.apply(this, arguments);
                break;
            }
            case 'percentage':
                instance.setCellMeta(row, col, 'numericFormat', percentageFormat);
                // eslint-disable-next-line prefer-rest-params
                Handsontable.renderers.NumericRenderer.apply(this, arguments);
                break;

            case 'number':
                instance.setCellMeta(row, col, 'numericFormat', numericFormat);
                // eslint-disable-next-line prefer-rest-params
                Handsontable.renderers.NumericRenderer.apply(this, arguments);
                break;

            case 'text':
            default:
                instance.setCellMeta(row, col, 'numericFormat', null);
                // eslint-disable-next-line prefer-rest-params
                Handsontable.renderers.TextRenderer.apply(this, arguments);
                break;
        }
    } else {
        return emptyCell(instance, td, row, col);
    }

    return td;
}
