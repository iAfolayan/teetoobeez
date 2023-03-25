import React, { useState } from "react";
import Select from "react-select";

const Categories = ["All products", "ANKLET (Leg Chain)", "Earrings", "Bangles", "Necklaces"];

interface Props {
  onSelectCategory: (category: string | null) => void;
}

const MobileMenu = ({ onSelectCategory }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
 const [selectedOption, setSelectedOption] = useState('All products');

  const handleSelectCategory = (selected: string) => {
    setSelectedOption(selected);
    // Handle selected category here
  };
    const handleClick = (e: any) => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="flex md:hidden h-auto border-r relative z-20">
      <div className="sticky top-4">
          <div onClick={handleClick}>
            <input
              type="text"
              name="options"
              value={selectedOption}
              className="outline-none w-2/4 float-right cursor-pointer"
              disabled
            />
            <div
              className={`rounded-lg min-h-[80px] border border-[#c9ced1] mt-6 p-3 bg-white absolute w-fit right-0 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <ul>
                {Categories.map((opt) => (
                  <li
                    key={opt}
                    onClick={() => {
                      if (opt === "All products") {
                        onSelectCategory(null);
                        handleSelectCategory("All products");
                      } else {
                        onSelectCategory(opt);
                        handleSelectCategory(opt);
                      }
                    }}
                    className="cursor-pointer py-1 text-gray-500 text-sm"
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MobileMenu;
