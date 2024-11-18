
attribute vec4 a_position;
attribute vec3 a_normal;

uniform mat4 u_projection;
uniform mat4 u_view;
uniform mat4 u_world;

varying vec4 v_normal;

void main() {
    gl_Position = u_projection * u_view * u_world * a_position;
    v_normal = vec4(a_normal, 1.0);
}