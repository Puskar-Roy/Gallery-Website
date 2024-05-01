"use client";
import React, { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Fileupload from "./file-upload";
// import Fileupload from "@/components/file-upload";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "PlayGround Name Is Required!",
  }),
  imageUrl: z.string().min(1, {
    message: "Image Is Required!",
  }),
});

const Dialogbox = () => {
  const [isMounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });
  const session = useSession();
  const isLoading = form.formState.isSubmitting;

  const detailsOnSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      await axios.post("/api/servers", {
        caption: values.name,
        src: values.imageUrl,
        author: session.data?.user?.email,
      });
      form.reset();
      router.refresh();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  if (!isMounted) {
    return null;
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Upload Here</Button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-slate-800 dark:text-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-center text-2xl font-bold">
            Upload <span className="text-rose-500">Image</span>
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500 dark:text-white">
            Give Your Memories a Personality Caption and an Image.You can always
            change it later.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(detailsOnSubmit)}
            className="space-y-8"
          >
            <div className="space-y-8 px-6">
              <div className="flex items-center justify-center text-center">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Fileupload
                          endpoint="serverImage"
                          onChange={field.onChange}
                          value={field.value}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Memories Captions
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:bg-slate-50"
                        placeholder="Enter Memories Captions "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-geay-100 px-6 py-4">
              <Button variant="pink" disabled={isLoading}>
                Upload
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default Dialogbox;
