import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    //console.log(theme);
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                //backgroundColor: theme == "light" ? "white" : "black",
                //color: theme == "light" ? "black" : "white",
                //eslint 에서 complie 시에 warning --> '==' 대신에 '===' 사용 권유
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button> 
        </div>
    );
}

export default MainContent;