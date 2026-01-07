import React from 'react';

const InputGroup = ({ label, name, type, placeholder, value, onChange }) => (
    <div className="flex flex-col space-y-2">
        <label className="text-sm font-bold text-[#00aaff] uppercase tracking-wider">{label}</label>
        <input 
            type={type} 
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="bg-black/40 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-[#00aaff] focus:ring-1 focus:ring-[#00aaff]/50 transition-all duration-300 placeholder-gray-600"
            required
        />
    </div>
);

export default InputGroup;
