const TagCheckBoxView = ({ tag, id }) => {
  return `<article>
      <input type="checkbox" id=${id} />
      ${tag}
  </article>`
}

export default TagCheckBoxView;