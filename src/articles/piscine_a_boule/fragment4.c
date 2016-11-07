varying vec2 var_XY;
uniform vec3 uni_Color;

// Couleur du point qui fait face à la lumière.
const vec3 cst_LightColorFront = vec3( 1.0, 1.0, 1.0 );
// Couleur du point qui tourne le dos à la lumière.
const vec3 cst_LightColorBack = vec3( 0.0, 0.0, 0.0 );

void main(void) {
  float x = var_XY.x;
  float y = var_XY.y;
  float r = x*x + y*y;

  if (r < 1.0) {
    // Le vecteur normal au point (x,y) a pour coordonnées (x,y,z).
    float z = sqrt( 1.0 - r );
    // Direction de la lumière.
    // Je prends une direction au hasard et constante pour
    // le moment.
    vec3 dir = normalize( vec3( 7, 2, 5) );
    // Produit scalaire qui est maximal quand le vecteur normal
    // est parallèle et dans le même sens que le vecteur `dir`.
    float a = dot( dir, vec3( x, y, z ) );

    if (a > 0.0) {
      // On interpole suivant `a` entre 
      // la couleur de la sphère et celle de la lumière.
      gl_FragColor = vec4( a * cst_LightColorFront + (1.0 - a) * uni_Color, 1.0);
    } else {
      // La même chose pour la partie à l'ombre.
      a = -a;
      gl_FragColor = vec4( a * cst_LightColorBack + (1.0 - a) * uni_Color, 1.0);
    }
  } else {
    gl_FragColor = vec4( 0.0, 1.0, 0.0, 0.0 );
  }
}
