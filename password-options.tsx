"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function PasswordOptions() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-4">
      <div>
        <Label htmlFor="pwd" className="text-sm font-medium">Password</Label>
        <div className="relative mt-1.5">
          <Input
            id="pwd"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl pr-10"
            placeholder="Enter password"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2"
            onClick={() => setShow(!show)}
            type="button"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </Button>
        </div>
      </div>
      <div>
        <Label htmlFor="pwd-confirm" className="text-sm font-medium">Confirm Password</Label>
        <Input
          id="pwd-confirm"
          type={show ? "text" : "password"}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="mt-1.5 rounded-xl"
          placeholder="Confirm password"
        />
        {confirm && password !== confirm && (
          <p className="mt-1 text-xs text-destructive">Passwords do not match</p>
        )}
      </div>
    </div>
  );
}
