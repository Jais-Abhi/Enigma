import React from "react";
import CreateEventForm from "./events/CreateEventForm";
import AdminEventList from "./events/admin/AdminEventList";

const Event = () => {
  return (
    <div className="flex justify-center text-2xl p-8 box-border ">
      {/* <form className='flex justify-between flex-col gap-4' >
          <p>Title : <input placeholder='Enter Title' className='border-2 border-black' plac type="text" name="" id="" /> </p>
          <p className='flex justify-between items-center' > Description : <textarea className='border-2 border-black' name="" id=""></textarea></p>
          <p>
            Community : 
            <select className='border-2 border-black' value="community" name="Community" id="">
                <option value="">AI & ML</option>
                <option value="">Web Developement</option>
                <option value="">Cyber Security</option>
                <option value="">Tech Coordinator</option>
                <option value="">Social Media</option>
            </select></p>
        </form> */}
      <AdminEventList />
      <CreateEventForm />
    </div>
  );
};

export default Event;
