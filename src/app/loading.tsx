import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const NAVY = "#0f2244";

const Loading = () => {
  return (
    <div
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #ffffff 0%, #f4f7fb 60%, #eaf1fb 100%)",
      }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ backgroundColor: "#cfe0f5" }}
      />

      {/* Card */}
      <div className="relative flex flex-col items-center gap-6 px-10 py-12 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl shadow-slate-200/60 border border-white">
        {/* Logo with animated ring */}
        <div className="relative flex items-center justify-center">
          {/* Rotating ring */}
          <div
            className="absolute w-20 h-20 rounded-full border-2 border-transparent animate-spin"
            style={{
              borderTopColor: NAVY,
              borderRightColor: "#a9c3e6",
              animationDuration: "1.4s",
            }}
          />
          {/* Breathing glow */}
          <div
            className="absolute w-16 h-16 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: NAVY }}
          />

          <Avatar
            className="h-14 w-14 text-white shadow-lg ring-4 ring-white animate-[pulse_2.2s_ease-in-out_infinite]"
            style={{
              background: `linear-gradient(135deg, ${NAVY}, #3b6ea5)`,
            }}
          >
            <AvatarFallback className="bg-transparent font-bold text-lg">
              S
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Wordmark */}
        <div className="flex flex-col items-center gap-1">
          <h1
            className="text-2xl font-extrabold tracking-tight"
            style={{ color: NAVY }}
          >
            Shop<span style={{ color: "#3b6ea5" }}>Mart</span>
          </h1>
          <p className="text-xs font-medium tracking-widest uppercase text-slate-400">
            Loading your experience
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full animate-bounce"
              style={{
                backgroundColor: NAVY,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        {/* Shimmer progress bar */}
        <div className="w-40 h-1 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full w-1/3 rounded-full animate-[shimmer_1.6s_ease-in-out_infinite]"
            style={{
              background: `linear-gradient(90deg, transparent, ${NAVY}, transparent)`,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(340%); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
