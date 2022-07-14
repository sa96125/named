<!-- header -->

<h2>Dev Log </br> </h2>

<p>
  <img alt="Sveltekit" src="https://img.shields.io/badge/Sveltekit-white.svg">
  <img alt="TailwindCSS" src="https://img.shields.io/badge/TailwindCSS-white.svg">
  <img alt="Prisma" src="https://img.shields.io/badge/Prisma-white.svg">
  <img alt="PlanetScale" src="https://img.shields.io/badge/PlanetScale-white.svg">
  <img alt="Redis" src="https://img.shields.io/badge/Redis-white.svg">
  <img align="right" alt="Hooks" src="https://img.shields.io/badge/🔥 One per day, I hope a little habit can make a miracle.-black.svg">
</p>

<br/>

<!-- 목차 -->

**기획**

- 주니어 개발자들이 공통적으로 겪는 문제가 자주 보임( 부트캠프 참여 유무, 사수 부재등 )

- 개인적으로 깨달은 점은 본질적인 문제는 내 자신에게 있다는 것이다. 하지만 이를 해결할 수 있는 방향성을 제공(경험 공유)하는 것만으로도 이를 조금 더 쉽게 해결할 수 있지 않을까? 

- 부트캠프를 나왔다고 취업하는 것도아니며 좋은 사수가 있다고해서 좋은 개발자가 될 수 있는 것은 아니다. 

- 부트캠프에 참여할 수 없는 상황, 여력이 안되는 사람에게도 양질의 정보를 찾아 줄 수 있으면 좋겠다.

- 리더급에 개발자 조언을 들을 수 있는 공간이 있으면 좋겠다.

- 돈을 투자 하지않더라도 니콜라스처럼, 엘리처럼, 테오처럼 될 수 있다는 것을 깨닫게 하고 싶다. 

- 서로에게 선한 영향력을 주어 대한민국 개발자 모두가 함께 성장할 수 있게 해보자!

<br/><br/>



**목표**

- 시니어, 중급개발자들의 참여를 높여 훌륭한 개발 산업 문화 조성

- 선한 영향력을 주는 사람이 되고 싶다는 개인적 바램 성취

- 자기 주도, 장인 정신, 문제 해결력을 갖춘 참된 개발자로 도약

<br/><br/>



**Gitpod**

- 시간과 장소의 제약 없이 일관된 프로젝트 작업이 가능하도록 개발 환경 셋팅

- 클라우드 Postgres 이미지를 통해 DB 연결

```
 개인 활용도가 생각보다 떨어짐, 다른 환경에서 작업할 경우가 생각보다 없다는 점.
 제한된 작업 시간, 한달 50시간
 특수한 경우(피시방에서도 코딩, 시골집에서도 코딩)가 아니라면 굳이 Gitpod의 메리트는 지금 당장 찾기 어렵다.
 팀단위의 경우를 생각해볼 때도 개발자는 개개인이 선호하는 개발환경에서 작업할 때 생산적인 측면에서도 좋은데 
 굳이 프로젝트단의 환경을 통일하여 강제할 필요성이 있는 것인가하는 의문.
```

<br/><br/>



**Gitpod -> Docker-compose**

- 모든 로컬에 postgressDB 환경 설정.

```
 Gitpod을 경험한 이래로 로컬 컴퓨터 의존도, 소프트웨어 설치 비용을 제거하고 싶다는 생각이 듬
```

<br/><br/>



**Docker-compose -> Prisma/Railway**

- 클라우드 DB 환경 셋팅

- 첫 쿼리, 응답속도 2500ms, 평균 응답 900ms

- LightHouse Performance Score 86

```
 빠르고 쉽게 개발부터 배포까지 일관된 DB환경을 사용할 수 있어 만족.
 하지만 무거운 요청이 아님에도 불구하고 너무 느림( railway의 네트워크 속도 문제일거라 추측. )
```


<br/><br/>



**Prisma -> Prisma/PlanetScale**

* 첫 쿼리, 응답속도 2500ms -> 900ms, 평균 응답 900ms -> 200ms 성능 개선

```
 체감상 반응속도가 상당히 좋아짐
 그렇다할 변경이 아니였음에도 Railway 덕에 희열을 느낀 후(?), 더 나은 성능을 위한 고민을 더 많이 하게 됨
 내 프로젝트임에도 불구하고 불편함을 느끼면, 그 누구도 사용하지 않을 것 같다.
```
