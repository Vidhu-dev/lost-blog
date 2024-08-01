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
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { createPost } from "./createpostSlice";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/utils/api";
import { useLoaderData } from "react-router-dom";

function CreatePost() {
  const [coverImage, setCoverImage] = useState(null);
  const [editorContent, setEditorContent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const { editor } = useSelector((state) => state.createPost);
  const categories = useLoaderData();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImage(file);
  };

  function handleContentSave() {
    setEditorContent(editor.getJSON());
  }
  function handleCreatePost(e) {
    const categoryID = categories.find(
      (s) => s.categoryName === selectedCategory,
    )._id;
    const post = {
      title,
      content: JSON.stringify(editorContent),
      status: e.target.name, // 'draft', 'published', 'archived', 'scheduled'
      publishedAt: null,
      categoryID,
      likes: 0,
    };

    const formData = new FormData();
    formData.append("post", JSON.stringify(post)); // Append post data as JSON string
    if (coverImage) {
      formData.append("coverImage", coverImage); // Append the image file
    }

    console.log(formData);
    toast.promise(dispatch(createPost(formData)).unwrap(), {
      loading: "Creating post...",
      success: "Post created successfully",
      error: (err) => err,
    });
    setIsDrawerOpen(false);
  }

  return (
    <div className="mx-1 my-4 grid grow justify-items-center gap-4">
      <div className="w-3/4">
        <div className="flex flex-col gap-4">
          <div className="flex w-56 flex-col gap-2">
            <Label htmlFor="cover">Add cover image</Label>
            <Input
              type="file"
              id="cover"
              name="coverImage"
              onChange={handleImageChange}
            />
          </div>
          {coverImage && (
            <AspectRatio ratio={3 / 1} className=" ">
              <img
                src={URL.createObjectURL(coverImage)}
                alt="Cover"
                className="h-full w-full rounded-md object-cover"
              />
            </AspectRatio>
          )}

          <Input
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="py-6 text-3xl font-bold"
          />
          <div className="w-56">
            <Select onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  {categories.map((category) => (
                    <SelectItem
                      key={category._id}
                      value={category.categoryName}
                    >
                      {category.categoryName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="relative w-3/4 py-2">
        <XEditor />
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <div className="my-2 flex justify-end">
              <Button onClick={handleContentSave}>Save</Button>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader className="">
                <DrawerTitle>Want to Publish this Post now?</DrawerTitle>
              </DrawerHeader>
              <DrawerFooter>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    onClick={handleCreatePost}
                    name="draft"
                  >
                    Save as Draft
                  </Button>
                  <Button onClick={handleCreatePost} name="published">
                    Post
                  </Button>
                </div>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default CreatePost;

export async function loader() {
  const categories = await getCategories();
  return categories.data;
}
