"use client";

import React, { createContext, useContext, useState } from "react";

export const LOCATIONS = ['All India', 'Patna', 'Bengaluru', 'Mumbai', 'Delhi NCR'];

type LocationContextType = {
  location: string;
  setLocation: (location: string) => void;
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<string>(LOCATIONS[0]);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
}
