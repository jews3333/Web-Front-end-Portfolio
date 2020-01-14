import React from 'react';
import { toast } from '../modules/toastMessage';

const viewHandler = (image) => {
    const view = document.createElement("div");
    const img = document.createElement("img")
    view.classList.add("portfolioView");
    img.src = image;
    img.setAttribute("title","더블클릭해서 나가기");
    view.append(img);
    view.addEventListener("dblclick", () => {
        view.classList.remove("active");
        setTimeout(() => {
            view.remove();
        },250);
    });
    document.querySelector(".App").append(view);
    setTimeout(() => {
        view.classList.add("active");
    },100);
}

const PortfolioList = ({ title, year, url, image }) => {

    return (
        <div className="portfolioList">
            <div className="image" onDoubleClick={() => viewHandler(image)} onMouseEnter={() => toast("더블클릭해서 전체크기로 보세요!")}>
                <img src={image} alt={title}/>
            </div>
            <h3 className="title">{title}</h3>
            <div className="year">{year}</div>
            {url ? <div className="url"><a href={url} title="새창으로 열림" target="_blank" >홈페이지</a></div> : null}
        </div>
    )
}

export default PortfolioList;