import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import Placeholder from "@tiptap/extension-placeholder";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Baseline,
  Bold,
  Code,
  Eye,
  Image,
  IndentDecrease,
  IndentIncrease,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  PaintBucket,
  Pencil,
  Redo2,
  Smile,
  Square,
  SquareCode,
  SquareDashedBottomCode,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  Underline,
  Undo,
  Undo2,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

function ToolBarPlugin({ editor }) {
  if (!editor) {
    return null;
  }
  return (
    <div>
      <ScrollArea className="w-screen rounded-md sm:w-full">
        <div className="flex">
          <TooltipProvider delayDuration="0">
            <ToggleGroup type="multiple">
              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    value="undo"
                    aria-lable="Undo"
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                  >
                    <Undo2 size={20} />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Undo</div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    value="redo"
                    aria-lable="Redo"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                  >
                    <Redo2 size={20} />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Redo</div>
                </TooltipContent>
              </Tooltip>

              <Separator orientation="vertical" />

              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    aria-label="Format Bold"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={editor.isActive("bold") ? "is-active" : ""}
                  >
                    <Bold size={20} />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Bold</div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    aria-label="Format Italics"
                    value="italic"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                      !editor.can().chain().focus().toggleItalic().run()
                    }
                    className={editor.isActive("italic") ? "is-active" : ""}
                  >
                    <Italic size={20} />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Italic</div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    aria-label="Format Underline"
                    value="underline"
                    disabled={true}
                  >
                    <Underline size={20} />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Underline</div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    value="strikethrough"
                    aria-label="Format Strikethrough"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                      !editor.can().chain().focus().toggleStrike().run()
                    }
                    className={editor.isActive("strike") ? "is-active" : ""}
                  >
                    <Strikethrough size={20} />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Strikethrough</div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editor.can().chain().focus().toggleCode().run()}
                    className={editor.isActive("code") ? "is-active" : ""}
                  >
                    <Code size={20} />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Code</div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    onClick={() =>
                      editor.chain().focus().toggleCodeBlock().run()
                    }
                    disabled={
                      !editor.can().chain().focus().toggleCodeBlock().run()
                    }
                    className={editor.isActive("code") ? "is-active" : ""}
                  >
                    <SquareCode size={20} />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Code Block</div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    onClick={() =>
                      editor.chain().focus().setHorizontalRule().run()
                    }
                  >
                    <Minus size={20} />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Horizontal Line</div>
                </TooltipContent>
              </Tooltip>
              <Separator orientation=" vertical " />

              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <ToggleGroupItem>
                        <AlignLeft size={20} />
                      </ToggleGroupItem>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Align</div>
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent className="min-w-0">
                  <ToggleGroup
                    type="single"
                    orientation="vertical"
                    className="fexl flex-col"
                  >
                    <ToggleGroupItem
                      value="align-left"
                      onClick={() =>
                        editor.chain().focus().setTextAlign("left").run()
                      }
                      className={
                        editor.isActive({ textAlign: "left" })
                          ? "is-active"
                          : ""
                      }
                    >
                      <AlignLeft size={20} />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="align-center"
                      onClick={() =>
                        editor.chain().focus().setTextAlign("center").run()
                      }
                      className={
                        editor.isActive({ textAlign: "center" })
                          ? "is-active"
                          : ""
                      }
                    >
                      <AlignCenter size={20} />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="align-right"
                      onClick={() =>
                        editor.chain().focus().setTextAlign("right").run()
                      }
                      className={
                        editor.isActive({ textAlign: "left" })
                          ? "is-active"
                          : ""
                      }
                    >
                      <AlignRight size={20} />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="align-justify"
                      onClick={() =>
                        editor.chain().focus().setTextAlign("justify").run()
                      }
                      className={
                        editor.isActive({ textAlign: "justify" })
                          ? "is-active"
                          : ""
                      }
                    >
                      <AlignJustify size={20} />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    onClick={() =>
                      editor.chain().focus().toggleBulletList().run()
                    }
                    className={editor.isActive("bulletList") ? "is-active" : ""}
                  >
                    <List size={20} />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  <div>List</div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    onClick={() =>
                      editor.chain().focus().toggleOrderedList().run()
                    }
                    className={
                      editor.isActive("orderedList") ? "is-active" : ""
                    }
                  >
                    <ListOrdered size={20} />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  <div>Numbered List</div>
                </TooltipContent>
              </Tooltip>

              <Separator orientation=" vertical " />
              <div className="hidden">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ToggleGroupItem>
                      <Baseline size={20} />
                    </ToggleGroupItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Text Color</div>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ToggleGroupItem>
                      <PaintBucket size={20} />
                    </ToggleGroupItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Highlight Color</div>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ToggleGroupItem>
                      <Square size={20} />
                    </ToggleGroupItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Todo</div>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ToggleGroupItem>
                      <IndentDecrease size={20} />
                    </ToggleGroupItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Outdent</div>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ToggleGroupItem>
                      <IndentIncrease size={20} />
                    </ToggleGroupItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Indent</div>
                  </TooltipContent>
                </Tooltip>
                <Separator orientation=" vertical " />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ToggleGroupItem>
                      <Link2 size={20} />
                    </ToggleGroupItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Link</div>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ToggleGroupItem>
                      <Image size={20} />
                    </ToggleGroupItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Insert Image</div>
                  </TooltipContent>
                </Tooltip>
                <DropdownMenu>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DropdownMenuTrigger asChild>
                        <ToggleGroupItem>
                          <Smile size={20} />
                        </ToggleGroupItem>
                      </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div>Emoji</div>
                    </TooltipContent>
                  </Tooltip>
                  <DropdownMenuContent className="rounded-xl p-0">
                    <Picker
                      data={data}
                      theme="light"
                      emojiButtonColors="#09090b"
                      perLine="7"
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ToggleGroupItem>
                      <Superscript size={20} />
                    </ToggleGroupItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Superscript</div>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ToggleGroupItem>
                      <Subscript size={20} />
                    </ToggleGroupItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Subscript</div>
                  </TooltipContent>
                </Tooltip>
                <Separator orientation=" vertical " />
              </div>
            </ToggleGroup>
          </TooltipProvider>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
