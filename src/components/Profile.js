import React, { useContext } from "react";
import { AuthContext } from "../Context/Context";

const Profile = () => {
  const {user} = useContext(AuthContext);

  return (
    <div className="justify-center rounded-xl mb-4">
      <img
        src="https://source.unsplash.com/150x150/?portrait?3"
        alt=""
        className="w-32 h-32 mx-auto rounded-full aspect-square"
      />
      <div className="text-center divide-y">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
          <p className="px-5 text-xs sm:text-base text-black">
            {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
