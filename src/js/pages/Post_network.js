function PostThis($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
        <img src="/img/network.png" alt="networkImage" />
        <h1>네트워크 관련 키워드와 전체적인 흐름</h1>
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
            <h1>1. 모뎀 vs 허브 vs 스위치 vs 라우터</h1>
            <p>
              모뎀은 물리계층에서 이더넷 프레임을 전기신호로 변환하는 역할
              허브랑 스위치는 데이터링크 계층에서 라우터로 보내기 위한 역할(LAN)
              허브와 스위치의 차이는 허브는 브로드 캐스트 방식이고 스위치는 유니캐스트 또는 멀티캐스트 방식
              라우터는 네트워크 계층에서 다른 네트워크의 라우터랑 통신을 하기 위한 역할(WAN)
            </p>
            <h1>2. 네트워크 계층(인터넷 계층)의 특징</h1>
            <p>
              라우팅을 통한 최적의 경로 선택
              트래픽이 한 곳으로 몰리지 않도록 제어하며 두 개 이상의 네트워크를 연결하는 인터네트워킹 역할
            </p>
          </div>
        </div>
    `;
  };

  this.render();
}

export default PostThis;
