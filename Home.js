import {Component, Fragment} from 'react'
import MyComponent2 from './components/MyComponent2'
import MyComponent3 from './components/MyComponent3'
import MyComponent4 from './components/MyComponent4'
import MyComponent5 from './components/MyComponent5'
import MyComponent6 from './components/MyComponent6'

export default class Home extends Component{

    //(실습1 [1])에서 사용할 JSX요소를 저장하고 있는 변수
    aa= <h4>This is heading element</h4>

    //(실습1 [2])에서 사용할 JSX요소를 리턴하는 함수
    display(){
        return <h4>This is element via return of display function</h4>
    }

    render(){
        return(
            <Fragment>

                {/* Component 클래스를 상속하여 구현하는 class형 컴포넌트는 다소 무겁고 기본 class 상속 및 작성문법 코드로 인해 다소 번거로움 */}
                {/* 컴포넌트는 결국 화면에 보여질 요소들을 보여주는 역할이므로. 꼭 Component클래스를 상속하지 않아도 JSX요소를 return 해주기만 하면 됨. */}                

                {/* (실습1) 별도의 커스텀 컴포넌트없이 JSX요소를 보여주는 구성요소에 대해 이해 해보기.. */}
                {/* [1] 이전시간에 소개했던 것 처럼 변수에 JSX를 저장하고 있으면 변수명만 작성하면 값이 출력되어 요소가 보여짐 */}
                { this.aa }
                {/* [2] JSX의 {}영역안에서는 값을 가진 변수나, 값을 리턴하는 함수호출문을 사용할 수 있으니. JSX요소를 리턴하는 함수를 호출할 수도 있겠죠. */}
                { this.display() }

                {/* display()함수를 실행하면 JSX요소가 그려짐.. 다시말해 display 함수가 JSX요소를 가지고 있는것 처럼 볼 수 있음. */}
                {/* 그래서 Component클래스를 상속하지 않고 간단히 함수형 구조로 컴포넌트 역할의 구성요소를 만들 수 있음. 이를 함수형 컴포넌트라고 함 */}
                
                {/* (실습2) 위 display()처럼 JSX요소를 리턴하는 함수를 만들고 사용하기(Home 컴포넌트의 밖에 정의). 단, 함수호출문법 ()가 아닌 마치. 커스텀 컴포넌트 사용하듯이 태그문 사용. 이것이 함수형 컴포넌트의 사용문법 특징임. */}
                <MyComponent></MyComponent>
                {/* 여러번 사용할 수도 있음 - 마치 ex07_커스텀 컴포넌트 처럼.. */}
                <MyComponent></MyComponent>

                {/* (실습3) 당연히 별도의 .js에 함수형 컴포넌트를 만들고 import 하여 사용할 수도 있음 [ components폴더 만들고. 그 안에 MyComponent2.js파일 만들고 작성 ] */}
                <MyComponent2></MyComponent2>

                {/* (실습4) 매번 같은 글씨를 보여주면 재사용성이 떨어지니 속성을 전달하여 다른 데이터를 보여주는 컴포넌트 만들어 보기. props에 대한 학습 [ components/MyComponent3.js ]*/}
                <MyComponent3></MyComponent3>
                <MyComponent3 aaa="SAM"></MyComponent3>
                <MyComponent3 aaa="ROBIN" type='search' placeholder='검색'></MyComponent3>

                {/* (실습5) 함수형 컴포넌트에서 UI 변경에 영향을 주는 상태값인 state 사용에 대한 실습 [버튼 클릭으로 글씨 변경하는 컴포넌트 구현]*/}
                <MyComponent4></MyComponent4>

                {/* (실습6) 함수형 컴포넌트를 익명함수, 화살표함수로 만들어보기 */}
                {/* [1] 익명함수로 만든 functional component */}
                <MyComponent5></MyComponent5>

                {/* [2] 화살표함수로 만든 functional component [with props & default props]*/}
                <MyComponent6></MyComponent6>
                <MyComponent6 nickname='oops'></MyComponent6>

                {/* 대부분의 개발자는 화살표함수를 선호함. 표기법이 간결하다고 느끼고 this키워드에 대한 것도 고려. 자세한 내용은 개별적으로 검색해볼 것. */}

            </Fragment>
        )
    }
}//Home Component..

// (실습2)에서 사용할 함수형 컴포넌트 - 문법적으로는 일반적인 함수 정의 문법과 같지만 컴포넌트라고 인식할 수 있도록 파스칼표기법 권장 (JS의 객체만들기 문법 중 생성자함수 문법을 사용하는 것으로 보면 됨)
function MyComponent(){
    return <p>This is functional MyComponent</p>
}