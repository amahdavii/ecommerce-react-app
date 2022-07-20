import styled from "styled-components";
import tw from "twin.macro";

export const NavbarArea = styled.nav`
  ${tw`

    py-[25px]
    text-[#333]
   `}
`;

export const NavbarContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-between
   `}
`;

export const NavbarRightSide = styled.div`
  ${tw`
    flex-1
    bg-yellow-100
   `}
`;

export const NavbarCenterSide = styled.div`
  ${tw`
    flex-1
    bg-yellow-200
   `}
`;

export const NavbarLeftSide = styled.div`
  ${tw`
    flex-1
    bg-yellow-300
   `}
`;