const BubbleMenuUI = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <ToggleGroup type="multiple" className="rounded-md border bg-white">
      <ToggleGroupItem
        aria-label="Format Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <Bold size={20} />
      </ToggleGroupItem>
      <ToggleGroupItem
        aria-label="Format Italics"
        value="italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <Italic size={20} />
      </ToggleGroupItem>
      <ToggleGroupItem
        aria-label="Format Underline"
        value="underline"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <Underline size={20} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="strikethrough"
        aria-label="Format Strikethrough"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <Strikethrough size={20} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

const content = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 1 },
      content: [{ type: "text", text: "Welcome to the Blog Post Editor!" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This is a rich text editor where you can write and format your blog posts. ",
        },
        {
          type: "text",
          marks: [{ type: "bold" }],
          text: "Feel free to explore",
        },
        {
          type: "text",
          text: " the various formatting options available in the toolbar. You can add headings, paragraphs, and more to create engaging content for your readers.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Start writing your blog post by editing this text. Happy blogging!",
        },
      ],
    },
  ],
};

const EditorMode = ({ isEditable, setIsEditable }) => {
  return (
    <>
      <TooltipProvider delayDuration="0">
        <ToggleGroup type="single" className="flex justify-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem
                onClick={() => {
                  setIsEditable(!isEditable);
                }}
                className="hover:bg-black"
              >
                <Button
                  variant="secondary"
                  className="hover:bg-black hover:text-white"
                >
                  {isEditable ? <Pencil size={16} /> : <Eye size={16} />}
                  <div className="ml-4">
                    {" "}
                    {isEditable ? "Editing" : "Viewing"}
                  </div>
                </Button>
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>
              <div>{isEditable ? "Editing Mode" : "Viewing Mode"}</div>
            </TooltipContent>
          </Tooltip>
        </ToggleGroup>
      </TooltipProvider>
    </>
  );
};
const placeholderContent = " Start writing your blog post here...";
function XEditor({editorContent="", setEditorContent}) {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Typography,
      Placeholder.configure({
        placeholder: placeholderContent,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base  max-w-none focus:outline-none my-5 rounded-md border min-h-96 p-2",
      },
    },
    autofocus: true,
  });
  const [isEditable, setIsEditable] = useState(true);
  
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
      {
        isEditable && setIsSaved(false);
      }
    }
  }, [isEditable, editor]);

  function handleContentSave() {
    if (editor) {
      setEditorContent(editor.getJSON());
      setIsEditable(false);
      setIsSaved(true);
    }
  }
  return (
    <>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <BubbleMenuUI editor={editor} />
        </BubbleMenu>
      )}
      <div
        className={`sticky top-2 z-40 flex rounded-lg border bg-white ${isEditable ? "justify-between" : "justify-end"} px-1 py-1`}
      >
        {isEditable && <ToolBarPlugin editor={editor} />}
        <EditorMode
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          editor={editor}
        />
      </div>
      <EditorContent editor={editor} />{" "}
      <div className="my-2 flex justify-end">
        <Button
          onClick={handleContentSave}
          variant={isSaved ? "secondary" : ""}
        >
          Save
        </Button>
      </div>
    </>
  );
}

export default XEditor;
