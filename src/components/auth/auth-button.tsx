"use client"

import { SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";

const AuthButton = () => {
  const { userId } = useAuth();

  if (userId) {
    return (
      <UserButton
        appearance={{
          elements: {
            avatarBox: "h-10 w-10",
          },
        }}
      />
    );
  }

  return (
    <div className="flex items-center gap-4">
      <SignInButton
        mode="modal"
        fallbackRedirectUrl={"/dashboard"}
        forceRedirectUrl={"/dashboard"}
      >
        <Button variant={"outline"}>ログイン</Button>
      </SignInButton>
      <SignUpButton mode="modal">
        <Button variant={"default"}>新規登録</Button>
      </SignUpButton>
    </div>
  );
};

export default AuthButton;
