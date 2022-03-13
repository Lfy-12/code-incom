const wm1 = new WeakMap();
wm1.set({},"val");

const wm2 = new WeakMap();
const container = {
  key:{}
};
wm1.set(container.key,"val");
function removeReference(){
  container.key = null;
}