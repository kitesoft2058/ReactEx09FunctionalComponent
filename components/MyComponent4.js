import { useState } from "react"

//다른 .js에서 import 하도록 export 하면서 함수 정의
export default function MyComponent4(){

    // [1]실습에서 추가 - state 같은 능력의 변수를 만들어주는 HOOK 문법
    let message  = useState('Hello world')  //message라는 이름의 state역할의 변수를 만들어 줌. ()파라미터에 초기값 설정가능

    // [2]실습에서 사용할 message 변수값 변경 지역함수만들기 
    function changeMessage(){
        message= 'nice to meet you'
        alert(message)// 클릭이벤트 반응 확인용 
        // 화면갱신은 되지 않음. why? state변수값의 변경은 반드시 setState()라는 메소드를 써야 함.
        // 하지만 함수형 컴포넌트는 setState()라는 기능메소드가 없음. Component클래스를 상속받지 않았으니까...
        // 참고로 UI를 강제로 갱신하는 update 기능메소드로 없음...
    }

    // [3]실습에서 추가 - 온전한 useState() 문법사용 [ 변수, 설정함수 ]
    let [ title, setTitle ] = useState('NICE HOOK') //state변수, setState() 모두 한번에 만들어 줌.

    // ***** let [ a,b ] 문법 소개 --- 배열 분할 대입 문법 (객체 구조분해할당과 유사한 기능) ****************************
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let [num1, num2, num3, num4, num5, num6, num7, num8, num9] = arr;
    // num1 =1, num=2... 이렇게 저장됨.   
    // 즉, useState()메소드는 배열을 리턴해주는 것이고 이를 분할하여 받았다고 생각하면 됨. [1]실습의 message는 사실 배열객체였던 것임. typeof(message)를 해보면 object(배열의 타입이 이렇게 나옴)라고 나올것임. title은 string으로 나옴.
    // ****************************************************************************************************

    // [3.1] 익명함수로 title 값 변경을 요청하는 작업 메소드 만들기
    const changeTitle= function(){
        //useState() 기능으로 만들어 준 title 변수 값 설정 함수 호출
        setTitle('VERY GOOD HOOK') // 화면이 자동 갱신됨. 마치. setState()처럼..
    }


    return (
        <div style={{border:'2px solid black', padding:'8px', margin:'4px'}}>

            <h4>함수형 컴포넌트에서 state 사용해보기 컴포넌트</h4>

            {/* p요소의 글씨를 변경하려면 값을 가진 변수를 콘텐츠로 놓아야 함. 값변경에 영향을 주는 state 라는 특별한 변수 필요. */}
            {/* 함수형 컴포넌트는 Component클래스를 상속하지 않았기에 state라는 아주 특별한 멤버변수가 없음. 즉, 함수형컴포넌트는 state가 없음. 그래서 초창기에는 stateless component라고도 부르기도 했음.*/}
            {/* 하지만 리액트 버전이 올라가면서.. state 사용에 대한 아쉬움으로 인해 HOOK 이라 불리는 함수형컴포넌트의 문법이 등장함.  */}
            {/* HOOK 문법은 꽤 많기에 처음부터 모두 배우기 보다는 자주 사용하는 것부터 익히면서 필요할 때 하나씩 추가로 소개할 예정임. */}

            {/* [1] HOOK 문법 중 class component의 state 같는 변수를 만들어주는 useState() 기능메소드 사용해보기 */}
            <p> { message } </p>  {/* message는 이 함수의 지역변수이므로 this. 키워드 사용안함 */}

            {/* [2] 버튼 클릭하여 message 값 변경해보기 */}
            <button onClick={ changeMessage }>change message</button>

            <hr></hr>

            {/* [3] setState()기능메소드까지 만들어주는 온전한 useState() HOOK 문법 구현하기. */}
            <p> { title } </p>
            <button onClick={ changeTitle }>change title</button>

            {/* ## 배열 분할 대입에 대한 문법체크를 목적... #### */}
            <p> {typeof(message)} , {typeof(title)} </p>

            {/* 객체의 구조분해 할당과 배열의 분할대입 문법을 리액트코딩에서 많이 애용하므로 문법을 잘 봐둘 것을 권장! */}

        </div>
    )
}