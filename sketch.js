let x = 0;
let y = 0;

function draw() {
	background(255);
	x += (mouseX - x) * 0.2;
	y += (mouseY - y) * 0.2;
	fill(100);
	noStroke();
  circle(x, y, 50);
} //マウスストーカー用のdivを取得
const stalker = document.getElementById('mouse-stalker'); 

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});
