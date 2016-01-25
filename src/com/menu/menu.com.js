/**
 * Component menu
 *
 * ```
 * <menu src="my-menu.org" />
 * ```
 *
 * Here is an exemple of `my-menu.org`:
 * ```
 * * Énigme
 * [glob] Les mesures de bière et le baril (10 août 2015)
 * [millers_puzzle] The Miller's Puzzle (6 août 2015)
 * * Algorithmes
 * [enumerer_permutations] Énumérer les permutations (26 août 2013)
 * * Langages
 * [vb6_mode] Créer des modes avec Emacs (6 novembre 2015)
 * ```
 *
 * Lines  starting  with a  star  (`*`)  define categories.   Other  non
 * empty-lines are articles description  (provided they start with `[`).
 * The URL  is build from  the id  between square brakets.  For example,
 * `glob`  gives the  URL `article/glob/glob.html`.  At the  end of  the
 * line, there is the article's creation date in parenthesis.
 */

exports.tags = ["menu"];
exports.priority = 0;

/**
 * Compile a node of the HTML tree.
 */
exports.compile = function(root, libs) {
    var src = root.attribs.src, // Attribute `src` can contain a file to load with the menu's definition.
    content,                    // Content of the menu.
    children = [],
    categories = {};            // Result of the menu's definition parsing.
    if (src) {
        // Loading form external file.
        if (!libs.fileExists(src)) {
            src += '.org';
        }
        if (!libs.fileExists(src)) {
            libs.fatal("File not found: \"" + src + "\"!");
        }
        libs.addInclude(src);
        content = libs.readFileContent(src);
    } else {
        // Loading tag's content.
        libs.compileChildren(root);
        content = libs.Tree.toString(root);
    }

    categories = parseMenuDefinition(content);

    root.name = "div";
    root.attribs = {"class": "menu custom"};
    root.children = buildMenu(categories, libs);
};


/**
 * The parsing is made line by line.
 *
 * @param content {string} - Definition of categories and articles.
 * @return {object}
 * * __Keys__: name of a category.
 * * __Values__: array of articles. Articles are object of this form: 
 *   `{id:..., caption:..., date:..., draft:...}`.
 */
function parseMenuDefinition(content) {
    var categories = {},
    currentCategory = null;

    content.split("\n").forEach(function (rawLine) {
        var line = rawLine.trim();
        var firstChar = line.charAt(0);
        var category;
        var article;

        if (firstChar == '*') {
            category = line.substr(1).trim();
            currentCategory = categories[category];
            if (typeof currentCategory === 'undefined') {
                currentCategory = [];
                categories[category] = currentCategory;
            }
        }
        else if (firstChar == '[') {
            article = parseArticle(line);
            if (article) {
                currentCategory.push(article);
            }
        }
    });

    return categories;
}


/**
 * [id] caption (date)
 *    ^         ^
 *    a         b
 */
function parseArticle(line) {
    var a = line.indexOf(']'),
    b = line.lastIndexOf('(');
    if (a < 1) return null;
    if (b < a) return null;
    var id = line.substring(1, a).trim();
    var draft = false;
    if (id.charAt(0) == '!') {
        id = id.substr(1);
        draft = true;
    }
    return {
        id: id,
        caption: line.substring(a + 1, b - 1).trim(),
        date: line.substring(b + 1, line.length - 1),
        draft: draft
    };
}


/**
 * Add elements to show articles groupes by categories.
 */
function buildMenu(categories, libs) {
    var category,
    articles,
    article,
    children = [],
    divCategory,
    divArticles,
    Tree = libs.Tree;
    for (category in categories) {
        articles = categories[category];
        divCategory = Tree.div({'class': 'category'});
        children.push(divCategory);
        divCategory.children.push(
            Tree.div({'class': 'category-name'}, category)
        );
        divArticles = Tree.div({'class': 'articles'});
        divCategory.children.push(divArticles);
        articles.forEach(function (article) {
            var src = "articles/" + article.id + "/" + article.id + ".html";
            libs.compileHTML(src);    // Compile article if needed.
            divArticles.children.push(
                Tree.div(
                    article.draft ? {'class': 'draft'} : {},
                    [
                        Tree.div(
                            {},
                            [
                                Tree.tag(
                                    "a",
                                    {href: src},
                                    article.caption
                                )
                            ]
                        ),
                        Tree.div({}, article.date)
                    ]
                )
            );
        });
    }
    return children;
}
