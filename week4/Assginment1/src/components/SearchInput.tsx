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
        <button type="button" value="검색하기" onClick={onClick} />
    </St.SearchInputForm>
}

const St = {
    SearchInputForm: styled.article`
        width: 100vw;
        height: 150px;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    `
}

export default SearchInputForm;