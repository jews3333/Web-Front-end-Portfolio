import React from 'react';
import Rocket from '../images/rocket.svg';
import '../styles/MotionLoading.scss';
import WithLoad from '../HOC/WithLoad';


// const MotionLoading = ({ loaded }) => {
//     if(loaded) {
//         setTimeout(() => {
//             document.querySelector('.loading_rocket').remove();
//         }, 2000)
//     }
//     return (
//         <div className="loading_rocket" data-loaded={loaded}>
//             <img src={Rocket}/>
//             <span className="cloud"></span>
//             <span className="cloud"></span>
//             <span className="cloud"></span>
//         </div>
//     )
// }

class MotionLoading extends React.Component {
    render(){
        const { loaded } = this.props;

        if(loaded) {
            setTimeout(() => {
                document.querySelector('.loading_rocket').remove();
            }, 2000)
        }
        
        return (
            <div className="loading_rocket" data-loaded={loaded}>
                <img src={Rocket}/>
                <span className="cloud"></span>
                <span className="cloud"></span>
                <span className="cloud"></span>
            </div>
        )
    }
    
}

export default WithLoad(MotionLoading);