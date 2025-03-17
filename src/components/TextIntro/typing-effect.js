// import { useEffect, useRef, useState } from "react";

// export function useTypingEffect(texts, interKeyStrokeDurationInMs, delayBetweenTextsInMs) {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [currentCharIndex, setCurrentCharIndex] = useState(0);

//   const intervalIdRef = useRef();

//   useEffect(() => {
//     const handleTyping = () => {
//       setCurrentCharIndex((prevCharIndex) => {
//         if (prevCharIndex < texts[currentTextIndex].length) {
//           return prevCharIndex + 1;
//         } else {
//           // Move to the next text when the current one is fully typed
//           setCurrentTextIndex((prevTextIndex) => (prevTextIndex + 1) % texts.length);
//           return 0;
//         }
//       });
//     };

//     const intervalId = setInterval(handleTyping, interKeyStrokeDurationInMs);

//     // Clear the interval after typing each text
//     const timeoutId = setTimeout(() => {
//       clearInterval(intervalId);
//       setCurrentCharIndex(0);
//     }, interKeyStrokeDurationInMs * texts[currentTextIndex].length + delayBetweenTextsInMs);

//     return () => {
//       clearInterval(intervalId);
//       clearTimeout(timeoutId);
//     };
//   }, [interKeyStrokeDurationInMs, delayBetweenTextsInMs, texts, currentTextIndex]);

//   const currentText = texts[currentTextIndex];
//   return currentText.substring(0, currentCharIndex);
// }
