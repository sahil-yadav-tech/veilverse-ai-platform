import React, { useState, useRef, useCallback } from "react";
import { MapPin, X, Heart, Star } from "lucide-react";

type UserProfile = {
  id: number;
  name: string;
  age: number;
  location: string;
  bio: string;
  interests: string[];
  image: string;
  gender: string;
};

const mockUsers: UserProfile[] = [
  {
    id: 1,
    name: "Courtney",
    age: 25,
    location: "San Francisco, CA",
    gender: "Straight",
    bio: "Adventure seeker, music lover, and fitness enthusiast. Working in tech and exploring new places whenever I can.",
    interests: ["Fitness", "Travel", "Music", "Nature"],
    image:
      "https://i.pinimg.com/1200x/09/ab/fd/09abfd5c30d59165e99b94fd382a7596.jpg",
  },
  {
    id: 2,
    name: "Alex",
    age: 27,
    location: "New York, USA",
    gender: "Straight",
    bio: "Tech geek, coffee lover & startup enthusiast. Always building something new.",
    interests: ["Coding", "Startup", "Coffee"],
    image:
      "https://i.pinimg.com/736x/eb/27/61/eb27619c4d22cf8960c2a6a267dbfc67.jpg",
  },
  {
    id: 3,
    name: "Maya",
    age: 24,
    location: "Los Angeles, CA",
    gender: "Bisexual",
    bio: "Film lover & beach enthusiast. Always chasing the golden hour.",
    interests: ["Cinema", "Beach", "Art", "Yoga"],
    image:
      "https://i.pinimg.com/736x/0f/68/94/0f6894e6e19b5c74d9c4e6d61d16f25a.jpg",
  },
  {
    id: 4,
    name: "Jordan",
    age: 28,
    location: "Chicago, IL",
    gender: "Straight",
    bio: "Chef by day, jazz fan by night. Life's too short for bad food.",
    interests: ["Cooking", "Jazz", "Books", "Hiking"],
    image:
      "https://i.pinimg.com/736x/c5/71/a5/c571a5c8f9a4bde3c3a5e44a1f891c3a.jpg",
  },
];

type SwipeDirection = "like" | "nope" | "super" | null;

type Toast = {
  message: string;
  color: string;
  visible: boolean;
};

