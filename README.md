# 💫 HAII Audio player 8team

### JUSTCODE 6기 기업협업 2주차 1번째 과제-오디오 재생 프로그램- 8팀

<br />

### **[📌링크](https://2021bong.github.io/haii-audio-player-8team/)**

---

<br />

## 🗓 개발 기간

<br />

**기간** : 2022.10.11 ~ 2022.10.13(3일)
<br />
<br />

---

## 🤹 팀원 및 협업 방식

<br />

**팀원**

- 박유빈
- 봉원희
- 이은지

<br />

**협업 방식**

- **[팀 노션](https://www.notion.so/wecode/aae6c129b9c448c0a0ded1c5fb783437?p=c2f52017627b4bd881575a29681a0415&pm=c)**

  <br />

---

## 🚧 프로그램 실행 방법 및 파일 프로젝트 구조

  <br />

### 프로그램 실행 방법

<br />

1.  터미널을 키고 원하는 폴더 경로로 이동해 레포지토리를 클론 받습니다.

```
git clone https://github.com/2021bong/haii-audio-player-8team.git
```

<br />

2.  클론 받은 폴더로 이동해 패키지를 다운 받습니다.

```
npm i
```

<br />

3.  프로젝트를 실행합니다.

```
npm start
```

<br />

4. 브라우저가 켜지고 프로젝트를 확인 할 수 있습니다.
   <br />
   <br />
   <br />

### 파일 프로젝트 구조

- `public/data`: Mock 데이터 폴더
- `src/pages/record`: 음성 녹음 페이지 파일 폴더
- `src/pages/audio`: 음성 재생 페이지 파일 폴더
- `src/styles`: 전역 스타일 관리 폴더
  <br />
  <br />

---

## 🛠 적용 기술 및 구현 기능

<br />

### 적용 기술

- JavaScript
- React.js
- react-router-dom
- styled-components
- react icons
- wavesurfer
- wavesurfer.js
- gh-pages

<br />

### 구현 기능

- ✅ 음성 녹음 페이지

  ![음성 녹음 페이지](https://user-images.githubusercontent.com/49029756/195725401-d2ae3c85-0a86-4d5a-88e9-762d6651c07f.png)

- 봉원희

  - 음성 녹음 페이지 UI
  - 음성 녹음 기능
  - 제한 시간이 지나면 음성 녹음 종료
  - 녹음한 음성 재생

  <br />
  <br />
  <br />

- ✅ 오디오 재생 페이지

  ![음성 재생 페이지](https://user-images.githubusercontent.com/49029756/195725395-6dc3a3a0-48e4-4752-a232-054c1567e109.png)

- 박유빈
  <br />
  라이브러리와 audio태그 사용을 최소화하여 구현하려고 노력했습니다.
  <br />
  제가 담당한 부분은,
  <br />
  - 오디오 재생/일시정지/정지 기능
  - 오디오 재생 바 표시 및 UI
  - 오디오 파일 총 재생시간/현재 재생시간 표시
  - 오디오 파형 표시 및 UI
  - 오디오 파형 재생/일시정지/정지 기능

<br />

- 이은지
  - 오디오 재생 페이지 UI
  - 재생 중인 곡 다운로드 기능
  - 재생/일시정지 버튼 토글
