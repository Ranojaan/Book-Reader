import React from "react";
import Button from "../../atom/button/Button";
import { ICON_IMAGE } from "../../../assets/logo/index";


export const NavBar = () => {
  return (
    <div>
      
        <Button 
        buttonTitle="Home" 
        isActive={true} 
        icon={ICON_IMAGE.HOME} 
        />
        
        <Button
          buttonTitle="Category"
          isActive={false}
          icon={ICON_IMAGE.CATEGORY}
        />
      
        <Button
          buttonTitle="Favorite"
          isActive={false}
          icon={ICON_IMAGE.HEART}
        />
      
        <Button
          buttonTitle="Your Library"
          isActive={false}
          icon={ICON_IMAGE.FOLDER}
        />
      
        <Button
          buttonTitle="Setting"
          isActive={false}
          icon={ICON_IMAGE.SETTING}
        />
      
        <Button
          buttonTitle="Log Out"
          isActive={false}
          icon={ICON_IMAGE.LOGOUT}
        />
      
    </div>
  );
};
