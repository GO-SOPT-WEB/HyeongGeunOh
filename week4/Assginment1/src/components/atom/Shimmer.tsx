import { styled } from "styled-components";

const Shimmer = ({ width, height }: { width: string, height: string }) => {
    return <St.Shimmer width={width} height={height} >
    </St.Shimmer>
}

const St = {
    Shimmer: styled.div<{ width: string, height: string }>`
    width: ${props => props.width};
        height: ${props => props.height};

        border-radius: 20px;

        background: #f6f7f8;
        background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
        background-repeat: no-repeat;
        background-size: 800px 104px; 
        display: inline-block;
        position: relative; 
        
        animation-duration: 1s;
        animation-fill-mode: forwards; 
        animation-iteration-count: infinite;
        animation-name: placeholderShimmer;
        animation-timing-function: linear;

        @keyframes placeholderShimmer {
            0% {
              background-position: -468px 0;
            }
            
            100% {
              background-position: 468px 0; 
            }
        }
    `
}

export default Shimmer;