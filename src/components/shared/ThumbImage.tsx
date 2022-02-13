import React from 'react'
import {
  useState,
  useEffect,
  FC
} from "react"


type ThumbProps = {
  file: File | null;
};

const Thumb: FC<ThumbProps> = ({ file }) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [thumb, setThumb] = useState<string>();

  useEffect(() => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setThumb(reader.result as string);
      };
      setLoading(false);
    }
  }, [file]);

  if (!file) {
    return null;
  }

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <img
      src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200}
    />
  );
};

export default Thumb 