import { useState, useEffect } from "react";

type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

const getTimeOfDay = (hour: number): TimeOfDay => {
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
};

const getGreeting = (timeOfDay: TimeOfDay, city?: string | null): string => {
  const greetings = {
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
    night: "Good evening", // Night also uses evening greeting
  };

  const baseGreeting = greetings[timeOfDay];
  return city ? `${baseGreeting} from ${city}!` : `${baseGreeting}!`;
};

export const TimeAwareGreeting = () => {
  const [greeting, setGreeting] = useState<string>(() => {
    // Initialize greeting immediately without location
    const now = new Date();
    const hour = now.getHours();
    const timeOfDay = getTimeOfDay(hour);
    return getGreeting(timeOfDay, null);
  });
  const [city, setCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hour = now.getHours();
      const timeOfDay = getTimeOfDay(hour);
      setGreeting(getGreeting(timeOfDay, city));
    };

    // Check for cached location (valid for 24 hours)
    const getCachedLocation = (): string | null => {
      try {
        const cached = localStorage.getItem('userLocation');
        if (cached) {
          const { city: cachedCity, timestamp } = JSON.parse(cached);
          const now = Date.now();
          // Cache valid for 24 hours
          if (now - timestamp < 24 * 60 * 60 * 1000) {
            return cachedCity;
          }
        }
      } catch (e) {
        // Ignore cache errors
      }
      return null;
    };

    // Cache location
    const cacheLocation = (cityName: string) => {
      try {
        localStorage.setItem('userLocation', JSON.stringify({
          city: cityName,
          timestamp: Date.now()
        }));
      } catch (e) {
        // Ignore cache errors
      }
    };

    // Get location using IP-based geolocation (faster)
    const getLocationByIP = async (): Promise<string | null> => {
      try {
        // Try ip-api.com first (fast and reliable)
        try {
          const response = await fetch('https://ip-api.com/json/?fields=status,message,city,regionName', { 
            signal: AbortSignal.timeout(2000) // 2 second timeout
          });
          const data = await response.json();
          
          if (data.status === 'success' && data.city) {
            return data.city;
          } else if (data.status === 'success' && data.regionName) {
            return data.regionName;
          }
        } catch (e) {
          // Try next service
        }

        // Fallback to ipapi.co
        try {
          const response = await fetch('https://ipapi.co/json/', { 
            signal: AbortSignal.timeout(2000)
          });
          const data = await response.json();
          
          if (data.city) {
            return data.city;
          } else if (data.region) {
            return data.region;
          }
        } catch (e) {
          // Service failed
        }
      } catch (err) {
        // All IP services failed
      }
      return null;
    };

    // Get location using GPS (slower but more accurate)
    const getLocationByGPS = (): Promise<string | null> => {
      return new Promise((resolve) => {
        if (!navigator.geolocation) {
          resolve(null);
          return;
        }

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`,
                { signal: AbortSignal.timeout(3000) }
              );
              const data = await response.json();
              
              if (data.city) {
                resolve(data.city);
              } else if (data.locality) {
                resolve(data.locality);
              } else if (data.principalSubdivision) {
                resolve(data.principalSubdivision);
              } else {
                resolve(null);
              }
            } catch (err) {
              resolve(null);
            }
          },
          () => resolve(null),
          { timeout: 3000, enableHighAccuracy: false, maximumAge: 300000 } // 5 min cache
        );
      });
    };

    // Get location with priority: Cache > IP > GPS > Default
    const getLocation = async () => {
      setIsLoading(true);
      
      // Check cache first
      const cachedCity = getCachedLocation();
      if (cachedCity) {
        setCity(cachedCity);
        setIsLoading(false);
        return;
      }

      // Try IP-based geolocation first (faster)
      const ipCity = await getLocationByIP();
      if (ipCity) {
        setCity(ipCity);
        cacheLocation(ipCity);
        setIsLoading(false);
        return;
      }

      // Fallback to GPS (slower but more accurate)
      const gpsCity = await getLocationByGPS();
      if (gpsCity) {
        setCity(gpsCity);
        cacheLocation(gpsCity);
        setIsLoading(false);
        return;
      }

      // Final fallback
      setCity("Bengaluru");
      setIsLoading(false);
    };

    // Get location
    getLocation();
  }, []);

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hour = now.getHours();
      const timeOfDay = getTimeOfDay(hour);
      setGreeting(getGreeting(timeOfDay, city));
    };

    // Update greeting immediately (even if city is null, show greeting without location)
    updateGreeting();

    // Update greeting every minute
    const interval = setInterval(updateGreeting, 60000);

    return () => clearInterval(interval);
  }, [city]);

  if (!greeting) {
    return null;
  }

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 animate-fade-in">
      <span className="text-sm font-semibold text-primary">{greeting}</span>
      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
    </div>
  );
};

