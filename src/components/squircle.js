function svg(path, color){
    let svg = `<svg xmlns='http://www.w3.org/2000/svg'><path d='${path}' fill='${color}'></path></svg>`;
    return svg.replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E");
}

function path(width, height, roundness){
    let w = width;
    let h = height;
    let wm = w * ( h / w );
    let r = -( w / 20 ) + ( w / 10 * roundness );
    let path = `
        M ${w/2},0
        C ${r},0        0,${r}        0,${wm/2} 
          0,${wm-r}     ${r},${wm}    ${w/2},${wm} 
          ${w-r},${wm}  ${w},${wm-r}  ${w},${wm/2} 
          ${w},${r}     ${w-r},0      ${w/2},0
      `;
    return path.replace( /  +/g, " " ).replace( /\n/gi,"" );
}

export default function Squircle(props){
    const width = Number(props.width) || 100;
    const height = Number(props.height) || width;
    const roundness = Number(props.roundness) || 1;
    const color = props.color || "#7788aa";
    const bgImage = `url("data:image/svg+xml;utf8,${svg(path(width, height, roundness), color)}")`;

    return <div class="squircle" style={{ "width": width + 'px', "height": height + 'px', backgroundImage: bgImage }}>
</div>
}
