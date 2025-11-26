import { createContext, useRef, useState } from "react";

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const currentAudioRef = useRef(null);
  const [currentAudioId, setCurrentAudioId] = useState(null);

  const setCurrentAudio = (audioElement, id) => {
    if (currentAudioRef.current && currentAudioRef.current !== audioElement) {
      console.log(" in if condtion setCurrentAudio called:", id, audioElement, "prev:", currentAudioRef.current ,);

      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    console.log("setCurrentAudio called:", id, audioElement, "prev:", currentAudioRef.current);


    currentAudioRef.current = audioElement;
    setCurrentAudioId(id);
  };

  return (
    <AudioContext.Provider value={{ setCurrentAudio,currentAudioId }}>
      {children}
    </AudioContext.Provider>
  );
};
