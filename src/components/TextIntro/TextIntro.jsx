// import React, { useState, useEffect, useMemo } from 'react';
// import './TextIntro.css';
// import { useTypingEffect } from '../TextIntro/typing-effect';
// import { useTheme } from '../../ThemeContext';
// import { motion } from "framer-motion";
// import typingSound from '../Assets/KeybordSound.mp3';

// const TextIntro = () => {
//   const { theme, toggleTheme } = useTheme();
//   const [isMounted, setIsMounted] = useState(false);
//   // const [audioPlayed, setAudioPlayed] = useState(false);
//   const [iconSetting, setIconSetting] = useState(false);
//   const [iconSound, setIconSound] = useState(false);
//   const [showFirstText, setShowFirstText] = useState(false);
//   const [showSecondText, setShowSecondText] = useState(false);
//   const [showThirdText, setShowThirdText] = useState(false);
//   const audioRef = React.createRef();
  
//   const handleSettingClick = () => {
//     setIconSetting(prevState => !prevState);
//   }

//   const handleSoundClick = () => {
//     setIconSound(prevState => !prevState);
//     if (iconSound) {
//       audioRef.current.muted = true; // Mute the audio
//     } else {
//       audioRef.current.muted = false; // Unmute the audio
//     }
//   }

//   const handelMoonClick = () => {
//     if (theme === 'light') {
//       toggleTheme(); // Update the theme to 'dark'
//     }
//   }
  
//   const handelSunClick = () => {
//     if (theme === 'dark') {
//       toggleTheme(); // Update the theme to 'light'
//     }
//   }

//   const texts = useMemo(() => [
//     "Welcome to Achraf El Makaoui's Digital Universe!",
//     "               ",
//     "As a passionate developer and data scientist, I embark on a journey where code meets creativity and data unveils its stories. This portfolio is not merely a collection of projects, it's a testament to my commitment to innovation, problem-solving, and the boundless possibilities at the intersection of technology and data.",
//     "               ",
//     "Let the code compile, the algorithms converge, and the data unfold. Welcome to my world of development and data science!",
//     "               "
//   ], []);

//   const text = useTypingEffect(texts, 70, 2000); 

//   useEffect(() => {
//     setIsMounted(true);
//     audioRef.current.play();
//     return () => {
//       setIsMounted(false);
//       setShowFirstText(false);
//       setShowSecondText(false);
//       setShowThirdText(false);
//     };
//   }, []);

//   useEffect(() => {
//     if (isMounted) {
//       if (text === texts[0]) {
//         setShowFirstText(true);
//         setShowSecondText(false);
//         setShowThirdText(false);
//       } else if (text === texts[1]) {
//         setShowFirstText(false);
//         setShowSecondText(true);
//         setShowThirdText(false);
//       } else if (text === texts[2]) {
//         setShowFirstText(false);
//         setShowSecondText(false);
//         setShowThirdText(true);
//       } else {
//         setShowFirstText(true);
//         setShowSecondText(false);
//         setShowThirdText(false);
//       }
//     }
//   }, [text, texts, isMounted]);


//   return (
//     <section className='textIntro-section' id='textIntro'>
//       <div className='MenuIcon'>
//         <svg onClick={handleSettingClick} width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
//           <circle cx="12" cy="12" r="3"></circle>
//           <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
//         </svg>
//       </div>
//       {iconSetting && 
//         <motion.div
//           className='MenuDropDown'
//           animate={{ opacity: 1, scale: 1 }}
//           initial={{ opacity: 0, scale: 0.95 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ ease: "easeInOut", duration: 0.2 }}
//         >
//             <div className="MenuDropDownItem1" onClick={handleSoundClick}>
//               <div className='IconItem1'>
//                 {iconSound &&
//                   <>
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2">
//                       <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
//                       <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
//                     </svg>
//                   </>
//                 }
//                 {!iconSound &&
//                   <>
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x">
//                       <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
//                       <line x1="23" y1="9" x2="17" y2="15"></line>
//                       <line x1="17" y1="9" x2="23" y2="15"></line>
//                     </svg>
//                   </>
//                 }
//               </div>
//               <div className='TextItem1'>
//                 <span>Sounds On</span>
//               </div>
//               <div className='ValIconItem1'>
//                 {iconSound &&
//                   <>
//                     <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
//                       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//                       <polyline points="22 4 12 14.01 9 11.01"></polyline>
//                     </svg>
//                   </>
//                 }
//                 {!iconSound &&
//                   <>
//                     <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle">
//                       <circle cx="12" cy="12" r="10"></circle>
//                     </svg>
//                   </>
//                 }
//               </div>
//             </div>
//             <hr className='hrLine'/>
//             <div className="MenuDropDownItem2" onClick={handelSunClick}>
//               <div className='IconItem2'>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
//                   <circle cx="12" cy="12" r="5"></circle>
//                   <line x1="12" y1="1" x2="12" y2="3"></line>
//                   <line x1="12" y1="21" x2="12" y2="23"></line>
//                   <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
//                   <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
//                   <line x1="1" y1="12" x2="3" y2="12"></line>
//                   <line x1="21" y1="12" x2="23" y2="12"></line>
//                   <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
//                   <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
//                 </svg>
//               </div>
//               <div className='TextItem2'>
//                 <span>Light Theme</span>
//               </div>
//               <div className='ValIconItem2'>
//                 {theme==='light' &&
//                   <>
//                     <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
//                       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//                       <polyline points="22 4 12 14.01 9 11.01"></polyline>
//                     </svg>
//                   </>
//                 }
//               </div>
//             </div>
//             <div className="MenuDropDownItem3" onClick={handelMoonClick}>
//               <div className='IconItem3'>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon">
//                   <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//                 </svg>
//               </div>
//               <div className='TextItem3'>
//                 <span>Dark Theme</span>
//               </div>
//               <div className='ValIconItem3'>
//                 {theme==='dark' &&
//                   <>
//                     <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
//                       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//                       <polyline points="22 4 12 14.01 9 11.01"></polyline>
//                     </svg>
//                   </>
//                 }
//               </div>
//             </div>
//         </motion.div>
//       }
//       <div className='TextIntro-content'>
//         {showFirstText && <p>{text} <span>|</span></p>}
//         {showSecondText && <p>{text} <span>|</span></p>}
//         {showThirdText && <p>{text} <span>|</span></p>}
//       </div>
//       <audio ref={audioRef} src={typingSound} type="audio/mp3" muted />
//     </section>
//   );
// }

// export default TextIntro;
