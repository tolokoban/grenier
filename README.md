# Articles sur l'algorithmie, les Enigmes et autres...

Pour installer localement les modules nécessaires, tapez :
```
npm update
```

Voici le [site resultant](https://tolokoban.github.io/grenier).


## Comment écrire des articles

### <menu>

Le __composant__ `<menu>` permet d'afficher la liste des articles regroupés par catégories.

```html
<x-html title="Le grenier de Tolokoban (algorithmes en folie)">
    <menu src="menu.org"/>
</x-html>
```

Le fichier `menu.org` définit la liste des catégories et des articles. En voici un exemple :

```md
* Énigme
[glob] Les mesures de bière et le baril (10 août 2015)
[millers_puzzle] The Miller's Puzzle (6 août 2015)
[allergique_a_la_primalite] Allergique à la primalité (10 novembre 2015)
* Algorithmes
[enumerer_permutations] Énumérer les permutations (26 août 2013)
[!detection_droites] Détection de droites dans une image (7 novembre 2015)
* Langages
[vb6_mode] Créer des modes avec Emacs (6 novembre 2015)
```

Toute ligne commençant par une étoile (`*`) définit une catégorie. Et toute ligne commançant par un crochet ouvrant (`[`) définit un article.

La définition de l'article comporte 3 parties :
* L'__identifiant__ de l'article entre crochets. Par exemple, si on a `millers_puzzle`, la source de l'article sera le fichier `src/articles/millers_puzzle/millers_puzzle.html`. Si le nom commence par un point d'exclamation, cela signifie que l'article est en cours d'élaboration.
* Le __titre__ de l'article.
* La __date__ de création de l'article entre parenthèses.

### <x-article>

```html
<x-article title="Les carrés magiques">
    <page>
Mon pote Thomas est une vraie bête de Sodoku. Il est tellement fort qu'ils les fait même en braille.
Mais un jour ça a fini par le lasser et il m'a demandé si je ne connaissais pas d'autres jeux de ce style.    

    </page> 
</x-article>
```

Chaque _page_ est définie par un tag `<page>`. Il en faut au moins une !

