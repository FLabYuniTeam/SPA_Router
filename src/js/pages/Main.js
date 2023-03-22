function Main($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <div class="mainContainer-inner">
        <h1 class="mainTitle">개발</h1>
        <ul class="secItems">
          <a href="/post/1">
            <section class="sec1">
              <div class="imgWrap">
                <img src="./src/images/drag-drop-icon.jpeg" alt="dragImage" />
              </div>
              <div class="contents">
                <h1 class="contents-title">Web API_Drag & Drop</h1>
                <div class="contents-description">
                  Web API 중 하나인 Drag & Drop 에 대해 알아보자.
                </div>
                <div class="contents-date">2023.03.15</div>
              </div>
            </section>
          </a>
          <a href="/post/2">
            <section class="sec2">
              <div class="imgWrap">
                <img src="./src/images/JS_this.jpeg" alt="JS_thisImage" />
              </div>
              <div class="contents">
                <h1 class="contents-title">자바스크립트의 this란?</h1>
                <div class="contents-description">
                  다른 언어와의 차이점이 명확한 자바스크립트의 this에 대해
                  알아보자.
                </div>
                <div class="contents-date">2023.02.15</div>
              </div>
            </section>
          </a>
          <a href="/post/3">
            <section class="sec3">
              <div class="imgWrap">
                <img
                  src="./src/images/coordinates.jpeg"
                  alt="coordinatesImage"
                />
              </div>
              <div class="contents">
                <h1 class="contents-title">
                  clientX, pageX, screenX, offsetX의 차이점
                </h1>
                <div class="contents-description">
                  UI Event의 MouseEvent 중 좌표값에 대해 알아보자.
                </div>
                <div class="contents-date">2023.03.15</div>
              </div>
            </section>
          </a>
          <a href="/post/4">
            <section class="sec4">
              <div class="imgWrap">
                <img src="./src/images/URI.png" alt="uriImage" />
              </div>
              <div class="contents">
                <h1 class="contents-title">URI에 대해</h1>
                <div class="contents-description">
                  URI에 대해 개념 정리를 하고 어떻게 활용하면 좋을지에 대해
                  알아보자.
                </div>
                <div class="contents-date">2023.03.13</div>
              </div>
            </section>
          </a>
          <a href="/post/5">
            <section class="sec5">
              <div class="imgWrap">
                <img src="./src/images/network.png" alt="networkImage" />
              </div>
              <div class="contents">
                <h1 class="contents-title">
                  네트워크 관련 키워드와 전체적인 흐름
                </h1>
                <div class="contents-description">
                  네트워크의 핵심적인 키워드를 정리하고, 더 나아가 전체적인
                  흐름에 대해 알아보자.
                </div>
                <div class="contents-date">2023.03.12</div>
              </div>
            </section>
          </a>
        </ul>
      </div>
    `;
  };

  this.render();
}

export default Main;
