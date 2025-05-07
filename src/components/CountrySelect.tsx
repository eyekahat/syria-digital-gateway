import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface CountryWithFlag {
  name: string;
  code: string;
}

interface CountrySelectProps {
  countries: CountryWithFlag[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  countries,
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Find the selected country object
  const selectedCountry = countries.find((country) => country.name === value);

  // Filter countries based on search term
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus input when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Selected country display or placeholder */}
      <div
        className="flex items-center justify-between w-full p-2 border rounded-md cursor-pointer bg-background"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {selectedCountry ? (
            <>
              {selectedCountry.code === "sy" ? (
                <div
                  className="w-6 h-4 mr-2 flex-shrink-0 border border-gray-300"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Green stripe (top) */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "33.33%",
                      backgroundColor: "#006C35",
                    }}
                  ></div>

                  {/* White stripe (middle) */}
                  <div
                    style={{
                      position: "absolute",
                      top: "33.33%",
                      left: 0,
                      right: 0,
                      height: "33.33%",
                      backgroundColor: "white",
                    }}
                  ></div>

                  {/* Black stripe (bottom) */}
                  <div
                    style={{
                      position: "absolute",
                      top: "66.66%",
                      left: 0,
                      right: 0,
                      height: "33.33%",
                      backgroundColor: "black",
                    }}
                  ></div>

                  {/* Red stars */}
                  <div
                    style={{
                      position: "absolute",
                      top: "33.33%",
                      left: 0,
                      right: 0,
                      height: "33.33%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        color: "#CE1126",
                        fontSize: "9px",
                        letterSpacing: "0px",
                        lineHeight: "1",
                        display: "flex",
                        justifyContent: "center",
                        gap: "1px",
                      }}
                    >
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={`https://flagcdn.com/24x18/${selectedCountry.code.toLowerCase()}.png`}
                  alt={`${selectedCountry.name} flag`}
                  className="w-6 h-4 mr-2 object-cover"
                  onError={(e) => {
                    // Hide broken images
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
              <span>{selectedCountry.name}</span>
            </>
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
          {/* Search input */}
          <div className="sticky top-0 p-2 bg-white border-b">
            <input
              ref={inputRef}
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="بحث..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Country list */}
          <div>
            {filteredCountries.map((country) => (
              <div
                key={country.code}
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onChange(country.name);
                  setIsOpen(false);
                  setSearchTerm("");
                }}
              >
                {country.code === "sy" ? (
                  <div
                    className="w-6 h-4 mr-2 flex-shrink-0 border border-gray-300"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Green stripe (top) */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "33.33%",
                        backgroundColor: "#006C35",
                      }}
                    ></div>

                    {/* White stripe (middle) */}
                    <div
                      style={{
                        position: "absolute",
                        top: "33.33%",
                        left: 0,
                        right: 0,
                        height: "33.33%",
                        backgroundColor: "white",
                      }}
                    ></div>

                    {/* Black stripe (bottom) */}
                    <div
                      style={{
                        position: "absolute",
                        top: "66.66%",
                        left: 0,
                        right: 0,
                        height: "33.33%",
                        backgroundColor: "black",
                      }}
                    ></div>

                    {/* Red stars */}
                    <div
                      style={{
                        position: "absolute",
                        top: "33.33%",
                        left: 0,
                        right: 0,
                        height: "33.33%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          color: "#CE1126",
                          fontSize: "9px",
                          letterSpacing: "0px",
                          lineHeight: "1",
                          display: "flex",
                          justifyContent: "center",
                          gap: "1px",
                        }}
                      >
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={`https://flagcdn.com/24x18/${country.code.toLowerCase()}.png`}
                    alt={`${country.name} flag`}
                    className="w-6 h-4 mr-2 object-cover"
                    onError={(e) => {
                      // Hide broken images
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
                <span>{country.name}</span>
              </div>
            ))}
            {filteredCountries.length === 0 && (
              <div className="p-2 text-center text-gray-500">لا توجد نتائج</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
