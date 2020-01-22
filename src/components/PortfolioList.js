import React from 'react';
import { toastMessage } from '../modules';

const viewHandler = (image) => {
    const view = document.createElement("div");
    const img = document.createElement("img")
    view.classList.add("portfolioView");
    img.src = image;
    img.setAttribute("title","더블클릭해서 나가기");
    view.appendChild(img);
    view.addEventListener("dblclick", () => {
        view.classList.remove("active");
        setTimeout(() => {
            document.querySelector(".App").removeChild(view);
        },250);
    });
    document.querySelector(".App").appendChild(view);
    setTimeout(() => {
        view.classList.add("active");
    },100);
}

const imageLoad = (e) => {
    let obj = e.target;
    obj.parentNode.setAttribute("style","height:"+e.target.height+"px");
    setTimeout(() => {
        obj.parentNode.removeAttribute("style");
    }, 1000);
}

const PortfolioList = ({ title, year, url, image }) => {

    return (
        <div className="portfolioList">
            <div className="image" onDoubleClick={() => viewHandler(image)} onMouseEnter={() => toastMessage("더블클릭해서 전체크기로 보세요!")} style={{height:0}}>
                <img src={image} alt={title} onLoad={(e) => imageLoad(e)}/>
            </div>
            <h3 className="title">{title}</h3>
            <div className="year">{year}</div>
            {url ? <div className="url"><a href={url} title="새창으로 열림" target="_blank" onMouseEnter={() => toastMessage("홈페이지를 방문해보세요!")}>홈페이지</a></div> : null}
        </div>
    )
}

export default PortfolioList;