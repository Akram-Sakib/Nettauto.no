"use client";

import { useState, ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { HiOutlineXMark } from "react-icons/hi2";
import ImageUploading from "react-images-uploading";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface FormImagesProps extends ComponentProps<"img"> {
  name: string;
  label?: string;
  required?: boolean;
  maxNumber?: number;
}

const FormImages = ({
  name,
  label,
  required = false,
  maxNumber = 69,
}: FormImagesProps) => {
  const { control, setValue, getValues } = useFormContext();
  const [images, setImages] = useState([]);
 
  
  const onChange = (imageList: any) => {
    setImages(imageList);
    console.log(imageList);
    if (imageList.length > 0) {
      setValue(
        name,
        imageList
      );
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {label} {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                dragProps,
              }) => (
                <>
                  <Alert
                    className="bg-[#E8F9FF] px-10 border-none py-6 mb-5"
                    style={{ marginLeft: "0px" }}
                  >
                    <AlertDescription className="text-lg text-black text-center">
                      Last opp bilder ved å klikke her
                      <span
                        className="text-primaryred cursor-pointer"
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        {" "}
                        Last opp
                      </span>
                    </AlertDescription>
                  </Alert>
                  <div className="flex gap-x-6">
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item relative">
                        <img
                          onClick={() => onImageUpdate(index)}
                          src={image["data_url"]}
                          alt=""
                          width="100"
                          className="cursor-pointer w-24 h-24"
                        />
                        <button
                          type="button"
                          className="bg-primaryred rounded-full text-white absolute top-1 right-1"
                          onClick={() => onImageRemove(index)}
                        >
                          <HiOutlineXMark />
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </ImageUploading>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormImages;
