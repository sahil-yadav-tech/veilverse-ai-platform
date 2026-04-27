import React, { useState, useRef, useCallback } from "react";
import { MapPin, X, Heart, Star, MessageCircle, Bookmark, ChevronRight } from "lucide-react";

type UserProfile = {
  id: number;
  name: string;
  age: number;
  location: string;
  bio: string;
  interests: string[];
  image: string;
  gender: string;
  lookingFor: string;
  distance: string;
};

const mockUsers: UserProfile[] = [
  {
    id: 1,
    name: "Courtney",
    age: 25,
    location: "San Francisco, CA",
    distance: "2 km away",
    gender: "Straight",
    lookingFor: "Connection",
    bio: "Adventure seeker, music lover, and fitness enthusiast. Working in tech and exploring new places whenever I can. Let's grab coffee and talk about everything.",
    interests: ["Fitness", "Travel", "Music", "Nature", "Coffee"],
    image: "https://i.pinimg.com/1200x/09/ab/fd/09abfd5c30d59165e99b94fd382a7596.jpg",
  },
  {
    id: 2,
    name: "Alex",
    age: 27,
    location: "New York, USA",
    distance: "5 km away",
    gender: "Straight",
    lookingFor: "Relationship",
    bio: "Tech geek, coffee lover & startup enthusiast. Always building something new. Love deep conversations, late-night walks, and good playlists.",
    interests: ["Coding", "Startup", "Coffee", "Jazz", "Books"],
    image: "https://i.pinimg.com/736x/eb/27/61/eb27619c4d22cf8960c2a6a267dbfc67.jpg",
  },
  {
    id: 3,
    name: "Maya",
    age: 24,
    location: "Los Angeles, CA",
    distance: "12 km away",
    gender: "Bisexual",
    lookingFor: "Friendship",
    bio: "Film lover & beach enthusiast. Always chasing the golden hour. I paint on weekends and teach yoga on Tuesdays.",
    interests: ["Cinema", "Beach", "Art", "Yoga", "Sunsets"],
    image: "https://i.pinimg.com/736x/0f/68/94/0f6894e6e19b5c74d9c4e6d61d16f25a.jpg",
  },
  {
    id: 4,
    name: "Jordan",
    age: 28,
    location: "Chicago, IL",
    distance: "8 km away",
    gender: "Straight",
    lookingFor: "Connection",
    bio: "Chef by day, jazz fan by night. Life's too short for bad food or boring people. Will cook for you on the second date — maybe.",
    interests: ["Cooking", "Jazz", "Books", "Hiking", "Wine"],
    image: "https://i.pinimg.com/736x/c5/71/a5/c571a5c8f9a4bde3c3a5e44a1f891c3a.jpg",
  },
];

type SwipeDirection = "like" | "nope" | "super" | null;

