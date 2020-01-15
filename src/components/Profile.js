import React, { Component } from 'react';
import '../styles/Profile.scss';
import { toast } from '../modules/toastMessage';
import WithLoad from '../HOC/WithLoad';

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {
            skills : [ "HTML5","CSS3","Javascript","Jquery","SCSS","React","Git","Photoshop","Illustrator" ],
            license: [
                "GTQ포토샵2급",
                "정보기기운용기능사",
                "웹디자인기능사"
            ],
            education: [
                {
                    year: "2012",
                    str: [
                        "부산정보고등학교 사이버정보통신과 졸업"
                    ]
                },
                {
                    year: "2016",
                    str: [
                        "2016 대선주조 마케팅 공모전 은상 수상"
                    ]
                },
                {
                    year: "2017",
                    str: [
                        "경남정보대학교 산업디자인과 졸업", "앤시정보기술(주) 입사"
                    ]
                },
                {
                    year: "2017 ~ 2018",
                    str: [
                        "국립부산과학관 홈페이지 유지보수 관리용역",
                        "남구도서관 홈페이지 유지보수",
                        "창원대학교 홈페이지 유지보수관리",
                        "대저생태공원 캠핑장 홈페이지 구축 용역",
                        "청소년여가문화 모바일 앱(이락) 개편 용역",
                        "부산도시공사 홈페이지 유지보수",
                        "부산교통공사 정보자원시스템 통합유지보수 용역",
                        "㈜벡스코 정보시스템 개선 및 통합유지관리",
                        "부산시청 홈페이지 유지보수"
                    ]
                },
                {
                    year: "2018 ~ 2019",
                    str: [
                        "부산시청 시장실 홈페이지 개설",
                        "OK1번가 홈페이지 개설",
                        "OK1번가 시즌2 홈페이지 개설",
                        "시민참여예산 홈페이지 개설",
                        "부산아이다가치키움 사업 홈페이지 개설",
                        "2030엑스포 홈페이지 개편",
                        "2019부산광역시 홈페이지 개편",
                        "상수도사업본부 홈페이지 개편",
                        "2020도쿄올림픽 전지훈련 홈페이지 개설"
                    ]
                }
            ]
        }
    }

    render(){
        const { loaded } = this.props;
        return (
            <section className="component" id="profile" data-loaded={loaded}>
                <article>
                    <div className="photo" onMouseEnter={() => toast("안녕하세요? 저에요!")}>
                        
                    </div>
                </article>
                <article>
                    <div className="infomation">
                        <p>저는 웹 프론트엔드 개발자 <strong>조승현</strong>입니다.</p>
                        <p>1993년에 탄생하였으며 부산에 거주하고있습니다.</p>
                        <p>디자인을 바탕으로 웹표준 및 웹접근성을 준수한 웹코딩과 동적인 UI·UX를 구현하여</p>
                        <p>세련되고 트렌디한 웹 사이트를 개발하는 것입니다.</p>
                    </div>
                    <div className="license">
                        <h3>보유 자격증</h3>
                        <ul>
                            {this.state.license.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </article>
                <article className="full">
                    <div className="skills">
                        {this.state.skills.map((item, index) => <span key={index} onMouseEnter={() => toast("저는 "+item+" 가능해요!")}>{item}</span>)}
                    </div>
                </article>
                <article className="full">
                    <div className="education">
                        {this.state.education.map((lists, index) => 
                            <div key={index}>
                                <h3>{lists.year}</h3>
                                <ul>
                                    {lists.str.map((list, index) => 
                                        <li key={index}>{list}</li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </article>
            </section>
        );
    }
}

export default WithLoad(Profile);