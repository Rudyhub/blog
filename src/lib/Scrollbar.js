/* eslint-disable */
export default {
  scroll(el, direction, preventKeys = []){
    let touchY = 0, end = 0, startTop = 0, prev = 0, speed = 0,
      prevent = {passive: false}, timer,
      scrollTop = 'scrollTop', clientY = 'clientY',
      len = preventKeys.length, i;
    if(direction && direction.toLowerCase() === 'x'){
      scrollTop = 'scrollLeft';
      clientY = 'clientX';
    }
    el.addEventListener('mousedown', function(e){
      for(i=0; i<len; i++){
        if(e[preventKeys[i]]){
          return false
        }
      }
      e.preventDefault();
      touchY = e[clientY];
      startTop = el[scrollTop];
      prev = touchY;
      document.addEventListener('mousemove', moveFn, prevent);
      document.addEventListener('mouseup', endFn);
    }, prevent);

    el.addEventListener('mousewheel', function (e) {
      for(i=0; i<len; i++){
        if(e[preventKeys[i]]){
          return false
        }
      }
      let dir = e.wheelDelta < 0 ? 1 : -1;
      el[scrollTop] += dir*10
      easeOut(10, 6, dir);
    });

    function moveFn(e) {
      e.preventDefault();
      end = e[clientY];
      speed = end - prev;
      prev = end;
      el[scrollTop] = startTop + (touchY - end);
    }

    function endFn() {
      document.removeEventListener('mousemove', moveFn, prevent);
      document.removeEventListener('mouseup', endFn);
      easeOut(Math.abs(speed), end-touchY, end-touchY < 0 ? 1 : -1);
    }

    function easeOut(d, dis, dir){
      if(Math.abs(dis) > 5){
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(easeOut)
        function easeOut() {
          d *= .8;
          cancelAnimationFrame(timer)
          timer = requestAnimationFrame(easeOut)
          if(d < 1) cancelAnimationFrame(timer);
          el[scrollTop] += d*dir;
        }
      }
    }
  }
}
