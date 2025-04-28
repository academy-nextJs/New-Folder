"use client";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React, { FC } from "react";
import { ChevronLeft } from "lucide-react";
import { ILinkButton } from "@/types/buttons-type/buttons-type";

const LinkButtons: FC<ILinkButton> = ({ title, classname, link, variant }) => {
  return (
    <div>
      <Button
        variant={variant}
        onClick={() => redirect(link)}
        className={`cursor-pointer rounded-xl flex ${classname}`}
      >
        {title}
        <ChevronLeft />
      </Button>
    </div>
  );
};

export default LinkButtons;
