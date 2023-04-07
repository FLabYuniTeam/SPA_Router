class Main {
  $container: Element;
  constructor($container: Element) {
    this.$container = $container;
    this.render();
  }

  render() {
    this.$container.innerHTML = `
        <h1 class="mainTitle">개발</h1>
        <ul class="postItems">
          <a href="/post/1">
            <section class="postItem">
              <div class="imgWrap">
                <img src="/img/drag-drop-icon.jpeg" alt="dragImage" />
              </div>
              <div class="contentsInfo">
                <h1 class="contentsInfo-title">Web API_Drag & Drop</h1>
                <div class="contentsInfo-description">
                  Web API 중 하나인 Drag & Drop 에 대해 알아보자.
                </div>
                <div class="contentsInfo-date">2023.03.15</div>
              </div>
            </section>
          </a>
          <a href="/post/2">
            <section class="postItem">
              <div class="imgWrap">
                <img src="/img/JS_this.jpeg" />
              </div>
              <div class="contentsInfo">
                <h1 class="contentsInfo-title">자바스크립트의 this란?</h1>
                <div class="contentsInfo-description">
                  다른 언어와의 차이점이 명확한 자바스크립트의 this에 대해
                  알아보자.
                </div>
                <div class="contentsInfo-date">2023.02.15</div>
              </div>
            </section>
          </a>
          <a href="/post/3">
            <section class="postItem">
              <div class="imgWrap">
                <img
                  src="img/coordinates.jpeg"
                  alt="coordinatesImage"
                />
              </div>
              <div class="contentsInfo">
                <h1 class="contentsInfo-title">
                  clientX, pageX, screenX, offsetX의 차이점
                </h1>
                <div class="contentsInfo-description">
                  UI Event의 MouseEvent 중 좌표값에 대해 알아보자.
                </div>
                <div class="contentsInfo-date">2023.03.15</div>
              </div>
            </section>
          </a>
          <a href="/post/4">
            <section class="postItem">
              <div class="imgWrap">
                <img src="/img/URI.png" alt="uriImage" />
              </div>
              <div class="contentsInfo">
                <h1 class="contentsInfo-title">URI에 대해</h1>
                <div class="contentsInfo-description">
                  URI에 대해 개념 정리를 하고 어떻게 활용하면 좋을지에 대해
                  알아보자.
                </div>
                <div class="contentsInfo-date">2023.03.13</div>
              </div>
            </section>
          </a>
          <a href="/post/5">
            <section class="postItem">
              <div class="imgWrap">
                <img src="/img/network.png" alt="networkImage" />
              </div>
              <div class="contentsInfo">
                <h1 class="contentsInfo-title">
                  네트워크 관련 키워드와 전체적인 흐름
                </h1>
                <div class="contentsInfo-description">
                  네트워크의 핵심적인 키워드를 정리하고, 더 나아가 전체적인
                  흐름에 대해 알아보자.
                </div>
                <div class="contentsInfo-date">2023.03.12</div>
              </div>
            </section>
          </a>
        </ul>
    `;
  }
}

export default Main;
