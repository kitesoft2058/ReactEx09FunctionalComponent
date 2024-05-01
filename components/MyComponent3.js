

function MyComponent3( props ){ // 함수형 컴포넌트에 전달된 속성들은 이 함수의 매개변수(객체)에 멤버변수로 전달되어 옴.

    // [3]실습에서 추가. - props 객체의 멤버변수들을 뽑아서 새로운 변수들에 대입해주는 문법
    let { aaa, placeholder} = props //모든 멤버를 반드시 뽑아올 필요는 없음. 필요한 것만 뽑아도 됨

    return (
        <div>
            {/*[1] Component 클래스를 상속하지 않았기에 props라는 특별한 멤버변수가 존재하지 않음 */}
            {/* 함수형 컴포넌트에 전달된 속성들은 이 함수의 ()파라미터로 전달되어 옴. 파라미터니까 this키워드 없이 사용*/}
            <span>Hello { props.aaa }</span>

            {/* [2] 여러개의 속성들 받기 */}
            <input type={props.type} placeholder={props.placeholder} style={{marginLeft:'1rem'}}></input>

            {/* [3] 매번 props라는 속성명을 쓰기 귀찮음. 이럴때는 구조분해할당 문법을 사용함 */}
            <input type={props.type} placeholder={placeholder} value={aaa}></input>

        </div>
    )
}


// 다른 .js에서 import 할수 있도록 export
export default MyComponent3