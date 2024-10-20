console.clear()
let boomNum = 0;
const maxx=100;
let boomFlags=new Array(maxx+1);

const navButton=document.querySelector('.navButton');

navButton.addEventListener('click',reset);

function reset(){
    boomNum=Math.floor(Math.random()*maxx)+1;
    for(let i=1;i<=maxx;i++){
        boomFlags[i]=1;
    }
    for(let i=0;i<maxx;i++){
        nums[i].style.backgroundColor='aquamarine';
    }
}
const numContainer=document.querySelector('.numContainer')
for(let i=1;i<=maxx;i++){
    createNum(i);
}
const nums=document.querySelectorAll('.num')
function createNum(si) {
    const num=document.createElement('div');
    num.className="num"
    num.append(si)
    numContainer.appendChild(num)
    num.addEventListener("click",function (qualifiedName, value){
        if(boomFlags[si]==0){
          return;
        }
        boomFlags[si]=0;
        if(si==boomNum){
            num.style.backgroundColor='black';
        }else{
            num.style.backgroundColor="red";
            if(boomNum<si){
                for(let j=si+1;j<=maxx;j++){
                    setTimeout(function () {
                        nums[j-1].style.backgroundColor="red";
                    },500);
                }
            }else{
                for(let j=1;j<si;j++){
                    setTimeout(function () {
                        nums[j-1].style.backgroundColor="red";
                    },500);
                }
            }
        }
    });
}


navButton.click();