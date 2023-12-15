
const defaultOptions = {

}
function luojing(container, option, data) {

    data.forEach((layer,index) => {
        const layerNode = document.createElement('div');
        layerNode.className = 'layer';
        layerNode.style.width = `${layer.width}px`;
        layerNode.style.height = `${layer.width}px`;
        layerNode.style.zIndex = 99 - index;
        if (layer.positions.length % 2 == 1) {
            layer.positions.forEach(position => {
                const div = document.createElement('div');
                div.className.add('postion')
                div.innerHTML = position;
                layerNode.appendChild(div)
            })
        } else {
            for (let i = 0; i < layer.positions.length / 2; i++) {
                const div = document.createElement('div');
                div.className = `position position-${index}-${i}`;
                const left = document.createElement('span');
                const right = document.createElement('span');
                left.innerHTML = layer.positions[i];
                right.innerHTML = layer.positions[layer.positions.length / 2 + i];
                left.className = 'left'
                right.className = 'right';
                div.style.transform = `rotateZ(${360 / layer.positions.length * i}deg)`;
                left.style.transform = `rotateZ(-90deg)`;
                right.style.transform = `rotateZ(90deg)`;
                div.appendChild(left);
                div.appendChild(right);
                layerNode.appendChild(div)
            }
        }

        container.appendChild(layerNode)

        const yuan =  document.createElement('div');
        yuan.style.width = `${layer.width}px`
        yuan.style.height =`${layer.width}px`
        yuan.style.zIndex = 99 - index;
        yuan.className = 'yuan'
        for(let i = 0; i < layer.positions.length / 2;i++) {
            const line =  document.createElement('div');
            line.style.transform = `rotateZ(${360 / layer.positions.length * i + (180 / layer.positions.length )}deg)`;
           
            yuan.appendChild(line);
        }
        container.appendChild(yuan)

    });
    
}
export default luojing;