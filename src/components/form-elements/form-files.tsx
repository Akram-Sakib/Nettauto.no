"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { HiOutlineXMark } from "react-icons/hi2";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

interface FormPdfFileUploadProps {
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
}

const FormPdfFileUpload = ({
  name,
  label,
  required = false,
  disabled = false,
}: FormPdfFileUploadProps) => {
  const { control, setValue, getValues } = useFormContext();
  const initialFiles = getValues(name) || [];
  const [pdfFiles, setPdfFiles] = useState<File[]>(initialFiles);
  // console.log(pdfFiles);

  const handleFileChange = (index: number, newFile: File) => {
    const updatedFiles = [...pdfFiles];
    updatedFiles[index] = newFile;
    setPdfFiles(updatedFiles);
    setValue(name, updatedFiles);
  };

  const handleFileSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      handleFileChange(index, event.target.files[0]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = pdfFiles.filter((_, i) => i !== index);
    setPdfFiles(updatedFiles);
    setValue(name, updatedFiles);
  };

  const handleAddFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const updatedFiles = [...pdfFiles, ...newFiles];
      setPdfFiles(updatedFiles);
      setValue(name, updatedFiles);
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          {label && (
            <Label className="text-lg">
              {label} {required && <span className="text-red-500">*</span>}
            </Label>
          )}
          <FormControl>
            <div>
              <input
                type="file"
                accept=".pdf"
                multiple
                onChange={handleAddFiles}
                className="hidden"
                id="pdf-upload"
                disabled={disabled}
              />
              <label htmlFor="pdf-upload">
                <Alert className="bg-[#E8F9FF] px-10 border-none py-6 cursor-pointer">
                  <AlertDescription className="text-lg text-black text-center">
                    Last opp dokumenter
                    <span className="text-primaryred"> (PDF)</span>
                  </AlertDescription>
                </Alert>
              </label>
              <div className="flex items-start gap-4 mt-4">
                {pdfFiles.map((file, index) => (
                  <div key={index} className="relative flex items-center gap-2">
                    <div>
                      <input
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={(e) => handleFileSelect(e, index)}
                        id={`pdf-upload-${index}`}
                        disabled={disabled}
                      />
                      <label
                        htmlFor={`pdf-upload-${index}`}
                        className="cursor-pointer flex flex-col justify-start items-start"
                      >
                        <div className="bg-[#E2E2E2] flex items-center justify-center w-24 h-24 relative rounded-xl">
                          <Image
                            src="/pdf-placeholder.svg"
                            alt="PDF"
                            className="w-12 h-20"
                            width={80}
                            height={100}
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(index)}
                            className="absolute top-1 right-1 bg-primaryred text-white rounded-full"
                          >
                            <HiOutlineXMark size={14} />
                          </button>
                        </div>
                        <p className="w-32">{file.name}</p>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormPdfFileUpload;
