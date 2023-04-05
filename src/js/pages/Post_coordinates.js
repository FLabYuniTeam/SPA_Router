function PostThis($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
        <img src="/img/coordinates.jpeg" alt="coordinatesImage" />
        <h1>clientX, pageX, screenX, offsetX의 차이점</h1>
        <section class="writer">
          <img src="/img/jh_profile.jpeg" alt="profileImage" />
          <div class="writer-info">
            <div class="writer-info__nameFiled">
              <span class="writer-info__name">이종현</span>
              <span class="writer-info__filed">, Frontend Developer</span>
            </div>
            <div class="writer-info__date">2023.02.15</div>
          </div>
        </section>
        <div class=contents-container>    
          <div id="contentsBox">
            <h1>1. 이벤트가 발생한 위치값</h1>
            <p>
              예전에 드림코딩에서 clientX, pageX, screenX, offsetX와 관련된 강의를 듣고나서 제대로 이해하지 않고 
              넘어갔었다. 오늘 칸반보드 프로젝트를 진행하기 전에 이 부분에 대해서 확실하게 정리를 하고 넘어가려고 예전에 봤던 
              강의를 토대로 스스로 다시 만들어봤다.
            </p>
            <h1>2. clientX, pageX, screenX, offsetX</h1>
            <p>
              "clientX": 브라우저 창을 기준으로 이벤트가 발생한 위치의 가로 좌표를 나타냅니다. 
                        뷰포트(Viewport)에서의 위치를 나타내므로 스크롤바가 움직이면 값이 변경됩니다.
                        페이지 전체에서 브라우저 창의 상대적인 위치 값이기 때문에 스크롤바가 움직이면 값이 변경됩니다.
              "pageX": 문서 문서 상단을 기준으로 이벤트가 발생한 위치의 가로 좌표를 나타냅니다. 
                        페이지 전체에서의 위치를 나타내므로 스크롤바가 움직여도 값이 변경되지 않습니다.
                        페이지 전체에서의 절대적인 위치 값이기 때문에 스크롤바가 움직여도 변경되지 않습니다.
              "screenX": 모니터 화면을 기준으로 이벤트가 발생한 위치의 가로 좌표를 나타냅니다. 
                        모니터 전체에서의 위치를 나타내므로 여러 모니터를 사용할 때 값이 다르게 나타날 수 있습니다.
                        실제 모니터를 3개 사용하고 있는데, 모니터를 가로로 배치하다보니까 기준모니터에서 상당히 오래 
                        떨어져있는 모니터에 브라우저창을 가져다 놓고 screenX값을 측정하면 -3000까지도 나오는 경우가 있습니다.
              "offsetX": 이벤트가 발생한 요소의 가로 축 기준으로 상위 요소의 좌측 끝에서부터의 거리를 나타냅니다. 
                        이벤트가 발생한 요소 내부에서의 위치를 나타내며, 상위 요소의 위치에 따라 값이 달라질 수 있습니다.
                        상위 요소의 위치 (position 속성값) 뿐만 아니라, 하위 요소의 "margin", "border", "padding” 
                        같은 속성들도 요소의 offset 값에 영향을 미칩니다.
            </p>
          </div>
        </div>
    `;
  };

  this.render();
}

export default PostThis;
