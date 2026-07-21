import React from "react";
import { Search, MapPin, Phone, Clock, Compass, Navigation } from "lucide-react";
import { LocationItem } from "../types";
import { LOCATIONS } from "../data";

export default function LocationsTab() {
  const [selectedLocation, setSelectedLocation] = React.useState<LocationItem>(LOCATIONS[0]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredLocations = LOCATIONS.filter((loc) => {
    return loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           loc.address.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleDirections = (loc: LocationItem) => {
    const encodedAddress = encodeURIComponent(loc.address);
    // Open maps in a safe way without trigger iframe blocks, or just simulate it in-app with a beautiful success toast!
    alert(`Getting directions to ${loc.name} at: ${loc.address}\nOptimal route calculated: 8 mins via ON-404 S.`);
  };

  return (
    <div className="space-y-10 pb-20">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-black text-maple-red uppercase tracking-widest font-label block">Store Finder</span>
        <h2 className="font-display text-2xl md:text-3xl font-black text-deep-charcoal">
          Canadian 2-for-1 Pizzas Near You
        </h2>
        <p className="text-sm text-secondary font-sans">
          Locate our hot pizza ovens in Greater Toronto. Order for immediate pickup or high-speed direct home delivery.
        </p>
      </div>

      {/* Dual Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: List and search */}
        <div className="col-span-12 lg:col-span-5 space-y-4">
          {/* Search bar */}
          <div className="relative bg-white p-2 rounded-xl border border-gray-100 shadow-xs">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by City or Street (e.g. Richmond Hill, Aurora)..."
              className="w-full pl-11 pr-4 py-2.5 text-xs focus:outline-none font-sans bg-transparent"
            />
          </div>

          {/* List of locations */}
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {filteredLocations.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center text-xs text-gray-400 font-sans">
                No store locations match your query in Greater Toronto.
              </div>
            ) : (
              filteredLocations.map((loc) => {
                const isSelected = selectedLocation.id === loc.id;
                return (
                  <div
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className={`bg-white rounded-2xl p-5 border cursor-pointer transition-all ${
                      isSelected
                        ? "border-maple-red ring-2 ring-maple-red/5 bg-red-50/5"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-display text-sm font-black text-deep-charcoal">
                        {loc.name}
                      </h3>
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                        loc.isOpen ? "bg-green-100 text-success-green" : "bg-gray-100 text-gray-500"
                      }`}>
                        {loc.isOpen ? "OPEN NOW" : "CLOSED"}
                      </span>
                    </div>

                    <p className="text-xs text-secondary font-sans mt-2 flex items-start gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-maple-red flex-shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </p>

                    {isSelected && (
                      <div className="mt-4 pt-3 border-t border-red-100/50 space-y-2 text-xs text-secondary font-sans animate-fadeIn">
                        <p className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 text-gray-400" />
                          <span>{loc.phone}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5 text-gray-400" />
                          <span>Hours: {loc.hours}</span>
                        </p>
                        <div className="pt-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDirections(loc);
                            }}
                            className="w-full bg-deep-charcoal hover:bg-maple-red text-white py-2 rounded-xl font-label text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                          >
                            <Navigation className="h-3.5 w-3.5 fill-white" /> Get Directions
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right column: Interactive Visual Map Overlay */}
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-white border border-gray-100 rounded-3xl p-4 shadow-sm space-y-4">
            <div className="flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-wider">
              <span>Interactive Toronto North Locator Map</span>
              <span className="text-[10px] text-maple-red flex items-center gap-1">
                <Compass className="h-3.5 w-3.5 animate-spin" /> Click Pins to Select Store
              </span>
            </div>

            {/* Stylized Simulated Map Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-slate-100 border border-gray-200 overflow-hidden shadow-inner">
              {/* Gridlines for architectural look */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:30px_30px] opacity-40" />

              {/* Lakeshore water shape representation */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-100/80 border-t border-blue-200" />

              {/* Stylized highway networks */}
              <div className="absolute top-1/4 left-0 right-0 h-1 bg-yellow-400/50 transform -rotate-1" /> {/* Highway 407 */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-400/50 transform rotate-2" /> {/* Highway 7 */}
              <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-yellow-400/50" /> {/* Highway 404 */}

              {/* Map labels */}
              <span className="absolute bottom-4 left-6 text-[10px] font-black uppercase text-blue-800 tracking-widest">
                Lake Ontario
              </span>
              <span className="absolute top-6 left-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                York Region
              </span>
              <span className="absolute top-1/3 right-10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Markham Sector
              </span>

              {/* Interactive pins */}
              {LOCATIONS.map((loc) => {
                const isSelected = selectedLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className="absolute group transition-transform hover:scale-110 active:scale-95"
                    style={{ top: `${loc.lat}%`, left: `${loc.lng}%` }}
                    title={loc.name}
                  >
                    <div className="relative flex flex-col items-center">
                      {/* Name flag tooltip */}
                      <span className={`absolute -top-7 whitespace-nowrap text-[9px] font-bold px-2 py-0.5 rounded shadow-sm border transition-all ${
                        isSelected
                          ? "bg-maple-red text-white border-maple-red"
                          : "bg-white text-deep-charcoal border-gray-200 group-hover:block"
                      }`}>
                        {loc.name}
                      </span>

                      {/* Bouncy pin visual */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all ${
                        isSelected
                          ? "bg-maple-red text-white scale-110 animate-bounce"
                          : "bg-white text-maple-red border-2 border-maple-red"
                      }`}>
                        <MapPin className="h-4.5 w-4.5 fill-current" />
                      </div>

                      {/* Active radar rings below selected pin */}
                      {isSelected && (
                        <div className="absolute -bottom-1 w-4 h-4 bg-maple-red/30 rounded-full animate-ping" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Store overview banner inside map panel */}
            <div className="bg-dough-cream/60 border border-orange-100 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-sans">
              <div>
                <p className="font-bold text-deep-charcoal uppercase">Active Selected Store:</p>
                <p className="text-secondary mt-0.5">{selectedLocation.name} • {selectedLocation.address}</p>
              </div>
              <div className="bg-white px-3 py-1.5 rounded-lg border border-orange-100 font-bold text-maple-red text-[11px] uppercase tracking-wider">
                {selectedLocation.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
