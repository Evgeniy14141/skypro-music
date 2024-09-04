"use client";

import { Player } from "@/components/Player/Player";
import styles from "./Bar.module.css";
import { Volume } from "@/components/Volume/Volume";
import { ProgressBar } from "@/components/ProgressBar/ProgressBar";
import { useEffect, useRef, useState, useMemo } from "react";
import { formatTime } from "@/utils/formatTime";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setIsPlaying, setNextTrack } from "@/store/features/tracksSlice";

export function Bar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const duration = audioRef.current?.duration || 0;
  const { currentTrack: track, isPlaying } = useAppSelector(
    (state) => state.playlist
  );
  const dispatch = useAppDispatch();

  const timePlaying = useMemo(() => {
    return formatTime(currentTime);
  }, [currentTime]);

  const timeDuration = useMemo(() => {
    return formatTime(duration);
  }, [duration]);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      if (track) {
        audio.play();
        dispatch(setIsPlaying(true));
      }
    }
  }, [track, dispatch]);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      dispatch(setNextTrack());
    };

    if (audio) {
      audio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, [track, dispatch]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  if (!track) {
    return null;
  }

  function togglePlay() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        dispatch(setIsPlaying(false));
      } else {
        audioRef.current.play();
        dispatch(setIsPlaying(true));
      }
    }
  }

  function handleSeek(event: React.ChangeEvent<HTMLInputElement>) {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
    }
  }

  function handleLoop() {
    if (audioRef.current) {
      audioRef.current.loop = !isLoop;
      setIsLoop((prevState) => !prevState);
    }
  }

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barTimer}>
          {timePlaying} / {timeDuration}
        </div>
        <ProgressBar
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={handleSeek}
        />
        <div className={styles.barPlayerBlock}>
          <audio
            ref={audioRef}
            src={track?.track_file}
            onTimeUpdate={(e) => {
              setCurrentTime(e.currentTarget.currentTime);
            }}
          />
          <Player
            track={track}
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            handleLoop={handleLoop}
            isLoop={isLoop}
          />
          <Volume
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
