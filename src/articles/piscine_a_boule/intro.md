Un jour, que je m'étais égaré chez IKEA, je tombe sur mon pote Thomas qui barbotte dans la piscine à boule des enfants.

- Salut vieux ! Que fais-tu dans cette piscine ? N'as-tu pas dépassé la limite d'age ?
- Ah ! Salut Tolokoban, tu tombes bien justement. Je me suis mis récemment à la 3D et du coup j'étudie de près les sphères.
- Hum...
- Ça ne te parait pas étrange qu'un objet aussi simple que la sphère soit si mal représenté en 3D ?
- C'est-à-dire ?
- Regarde cette boule rouge là. Elle est sympa à première vue, mais si tu t'attardes sur les bords, tu vois un hideux polygone en lieu et place d'un magnifique cercle.

<center><x-widget name="piscine.lowres-sphere">{width: 300, height: 250}</x-widget></center>

Il a raison le bougre ! La plupart du temps, on représente des sphères en trichant : on utilise un polyèdre (en bleu sur le dessin ci-dessus) et on applique un astucieux procédé de lissage pour faire illusion. Mais, évidemment, ça ne marche pas sur les bords...


Ok. Je me retrousse les manches et j'essaie de faire un piscine à _belles_ boules.
Je commence par faire rebondir des carrés, c'est plus facile. Et en plus c'est rapide à calculer, même pour un téléphone.

<center><x-widget name="piscine.bouncing-squares">{width: 300, height: 300, radius: 30}</x-widget></center>
        
Pas mal, mais ça fait un peu plat. En plus, quand les carrés nous tournent le dos, on ne les voit plus !
Je peux toutefois ruser en forçant les carrés à faire face à la caméra.
Voyons ça sur la [page suivante](#page2).
