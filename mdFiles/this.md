# 1. this는 무엇인가?

this는 객체 또는 생성자 함수가 생성한 인스턴스를 가리키는 자기 참조 변수라는 정의를 가지고 있습니다.
쉽게 이야기 하자면 객체(인스턴스)가 뭔가 동작(메서드)을 해야되는데 자기 자신이 정의한 값(프로퍼티)을 사용하려면 누군가 자기 자신을 가리켜서 참조를 해줘야 사용을 할 수 있다는 겁니다.
그때 사용하는 키워드가 this라는 거죠. 하지만 자바스크립트에서의 this는 객체 안에서만 동작하지 않습니다.

# 2. this가 가리키고 있는 곳은?

## 2.1 전역객체

### 2.1.1 전역 공간

```jsx
console.log(this); // window

var a = 1;
let b = 2;
const c = 3;

console.log(window.a); // 1
console.log(window.b); // undefined
console.log(window.c); // undefined
```

자바스크립트 엔진은 위 코드를 평가하여 실행 컨텍스트라는 곳에 등록합니다.
하지만 코드를 평가하기 전에 전역객체를 먼저 생성합니다. 전역 객체는 자바스크립트를 구동하는 환경에 따라 달라지게 되는데 브라우저에서는 window를 Node 환경에서는 global을 출력합니다. 저는 브라우저를 이용했기 때문에 window를 출력하게 됩니다.

