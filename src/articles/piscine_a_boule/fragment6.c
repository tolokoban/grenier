varying vec2 var_XY;
varying vec3 var_Position;

uniform vec3 uni_Color;

const float cst_LightValueFront = 0.7;
const float cst_LightValueBack = 1.0;
const vec3 cst_LightColorFront = vec3( 0.9, 0.9, 0.8 );
const vec3 cst_LightColorBack = vec3( 0.0, 0.0, 0.2 );

void main(void) {
  float x = var_XY.x;
  float y = var_XY.y;
  float r = x*x + y*y;

  // On a inversé la condition pour faire tout de
  // suite un sort aux pixels invisibles.
  if (r >= 1.0) {
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 0.0 );
    return;
  }

  if (r > 0.8) {
    // Le liseré noir autour de la sphère est créé ainsi.
    // En diminuant 0.99, on épaissit le trait.
    gl_FragColor = vec4( uni_Color * 0.3, 1.0 );
  } 
  else {
    vec3 color = vec3(uni_Color);

    vec3 colorFront = cst_LightColorFront * cst_LightValueFront
      + uni_Color * (1.0 - cst_LightValueFront);
    vec3 colorBack = cst_LightColorBack * cst_LightValueBack
      + uni_Color * (1.0 - cst_LightValueBack);

    float z = sqrt( 1.0 - r );
    vec3 dir = normalize( vec3( 7, 2, 5) - cameraPosition );
    float a = dot( dir, vec3( x, y, z ) );

    if (a > 0.0) {
      color = a * colorFront + (1.0 - a) * uni_Color;
    } else {
      a = -a;
      color = a * colorBack + (1.0 - a) * uni_Color;
    }

    color *= 1.0 - r * 0.6;
    gl_FragColor = vec4( color, 1.0 );
  }
}
