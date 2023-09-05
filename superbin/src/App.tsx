function App() {
  return (
    <div className="App">
      <header>
        <div className="nav-bar">
          <div className="fixed-logo">
            <img src="/assets/img/logo_large_white.png" alt="nav-logo" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">수퍼빈 소개</a>
              </li>
              <li>
                <a href="#">위치검색</a>
              </li>
              <li>
                <a href="#">포인트/환전</a>
              </li>
              <li>
                <a href="#">소식</a>
              </li>
              <li>
                <a href="#">채용</a>
              </li>
            </ul>
          </nav>
          <div className="nav-right">
            <button type="button">
              자주하는 질문
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-globe"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" x2="22" y1="12" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
        </div>
        {/* Mobile */}
        <div className="m-navbar">
          <div className="m-fixed-logo">
            <a href="#">
              <img src="/assets/img/logo_large_white.png" alt="nav-logo" />
            </a>
          </div>
          <div className="m-menubar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-align-justify"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </div>
        </div>
        <div className="mobile-menu">
          <div className="m-menu-header">
            <div className="m-fixed-logo">
              <a href="#">
                <img src="/assets/img/logo_large.png" alt="nav-logo" />
              </a>
            </div>
            <div className="m-menubar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </div>
          </div>
          <div className="search-box">
            <form>
              <input type="text" name="search" placeholder="자주하는 질문" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="m-menu-list">
            <ul>
              <li>
                <strong>
                  수퍼빈 소개
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </strong>
                <ol className="m-detail-list hide">
                  <li>
                    <div className="m-left">
                      <h5>회사소개</h5>
                    </div>
                    <div className="m-right">
                      <a href="#">수퍼빈</a>
                    </div>
                  </li>
                  <li>
                    <div className="m-left">
                      <h5>지원순환</h5>
                    </div>
                    <div className="m-right">
                      <a href="#">네프론</a>
                      <a href="#">수퍼빈모아</a>
                      <a href="#">물류 인프라</a>
                      <a href="#">아이엠팩토리</a>
                    </div>
                  </li>
                  <li>
                    <div className="m-left">
                      <h5>교육사업</h5>
                    </div>
                    <div className="m-right">
                      <a href="#">수퍼빈루키</a>
                    </div>
                  </li>
                  <li>
                    <div className="m-left">
                      <h5>문화사업</h5>
                    </div>
                    <div className="m-right">
                      <a href="#">수퍼큐브</a>
                      <a href="#">플로깅 캠페인</a>
                      <a href="#">쓰레기시리즈</a>
                    </div>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#">위치검색</a>
              </li>
              <li>
                <a href="#">포인트/환전</a>
              </li>
              <li>
                <a href="#">소식</a>
              </li>
              <li>
                <a href="#">채용</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Section-main */}
      <section className="main">
        <div className="main-content">
          <h2>
            쓰레기가 돈이 되고 <br />
            재활용이 놀이가 되는 <br />
            세상을 만듭니다.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </h2>
        </div>
      </section>

      {/* Section-intro */}
      <section className="intro">
        <h3>우리가 하는 일</h3>
        <p>
          4차산업 기술과 문화 콘텐츠의 힘으로
          <br className="jump" />
          모든 생명이 공존할 수 있는 세상을 향해 <br className="jump" />한
          걸음씩 나아갑니다.
        </p>
        <span> 수퍼빈 알아보기</span>
      </section>

      {/* Section-container */}
      <section className="container">
        <ul className="container-wrapper">
          <li className="container-first">
            <div className="first-content">
              <strong>01</strong>
              <h3>
                순환경제로의 <br />
                전환을 이뤄냅니다.
              </h3>
              <p>
                버려지는 쓰레기를 다시 소재로 활용할 수 <br />
                있도록 선별 수집 시스템 및 물류 인프라를 <br />
                재설계하여 이전에 없던 새로운 방식의
                <br />
                순환경제를 구축합니다.
              </p>
            </div>
            <div className="first-image">
              <img src="/assets/img/1_home_change_bg.jpg" alt="home-change" />
            </div>
          </li>
          <li className="container-first">
            <div className="first-image">
              <img
                src="/assets/img/1_home_coexist_bg.jpg"
                alt="home-1_home_coexist_bg"
              />
            </div>
            <div className="first-content">
              <strong>02</strong>
              <h3>
                생명과의 공존을 <br />
                실천합니다.
              </h3>
              <p>
                깨끗한 지구를 위해 다양한 생명이 <br />
                보장되는 공동체를 만들어갑니다. 공존과 <br />
                균형을 지켜 나가는 것, 미래를 위한 우리 <br />
                세대의 역할입니다.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Section-with */}
      <section className="with">
        <div className="with-inner">
          <div className="with-title">
            <strong>함께하기</strong>
            <h2>
              수퍼빈과 함께
              <br />
              환경를 지켜주세요.
            </h2>
          </div>
          <div className="with-content">
            <div className="with-link">
              <h4>네프론 설치 위치</h4>
              <h4>
                보러가기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </h4>
            </div>
            <div className="with-link">
              <h4>네프론</h4>
              <h4>
                사용방법 안내
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </h4>
            </div>
            <div className="with-link">
              <h4>수퍼빈</h4>
              <h4>
                앱 설치하기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Section-news */}
      <section className="news">
        <div className="news-inner">
          <div className="news-title">
            <strong>소식</strong>
            <h2>
              수퍼빈의 소식을
              <br />
              확인하세요.
            </h2>
          </div>
          <div className="news-list">
            <ul>
              <li>
                <b>보도자료</b>
                <p>
                  “하루 플라스틱 30t
                  <br />
                  처리”...SK지오센트릭 투자한 ‘수퍼빈’ 화성 공장 가보니
                </p>
                <span>2023.08.12</span>
              </li>
              <li>
                <b>보도자료</b>
                <p>
                  “하루 플라스틱 30t 처리”...SK지오센트릭 투자한 ‘수퍼빈’ 화성
                  공장 가보니
                </p>
                <span>2023.08.12</span>
              </li>
              <li>
                <b>보도자료</b>
                <p>
                  “하루 플라스틱 30t 처리”...SK지오센트릭 투자한 ‘수퍼빈’ 화성
                  공장 가보니
                </p>
                <span>2023.08.12</span>
              </li>
              <li>
                <b>보도자료</b>
                <p>
                  “하루 플라스틱 30t 처리”...SK지오센트릭 투자한 ‘수퍼빈’ 화성
                  공장 가보니
                </p>
                <span>2023.08.12</span>
              </li>
            </ul>
          </div>
          <div className="news-more">더 보기</div>
        </div>
      </section>

      {/* Section-career */}
      <section className="career">
        <div className="career-inner">
          <strong>채용</strong>
          <h4>
            함께 성장하는 팀 <br />
            수퍼빈에 합류하세요.
          </h4>
          <a href="#">
            <p>채용 바로가기</p>
          </a>
        </div>
      </section>

      {/*  Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-info">
            <div className="contact">
              <a href="#">
                <p>카카오톡 채널 상담하기 》</p>
              </a>
              <p>
                전화 : 1600-6217 | 팩스 : 031-605-6219 |
                <span className="email">이메일 : info@superbin.co.kr</span>
              </p>
              <p>
                고객센터 운영 : 평일 10:00 ~ 18:00 상담 가능 / 공휴일 및
                점심시간 (12:30~13:30) 상담 불가
              </p>
            </div>
            <div className="adress">
              <p>수퍼빈(주) | 대표이사 : 김정빈 | 등록번호 : 395-81-00208</p>
              <p>
                본사 : 경기도 성남시 분당구 황새울로 216, 502-1호 (수내동,
                휴맥스빌리지)
              </p>
              <p>
                기업부설연구소 : 경기도 성남시 분당구 황새울로 216, 502-1호
                (수내동, 휴맥스빌리지)
              </p>
              <p>이용약관 | 개인정보처리방침</p>
              <p>&copy;2015.SuperBin Co.,Ltd all rights reserved.</p>
            </div>
            <div className="sns">
              <div className="footer-logo">
                <img src="/assets/img/logo_large.png" alt="bottom-logo" />
              </div>
              <div className="footer-sns">
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-youtube"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-menu">
            <ul>
              <li>
                <strong>회원서비스</strong>
              </li>
              <li>
                <a href="#">포인트/환전</a>
              </li>
              <li>
                <a href="#">위치검색</a>
              </li>
              <li>
                <a href="#">수퍼빈루키 로그인</a>
              </li>
              <li>
                <a href="#">설치/제휴문의</a>
              </li>
            </ul>
            <ul>
              <li>
                <strong>회사소개</strong>
              </li>
              <li>
                <a href="#">수퍼빈 소개</a>
              </li>
              <li>
                <a href="#">네프론</a>
              </li>
              <li>
                <a href="#">수퍼빈모아</a>
              </li>
              <li>
                <a href="#">물류인프라</a>
              </li>
              <li>
                <a href="#">아이엠팩토리</a>
              </li>
              <li>
                <a href="#">수퍼빈루키</a>
              </li>
              <li>
                <a href="#">수퍼큐브</a>
              </li>
              <li>
                <a href="#">플로깅 캠페인</a>
              </li>
              <li>
                <a href="#">쓰레기시리즈</a>
              </li>
            </ul>
            <ul>
              <li>
                <strong>기타</strong>
              </li>
              <li>
                <a href="#">
                  회사소개서
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-download"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  수퍼빈 지도
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-download"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">공지사항</a>
              </li>
              <li>
                <a href="#">소식</a>
              </li>
              <li>
                <a href="#">자주하는 질문</a>
              </li>
              <li>
                <a href="#">채용</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Chat */}
      <div className="chat">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-message-circle"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      </div>

      {/* Submit */}
      <div className="send">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-mail-plus"
        >
          <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          <path d="M19 16v6" />
          <path d="M16 19h6" />
        </svg>
      </div>
      <div className="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-x submit-close"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdSed8VUctRqAQPNgdRIA8Nb-jWUqbHsKqrYoYPsbh9Gyx0Pg/viewform?embedded=true"
          width="640"
          height="90%"
          className="google-form"
        >
          로드 중…
        </iframe>
      </div>
    </div>
  );
}

export default App;
