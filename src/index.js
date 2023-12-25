
const defaultOptions = {

}
function setStyle (tag,style) {
    return Object.assign(tag.style, style)

}
function luojing(container, option, data) {
    let width = 50 + data.reduce((sum,i)=> sum += i.width, 0);
    data.reverse().forEach((layer,index) => {
        
        const layerNode = document.createElement('div');
        layerNode.className = 'layer';
        const lstyle = {
            width: `${width}px`,
            height: `${width}px`,
            rotate:  `${layer.rotate ?? 0}deg`,
            // zIndex: 99 -index,
        }
        setStyle(layerNode,lstyle);
        for(let i = 0; i < layer.positions.length / 2;i++) {
            const shan = document.createElement('div');
            shan.className ='shan';
            setStyle(shan, {
                width:  `${width}px`,
                height:  `${width}px`,
                background:i === 0 ? layer?.bgColor?.[0] || 'none': 'none',
                transform: `skew(${360 /layer.positions.length - 90}deg,0deg)`,
                rotate:  `${720 /layer.positions.length * i + (180 / layer.positions.length )}deg`
            });
            layerNode.appendChild(shan);
        }
        if (layer.positions.length % 2 == 1) {
            layer.positions.forEach(position => {
                const div = document.createElement('div');
                div.className.add('postion')
                div.innerHTML = position;
                layerNode.appendChild(div)
            })
        } else {
            const text = document.createElement('div');
            text.className = 'text';
            setStyle(text,lstyle);
            for (let i = 0; i < layer.positions.length / 2; i++) {
                const div = document.createElement('div');
                div.className = `position position-${index}-${i}`;
                const left = document.createElement('span');
                const right = document.createElement('span');
                left.innerHTML = layer.positions[i];
                right.innerHTML = layer.positions[layer.positions.length / 2 + i];
                left.className = 'left'
                right.className = 'right';
                setStyle(div,{transform: `rotateZ(${360 / layer.positions.length * i}deg)`,})
                setStyle(left,{transform: `rotateZ(-90deg)`})
                setStyle(right,{transform:`rotateZ(90deg)`})
                // div.style.transform = `rotateZ(${360 / layer.positions.length * i}deg)`;
                // left.style.transform = `rotateZ(-90deg)`;
                // right.style.transform = `rotateZ(90deg)`;
                div.appendChild(left);
                div.appendChild(right);
                text.appendChild(div)
            }
            container.appendChild(text);
        }
       

        container.appendChild(layerNode)

        // const yuan =  document.createElement('div');
        // setStyle(yuan,lstyle);
        // yuan.className = 'yuan'
        // for(let i = 0; i < layer.positions.length / 2;i++) {
        //     const line =  document.createElement('div');
        //     line.style.transform = `rotateZ(${360 / layer.positions.length * i + (180 / layer.positions.length )}deg)`;
        //     yuan.appendChild(line);
        // }
        // container.appendChild(yuan)
      
        width -= layer.width;
    });

    const time = document.createElement('div');
    time.className = 'time';
    setInterval(() => {
        // const rotate = 116.22 - 120; 
        const t = new Date();
        const tim = (t.getHours() *3600 + t.getMinutes() * 60 + t.getSeconds()) / 240
        console.log('%c [ time ]-90', 'font-size:13px;  ackground:pink; color:#bf2c9f;', tim)
        time.style.rotate = `${tim}deg`
    }, 5000);
    container.appendChild(time);
    
}

export function draw (container,option,data) {
    let width = 50;
    data.forEach((layer,index) =>{
        width += layer.width;
        const quan = document.createElement('div');
        quan.className='quan';
        setStyle(quan,{
            width: `${width}px`,
            height: `${width}px`,
        })
        layer.positions.forEach((pos, i) => {
            const shan = document.createElement('div');
            shan.className ='shan';
            setStyle(shan, {
                width:  `${width}px`,
                height:  `${width}px`,
                transform: `skew(${90 - 360 /layer.positions.length}deg,0deg)`,
                rotate:  `${360 /layer.positions.length * i}deg`
            });
            shan.innerHTML = pos;
            quan.appendChild(shan)
        })
        container.appendChild(quan)
    })
}
export default luojing;