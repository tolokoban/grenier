// Cette variable sera passée (après interpolation) à chaque pixel
// traité par le fragment-shader. C'est un vecteurs dont les coordonnées
// sont comprises entre -1.0 et +1.0.
varying vec2 var_XY;

void main(void) {
  float x = position.x;
  float y = position.y;

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

  // Pour que le carré nous fasse toujours face, il faut
  // commencer par projeter son centre dans le repère
  // de l'écran.
  vec4 center = vec4( 0.0, 0.0, position.z, 1.0 );
  vec4 p = projectionMatrix * modelViewMatrix * center;
  // Cela nous donne la valeur du `z` et on peut reconstituer
  // le `x` et le `y` en utilisant les coordonnées dans le
  // repère du modèle.
  p.x += var_XY.x * 0.5;
  p.y += var_XY.y * 0.5;
  
  gl_Position = p;
}
