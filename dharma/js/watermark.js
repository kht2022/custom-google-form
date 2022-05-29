var watermark = {}

function setWatermark(args) {
 console.log(...arguments)
	//声明一个怪异一点的变量，确保id的唯一性
    var id = '111.222.333.456';
    var xIndex = 10;//绘制文本的 x 坐标位置
    var yIndex = 200;//绘制文本的 y 坐标位置
    var xInterval = 30//有多个参数时的行间间隔
    if (document.getElementById(id) !== null) {
        document.body.removeChild(document.getElementById(id));
    }
	//利用canvas绘制水印信息
    var can = document.createElement('canvas');
	
	can.fillStyle = 'red';
    can.strokeStyle = 'black';
	
    can.width = 400;
    can.height = 300;
    var cans = can.getContext('2d');
    cans.rotate(-40 * Math.PI / 180);  //左下右上
	//cans.rotate(30 * Math.PI / 180);  //左上右下
    cans.font = '23px Arial';
    // ziti yanse
    //cans.fillStyle = 'rgba(250, 0, 250, 0.5)';
    cans.fillStyle = 'rgba(123, 129, 132, 0.5)';
    cans.textAlign = 'left';
    cans.textBaseline = 'bottom';
    for(let i = 0;i<args.length;i++){
    	cans.fillText(args[i], xIndex , yIndex); //绘制水印文案
    	yIndex+=xInterval ;//设置每行间隔		
	}
	//can.fill();
    //can.stroke();
//创建div用于显示
    var div = document.createElement('div');
    div.id = id;
    div.style.pointerEvents = 'none';
    div.style.top = '10px';
    div.style.left = '10px';
    div.style.position = 'fixed';
    div.style.zIndex = '100000';
    div.style.width = document.documentElement.clientWidth - 50 + 'px';
    div.style.height = document.documentElement.clientHeight - 50 + 'px';
    //div承载水印显示
    div.style.background = 'url(' + can.toDataURL('image/png') + ') repeat';
    document.body.appendChild(div);
    return id;
}

function createObserver(id,args){
// 创建一个观察器实例并传入回调函数
var observer = new MutationObserver(()=>{
        if (document.getElementById(id) === null) {
            id = setWatermark(args);
        }});

var option = {
  'childList': true,//子元素的变动
  'subtree': true//所有下属节点（包括子节点和子节点的子节点）的变动
};

observer.observe(document.body, option);//观察body下节点的变化
}

watermark.set = function(){
	let args =Array.prototype.slice.apply(arguments);
    let id = setWatermark(args);

    // 创建观察器检测如果水印被去掉了，自动给加上
    createObserver(id,args);

    //在窗口大小改变之后,自动触发加水印事件
    window.onresize = function(){
        setWatermark(args);
    }
}
window.watermark = watermark;
