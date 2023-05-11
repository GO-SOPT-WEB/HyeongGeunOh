const CheckedTagBoxView = ({ tag, id }) => {
  return `<article style="color: #68dca7;
    background-color: black;">
    <input type="checkbox" id=${id} checked />
    ${tag}
</article>`;
};

export default CheckedTagBoxView;
