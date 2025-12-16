"use client";
import { useEffect, useState } from "react";

interface WakaTimeData {
  grand_total: {
    hours: number;
    minutes: number;
    text: string;
    total_seconds: number;
  };
  range: {
    date: string;
    text: string;
  };
}

export default function WakaTimeChart() {
  const [data, setData] = useState<WakaTimeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using fetch with JSONP workaround - we'll use the callback approach
        const script = document.createElement("script");
        const callbackName = `wakatime_callback_${Date.now()}`;
        
        (window as any)[callbackName] = (response: { data: WakaTimeData[] }) => {
          setData(response.data);
          setLoading(false);
          delete (window as any)[callbackName];
          document.body.removeChild(script);
        };

        script.src = `https://wakatime.com/share/@BrainBuzzer/3d13ddb1-6d22-4e13-bea2-cf8593af2217.json?callback=${callbackName}`;
        script.onerror = () => {
          setError("Failed to load WakaTime data");
          setLoading(false);
        };
        document.body.appendChild(script);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32 text-zinc-500 font-mono text-sm">
        <span className="animate-pulse">LOADING_METRICS...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-32 text-red-500 font-mono text-sm">
        ERROR: {error}
      </div>
    );
  }

  // Calculate max for scaling
  const maxSeconds = Math.max(...data.map((d) => d.grand_total.total_seconds), 1);

  return (
    <div className="p-6">
      <div className="flex items-end justify-between gap-2 h-40">
        {data.map((day, index) => {
          const height = (day.grand_total.total_seconds / maxSeconds) * 100;
          const dayLabel = new Date(day.range.date).toLocaleDateString("en-US", { weekday: "short" });
          
          return (
            <div key={index} className="flex flex-col items-center flex-1 group">
              {/* Tooltip */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity mb-2 text-xs font-mono text-neon-cyan whitespace-nowrap">
                {day.grand_total.text}
              </div>
              
              {/* Bar */}
              <div className="w-full flex justify-center" style={{ height: "120px" }}>
                <div
                  className="w-full max-w-8 rounded-t transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.5)]"
                  style={{
                    height: `${Math.max(height, 2)}%`,
                    background: `linear-gradient(to top, #00f3ff, #bd00ff)`,
                    alignSelf: "flex-end",
                  }}
                />
              </div>
              
              {/* Day label */}
              <div className="mt-2 text-xs font-mono text-zinc-500 group-hover:text-neon-cyan transition-colors">
                {dayLabel}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Legend */}
      <div className="flex justify-center mt-6 text-xs font-mono text-zinc-600">
        <span>LAST_7_DAYS</span>
      </div>
    </div>
  );
}
