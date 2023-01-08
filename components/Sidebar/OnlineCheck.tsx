import parse from "date-fns/parse";
import diffInMin from "date-fns/differenceInMinutes";
import useSWR from "swr";

export default function OnlineCheck() {
  const fetcher = async (input: RequestInfo, init: RequestInit, ...args: any[]) => {
    const res = await fetch(input, init);
    return res.json();
  };

  const { data, isLoading } = useSWR("/api/online", fetcher, {
    refreshInterval: 60000,
  });

  if (isLoading) {
    return (
      <span className="mt-3 inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800">
        <svg className="-ml-1 mr-1.5 h-2 w-2 text-red-400" fill="currentColor" viewBox="0 0 8 8">
          <circle cx={4} cy={4} r={3} />
        </svg>
        Offline
      </span>
    );
  }

  let lastOnlineTime = new Date();

  if (data && data.lastOnlineTime) {
    lastOnlineTime = parse(data.lastOnlineTime, "yyyy-MM-dd HH:mm:ss.SSSSSSSSS XXX", new Date());
  }

  if (lastOnlineTime && diffInMin(new Date(), lastOnlineTime) < 5) {
    return (
      <span className="mt-3 inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
        <svg className="-ml-1 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
          <circle cx={4} cy={4} r={3} />
        </svg>
        Currently Online
      </span>
    );
  }
  return (
    <span className="mt-3 inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800">
      <svg className="-ml-1 mr-1.5 h-2 w-2 text-red-400" fill="currentColor" viewBox="0 0 8 8">
        <circle cx={4} cy={4} r={3} />
      </svg>
      Currently Offline
    </span>
  );
}
