function attachGradientEvents() {
    const result=document.getElementById('result');
    const gradient=document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(e) {
        let power = e.offsetX / (e.target.clientWidth-1);
        power=Math.trunc(power*100);
        result.textContent=power+'%';
    }
    function gradientOut(e) {
        result.textContent='';
    }



}