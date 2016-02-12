// Cette variable sera passée (après interpolation) à chaque pixel
// traité par le fragment-shader. C'est un vecteurs dont les coordonnées
// sont comprises entre -1.0 et +1.0.
varying vec2 var_XY;

// Fonction principage du shader, appelée pour chaque vertex.
void main(void) {
  // `position` est un vec3 global qui contient les coordonnées
  // du vertex courant.
  float x = position.x;
  float y = position.y;

  // On se ramève à un carré centré en (0,0) et de côté 2.
  if (x > 0.0) {
    if (y > 0.0) {
      var_XY = vec2( 1.0, 1.0 );
    } else {
      var_XY = vec2( 1.0, -1.0 );
    }
  } else {
    if (y > 0.0) {
      var_XY = vec2( -1.0, 1.0 );
    } else {
      var_XY = vec2( -1.0, -1.0 );
    }
  }

  // Je n'ai pas encore compris cette dernière ligne dans le détail.
  // Ce qui est sûr, c'est que ça donne les coordonnées finales dans
  // le monde vu par la caméra et que c'est indispensable au bon
  // fonctionnement du shader.
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
