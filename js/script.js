const result = document.querySelector('#result');
const three = document.querySelector('#three'); 
const button = document.querySelector('#button');
const img = document.querySelector('#img');
const move = { 
                transform: [
                    'translateX(-100vw) scale(1)', // 初期位置（左に小さめ）
                    'translateX(0) scale(1.5)', // 中間位置（中央で拡大）
                    'translateX(100vw) scale(1)' // 終了位置（右で元のサイズ）
                  ]
            };
const options = {duration:5000,easing:'ease'};

button.addEventListener('click', () => {
    const randomnumber = Math.floor(Math.random() * 100 + 1); // 1から100までのランダムな数値を表示
    if(randomnumber % 3 === 0) {
        three.textContent = '3の倍数です';
        three.style.fontSize = '100px';
        result.textContent = randomnumber;
        result.style.color ='red';
        result.style.fontSize = '500px';
        img.animate(move, options);
    }else{
        three.textContent = '3の倍数ではありません';
        three.style.fontSize = '20px';
        result.textContent = randomnumber;
        result.style.color = 'black';
        result.style.fontSize = '200px';
    }
});