const Explore: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeX, setSwipeX] = useState(0);
  const [swipeY, setSwipeY] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [swipeDir, setSwipeDir] = useState<SwipeDirection>(null);
  const [toast, setToast] = useState({ message: "", color: "", visible: false });

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const prevX = useRef(0);
  const velocityRef = useRef(0);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentUser = mockUsers[currentIndex % mockUsers.length];
  const nextUser = mockUsers[(currentIndex + 1) % mockUsers.length];

  const showToast = (message: string, color: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ message, color, visible: true });
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2200);
  };

  const triggerSwipe = useCallback(
    (direction: SwipeDirection) => {
      if (isAnimatingOut) return;
      setIsAnimatingOut(true);
      setSwipeDir(direction);
      if (direction === "like") showToast("💚  Liked!", "rgba(21,128,61,0.93)");
      else if (direction === "nope") showToast("✗  Passed", "rgba(185,28,28,0.93)");
      else if (direction === "super") showToast("⭐  Super Liked!", "rgba(29,78,216,0.93)");
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setSwipeX(0);
        setSwipeY(0);
        setSwipeDir(null);
        setIsAnimatingOut(false);
      }, 460);
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
    if (swipeX > 100 || velocityRef.current > 8) triggerSwipe("like");
    else if (swipeX < -100 || velocityRef.current < -8) triggerSwipe("nope");
    else { setSwipeX(0); setSwipeY(0); }
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
    else { setSwipeX(0); setSwipeY(0); }
  };

  const rotate = swipeX / 18;
  const outX = swipeDir === "like" ? 700 : swipeDir === "nope" ? -700 : swipeX;
  const outY = swipeDir === "super" ? -700 : swipeDir ? 60 : swipeY * 0.3;
  const outRotate = swipeDir === "like" ? 25 : swipeDir === "nope" ? -25 : rotate;
  const cardTransform = `translateX(${outX}px) translateY(${outY}px) rotate(${outRotate}deg)`;

  const progress = Math.min(Math.abs(swipeX) / 80, 1);
  const likeOpacity = swipeX > 20 ? progress : 0;
  const nopeOpacity = swipeX < -20 ? progress : 0;
  const shadowPeek = Math.abs(swipeX) > 30 || isAnimatingOut;

  // Up next list (exclude current)
  const upNext = mockUsers
    .filter((_, i) => i !== currentIndex % mockUsers.length)
    .slice(0, 2);

  return (
    <div
      className="min-h-screen bg-[#F5F4F1] select-none"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600&family=Cormorant+Garamond:wght@600;700&display=swap');
        * { box-sizing: border-box; }
      `}</style>



      {/* PAGE LAYOUT: 3 columns */}
      <div className="max-w-[1280px] mx-auto px-8 py-10 flex gap-8 items-start">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="w-56 shrink-0 flex flex-col gap-4 sticky top-24">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-4">Filters</p>
            {[
              { label: "Age Range", value: "22 – 32" },
              { label: "Distance", value: "≤ 20 km" },
              { label: "Orientation", value: "Any" },
            ].map((f) => (
              <div key={f.label} className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500">{f.label}</span>
                <span className="text-sm font-medium text-gray-800">{f.value}</span>
              </div>
            ))}
            <button className="mt-2 w-full text-xs font-medium text-gray-500 border border-gray-200 rounded-xl py-2 hover:bg-gray-50 transition">
              Edit Filters
            </button>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-4">Today</p>
            {[
              { label: "Seen", value: currentIndex },
              { label: "Likes sent", value: 4 },
              { label: "Matches", value: 2 },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">{s.label}</span>
                <span className="text-sm font-semibold text-gray-900">{s.value}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Tip</p>
            <p className="text-xs text-gray-500 leading-relaxed">Drag the card left to pass, right to like. Or use the buttons below.</p>
          </div>
        </aside>

        {/* ── CENTER: swipe stack ── */}
        <div className="flex-1 flex flex-col items-center justify-start gap-7 pt-4">
          {/* Card stack */}
          <div className="relative" style={{ width: 380, height: 540 }}>

            {/* Shadow card */}
            <div
              className="absolute rounded-[26px] overflow-hidden pointer-events-none"
              style={{
                width: "91%", height: "100%",
                left: "4.5%", top: 14,
                zIndex: 0,
                transform: shadowPeek ? "scale(0.97)" : "scale(0.94)",
                filter: shadowPeek ? "brightness(0.58)" : "brightness(0.42)",
                transition: "transform 0.35s ease, filter 0.35s ease",
              }}
            >
              <img src={nextUser.image} alt={nextUser.name} className="w-full h-full object-cover" draggable={false} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            </div>

            {/* Main card */}
            <div
              className="absolute w-full h-full rounded-[26px] overflow-hidden"
              style={{
                zIndex: 1,
                boxShadow: "0 24px 70px rgba(0,0,0,0.18)",
                transform: cardTransform,
                transition: isAnimatingOut
                  ? "transform 0.46s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.46s"
                  : isDragging.current ? "none" : "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
                opacity: isAnimatingOut ? 0 : 1,
                cursor: isDragging.current ? "grabbing" : "grab",
              }}
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img src={currentUser.image} alt={currentUser.name} className="w-full h-full object-cover" draggable={false} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              {/* LIKE */}
              <div className="absolute top-9 left-6 border-[3px] border-green-400 text-green-400 font-bold text-[22px] px-4 py-1 rounded-xl pointer-events-none"
                style={{ opacity: likeOpacity, transform: "rotate(-14deg)", letterSpacing: 3 }}>LIKE</div>
              {/* NOPE */}
              <div className="absolute top-9 right-6 border-[3px] border-red-400 text-red-400 font-bold text-[22px] px-4 py-1 rounded-xl pointer-events-none"
                style={{ opacity: nopeOpacity, transform: "rotate(14deg)", letterSpacing: 3 }}>NOPE</div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, fontWeight: 700, lineHeight: 1 }}>
                  {currentUser.name}, {currentUser.age}
                </h2>
                <div className="flex items-center gap-1.5 text-white/60 text-sm mt-1 mb-3">
                  <MapPin size={12} />{currentUser.location} · {currentUser.distance}
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentUser.interests.slice(0, 4).map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-6">
            <button onClick={() => triggerSwipe("nope")}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
              style={{ boxShadow: "0 4px 24px rgba(239,68,68,0.28)" }}>
              <X className="text-red-400" size={22} />
            </button>
            <button onClick={() => triggerSwipe("super")}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
              style={{ boxShadow: "0 4px 24px rgba(96,165,250,0.28)" }}>
              <Star className="text-blue-400" size={18} />
            </button>
            <button onClick={() => triggerSwipe("like")}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
              style={{ boxShadow: "0 4px 24px rgba(74,222,128,0.28)" }}>
              <Heart className="text-green-400" size={22} />
            </button>
          </div>

          <p className="text-xs text-gray-400 tracking-widest">
            {(currentIndex % mockUsers.length) + 1} / {mockUsers.length} profiles
          </p>
        </div>

        {/* ── RIGHT PANEL: profile detail ── */}
        <aside className="w-72 shrink-0 sticky top-24 flex flex-col gap-4">
          {/* Profile card */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="relative h-40">
              <img src={currentUser.image} alt={currentUser.name} className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <div className="absolute bottom-3 left-4 text-white">
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, lineHeight: 1 }}>
                  {currentUser.name}, {currentUser.age}
                </p>
                <p className="text-white/65 text-xs flex items-center gap-1 mt-0.5">
                  <MapPin size={10} />{currentUser.location}
                </p>
              </div>
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{currentUser.bio}</p>

              <div className="border-t border-gray-100 pt-4 mb-4">
                {[
                  { k: "Orientation", v: currentUser.gender },
                  { k: "Looking for", v: currentUser.lookingFor },
                  { k: "Distance", v: currentUser.distance },
                ].map((row) => (
                  <div key={row.k} className="flex items-center justify-between mb-2.5">
                    <span className="text-sm text-gray-400">{row.k}</span>
                    <span className="text-sm font-medium text-gray-800">{row.v}</span>
                  </div>
                ))}
              </div>

              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Interests</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {currentUser.interests.map((tag, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="w-full bg-gray-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-700 transition flex items-center justify-center gap-2 mb-2">
                <MessageCircle size={14} /> Send Message
              </button>
              <button className="w-full border border-gray-200 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2">
                <Bookmark size={14} /> Save Profile
              </button>
            </div>
          </div>

          {/* Up next */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Up Next</p>
            <div className="flex flex-col gap-3">
              {upNext.map((u) => (
                <div key={u.id} className="flex items-center gap-3">
                  <img src={u.image} alt={u.name}
                    className="w-10 h-10 rounded-full object-cover object-top border-2 border-white shadow-sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{u.name}, {u.age}</p>
                    <p className="text-xs text-gray-400 truncate">{u.distance}</p>
                  </div>
                  <ChevronRight size={14} className="text-gray-300 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Toast */}
      <div
        className="fixed bottom-8 left-1/2 px-6 py-3 rounded-full text-white text-sm font-medium pointer-events-none z-50"
        style={{
          background: toast.color || "rgba(30,30,30,0.9)",
          opacity: toast.visible ? 1 : 0,
          transform: `translateX(-50%) translateY(${toast.visible ? 0 : 16}px)`,
          transition: "opacity 0.3s, transform 0.3s",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
        }}
      >
        {toast.message}
      </div>
    </div>
  );
};

export default Explore;