"use client";
import React, { useState, forwardRef, type ForwardedRef } from "react";
import {
  type FieldError,
  type FieldErrorsImpl,
  type Merge,
} from "react-hook-form";
import { FiEye, FiEyeOff, FiArrowRightCircle } from "react-icons/fi";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  className?: string;
  type?: string;
  rows?: number;
  inputClassName?: string;
  arrow?: boolean;
  onArrowClick?: () => void;
}

const InputField = (
  {
    error,
    placeholder,
    label,
    className = "",
    type = "text",
    rows = 1,
    inputClassName,
    defaultValue,
    arrow,
    onArrowClick,
    ...rest
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };


  return (
    <div className={`relative ${className} `}>
      {label && <h4 className="font-medium text-sm text-[#424242]">{label}</h4>}
      {type === "textarea" ? (
        <textarea
          className={`w-full border disabled:bg-[#f5f5f5] disabled:border-2 disabled:border-black disabled:border-opacity-50  ${
            label ? "mt-3" : "mt-0"
          } p-3  rounded-[10px] ${
            error ? "border-red-500 border-opacity-100" : "border-[#EDEDED]"
          } bg-white focus:outline-none focus:ring-2 focus:ring-[#00900a] focus:border-none ${inputClassName}`}
          placeholder={placeholder}
          rows={rows}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          defaultValue={defaultValue}
          {...rest}
        />
      ) : (
        <div className={`relative`}>
          <input
            className={`w-full border disabled:bg-[#f5f5f5] disabled:border-2 disabled:border-black disabled:border-opacity-50  ${
              label ? "mt-3" : "mt-0"
            } p-3  rounded-[10px] ${
              error ? "border-red-500 border-opacity-100" : "border-[#EDEDED]"
            } bg-white focus:outline-none focus:ring-2 focus:ring-[#00900a] focus:border-none ${inputClassName}`}
            type={
              type === "password"
                ? isPasswordVisible
                  ? "text"
                  : "password"
                : type
            }
            placeholder={placeholder}
            ref={ref as React.Ref<HTMLInputElement>}
            defaultValue={defaultValue}
            {...rest}
          />
          {type === "password" && (
            <button
              type="button"
              className="absolute top-2/3 right-3 transform -translate-y-2/3"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          )}
          {arrow && (
            <button
            title={label}
              type="button"
              className="absolute top-2/3 right-3 transform -translate-y-2/3"
              onClick={togglePasswordVisibility}
            >
              <FiArrowRightCircle size={20} onClick={onArrowClick} />
            </button>
          )}
        </div>
      )}
      {error && (
        <p className="text-red-500 text-sm mt-1 ml-3">{error as string}</p>
      )}
    </div>
  );
};

export const ForwardedInput = forwardRef(InputField);
