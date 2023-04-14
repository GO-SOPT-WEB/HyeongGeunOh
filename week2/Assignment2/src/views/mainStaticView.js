const MainStaticView = () => {
    return `    <header>
    <h1>WEB TO DO MATE</h1>
  </header>
  <main>
    <section id="calendar">
      <span>월</span>
      <span>화</span>
      <span>수</span>
      <span>목</span>
      <span>금</span>
      <span>토</span>
      <span>일</span>
      <article>
        <span class="material-symbols-outlined">
          favorite
          <span>6</span>
        </span>
      </article>
      <article>
        <span class="material-symbols-outlined">
          favorite
          <span>6</span>
        </span>
      </article>
      <article>
        <span class="material-symbols-outlined">
          favorite
          <span>6</span>
        </span>
      </article>
      <article>
        <span class="material-symbols-outlined">
          favorite
          <span>6</span>
        </span>
      </article>
      <article id="todayCounter_wrapper">
        <!-- <span class="material-symbols-outlined today">
          favorite
          <span>9</span>
        </span> -->
      </article>
      <article>
          <span class="material-symbols-outlined">
            favorite
            <span>6</span>
          </span>
        </article>
        <article>
          <span class="material-symbols-outlined">
            favorite
            <span>6</span>
          </span>
        </article>
      <article>27</article>
      <article>28</article>
      <article>29</article>
      <article>30</article>
      <article class="today">31</article>
      <article>1</article>
      <article>2</article>
    </section>
    <section id="todo">
      <!-- <article>
        <h1>
          Hyeonggeun
          <span class="material-symbols-outlined">add_circle</span>
        </h1>
        <div class="todos_wrapper">
          <p>
            <span class="material-symbols-outlined">favorite</span>
            베이킹 냠냠
          </p>
          <p>
            <span class="material-symbols-outlined">favorite</span>
            방정리
          </p>
        </div>
      </article>
      <article>
        <h1 class="sopt">
          SOPT
          <span class="material-symbols-outlined">add_circle</span>
        </h1>
        <div class="todos_wrapper">
          <p>
            <span class="material-symbols-outlined checked">favorite</span>
            웹팟 첫 세미나
          </p>
          <p>
            <span class="material-symbols-outlined checked">favorite</span>
            웹팟 첫 뒷풀이
          </p>
          <p>
            <span class="material-symbols-outlined">favorite</span>
            웹팟 워크샵
          </p>
        </div>
      </article>
      <article>
        <h1 class="univ">
          세종대
          <span class="material-symbols-outlined">add_circle</span>
        </h1>
        <div class="todos_wrapper">
          <p>
            <span class="material-symbols-outlined">favorite</span>
            캡스톤 발표
          </p>
          <p>
            <span class="material-symbols-outlined">favorite</span>
            UX / UI 디자인
          </p>
        </div>
      </article>
      <article>
        <h1 class="workOut">
          운동
          <span class="material-symbols-outlined">add_circle</span>
        </h1>
        <div class="todos_wrapper">
          <p>
            <span class="material-symbols-outlined">favorite</span>
            솝케팟 번개
          </p>
          <p>
            <span class="material-symbols-outlined">favorite</span>
            요가
          </p>
        </div>
      </article> -->
    </section>
  </main>
  <footer>
    <article id="calendarPage_button">
      <span class="material-symbols-outlined today">home</span>
      달력
    </article>
    <article id="myPage_button">
      <span class="material-symbols-outlined">account_circle</span>
      MY
    </article>
  </footer>
  <div id="modal_wrapper"></div>
  `;
};

export default MainStaticView;