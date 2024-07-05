function MyButton(props){
    //변수 선언 / 상태변수를 값으로 가짐
    //useState(false)를 사용하여 isClicked라는 상태 변수와 setIsClicked라는 상태 갱신 함수를 선언, 초기 값은 false
    const [isClicked, setIsClicked] = React.useState(false);

    //React.createElement를 사용하여 버튼 요소를 생성
    //첫 번째 인수는 'button', HTML 버튼 요소를 나타냄
    //두 번째 인수는 객체 {onClick:() => setIsClicked(true)}로, 버튼이 클릭될 때 setIsClicked(true)가 호출
    //세 번째 인수는 버튼의 텍스트로, isClicked가 true이면 'Clicked!'를, false이면 'Click here!'를 표시
    return React.createElement(
        'button',
        {onClick:() => setIsClicked(true)},
        isClicked ?'Clicked!' : 'Click here!'
    )
}

//#root라는 id를 가진 DOM 요소를 선택, 이 요소는 React 컴포넌트가 렌더링될 컨테이너 역할
const domContainer= document.querySelector("#root");
//ReactDOM.createRoot(domContainer)를 호출하여 domContainer 내에 새로운 React 애플리케이션 루트를 생성
const root=ReactDOM.createRoot(domContainer);
//root.render(React.createElement(MyButton))를 호출하여 MyButton 컴포넌트를 렌더링
root.render(React.createElement(MyButton));

//React의 상태 관리(useState)와 이벤트 처리(onClick)를 통해 버튼의 상태를 업데이트하고 'Click here!'에서 'Clicked!'로 바뀌는 버튼을 생성하는 코드