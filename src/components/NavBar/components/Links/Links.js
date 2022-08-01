import { useDispatch, useSelector } from "react-redux";
import { setClick } from "../../../../redux/OpenMenu/OpenMenu";
import { DesktopLinks, MobileLinks } from "./components";
import { StyledChromeClose, StyledFiMenu } from "./styled";

function Links() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.openMenu.isClicked);

  return (
    <div>
      {!isOpen && (
        <StyledFiMenu
          onClick={() => {
            dispatch(setClick());
          }}
        />
      )}
      {isOpen && (
        <StyledChromeClose
          onClick={() => {
            dispatch(setClick());
          }}
        />
      )}
      <DesktopLinks />
      {isOpen && <MobileLinks />}
    </div>
  );
}

export { Links };
