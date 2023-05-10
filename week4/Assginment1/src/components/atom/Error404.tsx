const Error404 = ({ error }: { error: string }) => {
    return (
        <>
                <h1>날씨 정보를 불러올 수 없어요...</h1>
                <strong>에러 내용 : {error}</strong>
        </>
    )
}

export default Error404;