import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useAppSelector } from "store";
import clsx from "clsx";
import styles from "./Map.module.scss";

type Props = {
  className?: string;
};

const API_KEY = process.env.GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const Map: React.FC<Props> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(true);

  const myAddress = useAppSelector((s) => s.me.address);

  const mapUrl = useMemo(() => {
    const url = "https://www.google.com/maps/embed/v1/place";
    const query = new URLSearchParams();

    if (API_KEY) query.append("key", API_KEY);
    if (myAddress) query.append("q", myAddress);

    return url + "?" + query.toString();
  }, []);

  const onLoadHandler = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div
      id="map"
      className={clsx({
        [styles.map]: true,
        ["shimmer"]: isLoading,
        [className]: className,
      })}
    >
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="eager"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
        onLoad={onLoadHandler}
      />
    </div>
  );
};

export default Map;
