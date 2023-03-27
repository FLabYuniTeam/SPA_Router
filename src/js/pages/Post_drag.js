function PostDrag($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dac4a40c-2bf1-4956-a654-52b21a71f2ef/drag-drop-icon.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230327T024008Z&X-Amz-Expires=86400&X-Amz-Signature=8219e5369d899445ed08fb03e7783241a0c87fea617199be2d1b50e473ff7091&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22drag-drop-icon.jpeg%22&x-id=GetObject" alt="dragImage" />
      <h1>Web API_Drag & Drop</h1>
      <section class="writer">
        <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eab8b4aa-2c57-4a81-8b44-aeba48888966/jh_profile.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230327T024127Z&X-Amz-Expires=86400&X-Amz-Signature=287cdf0e77eec02958d2f8c3e7ab2a694bd775df80f253c26e5b53b8712c0057&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22jh_profile.jpeg%22&x-id=GetObject" alt="" />
        <div class="writer-info">
          <div class="writer-info__nameFiled">
            <span class="writer-info__name">이종현</span>
            <span class="writer-info__filed">, Frontend Developer</span>
          </div>
          <div class="writer-info__date">2023.03.15</div>
        </div>
      </section>
      <div class=contents-container>    
        <div id="contentsBox">
          <h1>1. Drag & Drop 이벤트</h1>
          <p>
            HTML에서 요소가 드래그 이벤트가 발생 할 수 있도록 해당 요소의 속성으로 draggable="true" 값을 
            주면 요소와 상호동작 할때마다 아래와 같은 드래그 드롭 이벤트들이 발생하게 된다. 
            애초에 디폴트 값으로 draggable이 true인 태그는 a태그만 있다. 
            그 외에는 모두 draggable="true"를 설정해줘야 태그의 드래그가 가능하게 된다.
          </p>
          <h1>2. DataTransfer 객체</h1>
          <p>
            MDN 정의
            객체 DataTransfer는 드래그 앤 드롭 작업 중에 드래그되는 데이터를 보유하는 데 사용됩니다.
            각각 하나 이상의 데이터 유형인 하나 이상의 데이터 항목을 보유할 수 있습니다.
            dataTransfer 객체는 앞서 살펴봤던 drag & drop의 모든 이벤트에서 사용가능합니다.
          </p>
        </div>
      </div>
    `;
  };

  this.render();
}

export default PostDrag;
