import React from "react";

export default function Sidebar() {
  return (
    // <div className="static left-0 bg-white">
    //     <div>
    //       <div>
    //         <img src="" alt="" />
    //       </div>
    //       <div>
    //         <h2>Accelerated Science</h2>
    //       </div>
    //     </div>
    // </div>

    <div className="relative bg-whitesmoke-100 w-full h-[64rem] overflow-hidden text-left text-[1rem] text-gray-200 font-poppins hover:cursor-auto">
      <div className="absolute top-[0rem] left-[0rem] w-[16.06rem] h-[64rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-white w-[16.06rem] h-[64rem]" />
        <img
          className="absolute top-[0rem] left-[16.05rem] w-[0.03rem] h-[64rem]"
          alt=""
          src="../vector-6.svg"
        />
      </div>
      <div className="absolute top-[14.31rem] left-[1rem] w-[14.06rem] h-[12.56rem] text-[0.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-whitesmoke-200 w-[14.06rem] h-[12.56rem]" />
        <div className="absolute top-[1rem] left-[1rem] opacity-[0.5]">
          Items
        </div>
        <div className="absolute top-[3.31rem] left-[1rem] opacity-[0.5]">{`Item Fields & List View Setup`}</div>
        <div className="absolute top-[5.63rem] left-[1rem]">
          Category Classifications
        </div>
        <div className="absolute top-[7.94rem] left-[1rem] opacity-[0.5]">
          Item Location
        </div>
        <div className="absolute top-[10.25rem] left-[1rem] opacity-[0.5]">
          Requests
        </div>
        {/* <div className="absolute top-[5.63rem] left-[0rem] w-[1.5rem] h-[1.31rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-dodgerblue-200 [filter:blur(32px)] w-[1.5rem] h-[1.31rem]" />
          <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-dodgerblue-100 w-[0.25rem] h-[1.31rem]" />
        </div> */}
      </div>
      <div className="absolute top-[28.88rem] left-[1rem] w-[14.06rem] h-[23rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[5.94rem] h-[1.5rem] opacity-[0.5]">
          <div className="absolute top-[0rem] left-[2rem]">Student</div>
          <img
            className="absolute top-[0.06rem] left-[0rem] w-[1.38rem] h-[1.38rem]"
            alt=""
            src="../vuesaxlinearuseroctagon.svg"
          />
        </div>
        <div className="absolute top-[3.5rem] left-[0rem] w-[7.75rem] h-[1.5rem] opacity-[0.5]">
          <div className="absolute top-[0rem] left-[2rem]">Item Sellers</div>
          <img
            className="absolute top-[0.06rem] left-[0rem] w-[1.38rem] h-[1.38rem]"
            alt=""
            src="../vuesaxlinearuseroctagon.svg"
          />
        </div>
        <div className="absolute top-[7rem] left-[0rem] w-[7rem] h-[1.5rem] opacity-[0.5]">
          <div className="absolute top-[0rem] left-[2rem]">Payments</div>
          <img
            className="absolute top-[0.06rem] left-[0rem] w-[1.38rem] h-[1.38rem]"
            alt=""
            src="../vuesaxlinearuseroctagon2.svg"
          />
        </div>
        <div className="absolute top-[12.5rem] left-[0rem] w-[5.81rem] h-[1.5rem] opacity-[0.5]">
          <div className="absolute top-[0rem] left-[2rem]">Reports</div>
          <img
            className="absolute top-[0.06rem] left-[0rem] w-[1.38rem] h-[1.38rem]"
            alt=""
            src="../vuesaxlinearuseroctagon3.svg"
          />
        </div>
        <div className="absolute top-[16rem] left-[0rem] w-[6.63rem] h-[1.5rem] opacity-[0.5]">
          <div className="absolute top-[0rem] left-[2rem]">User Role</div>
          <img
            className="absolute top-[0.06rem] left-[0rem] w-[1.38rem] h-[1.38rem]"
            alt=""
            src="../vuesaxlinearuseroctagon3.svg"
          />
        </div>
        <img
          className="absolute top-[3.63rem] left-[12.81rem] w-[1.25rem] h-[1.25rem]"
          alt=""
          src="../vuesaxlineararrowdown.svg"
        />
        <img
          className="absolute top-[10.48rem] left-[-0.02rem] w-[14.09rem] h-[0.03rem]"
          alt=""
          src="../vector-8.svg"
        />
        <img
          className="absolute top-[19.48rem] left-[-0.02rem] w-[14.09rem] h-[0.03rem]"
          alt=""
          src="../vector-8.svg"
        />
        <div className="absolute h-[6.52%] w-[38.67%] top-[93.48%] right-[61.33%] bottom-[0%] left-[0%] opacity-[0.5]">
          <div className="absolute top-[0%] left-[36.78%]">Logout</div>
          <img
            className="absolute top-[0.06rem] left-[0rem] w-[1.38rem] h-[1.38rem]"
            alt=""
            src="../vuesaxlinearlogout.svg"
          />
        </div>
      </div>
      <div className="absolute top-[10.94rem] left-[0rem] w-[11.38rem] h-[2.63rem] text-dodgerblue-100">
        <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-large rounded-br-large rounded-bl-none bg-dodgerblue-100 w-[3rem] h-[2.63rem]" />
        <img
          className="absolute top-[0.63rem] left-[1rem] w-[1.38rem] h-[1.38rem]"
          alt=""
          src="../vuesaxlinearmaincomponent.svg"
        />
        <div className="absolute top-[0.56rem] left-[3.63rem] font-medium">
          Items Overview
        </div>
      </div>
      <div className="absolute top-[6rem] left-[1rem] w-[7.63rem] h-[1.5rem] opacity-[0.5]">
        <img
          className="absolute top-[0.06rem] left-[0rem] w-[1.38rem] h-[1.38rem]"
          alt=""
          src="../vuesaxlinearmaincomponent1.svg"
        />
        <div className="absolute top-[0rem] left-[2rem]">Dashboard</div>
      </div>
      <div className="absolute top-[1rem] left-[1rem] w-[13.31rem] h-[2.5rem] text-[1.5rem] font-crimson-pro">
        <div className="absolute top-[0rem] left-[0rem] w-[1.75rem] h-[2.5rem]">
          <img
            className="absolute top-[0rem] left-[0rem] w-[1.75rem] h-[2.5rem] object-cover mix-blend-normal"
            alt=""
            src="../image-1@2x.png"
          />
          <div className="absolute top-[0rem] left-[0rem] bg-dodgerblue-100 w-[1.75rem] h-[2.5rem] mix-blend-color" />
        </div>
        <div className="absolute top-[0.38rem] left-[2.38rem]">
          Accelerate Science
        </div>
      </div>
      <img
        className="absolute top-[9.48rem] left-[0.98rem] w-[14.09rem] h-[0.03rem]"
        alt=""
        src="../vector-8.svg"
      />
    </div>
  );
}
