import SceneManager from './SceneManager'

export default containerElement => {
    const canvas = createCanvas(document, containerElement);
    const sceneManager = new SceneManager(canvas);
  
    bindEventListeners();
    render();
    function createCanvas(document, containerElement) {
      const canvas = document.createElement('canvas');
      containerElement.appendChild(canvas);
      return canvas;
    }
    function bindEventListeners() {
      window.onresize = resizeCanvas;
      resizeCanvas();
    }
    function resizeCanvas() {
      canvas.style.width = '100%';
      canvas.style.height= '100%';
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      sceneManager.onWindowResize();
    }

    //infinite loop with limited time with frame time.
    function render(time) {
      requestAnimationFrame(render); //native function that apply update at each refresh.
      //all the function that are put in the request
      sceneManager.update();
    }
  }