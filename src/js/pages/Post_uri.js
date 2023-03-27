function PostThis($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
        <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/733009ed-bea7-4f59-a0ce-f8a79dce2f85/URI.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230327T025106Z&X-Amz-Expires=86400&X-Amz-Signature=6b47854807c9484c43bf206c33c0e0d4c8fa2790dcd15e17f18f69320db668bd&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22URI.png%22&x-id=GetObject" alt="dragImage" />
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
  };

  this.render();
}

export default PostThis;
