class PostURI {
  $container: Element;
  constructor($container: Element) {
    this.$container = $container;
  }

  render() {
    this.$container.innerHTML = `
        <img src="https://velog.velcdn.com/images/dataliteracy/post/dc4a56bf-b790-49ec-a784-8e97bfb5171e/image.png" alt="uriImage" />
        <h1>URI에 대해</h1>
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
            <h1>1. URI의 개념</h1>
            <p>
              URI(Uniform Resource Identifier)는 인터넷에서 자원을 나타내는 유일한 식별자입니다. 
              URI는 URL과 URN으로 나누어집니다.
            </p>
            <h1>2. URL의 문법</h1>
            <p>
              <스킴>://<사용자 이름>:<비밀번호>@<호스트>:<포트>/<경로>;<파라미터>?<질의>#<프레그먼트>
            </p>
          </div>
        </div>
    `;
  }
}

export default PostURI;
