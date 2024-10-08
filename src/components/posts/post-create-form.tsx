"use client";

import { useFormState } from "react-dom";

import {
  Button,
  Input,
  Textarea,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "../common/form-button";

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const decodedSlug = decodeURIComponent(slug);
  const [formState, action] = useFormState(
    actions.createPost.bind(null, decodedSlug),
    {
      errors: {},
    }
  );

  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary">Create a post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            {formState.errors._form ? (
              <div className="p-2 bg-red-200 border border-red-400 rounded text-red-900 text-center">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
          </div>
          <FormButton>Create Post</FormButton>
        </form>
      </PopoverContent>
    </Popover>
  );
}
