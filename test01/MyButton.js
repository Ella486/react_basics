function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    /* React.createElement : jsx code를 javaScript code로 변환해주는 역할 */
    return React.createElement(
        'button', /* element type이 옴 ex) HTML 태그 또는 다른 react component */
        { onClick: () => setIsClicked(true) }, /* [props] : 속성들이 들어감 */
        isClicked ? 'Clicked!' : 'Click here!' /* 현재의 element가 포함하고 있는 자식 element */
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);