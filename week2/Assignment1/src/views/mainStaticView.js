const MainStaticView = () => {
  return `
  <header>
  <h1>🎶 keshi's song 🎶</h1>
  <span class="material-symbols-outlined">menu</span>
  <aside>
    <h1>메뉴</h1>
    <div id="menu_wrapper">
      <span id="addNewGoods_button">새 상품 추가</span>
      <span>찜 목록</span>
    </div>
  </aside>
</header>
<div id="nav_section_wrapper">
  <nav>
    <section id="type_wrapper">
      <h3>종류</h3>
    </section>
  </nav>
  <div id="tag_card_wrapper">
    <section id="tag_button">
    </section>
    <section id="card_section">
    </section>
  </div>
</div>
    `;
};

export default MainStaticView;