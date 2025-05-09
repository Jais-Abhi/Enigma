import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaTwitter,FaGooglePlusG, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const members = [
  {
    name: "Ayushi Singh",
    title: "Cyber Security Head",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    image: "/cyberhead.jpg",
  },
  {
    name: "Shivak Dixit",
    title: "DSA Head",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/dsahead.jpg",
  },
  {
    name: "Nishant Kumar",
    title: "Technical Head",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/techhead.jpg",
  },
  {
    name: "Amal Prasad Trivedi",
    title: "AIML & Cloud",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/aimlhead.jpg",
  },
  {
    name: "Rajkumar Gupta",
    title: "web Development Head",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/webtechhead.jpg",
  },
  {
    name: "Srishti Jaiswar",
    title: "Social Media Head",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/socialmediahead.jpg",
  },
];
const MemberCard = ({ member }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded shadow hover:shadow-lg transition duration-300">
    <img src={member.image} alt={member.name} className="w-48 h-60 object-cover rounded" />
    <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
    <p className="italic text-gray-500">{member.title}</p>
    <p className="text-sm text-gray-600 mt-2 text-center">{member.description}</p>
    <div className="flex space-x-4 mt-3 text-gray-600">
      <FaLinkedinIn />
      <FaGooglePlusG />
      <FaTwitter />
      <FaGithub />
    </div>
  </div>
);

const MemberSlider = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold text-center mb-4">OUR MEMBERS</h2>
      <p className="text-center text-gray-500 mb-6">
        We are glad to introduce our professional members
      </p>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <MemberCard member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MemberSlider;
