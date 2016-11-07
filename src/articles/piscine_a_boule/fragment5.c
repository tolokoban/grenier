varying vec2 var_XY;
uniform vec3 uni_Color;

// Les `Value` permettent de minimiser l'éclat de la lumière.
const float cst_LightValueFront = 0.7;
const float cst_LightValueBack = 1.0;
const vec3 cst_LightColorFront = vec3( 0.9, 0.9, 0.8 );
const vec3 cst_LightColorBack = vec3( 0.0, 0.0, 0.2 );

void main(void) {
  float x = var_XY.x;
  float y = var_XY.y;
  float r = x*x + y*y;

  if (r < 1.0) {
    // Pour limiter l'éclat de la lumière, on modifie sa couleur
    // en la moyennant avec la couleur de la sphère.
    vec3 colorFront = cst_LightColorFront * cst_LightValueFront
      + uni_Color * (1.0 - cst_LightValueFront);
    vec3 colorBack = cst_LightColorBack * cst_LightValueBack
      + uni_Color * (1.0 - cst_LightValueBack);

    float z = sqrt( 1.0 - r );
    vec3 dir = normalize( vec3( 7, 2, 5) );
    float a = dot( dir, vec3( x, y, z ) );

    if (a > 0.0) {
      gl_FragColor = vec4( a * colorFront + (1.0 - a) * uni_Color, 1.0);
    } else {
      a = -a;
      gl_FragColor = vec4( a * colorBack + (1.0 - a) * uni_Color, 1.0);
    }
  } else {
    gl_FragColor = vec4( 0.0, 1.0, 0.0, 0.0 );
  }
}
