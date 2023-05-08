import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"

const SearchInputForm = () => {
    const navigate = useNavigate();
    const [area, setArea] = useState<string>('');
    const [type, setType] = useState<string>('daily');

    const onClick = () => {
        // 나중에 예외처리 합시당
        navigate(`/${type}/${area}`);
    }

    return <St.SearchInputForm>
        <select onChange={(e) => setType(e.target.value)}>
            <option value='daily'>오늘</option>
            <option value="weekly">주간</option>
        </select>
        <input type="text" id="area" name="area" value={area} onChange={(e) => setArea(e.target.value)} />
        <button type="button" value="검색하기" onClick={onClick}>검색하기</button>
    </St.SearchInputForm>
}

const St = {
    SearchInputForm: styled.article`
        width: 100vw;
        height: 120px;
        background-color: #00B1D270;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        select, select > option {
            font-size: 0.7rem;
            border: none;
            border-radius: 5px;
        }

        input {
            font-size: 0.8rem;

            padding: 5px 10px;

            border: none;
            border-radius: 10px;
        }

        button {
            font-size: 0.7rem;
            font-weight: 600;

            width: 100px;
            height: 40px;
            border: none;
            border-radius: 10px;
            color: white;
            background-color: #00B1D2;

            transition-duration: .3s;

            &:hover {
                color: #00B1D270;
                background-color: white; 
            }
        }
    `
}

export default SearchInputForm;