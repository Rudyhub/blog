/* eslint-disable */
export default {
  scroll(el, direction){
    let touchY = 0, end = 0, startTop = 0, prev = 0, speed = 0, prevent = {passive: false}, timer, scrollTop = 'scrollTop', clientY = 'clientY';
    if(direction && direction.toLowerCase() === 'x'){
      scrollTop = 'scrollLeft';
      clientY = 'clientX';
    }
    el.addEventListener('mousedown', function(e){
      e.preventDefault();

      touchY = e[clientY];
      startTop = el[scrollTop];
      prev = touchY;
      document.addEventListener('mousemove', moveFn, prevent);
      document.addEventListener('mouseup', endFn);
    }, prevent);

    function moveFn(e) {
      e.preventDefault();
      end = e[clientY];
      speed = end - prev;
      prev = end;
      el[scrollTop] = startTop + (touchY - end);
    }

    function endFn() {
      let d = Math.abs(speed), dis = end-touchY, dir = dis < 0 ? 1 : -1;
      document.removeEventListener('mousemove', moveFn, prevent);
      document.removeEventListener('mouseup', endFn);

      //缓冲
      if(Math.abs(dis) > 5){
        if(timer) clearInterval(timer);
        timer = setInterval(function () {
          d *= .8;
          if(d < 1) clearInterval(timer);
          el[scrollTop] += d*dir;
        }, 16.6);
      }
    }
  }
}
