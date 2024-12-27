import React, { FocusEvent, useRef, useState } from 'react';
import { countries } from '~/contants';
import ArrowDown from '~/assets/icons/arrow-down.svg?react';

const PhoneInput = () => {
  const [selectedCountryDialCode, setSelectedCountryDialCode] = useState(
    countries.find((country) => country.code === 'GR')?.dial_code
  );

  const selectRef = useRef<HTMLSelectElement>(null);

  const handleSelectChange = (event: FocusEvent<HTMLSelectElement, Element>) => {
    const prefix = event.target.value;
    const countryDialCode = countries.find((country) => country.dial_code === prefix)?.dial_code;
    setSelectedCountryDialCode(countryDialCode);
  };
  const handleCountryCodeClick = () => {
    selectRef.current?.focus();
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="phone" className="text-sm font-medium">
        Phone number
      </label>
      <div className="relative flex border border-gray-400 overflow-hidden text-sm w-full rounded-lg font-light mt-1 text-gray-700">
        <button
          tabIndex={-1}
          type="button"
          className="bg-white pointer-events-none absolute left-[7px] top-1/2 transform -translate-y-1/2 rounded-lg flex justify-center items-center w-12 outline-none"
          onClick={handleCountryCodeClick}
        >
          {selectedCountryDialCode} <ArrowDown />
        </button>
        <select
          ref={selectRef}
          name="dialCode"
          defaultValue={selectedCountryDialCode}
          className="w-14 px-3 py-2 bg-transparent focus:outline-violet-600 rounded-tl-lg rounded-bl-lg cursor-pointer"
          onChange={handleSelectChange}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.dial_code}>
              {country.name}
            </option>
          ))}
        </select>
        <input
          name="phone"
          type="tel"
          className="w-full pl-1 pr-3 py-2 rounded-tr-lg rounded-br-lg focus:outline-violet-600"
          placeholder="Phone (without country dial code)"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
