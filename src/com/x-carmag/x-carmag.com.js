/**
 * Component x-carmag
 */

exports.tags = ["x-carmag"];
exports.priority = 0;

/**
 * Compile a node of the HTML tree.
 */
exports.compile = function(root, libs) {
    var content = libs.Tree.text( root );
    root.name = 'div';
    root.attribs['class'] = "x-carmag";
    var float = root.attribs.float || '';
    if (typeof float === 'string') float = float.toLowerCase();
    root.attribs['class'] += ' ' + float;
    var cells = parseCells( content );
    root.children = [];
    var order = cells.length;
    if (order > 0) {
        function row(arr) {
            var div = {type: libs.Tree.TAG, name: 'div', children:[]};
            arr.forEach(function (itm) {
                div.children.push( itm );                
            });
            return div;
        }
        function cell(i, j, style) {
            if( typeof style === 'undefined' ) style = '';
            var div = {
                type: libs.Tree.TAG,
                name: 'div',
                'class': style,
                children:[{
                    type: libs.Tree.TEXT,
                    text: cells[j][i]
                }]
            };
            return div;
        }
        function sum(i, j, sI, sJ) {
            var total = 0;
            for (var k=0; k<order; k++) {
                total += parseFloat(cells[j][i]);
                i += sI;
                j += sJ;
            }
            if (isNaN(total)) total = '';
            return {
                type: libs.Tree.TAG,
                name: 'div',
                attribs: {'class': 'sum'},
                children:[{
                    type: libs.Tree.TEXT,
                    text: total
                }]
            };
        }
        var rows = cells.length;
        var cols = cells[0].length;
        var i, j;
        var arr = [sum(0, 0, 1, 1)];
        for (i = 0; i < rows; i++) {
            arr.push( sum(i, 0, 0, 1) );
        }
        arr.push( sum(order - 1, 0, -1, 1) );
        root.children.push( row(arr) );
        for (j = 0; j < rows; j++) {
            arr = [sum(0, j, 1, 0)];            
            for (i = 0; i < cols; i++) {
                arr.push( cell(i, j) );
            }
            arr.push(sum(0, j, 1, 0));
            root.children.push( row(arr) );
        }
        arr = [sum(0, 0, 1, 1)];
        for (i = 0; i < rows; i++) {
            arr.push( sum(i, 0, 0, 1) );
        }
        arr.push( sum(order - 1, 0, -1, 1) );
        root.children.push( row(arr) );
    }
};


function parseCells( txt ) {
    var cells = [];
    txt.split(';').forEach(function (row) {
        var line = [];
        cells.push( line );
        row.split(',').forEach(function (itm) {
            line.push( itm );
        });
    });
    return cells;
}
