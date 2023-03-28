function PostNetwork($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
        <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7d23347d-3ec3-48fd-975a-5012f07a450e/network.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230327T025017Z&X-Amz-Expires=86400&X-Amz-Signature=f0df3a697d3e7dedc378c562994ca37b017fb146647593295a89331446fb99a9&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22network.png%22&x-id=GetObject" alt="dragImage" />
        <h1>자바스크립트의 this란?</h1>
        <section class="writer">
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eab8b4aa-2c57-4a81-8b44-aeba48888966/jh_profile.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230327T024127Z&X-Amz-Expires=86400&X-Amz-Signature=287cdf0e77eec02958d2f8c3e7ab2a694bd775df80f253c26e5b53b8712c0057&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22jh_profile.jpeg%22&x-id=GetObject" alt="" />
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

export default PostNetwork;