![](https://velog.velcdn.com/images/dataliteracy/post/7d0b9254-eb97-47ff-9a49-0cafc76489de/image.png)

이렇게 자바스크립트에서의 this는 전역 스코프 환경에서 전역 객체를 바라봅니다. ES6 이전에는 자바스크립트에서는 전역 객체가 전역 환경의 변수들을 관리했지만 ES6 이후에는 다릅니다.

전역에서 관리되는 것들은 var 키워드로 선언한 전역 변수와, 함수 선언문으로 선언한 전역 함수, 빌트인 전역 프로퍼티와 빌트인 전역 함수, 표준 빌트인 객체를 관리합니다. 그렇기 때문에 위 코드 상에서 window.a는 1이 출력되지만 전역에서 관리되지 않는 let,const 키워드로 선언한 b 와 c 변수는 전역 객체의 프로퍼티로 등록되지 않는 것입니다. (var는 Global Scope, let과 const는 Script Scope다.)

![](https://velog.velcdn.com/images/dataliteracy/post/e2c9e50e-3ae3-4c00-964a-68d9a3b18ec4/image.png)

Script Scope에 대해 좀 더 설명하고 싶으나 아직까지는 명확한 정의를 설명하는 곳이 없습니다. MDN 등에서는 Module Scope를 이야기하고 있으나 이것은 자바스크립트 파일을 모듈로 관리할 때의 스코프를 이야기하기 때문에 필자는 그것과는 다르다고 생각합니다. 심지어 ChatGPT한테 물어봐도 명확한 대답을 하지 않습니다.

개인적으로 생각하고 있는 바는 let이나 const로 선언한 경우에만 Script Scope에서 확인되고 있는 것으로 보았을 때, var와 let,const의 차이점을 결정짓는 중요한 요인 중에 하나인 TDZ와 관련이 있을 것이라고 생각합니다.TDZ와 관련없는 var의 경우 Global Scope이고 let,const의 경우 관련이 있기 때문에 Script Scope라는 것입니다.(지극히 뇌피셜입니다.)
Script Scope에 있는 변수들은 일시적사각지대가 적용되는 것이죠. 그렇기 때문에 let,const는 호이스팅이 되지 않는 것처럼 보이는 것입니다. ES6에서 그걸 구분짓기 위해서 새로 만들어낸 Scope가 Script Scope가 아닐까 생각하고 있습니다.

### 2.1.2 일반함수를 호출할 때

this가 전역 객체를 가리키고 있는 경우는 또 있습니다. 일반함수를 호출할 때와 객체에서 정의한 프로퍼티가 자기 자신의 프로퍼티를 this로 참조하려고 할 때도 this는 전역 객체를 가리키고 있습니다. 예제를 살펴보겠습니다

```jsx
// 일반함수를 호출할 때
function one() {
  console.log(this);
  function two() {
    console.log(this);
    function three() {
      console.log(this);
    }
    three(); // window
  }
  two(); // window
}
one(); // window
```

일반 함수로 호출하게 되면 어떤 스코프에 있든지 this는 전역객체를 가리키게 됩니다. 이는 객체 안에 있는 메서드에서 일반 함수를 호출할때도 동일합니다.

### 2.1.3 객체리터럴 내 스코프

```jsx
// 전역 객체 window의 프로퍼티 a
var a = 1;
// let a = 1;

// 객체 리터럴
let obj = {
  a: "이름",
  b: 2,
  c: this.a, // var의 경우 1, let의 경우 undefined
  d: function () {
    console.log(this); // obj
    console.log(obj.a); // 이름
    function one() {
      console.log(this);
    }
    one(); // window
  }
};

console.log(obj.c); // window
obj.d();
```

객체 리터럴에서 프로퍼티를 선언할 때 this를 이용해서 재귀적으로 프로퍼티를 참조하려고 하는 경우에도 this는 window를 가리키게 됩니다.

이 경우는 var a = 1; 로 선언했을 때는 1이 출력되지만 let a = 1로 선언했을때는 undefined가 출력됩니다. 이는 this가 window를 바라보기 때문에 window 객체에 등록되어 있는 var의 a 변수는 출력이 가능하지만 let의 a는 출력이 불가능한 것으로 해석해 볼 수 있습니다.

### 2.1.4 콜백 함수 내부

```jsx
setTimeout(() => {
  console.log(this); // window
});

[1, 2, 3, 4, 5].forEach((item) => {
  console.log(this, item); // window 1, window 2 ... window 5 까지 반복 출력
});
```

콜백 함수의 정의부터 살펴보게 되면 콜백함수란 함수 A의 제어권을 다른 함수 B에게 넘겨주는 경우 함수 A를 콜백 함수라 합니다. 이때 함수 B의 규칙에 따라 함수 A가 실행되기 되는데, 위의 예제에서 함수 B는 console.log가 실행되고 있는데 블록 안에 있는 로직들입니다. 따라서 함수 B는 일반함수로서 동작하고 있기 때문에 this가 전역 객체에 바인딩되는 것입니다.

정리하자면 this는 일반 함수를 호출할 때와 전역 공간, 객체의 프로퍼티 그리고 콜백 함수 내부에서는 전역 객체를 바라보게 됩니다.

## 2.2 객체와 생성자 함수의 인스턴스

앞에서 this에 대해 객체와 생성자 함수의 인스턴스로 한정해서 this를 정의했었습니다. 일반 함수의 경우 객체의 메서드나 생성자 함수안에서 메서드로 등록해서 객체나 인스턴스를 바라보게 사용하지 않는 이상 일반 함수는 객체를 생성하지 않기 때문에 this와는 직접적인 연관이 없다고 봐야합니다.

따라서 ES5 부터 추가된 ‘use strict’ 모드에서 일반함수 안에 this는 undefined를 출력합니다. 일반 함수 안에 있는 this는 사실상 의미가 없다는 거죠.

```jsx
function one() {
  "use strict";
  function two() {
    console.log(this); // undefined
    function three() {
      console.log(this); // undefined
    }
    three();
  }
  two();
}

one();
```

함수와 객체의 메서드는 독립성의 차이에 있습니다. 함수는 함수 그 자체로 독립성을 가지고 동작하지만 객체의 메서드는 자신을 호출한 객체에 관한 동작을 수행하게 됩니다.

### 2.2.1 객체 리터럴

```jsx
// 객체
let obj = {
  a: "이름",
  b: 2,
  c: this.a,
  d: function () {
    console.log(this); // obj
    console.log(obj.a); // 이름
    function one() {
      console.log(this);
    }
    one();
  }
};

obj.d();
```

객체 리터럴의 경우 아까 전에 참고했던 코드를 살펴보겠습니다.
d라는 메서드를 obj라는 객체에 ( . ) 을 붙혀서 호출하는 순간 d라는 메서드는 obj라는 객체에 바인딩됩니다.
그렇기 때문에 d라는 메서드안에 있는 this를 확인해보면 obj를 가리키고 있고 obj.a처럼 재귀적으로 obj를 가리키며 참조할 수도 있게 됩니다. (하지만 obj.a 처럼 재귀적으로 참조하는 경우는 프로토타입 체인 관점에서 바람직하지 않은 결과를 발생시킬 수 있습니다)

```jsx
const obj2 = {
  __proto__: obj,
  e: 1,
  f() {
    console.log(this); // obj2
  }
};

obj2.f(); // obj2  {e: 1, f: ƒ}
obj2.d(); // obj2  {e: 1, f: ƒ}

function g() {
  console.log(this);
}

obj2.h = g;
obj2.h(); // obj2  {e: 1, f: ƒ, h: ƒ}
```

( . )을 이용해서 메서드를 호출하게 되면 obj를 상속받은 obj2에서 obj의 메서드 d()를 호출하게 되도 d() 메서드의 ( . ) 앞에 있는 객체는 obj2이기 때문에 this는 obj2를 가리키게 됩니다. 또한 일반 함수를 나중에 객체에 동적으로 추가해도 결국 객체의 메서드로 호출하게 되면 그 또한 this는 ( . ) 앞의 객체를 가리키게 됩니다.

defineProperty 메서드를 이용해서 일반 함수를 객체에 나중에 동적으로 정의해도 마찬가지입니다.

```jsx
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  }
};

Object.defineProperty(o, "sum", {
  get: sum,
  enumerable: true,
  configurable: true
});

console.log(o.average, o.sum); // 2, 6
```

</br>

### 2.2.2 생성자 함수

```jsx
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.printInfo = function () {
    console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
  };
}

const person1 = new Person("사람1", 30);
const person2 = new Person("사람2", 33);

person1.printInfo(); // 이름 : 사람1, 나이 : 30
person2.printInfo(); // 이름 : 사람2, 나이 : 33

Person.prototype.Play = function () {
  console.log(`우리 같이 놀자!! 나는 ${this.name}야.`);
};

person1.Play(); // 놀자!! 나는 사람1야.
person2.Play(); // 놀자!! 나는 사람2야.
```

생성자 함수의 경우에도 똑같습니다. 생성된 인스턴스를 가리키게 됩니다. 중요한 건 ( . ) 앞에 어떤 객체가 있는지에 따라 자바스크립트는 동적으로 this를 결정하게 됩니다.

### 2.2.3 이벤트 객체

```html
<body>
  <div class="contents">1</div>
  <div class="contents">2</div>
  <div class="contents">3</div>
</body>
```

```jsx
const $contents = document.querySelector(".contents");

$contents.addEventListener("click", () => {
  console.log(this, $contents); // window
});
```

```jsx
const $contents = document.querySelector(".contents");

$contents.addEventListener("click", function () {
  console.log(this); // <div class="contents">1</div>
});
```

위의 예제를 살펴봅시다. 클릭이라는 이벤트가 발생했을 때 함수를 동작하게 됩니다. 이 경우는 두 가지가 있습니다. 콜백 함수 이벤트 리스너의 제어권을 일반 함수에 넘겨줬을 떄와 화살표 함수로 넘겨줬을 때 this가 바인딩되는 곳이 다르게 됩니다. 화살표 함수의 경우 왜 다른지는 있다가 알아보기로 하겠습니다.
일반함수에게 제어권을 넘겨줬을 때 setTimeout이나 forEach 메서드를 사용한 콜백함수에서는 일반 함수를 호출하는 경우와 동일했습니다. 이때에는 바라볼 대상 객체가 없기 때문에 일반 함수와 동일하게 동작하지만 이벤트리스너의 경우에는 ( . ) 앞에 있는 $contents가 contents 클래스의 div 엘리먼트를 저장하고 있는 변수가 됩니다. 이 변수는 노드 객체의 상속 구조안에 있는 엘리먼트 중에 하나를 저장하고 있게 됩니다.

![](https://velog.velcdn.com/images/dataliteracy/post/c4a2cae3-27be-4558-a1b2-eef5e9cd9bef/image.png)

따라서 div 엘리먼트 또한 Object를 상속하고 있는 객체입니다. 생성자 함수에서의 this처럼 메서드 앞에 ( . )이 있고 객체를 바라보고 있다면 그 메서드의 this는 객체를 바라보고 있습니다.

# 3. this 바인딩을 직접 결정하기

## 3.1 apply / call / bind 메서드 사용하기

아래 예제를 통해 apply / call / bind 메서드와 인수에 this를 사용하는 경우와 그렇지 않은 경우의 차이점에 대해 살펴보도록 하겠습니다.

```jsx
const [a, b] = [1, 2];

function methodAdd(name) {
  // const a = 3;
  // const b = 4;
  console.log(`나는 ${this.name}야.`); // 나는 더하기 함수야.
  console.log(`나는 ${name}야.`); // 나는 add함수야.
  function add(a, b) {
    console.log(this);
    return a + b;
  }
  console.log(add(a, b)); // window 3
  console.log(add.bind(num)(a, b)); // num  3
  console.log(add.bind(num)(this.a, this.b)); // num 5
  console.log(add.apply(num, [this.a, this.b])); //num  5
  console.log(add.call(num, this.a, this.b)); // num 5
}

const num = {
  a: 2,
  b: 3,
  name: "더하기 함수"
};

num.addNum = methodAdd;

num.addNum("add함수");
```

num이라는 객체에서 methodAdd 라는 함수를 메서드로 사용하기 위해 동적으로 추가한 상황입니다.
그렇게 등록한 addNum 이라는 메서드에 (”add함수”) 라는 인수를 전달해서 호출했습니다.  
(”add함수”) 라는 인수는 methodAdd(”add함수”) 에 전달되어 순차적으로 console.log 출력과 function add를 평가합니다.

처음 부분에 있는 console.log 출력 2가지를 먼저 살펴보겠습니다.
처음에 전달한 인수는 (”add함수”) 라는 인수였습니다. 하지만 처음에 호출할 때 num 객체에 ( . )을 붙혀서 출력했기 때문에 this.name 으로 출력한 console은 num 객체를 가리키고 있습니다.

따라서 다음과 같이 출력됩니다. 하지만 this를 지정하지 않은 name은 num 객체에 바인딩되어 있지 않습니다.

```jsx
console.log(`나는 ${this.name}야.`); // 나는 더하기 함수야.
console.log(`나는 ${name}야.`); // 나는 add함수야.
```

다음은 add 함수가 평가되고 난 뒤 함수 호출부분을 살펴보겠습니다.

앞에서도 살펴봤지만 일반 함수로 호출되는 add(a, b) 부분은 this에 window 객체가 바인딩되어 있습니다.
하지만 주의할 점이 있습니다. this가 window 객체를 가리키고 있다고 해서 add 함수에 매개 변수로 지정한 변수 a, b까지 window의 프로퍼티로 등록되는 것은 아닙니다. 실제로 methodAdd 함수 안에서 const a, b를 선언하게 되면 add(a, b) 호출 부분은 7을 출력하게 됩니다.

여기서 한 가지 사실을 알 수 있습니다. 함수가 this에 바인딩 되는 것과 함수의 인수는 관련이 없다는 것이죠.
그래서 add(a, b)를 호출하면 this는 window 객체에 a, b는 스코프 체인을 통해 a, b 프로퍼티를 가장 가까운 스코프부터 검색하게 됩니다. 그래서 전역에 선언되어 있는 a, b를 찾아서 더한 뒤 3이라는 결과값을 출력하게 됩니다.

그리고 그 다음부터 나오는 코드가 개발자가 명시적으로 this를 가리키게 해줄 수 있는 코드입니다. this를 명시적으로 가리킬 수 있게 하는 메서드에는 apply / call / bind가 있습니다. 코드를 하나씩 살펴보면 각자 차이점이 존재한다는 걸 알 수 있습니다.

- bind 메서드의 경우 첫 번째 인자에 바인딩할 객체를 명시해주고 반환만 해줍니다.
- call 과 apply 메서드의 경우는 첫 번째 인자에 바인딩할 객체를, 두 번째 인자에는 함수에 전달할 인수를 명시해줍니다. 그리고 call 과 apply는 두 번째 인자에 인수를 전달할 때 그냥 전달할지 배열로 전달할지에 따라 또 차이가 발생하게 됩니다.

그리고 여기서 한 가지 더 그 전에 나왔던 인수를 사용할 때 조심해야 할 부분이 여기에도 있습니다.

```jsx
console.log(add.bind(num)(a, b)); // num  3
console.log(add.bind(num)(this.a, this.b)); // num 5
console.log(add.apply(num, [this.a, this.b])); //num  5
console.log(add.call(num, this.a, this.b)); // num 5
```

apply / call / bind 메서드로 객체를 명시하는 순간 this는 num을 모두 바라보게 됩니다. 하지만 이때도 인수는 함수 자체와 관련이 있기 때문에 this.a, this.b로 this를 직접 가리키고 싶은 객체에 바인딩해주지 않으면
앞서 봤던 예제와 같이 스코프 체인을 따라 a, b를 검색하게 됩니다.

정리를 해보면 일반 함수로 호출되는 경우는 메서드 안에 있든지 함수 안에 중첩 함수로 존재하든지 어디에서든 있을 수 있는데 그때마다 this는 전역 객체를 바라보기 때문에 개발자가 직접 apply / call / bind 메서드를 사용해서 this를 명시적으로 바인딩 할 수 있다는 것입니다.

## 3.2 화살표 함수 사용하기

화살표 함수는 함수 자체의 this 바인딩을 갖지 않습니다. 일반 함수처럼 전역을 가리키지도 않는다는 것입니다.
화살표 함수는 화살표 함수가 속한 스코프의 상위 스코프, 즉 전역 공간안에 선언되어 있는 화살표 함수라면 전역 객체를 가리키고 중첩함수 안에 있는 화살표 함수라면 바로 상위 스코프의 this를 참조하게 됩니다.
그리고 이것을 화살표 함수가 존재하고 있는 스코프의 문맥을 보고 결정된다고 하여 Lexical(문맥적) this라고 합니다.

### 3.2.1 화살표 함수가 가리키는 곳

```jsx
function func1() {
  const obj = {
    a: 1,
    b: 2,
    printInfo() {
      function func2() {
        console.log(this); // window
      }
      func2();

      const func3 = () => console.log(this); // obj
      func3();
    }
  };
  obj.printInfo();
}

func1();
```

위의 예제처럼 일반 함수로 호출되면 아무리 함수안에 있는 객체안에 있는 메서드안에서 호출된다고 하더라도 역시나 this는 전역 객체를 바인딩하는 반면에 화살표 함수의 this는 상위스코프에 있는 obj 객체를 바인딩하게 됩니다.

### <span style="color: #8bbbe4">3.2.2 주의해야 하는 몇 가지 상황</span>

위의 예제처럼 화살표 함수가 상위 스코프의 this를 바인딩함에 따라 주의해야할 점이 몇가지 있습니다.

- 객체리터럴에서 메서드로 사용할 때

```jsx
const person = {
  name: "john",
  age: 27,
  printInfo: () => {
    console.log(this); // window
    console.log(`내 이름은 ${this.name}이고, 나이는 ${this.age}야.`);
    // 내 이름은    이고,  나이는 undefined야.
  }
};

person.printInfo();
```

위의 예제 처럼 객체의 이름과 나이를 받아오고 싶지만 화살표 함수를 사용했기 때문에 상위 스코프인 window 객체를 바인딩해서 원하는 결과를 받아올 수 없습니다.

- 프로토타입 메서드로 지정할 때

```jsx
Object.prototype.printAge = () => {
  console.log(`나이 : ${this.age}`);
};

Object.prototype.printAge2 = function () {
  console.log(`나이 : ${this.age}`);
};

person.printAge(); // undefined
person.printAge2(); // 나이 : 27
```

프로토타입 메서드로 상속받아서 사용할 때도 동일한 문제가 발생합니다.

- 이벤트 리스너의 currentTarget이 지정될 때

```html
<body>
  <button class="contents1">1</button>
  <button class="contents2">2</button>
</body>
```

```jsx
const $contents1 = document.querySelector(".contents1");
const $contents2 = document.querySelector(".contents2");

$contents1.addEventListener("click", function () {
  console.log(this); // button
  this.innerHTML = "1은 1이다.";
});

$contents2.addEventListener("click", () => {
  console.log(this); // window
  this.innerHTML = "2는 2다.";
});
```

![](https://velog.velcdn.com/images/dataliteracy/post/a1997e36-2964-49c5-b3a4-b6d463f09add/image.png)

위의 예제를 보면 첫 번째 버튼은 이벤트리스너의 인자로 일반함수를 전달하게 되면 정상적으로 innerHTML이 동작하지만 화살표 함수를 사용하게 되면 상위스코프인 window 객체를 바인딩하기 때문에 클릭했을 때 button 태그의 텍스트는 변경되지 않습니다.</br>
그리고 추가적으로 this 바인딩의 종류와 우선순위에 대해 간략하게 이야기해보려고 합니다.

this는 명시적 바인딩, 암시적 바인딩, 정적 바인딩, new 바인딩, 기본바인딩이 있습니다.
사실 여기까지 글을 천천히 따라오신 분들이라면 용어만 살짝 어려워졌을 뿐이지 모두 다룬 내용들입니다.
명시적 바인딩은 apply / call / bind 메서드, 암시적 바인딩은 객체리터럴의 경우, new 바인딩은 생성자 함수의 경우, 정적 바인딩은 화살표 함수의 경우, 기본 바인딩은 전역 객체를 바라보고 있는 경우를 이야기합니다.
정적 바인딩의 경우 new로 생성자 함수를 호출할 수 없는 등의 이유로 우선순위를 비교하기가 힘들다.
나머지 this 바인딩들의 우선순위는 new 바인딩 > 명시적 바인딩 > 암시적 바인딩 > 기본 바인딩이다.

# 4. 정리하기

> this란 자바스크립트 어디서든 동작할 수 있지만 보통 객체나 생성자 함수가 생성한 인스턴스를 가리켜서 자기 자신을 참조시킵니다. 자기 자신을 참조시켜야 하는 이유는 객체(인스턴스)의 프로퍼티를 메서드에서 사용하기 위해서입니다.
> 대부분 this는 암시적으로 바인딩되지만 개발자가 원하는 곳에 명시적으로 바인딩할 수도 있습니다.
> 또한 화살표 함수처럼 this를 문맥적으로 활용하는 경우도 있습니다.
> 이렇게 자바스크립트에서의 this는 맥락에 따라 동작하는 방식의 차이가 있습니다.
> 따라서 상황마다 this가 어떻게 바인딩되는지 정확하게 알고 사용하는 것이 중요하다고 생각합니다.

---

이야기가 너무 길어졌습니다. 부족한 글 솜씨로 this에 대해 나름 정리를 해본다고 했는데 이렇게 긴 글 속에서 this를 이해하기 위해서 단 하나의 내용이라도 단 한 사람에게라도 도움이 되었다면 일단 성공이라고 생각합니다.
해당 포스팅은 앞으로 개발 공부를 해나가면서 조금씩 다듬어나갈 예정입니다.
그리고 혹시 제가 잘못 알고 있거나 조언을 해주실만한 내용이 있다면 언제든지 댓글로 남겨주시길 바랍니다.

---

Reference

- 코어 자바스크립트
- 모던 자바스크립트 Deep Dive
- MDN 사이트 ([https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this))
- [https://star-hoony.tistory.com/2](https://star-hoony.tistory.com/2)
- [https://jeonghwan-kim.github.io/2017/10/22/js-context-binding.html](https://jeonghwan-kim.github.io/2017/10/22/js-context-binding.html)
