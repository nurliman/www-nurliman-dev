import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { setActive } from "store/sectionsSlice";

const HashRouter: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const sectionsList = useAppSelector((s) => s.sections.list);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    const foundSection = sectionsList.find(({ id }) => id.toLowerCase() === hash.toLowerCase());

    foundSection && dispatch(setActive(hash));
  }, []);

  return <>{children}</>;
};

export default HashRouter;
