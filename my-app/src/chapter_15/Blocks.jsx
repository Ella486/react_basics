import styled from "styled-components";
/*최선 버전으로 설치시(불안정) 계속 안돌아가서 
  npm uninstall styled-components 명령어로 삭제 후
  npm install "styled-component@5.3.10" 명령어로 버전 낮춰서 설치함
*/

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: lightgrey;
`;

const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    }, 
    {
        label: "2",
        padding: "3rem",
        backgroundColor: "green",
    }, 
    {
        label: "3",
        padding: "2rem",
        backgroundColor: "blue",
    },
];

function Blocks(props) {
    return (
        <Wrapper>
            {blockItems.map((blockItem) => {
                return (
                    <Block 
                        padding={blockItem.padding}
                        backgroundColor={blockItem.backgroundColor}
                    >
                        {blockItem.label}
                    </Block>            
                );
            })}
        </Wrapper>
    );
}

export default Blocks;
