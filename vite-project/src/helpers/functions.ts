import playstationLogo from "../assets/playstation.svg";
import windowsLogo from "../assets/windows.svg";
import xboxLogo from "../assets/xbox.svg";
import nintendoLogo from "../assets/nintendo.png";
import linuxLogo from "../assets/linux.png";
import appleLogo from "../assets/apple.svg";
import { Platform } from "./types";

export const getPlatformsIcons = (platforms: Platform[]) =>
  platforms
    .map(({ platform }) => {
      if (platform.name.includes("PlayStation")) {
        return playstationLogo;
      }
      if (platform.name.includes("PC")) {
        return windowsLogo;
      }
      if (platform.name.includes("Xbox")) {
        return xboxLogo;
      }
      if (platform.name.includes("Nintendo")) {
        return nintendoLogo;
      }
      if (platform.name.includes("Linux")) {
        return linuxLogo;
      }

      return appleLogo;
    })
    .filter((value, index, array) => array.indexOf(value) === index);

export const formatPath = (path: string) =>
  path.toLocaleLowerCase().replaceAll(" ", "-");
