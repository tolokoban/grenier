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

  // `gl_Position` : coordonnées du vertex dans le repère de l'écran.
  // `position` : coordonnées du vertex dans le repère de son modèle.
  // `modelViewMatrix` : passage du repère du modèle dans le repère
  //                     de la caméra.
  // `projectionMatrix` : passage du repère de la caméra dans celui
  //                      de l'écran.
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
