import SceneManager from './SceneManager';
import TweenLite from 'gsap/TweenLite';

export default containerElement => {
    //TweenLite.ticker.addEventListener("tick",render);

    const canvas = createCanvas(document, containerElement);
    const sceneManager = new SceneManager(canvas);
    resizeCanvas();
  
    bindEventListeners();
    render();
    function createCanvas(document, containerElement) {
      const canvas = document.createElement('canvas');
      containerElement.appendChild(canvas);
     
    
      return canvas;
    }
    function bindEventListeners() {
      window.onresize = resizeCanvas;
      canvas.onclick = onClickAction;
      canvas.addEventListener("mouseenter", () => {
        sceneManager.enterCanvas();
      });
      canvas.addEventListener("mouseleave", () => {
        sceneManager.leaveCanvas();
      });
      canvas.addEventListener("mousemove", (event) => {
        sceneManager.mouseMoveOnCanvas(event,canvas);
      } );
      
      
      resizeCanvas();
    }
    function resizeCanvas() {
      canvas.style.width = '90%';
      canvas.style.height= '100%';
      canvas.style.maxWidth = '90vw';
      canvas.style.maxHeight = '80vh';
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      sceneManager.onWindowResize();
      console.log(canvas.getBoundingClientRect().top);
      console.log(canvas.clientHeight);
    }

    function onClickAction(){
      //sceneManager.clickAction();
    }

    function onMouseEnter(){
      console.log('mousse enter');
    }
    function onMouseLeave(){
      console.log('mousse leave');
    }

    



    //infinite loop with limited time with frame time.
    function render(time) {
      requestAnimationFrame(render); //native function that apply update at each refresh.
      //all the function that are put in the request
      sceneManager.update();
    }
  }