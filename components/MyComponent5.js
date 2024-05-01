
// ERROR : export default 는 let, const 키워드와 함께 동시에 사용불가 [지역변수 성질때문으로 보여짐]
// export default let MyComponent5= function(){
// }

// (해결방법 #1) 전역변수로 만들기
// export default MyComponent5= function(){
// }

// (해결방법 #2) default가 아닌 그냥 export 만 하기.. [단, default가 아닌 export는 import할때 {}가 필요함. 불편.]
// export let MyComponent5= function(){
// }

// (해결방법 #3) 익명함수를 저장한 변수를 만들고 별도의 라인에 export default 를 쓰면 적용됨
let MyComponent5= function(){
    return (
        <div>
            <p>This is MyComponent5</p>
        </div>
    )
}

export default MyComponent5
