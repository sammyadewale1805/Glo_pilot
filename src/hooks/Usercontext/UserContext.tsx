import axios from "axios";
import React, { useEffect } from "react";
import { baseURL, config, getUserConfig } from "../../Services/authorization";
import { initialUserState, UserInterface } from "./UserInterface";
// import { writeImageAsync } from "../../Global/UploadImage";

interface UserContextProps {
  user: UserInterface;
  updateUser: (name: string, email: string) => void;
  updateUserProfile: (
    UserData: UserInterface,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  getUser: () => Promise<void>;
}

export const useUserContext = React.createContext<UserContextProps | undefined>(
  undefined
);

export const UserContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<UserInterface>(initialUserState);

  const updateUser = (name: string, email: string) => {
    if (name) {
      setUser((prevState) => ({
        ...prevState,
        name: name,
      }));
    } else if (email) {
      setUser((prevState) => ({
        ...prevState,
        email: email,
      }));
    }
  };

  const updateUserProfile = async (
    UserData: UserInterface,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setIsLoading(true);
      await axios
        .put(baseURL + "user/update-user/" + user._id, UserData, config)
        .then((res) => {
          setUser(res.data.user);
          setIsLoading(false);
          console.log("User profile updated", res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log("There was an Error: ", err);
        });
    } catch (err) {
      console.error("Error updating user data:", err);
    }
  };

  const getUser = async () => {
    try {
      const res = await axios.get(baseURL + "user/get-user", getUserConfig);
      // console.log("Response data:", res.data);
      setUser(res?.data.user);

      res.data && setUser(res.data.user);

      if (res.data && res.data.user && res.data.user.profilePic) {
        const profilePicUrl = `${baseURL}${res.data.user.profilePic}`;
        console.log("user in my context...", user);
        // await writeImageAsync(profilePicUrl, "profile-Pic");
        console.log("Image saved successfully");
      } else {
        console.log("User data or profilePic not found in response");
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <useUserContext.Provider
      value={{ user, updateUser, updateUserProfile, getUser }}
    >
      {children}
    </useUserContext.Provider>
  );
};
