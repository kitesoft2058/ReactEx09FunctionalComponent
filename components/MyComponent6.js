// 화살표함수 참조값이 변경될 일이 거의 없기에 보통은 let보다는 const가 선호됨. 
const MyComponent6= (props)=>{ //props도 받아서 보여주기
    return (
        <div style={{border:'1px dotted black', padding:'8px', margin:'4px'}}>
            <h5>arrow function component</h5>

            {/* props 받아 보여주기 */}
            <em>안녕하세요. { props.nickname }님</em>
        </div>
    )
}

// 다른 문서에서 import 하기 위해 export
export default MyComponent6


// props로 nickname이 전달되지 않으며 undefined 값이 되어 화면의 닉네임영역에 아무것도 표시되지 않음. 
// 어색하다면... propsDefault 값을 지정. class component에서는 static 멤버로 값을 지정했음. 
// 함수형에서는 static 키워드를 사용못하기에 별도의 영역에서 함수명.defaulProps로 지정 [ 실시간 적용안되면 브라우저를 새로고침 ]
MyComponent6.defaultProps= {
    nickname:'리액트'
}