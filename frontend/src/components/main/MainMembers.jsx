import React, { useState } from 'react';

const CommitteeCard = ({ initials, name, role, bgColor, image }) => {
  return (
    <div className="flex-shrink-0 flex flex-col items-center p-6 border rounded-xl shadow-md w-52 m-3">
      <div className={`w-20 h-20 overflow-hidden flex items-center justify-center rounded-full ${bgColor}`}>
        <img
          src={image || 'placeholder.jpg'}
          alt={`${name} photo`}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-3 font-semibold text-lg text-center">{name}</p>
      <p className="text-sm text-gray-500 text-center">{role}</p>
    </div>
  );
};

const CommitteeSlider = ({ members, groupTitles }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const nextSlide = () => {
    if (startIndex + visibleCount < members.length) {
      setStartIndex(startIndex + 2);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 2);
    }
  };

  const visibleMembers = members.slice(startIndex, startIndex + visibleCount);
  const groupedMembers = [];
  for (let i = 0; i < visibleMembers.length; i += 2) {
    groupedMembers.push(visibleMembers.slice(i, i + 2));
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-2 w-full max-w-screen-xl mx-auto">
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="text-gray-600 hover:text-blue-900 disabled:opacity-30 text-3xl"
          disabled={startIndex === 0}
        >
          ◀
        </button>

        <div className="flex overflow-hidden mx-4 w-full justify-center">
          {groupedMembers.map((group, i) => {
            const titleIndex = (startIndex / 2) + i;
            const title = groupTitles[titleIndex] || '';

            return (
              <div key={i} className="flex flex-col items-center mx-6">
                <p className="text-lg font-semibold text-blue-700 mb-2">{title}</p>
                <div className="flex">
                  {group.map((member, index) => (
                    <CommitteeCard key={index} {...member} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="text-gray-600 hover:text-blue-900 disabled:opacity-30 text-3xl"
          disabled={startIndex + visibleCount >= members.length}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

function App() {
  const designCommittee = [
    { initials: 'AS', name: 'Ayushi Shukla', role: 'Head', bgColor: 'bg-blue-100 text-blue-900', image: 'cyberhead.jpg' },
    { initials: 'RS', name: 'Rohit Singh', role: 'Co-Head', bgColor: 'bg-rose-300 text-white', image: '#' },
    { initials: 'NK', name: 'Nishant Kumar', role: 'Head', bgColor: 'bg-yellow-200 text-yellow-800', image: 'techhead.jpg' },
    { initials: 'RS', name: 'Abishek Soni', role: 'Co-Head', bgColor: 'bg-green-200 text-green-800', image: 'abishek.jpg' },
    { initials: 'RK', name: 'RajKumar Gupta', role: 'Head', bgColor: 'bg-purple-200 text-purple-900', image: 'webtechhead.jpg' },
    { initials: 'AS', name: 'Aditi Singh', role: 'Co-Head', bgColor: 'bg-orange-200 text-orange-900', image: '#' },
    { initials: 'SD', name: 'Shivank Dixit', role: 'Head', bgColor: 'bg-pink-200 text-pink-900', image: 'dsahead.jpg' },
    { initials: 'UK', name: 'Ujjawal Kumar', role: 'Co-Head', bgColor: 'bg-teal-200 text-teal-900', image: '' },
    { initials: 'AP', name: 'Amal Prasad', role: 'Head', bgColor: 'bg-purple-200 text-purple-900', image: 'aimlhead.jpg' },
    { initials: 'PC', name: 'Priya Chugh', role: 'Co-Head', bgColor: 'bg-orange-200 text-orange-900', image: 'Priya.jpg' },
    { initials: 'SJ', name: 'Srishti Jaiswar', role: 'Head', bgColor: 'bg-pink-200 text-pink-900', image: 'socialmediahead.jpg' },
    { initials: 'PS', name: 'Pallavi Saxena', role: 'Co-Head', bgColor: 'bg-teal-200 text-teal-900', image: 'Pallavi.jpg' },
  ];

  const groupTitles = [
    'Cyber Security Committee',
    'Tech Committee',
    'Web Development Committee',
    'DSA & CP Committee',
    'Social Media Committee',
    'AIML & Cloud Committee'
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-20 mt-20">Committee Members</h1>
      <CommitteeSlider members={designCommittee} groupTitles={groupTitles} />
    </div>
  );
}

export default App;
