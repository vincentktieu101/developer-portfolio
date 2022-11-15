import React, { useEffect, useRef } from "react";

interface DrawerProps {
  setOpen: (open) => void;
};

function Drawer(props: DrawerProps) {
  const { setOpen } = props;
  const ref = useRef(null);
  const firstUpdate = useRef(true);

  useEffect(() => {
    const handleClick = (e) => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }
      if (e.target !== ref.current) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    }
  }, []);

  return (
    <>
      <div className="fixed bg-black/[0.4] w-[100vw] h-[100vh] z-[1]" />
      <div ref={ref} className={`fixed right-0 top-0 w-[60%] max-w-[400px] h-[100vh] bg-white z-[1] animate-expandDrawer`}>
        yooooooo
      </div>
    </>
  )
}

export default Drawer;
