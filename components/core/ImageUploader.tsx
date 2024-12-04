"use client";
import { IconUpload, IconX } from "@tabler/icons-react";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type FileUploaderProps = {
  files: string | null;
  onChange: (files: File[] | null) => void;
};

export const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const [preview, setPreview] = React.useState<string | ArrayBuffer | null>(
    files
  );
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
        onChange(acceptedFiles);
      } catch (error) {
        console.log(error);
        setPreview(null);
      }
    },
    [onChange, setPreview]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [],
      "image/jpg": [],
      "image/jpeg": [],
      "image/webp": [],
    },
  });
  const removeImage = useCallback(() => {
    setPreview(null);
    onChange(null);
  }, [setPreview, onChange]);

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} type="file" />
      {preview ? (
        <div className="relative">
          {preview && (
            <IconX
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                removeImage();
              }}
              className="absolute top-1 right-1 border-2 rounded-full text-neutral-700 border-neutral-700"
            />
          )}
          <Image
            src={preview as string}
            width={1000}
            height={1000}
            alt="uploaded image"
            className="max-h-[400px] overflow-hidden object-contain"
          />
        </div>
      ) : (
        <>
          <div className="flex-1 flex justify-center items-center text-neutral-700">
            <IconUpload size={40} />
          </div>
          <div className="file-upload-label">
            <p className="text-[14px] leading-[18px] font-normal">
              <span className="text-blue-500">Click to upload </span>
              or drag and drop
            </p>
            <p className="text-[12px] leading-[16px] font-normal">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export default FileUploader;
