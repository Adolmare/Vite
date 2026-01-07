import React from 'react';

const ContactItem = ({ icon, label, value, href }) => (
    <div className="flex items-center space-x-4 group cursor-default">
        <div className="w-12 h-12 flex items-center justify-center bg-[#00aaff]/10 rounded-lg text-2xl group-hover:bg-[#00aaff]/20 transition-colors duration-300 text-[#00aaff]">
            {icon}
        </div>
        <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">{label}</p>
            {href ? (
                <a href={href} className="text-lg text-white font-medium hover:text-[#00aaff] transition-colors duration-300">
                    {value}
                </a>
            ) : (
                <p className="text-lg text-white font-medium">{value}</p>
            )}
        </div>
    </div>
);

export default ContactItem;
