// Variable récupérée (après interpolation) du vertex-shader.
varying vec2 var_XY;

// Fonction appelée pour chaque pixel visible de l'écran.
void main(void) {
  float x = var_XY.x;
  float y = var_XY.y;

  // La distance du point (x,y) au centre de l'écran (0,0)
  // permet de savoir si on est dans le cercle ou dehors.
  float r = x*x + y*y;
  if (r < 1.0) {
    // Si on est dans le cercle, on met un pixel rouge.
    // 
    gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
  } else {
    // Si on est hors du cercle, on met un pixel transparent.
    gl_FragColor = vec4( 0.0, 1.0, 0.0, 0.0 );
  }    
}
