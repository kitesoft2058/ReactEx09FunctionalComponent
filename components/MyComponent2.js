// Component 클래스를 상속하지 않기에 굳이 import 할 필요 없음

// (실습3) 함수형 컴포넌트 정의
function MyComponent2(){
    return (
        // [1] 당연히 여러 요소들을 묶어서 컴포넌트 내용물을 구성해도 됨
        // <div>
        //     <span>안녕하세요. 함수형 컴포넌트인 MyComponent2 입니다.</span> 
        //     <button>버튼</button>
        // </div>

        // [2] 당연히 스타일이 적용하여 구성할 수 있음
        <div style={{padding:'8px', margin:'4px'}}>
            <span>안녕하세요. 함수형 컴포넌트인 MyComponent2 입니다.</span> 
            <button>버튼</button>
        </div>
    )
}

//주의!!!  Home.js에서 MyComponent2를 import 해서 사용하기에 반드시 export 해줘야 함
export default MyComponent2 