import Handsontable from 'handsontable';

const leftBorderCols = [
    'total_stdpremarkdown',
    'women_stdpremarkdown',
    'men_stdpremarkdown',
];

const percentageCols = [
    'total_incr_stdpremarkdown',
    'total_incr_stdpostmarkdown',
    'total_full_incr',
    'women_incr_stdpremarkdown',
    'women_incr_stdpostmarkdown',
    'women_full_incr',
    'women_full_cont',
    'men_incr_stdpremarkdown',
    'men_incr_stdpostmarkdown',
    'men_full_incr',
    'men_full_cont',
];

const amountCols = [
    'total_stdpremarkdown',
    'total_stdpostmarkdown',
    'total_full',
    'women_stdpremarkdown',
    'women_stdpostmarkdown',
    'women_full',
    'men_stdpremarkdown',
    'men_stdpostmarkdown',
    'men_full',
];

function cellValueRender(instance, td, row, col, prop, value, cellProperties) {
    cellProperties = {};

    if ((row === 0 && col > 0) || (row === 5 && col > 1) || (row === 10 && col > 1)) {
      td.style.background = '#eee';
    }

    if (leftBorderCols.indexOf(prop) !== -1) {
        td.className += ' leftCellBorder';
    }
    const rowSpan = 5;
    if ((row + 1) % rowSpan === 0) {
        td.className += ' bottomCellBorder';
    }
    if (isNaN(value)) {
        cellProperties.type = 'text';
        td.innerHTML = 'N/A';
        td.className += ' cellNA';
        return td;
    }
    Handsontable.renderers.NumericRenderer.apply(this, arguments);
    cellProperties.type = 'numeric';
    if (percentageCols.indexOf(prop) !== -1) {
        cellProperties.format = '0%';
    }
    if (amountCols.indexOf(prop) !== -1) {
        cellProperties.format = '$0,000';
        cellProperties.editor = true;
    }

    return td;
}

function cellMetric(instance, td, row, col, prop, value, cellProperties) {
    // cellProperties = {};

    Handsontable.renderers.TextRenderer.apply(this, arguments);
    td.className += 'metricCell';

    return td;
}

const columns = [
    {
        data: 'metric',
        type: 'text',
        renderer: cellMetric,
    },
    {
        data: 'seasonyear',
        type: 'text',
    },
    {
        data: 'total_stdpremarkdown',
        renderer: cellValueRender,
        type: 'numeric',
        format: '$0,000',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'total_incr_stdpremarkdown',
        renderer: cellValueRender,
        type: 'numeric',
        format: '0%',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'total_stdpostmarkdown',
        renderer: cellValueRender,
        type: 'numeric',
        format: '$0,000',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'total_incr_stdpostmarkdown',
        renderer: cellValueRender,
        type: 'numeric',
        format: '0%',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'total_full',
        renderer: cellValueRender,
        type: 'numeric',
        format: '$0,000',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'total_full_incr',
        renderer: cellValueRender,
        type: 'numeric',
        format: '0%',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'women_stdpremarkdown',
        renderer: cellValueRender,
        type: 'numeric',
        format: '$0,000',
        colWidths: 100,
    },
    {
        data: 'women_incr_stdpremarkdown',
        renderer: cellValueRender,
        type: 'numeric',
        format: '0%',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'women_stdpostmarkdown',
        renderer: cellValueRender,
        type: 'numeric',
        format: '$0,000',
        colWidths: 100,
    },
    {
        data: 'women_incr_stdpostmarkdown',
        renderer: cellValueRender,
        type: 'numeric',
        format: '0%',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'women_full',
        renderer: cellValueRender,
        type: 'numeric',
        format: '$0,000',
        colWidths: 100,
    },
    {
        data: 'women_full_incr',
        renderer: cellValueRender,
        type: 'numeric',
        format: '0%',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'women_full_cont',
        renderer: cellValueRender,
        type: 'numeric',
        format: '0%',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'men_stdpremarkdown',
        renderer: cellValueRender,
        type: 'numeric',
        format: '$0,000',
        colWidths: 100,
    },
    {
        data: 'men_incr_stdpremarkdown',
        renderer: cellValueRender,
        type: 'numeric',
        format: '0%',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'men_stdpostmarkdown',
        renderer: cellValueRender,
        type: 'numeric',
        format: '$0,000',
        colWidths: 100,
    },
    {
        data: 'men_incr_stdpostmarkdown',
        renderer: cellValueRender,
        type: 'numeric',
        format: '0%',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'men_full',
        renderer: cellValueRender,
        type: 'numeric',
        format: '$0,000',
        colWidths: 100,
    },
    {
        data: 'men_full_incr',
        renderer: cellValueRender,
        type: 'numeric',
        format: '0%',
        editor: false,
        colWidths: 100,
    },
    {
        data: 'men_full_cont',
        renderer: cellValueRender,
        type: 'numeric',
        format: '0%',
        editor: false,
        colWidths: 100,
    },
];

export default columns;
