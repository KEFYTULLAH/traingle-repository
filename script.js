function taianglecalculate(){
    // base man
    const trianglevaluman = document.getElementById('trianglevalu');
    const traingl = trianglevaluman.value;
    const base = parseFloat(traingl);
    // console.log ( base)

    //  heght man
    const trainglehightman = document.getElementById('trainglehight');
    const heiman = trainglehightman.value;
     const hight = parseFloat(heiman);
    //  console.log(hight)

    const area = 0.5 * base * hight;
    // console.log(area)

    // display triangle area
    const transSpan = document.getElementById('triArea');
    transSpan.innerText = area;
}

// traiangle finish

// rectangle 
function calculateRactangleArea(){
    const rectaWvaluere = document.getElementById('rectaWvalue');
    const rectaWvaluereci = rectaWvaluere.value;
    const width = parseInt(rectaWvaluereci)
    // console.log(width)

    // length
    const lengthvaluere = document.getElementById('lengthvalue');
    const lengthvaluereee = lengthvaluere.value;
    const length = parseInt(lengthvaluereee);
    // console.log( length);
    
     // area
     const area = width * length;
    //  console.log(area);

     const transarea = document.getElementById('trans');
     transarea.innerText = area;

      }

    //   finis rectangle

    function calculateParallelogram(){
        const Parallelogramb = document.getElementById('Parallelogramb');
        const Parallelogrambre = Parallelogramb.value;
        const base = parseInt(Parallelogrambre);
        // console.log( base)
        // finis base

        const Parallelogramh = document.getElementById('Parallelogramh');
        const Parallelogramhre = Parallelogramh.value;
        const height = parseInt(Parallelogramhre);
        // console.log(height)
        // finis heiight

        const area = base * height;
        // console.log(area)

        const transformvalu = document.getElementById('tran');
        transformvalu.innerText = area;
         console.log('hello')
    }
