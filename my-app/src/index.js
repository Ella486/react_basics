import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//import Library from './chapter_03/Library';
//import Clock from './chapter_04/Clock';
//import CommentList from './chapter_05/CommentList';
//import NotificationList from './chapter_06/NotificationList';
//import Accommodate from './chapter_07/Accommodate';
//import ConfirmButton from './chapter_08/ConfirmButton';
//import LandingPage from './chapter_09/LandingPage';
//import AttendanceBook from './chapter_10/AttendanceBook';
//import SignUp from './chapter_11/SignUp';
//import Calculator from './chapter_12/Calculator';
//import ProfileCard from './chapter_13/ProfileCard';
//import DarkOrLight from './chapter_14/DarkOrLight';
import Blocks from './chapter_15/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);*/ /* chapter_03 */

/*setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  )
}, 1000);*/  /* chapter_04 */

/*root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);*/ /* chapter_05 */

/*root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);*/ /*chapter_06 */

/*root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
);*/ /* chapter_07 */

/*root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
);*/ /* chapter_08 */

/*root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);*/ /* chapter_09 */

/*root.render(
  <React.StrictMode>
    <AttendanceBook/>
  </React.StrictMode>
);*/ /* chapter_10 */

/*root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);*/ /* chapter_11 */

/*root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);*/ /* chapter_12 */

/*root.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>
);*/ /* chapter_13 */

/*setInterval(() => {
  root.render(
    <React.StrictMode>
      <ProfileCard />
    </React.StrictMode>
  )
}, 1000);*/ /* chapter_13 변형*/

/*root.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>
);*/ /*chapter_14*/

root.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>
); /*chapter_15 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
