function PostThis($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
        <img src="./img/JS_this.jpeg" alt="dragImage" />
        <h1>자바스크립트의 this란?</h1>
        <section class="writer">
          <img src="./img/jh_profile.jpeg" alt="" />
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
            <h1>1. this는 무엇인가?</h1>
            <p>
              this는 객체 또는 생성자 함수가 생성한 인스턴스를 가리키는 자기 참조 변수라는 정의를 가지고 있습니다.
              쉽게 이야기 하자면 객체(인스턴스)가 뭔가 동작(메서드)을 해야되는데 자기 자신이 정의한 값(프로퍼티)을 
              사용하려면 누군가 자기 자신을 가리켜서 참조를 해줘야 사용을 할 수 있다는 겁니다.
              그때 사용하는 키워드가 this라는 거죠. 하지만 자바스크립트에서의 this는 객체 안에서만 동작하지 않습니다.
            </p>
            <h1>2. this가 가리키고 있는 곳은?</h1>
            <p>
              자바스크립트 엔진은 위 코드를 평가하여 실행 컨텍스트라는 곳에 등록합니다.
              하지만 코드를 평가하기 전에 전역객체를 먼저 생성합니다. 
              전역 객체는 자바스크립트를 구동하는 환경에 따라 달라지게 되는데 브라우저에서는 window를 
              Node 환경에서는 global을 출력합니다. 저는 브라우저를 이용했기 때문에 window를 출력하게 됩니다.
            </p>
          </div>
        </div>
    `;
  };

  this.render();
}

export default PostThis;
