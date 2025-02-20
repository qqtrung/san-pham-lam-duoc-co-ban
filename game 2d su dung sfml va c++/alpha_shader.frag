uniform sampler2D foreGround; 
uniform sampler2D renderTexture; 

void main() 
{
    vec4 color      =   texture2D(foreGround, gl_TexCoord[0].xy); 
    float alpha     =   texture2D(renderTexture, gl_TexCoord[0].xy).a; 
    gl_FragColor    =   vec4(color.rgb, 1 - color.a * alpha); 
}
