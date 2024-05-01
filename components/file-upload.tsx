"use client";
import React from "react";
import { FileUploadProps } from "@/interfaces";
import { UploadDropzone } from "@/utlis/uploadthing";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";

const Fileupload = ({ value, onChange, endpoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();
  if (fileType == "heic"){
    throw new Error("File Not Supported")
  }
  if (value && fileType !== "pdf")
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button
          type="button"
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
        >
          {" "}
          <X className="h-4 w-4" onClick={() => onChange("")} />
        </button>
      </div>
    );
  return (
    <UploadDropzone
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
        alert("Error In Upload FIle!");
      }}
    />
  );
};

export default Fileupload;
