import styled from "@emotion/styled";

const Line = styled("div")(({ theme }) => ({
    background: "#c09d34",
    height: "0.15rem",
    width: "80%",
}));


const GoldenLine: React.FC<any> = () => {
    return (<Line></Line>)
};

export default GoldenLine;