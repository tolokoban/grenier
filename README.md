# Articles sur l'algorithmie, les Enigmes et autres...

Pour installer localement les modules n�cessaires, tapez :
```
npm update
```

Voici le [site resultant](https://tolokoban.github.io/grenier).


## Comment �crire des articles

### <menu>

Le __composant__ `<menu>` permet d'afficher la liste des articles regroup�s par cat�gories.

```html
<x-html title="Le grenier de Tolokoban (algorithmes en folie)">
    <menu src="menu.org"/>
</x-html>
```

Le fichier `menu.org` d�finit la liste des cat�gories et des articles. En voici un exemple :

```md
* �nigme
[glob] Les mesures de bi�re et le baril (10 ao�t 2015)
[millers_puzzle] The Miller's Puzzle (6 ao�t 2015)
[allergique_a_la_primalite] Allergique � la primalit� (10 novembre 2015)
* Algorithmes
[enumerer_permutations] �num�rer les permutations (26 ao�t 2013)
[!detection_droites] D�tection de droites dans une image (7 novembre 2015)
* Langages
[vb6_mode] Cr�er des modes avec Emacs (6 novembre 2015)
```

Toute ligne commen�ant par une �toile (`*`) d�finit une cat�gorie. Et toute ligne comman�ant par un crochet ouvrant (`[`) d�finit un article.

La d�finition de l'article comporte 3 parties :
* L'__identifiant__ de l'article entre crochets. Par exemple, si on a `millers_puzzle`, la source de l'article sera le fichier `src/articles/millers_puzzle/millers_puzzle.html`. Si le nom commence par un point d'exclamation, cela signifie que l'article est en cours d'�laboration.
* Le __titre__ de l'article.
* La __date__ de cr�ation de l'article entre parenth�ses.

### <x-article>

```html
<x-article title="Les carr�s magiques">
    <page>
Mon pote Thomas est une vraie b�te de Sodoku. Il est tellement fort qu'ils les fait m�me en braille.
Mais un jour �a a fini par le lasser et il m'a demand� si je ne connaissais pas d'autres jeux de ce style.    

    </page> 
</x-article>
```

Chaque _page_ est d�finie par un tag `<page>`. Il en faut au moins une !

