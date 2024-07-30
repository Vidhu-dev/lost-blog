import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import XEditor from "./XEditor";
import { Label } from "@/components/ui/label";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "Technology",
  "Lifestyle",
  "Business",
  "Health",
  "Science",
  "Sports",
  "Entertainment",
];

function CreatePost() {
  const [coverImage, setCoverImage] = useState(null);
  const [editorContent, setEditorContent] = useState(null);
  useEffect(
    function () {
      console.log(editorContent);
    },
    [editorContent],
  );
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImage(URL.createObjectURL(file));
  };

  return (
    <div className="mx-1 my-4 grid grow justify-items-center gap-4">
      <div className="w-3/4">
        <div className="flex flex-col gap-4">
          <div className="flex w-56 flex-col gap-2">
            <Label htmlFor="cover">Add cover image</Label>
            <Input type="file" id="cover" onChange={handleImageChange} />
          </div>
          {coverImage && (
            <AspectRatio ratio={3 / 1} className=" ">
              <img
                src={coverImage}
                alt="Cover"
                className="h-full w-full rounded-md object-cover"
              />
            </AspectRatio>
          )}

          <Input placeholder="Title..." className="py-6 text-3xl font-bold" />
          <div className="w-56">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="relative w-3/4 py-2">
        <XEditor
          editorContent={editorContent}
          setEditorContent={setEditorContent}
        />
      </div>
    </div>
  );
}

export default CreatePost;
