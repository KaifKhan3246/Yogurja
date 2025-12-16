import { useEffect } from "react";
import L from "leaflet";

const OSMMap = () => {
  useEffect(() => {
    const map = L.map("map").setView([19.20097, 72.94371], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    L.marker([19.20097, 72.94371])
      .addTo(map)
      .bindPopup(`📍<b>Yogurja Wellness Center</b><br/>
         Building A7 EnviroCare<br/>
         Wagle Industrial Estate, Thane`)
      .openPopup();

    return () => {
      map.remove(); // cleanup
    };
  }, []);

  return (
    <div
      id="map"
      className="h-[400px] w-full rounded-xl border"
    ></div>
  );
};

export default OSMMap;
