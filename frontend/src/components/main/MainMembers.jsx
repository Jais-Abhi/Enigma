import React, { useState, useEffect } from 'react';

// CommitteeCard Component
const CommitteeCard = ({ initials, name, role, bgColor, image }) => {
  return (
    <div className="flex-shrink-0 flex flex-col items-center p-4 border rounded-xl shadow-md w-40 sm:w-52 m-2 bg-white hover:scale-105 transition-transform duration-300">
      <div className={`w-16 h-16 sm:w-20 sm:h-20 overflow-hidden flex items-center justify-center rounded-full ${bgColor}`}>
        <img
          src={image || 'placeholder.jpg'}
          alt={`${name} photo`}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-3 font-semibold text-center text-sm sm:text-base">{name}</p>
      <p className="text-xs text-gray-500 text-center">{role}</p>
    </div>
  );
};

// CommitteeSlider Component
const CommitteeSlider = ({ members, groupTitles }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const slideInterval = 3000; // 3 seconds

  // Handle screen size change
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(4);
      } else {
        setVisibleCount(4);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Auto-slide every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => {
        const nextIndex = prevIndex + visibleCount;
        return nextIndex >= members.length ? 0 : nextIndex;
      });
    }, slideInterval);
    return () => clearInterval(interval);
  }, [visibleCount, members.length]);

  const nextSlide = () => {
    const nextIndex = startIndex + visibleCount;
    setStartIndex(nextIndex >= members.length ? 0 : nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = startIndex - visibleCount;
    setStartIndex(prevIndex < 0 ? 0 : prevIndex);
  };

  const visibleMembers = members.slice(startIndex, startIndex + visibleCount);
  const groupedMembers = [];
  for (let i = 0; i < visibleMembers.length; i += 2) {
    groupedMembers.push(visibleMembers.slice(i, i + 2));
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md w-full max-w-screen-xl mx-auto">
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="text-gray-600 hover:text-blue-900 disabled:opacity-30 text-2xl sm:text-3xl"
          disabled={startIndex === 0}
        >
          ◀
        </button>

        <div className="flex overflow-hidden mx-2 sm:mx-4 w-full justify-center">
          {groupedMembers.map((group, i) => {
            const actualIndex = startIndex + i * 2;
            const titleIndex = Math.floor(actualIndex / 2);
            const title = groupTitles[titleIndex] || '';

            return (
              <div key={i} className="flex flex-col items-center mx-2 sm:mx-6">
                <p className="text-base sm:text-lg font-semibold text-blue-700 mb-2 text-center">{title}</p>
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
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
          className="text-gray-600 hover:text-blue-900 disabled:opacity-30 text-2xl sm:text-3xl"
          disabled={startIndex + visibleCount >= members.length}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

// App Component
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
    'AIML & Cloud Committee',
    'Social Media Committee',
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12 sm:mb-20 mt-10 sm:mt-20">
        Committee Members
      </h1>
      <CommitteeSlider members={designCommittee} groupTitles={groupTitles} />
    </div>
  );
}

export default App;