const Explore: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeX, setSwipeX] = useState(0);
  const [swipeY, setSwipeY] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [swipeDir, setSwipeDir] = useState<SwipeDirection>(null);
  const [toast, setToast] = useState<Toast>({
    message: "",
    color: "",
    visible: false,
  });

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const velocityRef = useRef(0);
  const prevX = useRef(0);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentUser = mockUsers[currentIndex % mockUsers.length];
  const nextUser = mockUsers[(currentIndex + 1) % mockUsers.length];

  const showToast = (message: string, color: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ message, color, visible: true });
    toastTimer.current = setTimeout(
      () => setToast((t) => ({ ...t, visible: false })),
      2000
    );
  };

  const triggerSwipe = useCallback(
    (direction: SwipeDirection) => {
      if (isAnimatingOut) return;
      setIsAnimatingOut(true);
      setSwipeDir(direction);

      if (direction === "like") showToast("Liked! 💚", "rgba(22,101,52,0.92)");
      else if (direction === "nope")
        showToast("Passed ✗", "rgba(153,27,27,0.92)");
      else if (direction === "super")
        showToast("Super Like! ⭐", "rgba(30,64,175,0.92)");

      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setSwipeX(0);
        setSwipeY(0);
        setSwipeDir(null);
        setIsAnimatingOut(false);
      }, 450);
    },
    [isAnimatingOut]
  );

  const onMouseDown = (e: React.MouseEvent) => {
    if (isAnimatingOut) return;
    isDragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
    prevX.current = 0;
    velocityRef.current = 0;
  };

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current || isAnimatingOut) return;
      const dx = e.clientX - startX.current;
      const dy = e.clientY - startY.current;
      velocityRef.current = dx - prevX.current;
      prevX.current = dx;
      setSwipeX(dx);
      setSwipeY(dy);
    },
    [isAnimatingOut]
  );

  const onMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const threshold = 100;
    if (swipeX > threshold || velocityRef.current > 8) triggerSwipe("like");
    else if (swipeX < -threshold || velocityRef.current < -8)
      triggerSwipe("nope");
    else {
      setSwipeX(0);
      setSwipeY(0);
    }
  }, [swipeX, triggerSwipe]);

  const onTouchStart = (e: React.TouchEvent) => {
    if (isAnimatingOut) return;
    const t = e.touches[0];
    isDragging.current = true;
    startX.current = t.clientX;
    startY.current = t.clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || isAnimatingOut) return;
    const t = e.touches[0];
    setSwipeX(t.clientX - startX.current);
    setSwipeY(t.clientY - startY.current);
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (swipeX > 80) triggerSwipe("like");
    else if (swipeX < -80) triggerSwipe("nope");
    else {
      setSwipeX(0);
      setSwipeY(0);
    }
  };

  // Card transform
  const rotate = swipeX / 18;
  const outX =
    swipeDir === "like" ? 700 : swipeDir === "nope" ? -700 : swipeX;
  const outY =
    swipeDir === "super" ? -700 : swipeDir ? 60 : swipeY * 0.3;
  const outRotate =
    swipeDir === "like" ? 25 : swipeDir === "nope" ? -25 : rotate;

  const cardTransform = `translateX(${outX}px) translateY(${outY}px) rotate(${outRotate}deg)`;

  // Stamp opacity
  const progress = Math.min(Math.abs(swipeX) / 80, 1);
  const likeOpacity = swipeX > 20 ? progress : 0;
  const nopeOpacity = swipeX < -20 ? progress : 0;

  const shadowPeek = Math.abs(swipeX) > 30 || isAnimatingOut;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 select-none"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div className="flex flex-col items-center gap-6">
        {/* STACK */}
        <div className="relative" style={{ width: 340, height: 500 }}>
          {/* Shadow card (next profile) */}
          <div
            className="absolute rounded-[22px] overflow-hidden pointer-events-none"
            style={{
              width: "92%",
              height: "100%",
              left: "4%",
              top: 10,
              zIndex: 0,
              transform: shadowPeek ? "scale(0.97)" : "scale(0.95)",
              filter: shadowPeek ? "brightness(0.65)" : "brightness(0.5)",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
          >
            <img
              src={nextUser.image}
              alt={nextUser.name}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          </div>

          {/* Main card */}
          <div
            className="absolute w-full h-full rounded-[22px] overflow-hidden shadow-2xl"
            style={{
              zIndex: 1,
              transform: cardTransform,
              transition: isAnimatingOut
                ? "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.45s"
                : isDragging.current
                ? "none"
                : "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
              opacity: isAnimatingOut ? 0 : 1,
              cursor: isDragging.current ? "grabbing" : "grab",
            }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={currentUser.image}
              alt={currentUser.name}
              className="w-full h-full object-cover"
              draggable={false}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* LIKE stamp */}
            <div
              className="absolute top-8 left-5 border-4 border-green-400 text-green-400 font-bold text-3xl px-4 py-1 rounded-xl pointer-events-none"
              style={{
                opacity: likeOpacity,
                transform: "rotate(-15deg)",
                letterSpacing: 2,
                fontFamily: "sans-serif",
              }}
            >
              LIKE
            </div>

            {/* NOPE stamp */}
            <div
              className="absolute top-8 right-5 border-4 border-red-400 text-red-400 font-bold text-3xl px-4 py-1 rounded-xl pointer-events-none"
              style={{
                opacity: nopeOpacity,
                transform: "rotate(15deg)",
                letterSpacing: 2,
                fontFamily: "sans-serif",
              }}
            >
              NOPE
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h2 className="text-3xl font-bold leading-tight">
                {currentUser.name}, {currentUser.age}
              </h2>
              <div className="flex items-center gap-1.5 text-white/70 text-sm mt-0.5 mb-3">
                <MapPin size={13} />
                {currentUser.location}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentUser.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full border border-white/30 bg-white/15 backdrop-blur-sm text-white"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-5">
          {/* Nope */}
          <button
            onClick={() => triggerSwipe("nope")}
            className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
            style={{ boxShadow: "0 4px 20px rgba(248,113,113,0.4)" }}
          >
            <X className="text-red-400" size={24} />
          </button>

          {/* Super Like */}
          <button
            onClick={() => triggerSwipe("super")}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
            style={{ boxShadow: "0 4px 20px rgba(96,165,250,0.4)" }}
          >
            <Star className="text-blue-400" size={20} />
          </button>

          {/* Like */}
          <button
            onClick={() => triggerSwipe("like")}
            className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
            style={{ boxShadow: "0 4px 20px rgba(74,222,128,0.4)" }}
          >
            <Heart className="text-green-400" size={24} />
          </button>
        </div>

        {/* Counter */}
        <p className="text-xs text-gray-400 tracking-wide">
          {(currentIndex % mockUsers.length) + 1} of {mockUsers.length}
        </p>
      </div>

      {/* Toast */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full text-white text-sm font-medium pointer-events-none z-50"
        style={{
          background: toast.color || "rgba(30,30,30,0.88)",
          opacity: toast.visible ? 1 : 0,
          transform: `translateX(-50%) translateY(${toast.visible ? 0 : 20}px)`,
          transition: "opacity 0.3s, transform 0.3s",
        }}
      >
        {toast.message}
      </div>
    </div>
  );
};

export default Explore;